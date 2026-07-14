import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, ImageIcon } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";
import { fetchVideos, fetchImages, driveImageFallbacks, type VideoItem, type ImageItem } from "@/lib/ourWork";

function handleDriveImgError(originalUrl: string) {
  return (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    const fallbacks = driveImageFallbacks(originalUrl);
    const idx = Number(img.dataset.fallbackIdx ?? "-1") + 1;
    if (idx < fallbacks.length && img.src !== fallbacks[idx]) {
      img.dataset.fallbackIdx = String(idx);
      img.src = fallbacks[idx];
    } else {
      img.style.opacity = "0.2";
    }
  };
}

type Tab = "videos" | "images";

export default function OurWork() {
  const [tab, setTab] = useState<Tab>("images");
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [images, setImages] = useState<ImageItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const [activeImage, setActiveImage] = useState<ImageItem | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    Promise.allSettled([fetchVideos(), fetchImages()])
      .then(([v, i]) => {
        if (cancelled) return;
        if (v.status === "fulfilled") setVideos(v.value);
        if (i.status === "fulfilled") setImages(i.value);
        if (v.status === "rejected" && i.status === "rejected") {
          setError("Unable to load gallery. Please try again later.");
        }
      })
      .finally(() => !cancelled && setLoading(false));
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <Layout>
      <PageHero
        title="Our Work"
        subtitle="A curated showcase of completed projects across our four verticals."
        backgroundImage={heroBg}
      />

      <section className="section-padding max-w-7xl mx-auto">
        {/* Tabs */}
        <div className="flex items-center justify-center gap-3 mb-16">
          {(["images", "videos"] as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`font-body text-xs tracking-[0.2em] uppercase px-8 py-3 border transition-all ${
                tab === t
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {t === "images" ? "Gallery" : "Films"}
            </button>
          ))}
        </div>

        {loading && (
          <div className="text-center py-20">
            <div className="inline-block w-10 h-10 border border-primary border-t-transparent rounded-full animate-spin" />
            <p className="text-muted-foreground font-body text-sm mt-4 tracking-widest uppercase">Loading</p>
          </div>
        )}

        {!loading && error && (
          <p className="text-center text-muted-foreground font-body py-20">{error}</p>
        )}

        {!loading && !error && tab === "images" && (
          <>
            {images.length === 0 ? (
              <EmptyState icon={ImageIcon} label="Our gallery will be updated soon." />
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {images.map((img, i) => (
                  <motion.button
                    key={`${img.imageUrl}-${i}`}
                    onClick={() => setActiveImage(img)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: Math.min(i * 0.05, 0.4) }}
                    className="group relative overflow-hidden bg-card aspect-[4/3] text-left"
                  >
                    <img
                      src={img.displayUrl}
                      alt={img.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={handleDriveImgError(img.imageUrl)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <p className="font-display text-base text-foreground">{img.title}</p>
                    </div>
                  </motion.button>
                ))}
              </div>
            )}
          </>
        )}

        {!loading && !error && tab === "videos" && (
          <>
            {videos.length === 0 ? (
              <EmptyState icon={Play} label="Our films will be updated soon." />
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {videos.map((v, i) => (
                  <motion.button
                    key={`${v.videoUrl}-${i}`}
                    onClick={() => setActiveVideo(v)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: Math.min(i * 0.05, 0.4) }}
                    className="group relative overflow-hidden bg-card aspect-video text-left"
                  >
                    <img
                      src={v.thumbnail}
                      alt={v.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = "none";
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="text-primary-foreground ml-1" size={22} fill="currentColor" />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <p className="font-display text-base text-foreground">{v.title}</p>
                    </div>
                  </motion.button>
                ))}
              </div>
            )}
          </>
        )}
      </section>

      {/* Image Lightbox */}
      <AnimatePresence>
        {activeImage && (
          <Lightbox onClose={() => setActiveImage(null)} title={activeImage.title}>
            <img
              src={activeImage.displayUrl}
              alt={activeImage.title}
              className="max-w-full max-h-[80vh] object-contain mx-auto"
            />
          </Lightbox>
        )}
      </AnimatePresence>

      {/* Video Lightbox */}
      <AnimatePresence>
        {activeVideo && (
          <Lightbox onClose={() => setActiveVideo(null)} title={activeVideo.title}>
            <div className="w-full max-w-5xl aspect-video">
              <iframe
                src={activeVideo.embedUrl}
                title={activeVideo.title}
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </Lightbox>
        )}
      </AnimatePresence>
    </Layout>
  );
}

function EmptyState({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <div className="text-center py-20">
      <Icon className="text-primary mx-auto mb-6 opacity-60" size={40} />
      <p className="font-serif text-2xl text-foreground italic">{label}</p>
    </div>
  );
}

function Lightbox({ children, onClose, title }: { children: React.ReactNode; onClose: () => void; title: string }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md flex flex-col items-center justify-center p-4 md:p-8"
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors p-2"
        aria-label="Close"
      >
        <X size={28} />
      </button>
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="max-w-6xl w-full flex flex-col items-center gap-4"
      >
        {children}
        <p className="font-display text-lg text-foreground text-center">{title}</p>
      </motion.div>
    </motion.div>
  );
}
