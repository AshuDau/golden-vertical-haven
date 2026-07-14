// Fetches data from a public Google Sheet using the Google Visualization API (gviz).
// No API key or auth is required as long as the sheet is shared publicly ("Anyone with the link").

const SHEET_ID = "1RZATBDH9D2KTra_OPq_X_Gz7ySBJSOSRWKsi1DctQIg";

export interface VideoItem {
  title: string;
  videoUrl: string;
  embedUrl: string;
  thumbnail: string;
}

export interface ImageItem {
  title: string;
  imageUrl: string;
  displayUrl: string;
}

// Extract Google Drive file ID from various link formats
function extractDriveId(url: string): string | null {
  if (!url) return null;
  const patterns = [
    /\/file\/d\/([a-zA-Z0-9_-]+)/,
    /[?&]id=([a-zA-Z0-9_-]+)/,
    /\/d\/([a-zA-Z0-9_-]+)/,
  ];
  for (const p of patterns) {
    const m = url.match(p);
    if (m) return m[1];
  }
  return null;
}

export function toDriveEmbedUrl(url: string): string {
  const id = extractDriveId(url);
  if (id) return `https://drive.google.com/file/d/${id}/preview`;
  return url;
}

export function toDriveImageUrl(url: string): string {
  const id = extractDriveId(url);
  if (id) return `https://drive.google.com/thumbnail?id=${id}&sz=w1600`;
  return url;
}

export function toDriveThumbnail(url: string): string {
  const id = extractDriveId(url);
  if (id) return `https://drive.google.com/thumbnail?id=${id}&sz=w800`;
  return url;
}

interface GVizCell { v: string | number | boolean | null; f?: string }
interface GVizRow { c: (GVizCell | null)[] }
interface GVizCol { label: string; id: string; type: string }
interface GVizResponse { table: { cols: GVizCol[]; rows: GVizRow[] } }

async function fetchSheet(sheetName: string): Promise<Record<string, string>[]> {
  const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(sheetName)}`;
  const res = await fetch(url);
  const text = await res.text();
  // gviz wraps JSON in a JS callback: google.visualization.Query.setResponse({...});
  const jsonMatch = text.match(/google\.visualization\.Query\.setResponse\(([\s\S]+)\);?/);
  if (!jsonMatch) throw new Error("Invalid gviz response");
  const data: GVizResponse = JSON.parse(jsonMatch[1]);

  const headers = data.table.cols.map((c, i) => (c.label || `col${i}`).trim());
  return data.table.rows.map((row) => {
    const obj: Record<string, string> = {};
    row.c.forEach((cell, i) => {
      obj[headers[i]] = cell?.v != null ? String(cell.v) : "";
    });
    return obj;
  });
}

function isYes(value: string): boolean {
  return value?.trim().toLowerCase() === "yes";
}

function findColumn(row: Record<string, string>, candidates: string[]): string {
  const keys = Object.keys(row);
  for (const cand in row) {
    for (const c of candidates) {
      if (cand.toLowerCase().trim() === c.toLowerCase()) return row[cand];
    }
  }
  // fuzzy
  for (const c of candidates) {
    const key = keys.find((k) => k.toLowerCase().includes(c.toLowerCase()));
    if (key) return row[key];
  }
  return "";
}

export async function fetchVideos(): Promise<VideoItem[]> {
  const rows = await fetchSheet("Videos");
  return rows
    .filter((r) => isYes(findColumn(r, ["Need to Add", "Need To Add", "Publish"])))
    .map((r) => {
      const videoUrl = findColumn(r, ["Video Link", "Link", "URL"]);
      const thumb = findColumn(r, ["Thumbnail", "Thumb"]);
      return {
        title: findColumn(r, ["Video Title", "Title"]) || "Untitled",
        videoUrl,
        embedUrl: toDriveEmbedUrl(videoUrl),
        thumbnail: thumb ? toDriveImageUrl(thumb) : toDriveThumbnail(videoUrl),
      };
    })
    .filter((v) => v.videoUrl);
}

export async function fetchImages(): Promise<ImageItem[]> {
  const rows = await fetchSheet("Images");
  return rows
    .filter((r) => isYes(findColumn(r, ["Need to Add", "Need To Add", "Publish"])))
    .map((r) => {
      const imageUrl = findColumn(r, ["Image Link", "Link", "URL"]);
      return {
        title: findColumn(r, ["Image Title", "Title"]) || "Untitled",
        imageUrl,
        displayUrl: toDriveImageUrl(imageUrl),
      };
    })
    .filter((i) => i.imageUrl);
}
