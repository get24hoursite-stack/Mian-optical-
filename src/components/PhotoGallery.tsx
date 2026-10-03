import React, { useState, useEffect } from "react";
import { X, ZoomIn, Eye, Sparkles } from "lucide-react";
import { siteConfig, PhotoAsset } from "../config/siteConfig";

export const PhotoGallery: React.FC = () => {
  const images = siteConfig.photos.galleryImages;
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoAsset | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedPhoto(null);
      }
    };
    if (selectedPhoto) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhoto]);

  // Clean exit if no photos exist
  if (!images || images.length === 0) {
    return null;
  }

  const categories = [
    { id: "all", label: "All Photos" },
    { id: "storefront", label: "Storefront & Exterior" },
    { id: "interior", label: "Shop Interior" },
    { id: "frames", label: "Frames & Displays" },
    { id: "testing", label: "Testing Equipment" },
    { id: "care", label: "Care Products" },
  ];

  const filteredImages =
    activeCategory === "all"
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-white border-b border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-amber-800">
            <Eye className="w-3.5 h-3.5" />
            <span>Real Shop Photographs</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            Photo Gallery
          </h2>
          <p className="text-base text-stone-600 leading-relaxed">
            Take a visual tour of Mian Optical in Noorpur, Faisalabad—from our exterior shop front and welcoming retail displays to our testing instruments and frame counters.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const count =
              cat.id === "all"
                ? images.length
                : images.filter((img) => img.category === cat.id).length;

            if (count === 0) return null;

            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all duration-150 ${
                  isActive
                    ? "bg-stone-900 text-white shadow-xs"
                    : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                }`}
              >
                {cat.label} ({count})
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredImages.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="group relative bg-white rounded-xl overflow-hidden cursor-pointer border border-stone-200 shadow-2xs hover:shadow-md hover:border-amber-500/60 transition-all duration-200 flex flex-col"
            >
              {/* Corner-to-corner full image without black bars */}
              <div className="w-full aspect-4/3 overflow-hidden bg-stone-100 relative">
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Card Footer with Details */}
              <div className="p-3.5 bg-white border-t border-stone-100 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-display text-sm font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                    {photo.title}
                  </h4>
                  {photo.caption && (
                    <p className="text-xs text-stone-500 mt-1 line-clamp-2 leading-relaxed">
                      {photo.caption}
                    </p>
                  )}
                </div>

                <div className="mt-3 pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-amber-700 font-medium">
                  <span>Click to enlarge</span>
                  <ZoomIn className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal with Accessible Controls */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
          onClick={() => setSelectedPhoto(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedPhoto.title}
        >
          <div
            className="relative max-w-4xl w-full bg-stone-900 rounded-2xl overflow-hidden shadow-2xl border border-stone-700 flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-3 right-3 z-20 p-2 bg-stone-950/80 hover:bg-stone-950 text-white rounded-full transition-colors border border-stone-700 focus:outline-hidden focus:ring-2 focus:ring-amber-500"
              aria-label="Close photo preview"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Main Image Container */}
            <div className="flex-1 bg-stone-950 flex items-center justify-center p-2 min-h-[300px] max-h-[70vh] overflow-hidden">
              <img
                src={selectedPhoto.url}
                alt={selectedPhoto.title}
                className="max-h-[68vh] max-w-full object-contain"
              />
            </div>

            {/* Photo Info Bar */}
            <div className="p-4 sm:p-5 bg-stone-900 border-t border-stone-800 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block mb-0.5">
                  Mian Optical · Faisalabad
                </span>
                <h3 className="font-display text-base font-bold text-white">
                  {selectedPhoto.title}
                </h3>
                {selectedPhoto.caption && (
                  <p className="text-xs text-stone-300 mt-0.5 max-w-2xl leading-relaxed">
                    {selectedPhoto.caption}
                  </p>
                )}
              </div>

              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                className="px-4 py-2 text-xs font-semibold text-stone-900 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors shrink-0"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
