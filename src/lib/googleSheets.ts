const GOOGLE_SHEET_URL = "https://docs.google.com/forms/d/e/PLACEHOLDER/formResponse";

// Using Google Sheets Web App approach
// You'll need to deploy a Google Apps Script as a web app
// For now, we use a simple fetch to a Google Apps Script deployment

// const SCRIPT_URL = "https://script.google.com/macros/s/PLACEHOLDER/exec";
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw80wzfTDkdjxYd6JWoFEjWAmOx2HVqyDkWvAPt_sIjkx5JU9XUeeK5y3K1oEW2yTUD/exec";

const INTEREST_KEYS = [
  "interest",
  "subject",
  "project_type",
  "property_type",
  "requirement_type",
  "partner_type",
  "construction_type",
  "space_type",
] as const;

function toTitleCase(input: string) {
  return input
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function normalizeLeadData(data: Record<string, string>) { 
  console.log("data we are getting from construction", data);
  const interestFromKnownFields = INTEREST_KEYS.map((key) => data[key]).find(Boolean)?.trim();
  const sourcePage = data.source_page?.trim() || "unknown";
  const interestType =
    interestFromKnownFields ||
    ({
      homepage: "General Enquiry",
      contact: "General Enquiry",
      architecture: "Architecture Project",
      construction: "Construction Quote",
      interiors: "Interior Design",
      "real-estate": "Real Estate Enquiry",
      opportunities: "Property Requirement",
      partner: "Partnership Inquiry",
    } as Record<string, string>)[sourcePage] || "General Enquiry";
  const dateOnly = new Date().toISOString().split("T")[0];

  return {
     ...data,
    // "Interest Type": interestType,
    // "Page Source": toTitleCase(sourcePage),
    Date: dateOnly,
  };
}

export async function submitToGoogleSheet(data: Record<string, string>) {
  try {
    // Using Google Sheets API via Apps Script Web App
    // For production, replace SCRIPT_URL with your deployed Apps Script URL
    const payload = normalizeLeadData(data);
    
    // Create the final payload including the explicit SheetName
    const finalPayload = {
      ...payload,
      SheetName: data.source_page ? toTitleCase(data.source_page) : "General Leads"
    };

    // Attempt submission - Send as stringified JSON text to avoid CORS preflight
    const response = await fetch(SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(finalPayload),
      mode: "no-cors",
    });

    return { success: true };
  } catch (error) {
    console.error("Form submission error:", error);
    return { success: false, error: "Failed to submit form" };
  }
}
