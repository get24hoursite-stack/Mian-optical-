import React, { useState } from "react";
import { Glasses, Frame, Sparkles, Sun, Check, MapPin } from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { WhatsAppIcon } from "./WhatsAppIcon";

interface Category {
  id: string;
  name: string;
  tagline: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  highlights: string[];
  styleAdvice: string;
  lensTypes: string[];
  photo: string;
  photoAlt: string;
  photoAspect: 'portrait' | 'landscape';
}

export const Collection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("prescription");

  const categories: Category[] = [
    {
      id: "prescription",
      name: "Prescription Glasses",
      tagline: "Precision lenses matched to your exact vision requirements",
      icon: Glasses,
      photo: siteConfig.photos.counterFrames,
      photoAlt: "Eyeglass frame trays and consultation display at Mian Optical",
      photoAspect: "landscape",
      description:
        "Engineered for clarity and daily focus. We mount single-vision, bifocal, and computer-friendly lenses into sturdy, lightweight frames based directly on your eyesight assessment.",
      highlights: [
        "Single-vision lenses for near or distance correction",
        "Clear anti-reflective and scratch-resistant coatings",
        "Durable rim and rimless mounting options",
        "Customized pupil distance (PD) alignment",
      ],
      styleAdvice:
        "Ideal for office work, studying, reading, and night driving. Select a frame that balances your facial proportions comfortably.",
      lensTypes: ["Reading Glasses", "Distance Glasses", "Bifocal Lenses", "Blue-Cut Protective Lenses"],
    },
    {
      id: "everyday",
      name: "Everyday Frames",
      tagline: "Comfortable, lightweight, and durable frames built for everyday wear",
      icon: Frame,
      photo: siteConfig.photos.framesAssortment,
      photoAlt: "Assortment of eyeglasses and frames display at Mian Optical",
      photoAspect: "landscape",
      description:
        "Everyday frames need to withstand regular daily use while providing effortless comfort. We carry an extensive selection of classic rectangular, round, and contemporary shapes crafted from sturdy metals and smooth acetates.",
      highlights: [
        "Lightweight materials for all-day comfort",
        "Flexible spring hinges that resist stretching",
        "Adjustable silicone nose pads for zero-slip hold",
        "Subtle, versatile color palettes (black, gunmetal, tortoiseshell, transparent)",
      ],
      styleAdvice:
        "Perfect for daily office or college wear. Neutral frames complement both formal and casual attire seamlessly.",
      lensTypes: ["Full-Rim Acetate", "Classic Metallic", "Semi-Rimless Browline", "Lightweight TR90"],
    },
    {
      id: "fancy",
      name: "Fancy & Fashionable Glasses",
      tagline: "Distinctive frame silhouettes that elevate your personal style",
      icon: Sparkles,
      photo: siteConfig.photos.brandWallDisplay,
      photoAlt: "Designer brand frame wall display at Mian Optical",
      photoAspect: "portrait",
      description:
        "Make a statement with eye-catching designs, sophisticated bridge accents, bold geometric profiles, and refined finishes designed for weddings, events, and style enthusiasts.",
      highlights: [
        "Modern geometric, cat-eye, and oversized silhouettes",
        "Gold, rose-gold, silver, and dual-tone metal finishes",
        "Clear aesthetic lenses or prescription-ready options",
        "Refined temple detailing for an upscale aesthetic",
      ],
      styleAdvice:
        "Elevate your look for special occasions or express your creative style with bold, expressive lines.",
      lensTypes: ["Cat-Eye Frames", "Hexagonal & Polygonal", "Transparent Crystal Acetates", "Gold-Accented Metal"],
    },
    {
      id: "sunglasses",
      name: "Sunglasses",
      tagline: "Protection against bright outdoor glare with modern aesthetics",
      icon: Sun,
      photo: siteConfig.photos.brandWallDisplay,
      photoAlt: "Sunglasses and designer eyewear showcase at Mian Optical",
      photoAspect: "portrait",
      description:
        "Whether driving during midday sun or spending time outdoors in Faisalabad, our sunglass collection combines essential glare protection with fashionable tint options.",
      highlights: [
        "Dark tinted lenses for sunny conditions",
        "Classic aviator, wayfarer, and round silhouettes",
        "Prescription sunglasses preparation available",
        "Sturdy, heat-resistant frames designed for daily outdoor use",
      ],
      styleAdvice:
        "Match frame shape to your jawline: square frames for round faces, rounded frames for sharp angular features.",
      lensTypes: ["Classic Aviators", "Wayfarer Styles", "Gradient Tinted Lenses", "Prescription Sun Lenses"],
    },
  ];

  const currentCategory = categories.find((c) => c.id === activeTab) || categories[0];
  const CurrentIcon = currentCategory.icon;

  return (
    <section id="collection" className="py-20 md:py-28 bg-white border-b border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-semibold tracking-wider uppercase text-amber-800">
            Eyewear Range
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            Our Eyewear Collection
          </h2>
          <p className="text-base text-stone-600 leading-relaxed">
            We offer a diverse selection of frames and lenses suited for every preference. Visit our shop in Noorpur to explore the full variety in person and try frames on for the best fit.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-stone-100/90 rounded-xl max-w-3xl mx-auto mb-10 border border-stone-200">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-150 ${
                  isActive
                    ? "bg-white text-stone-900 shadow-sm border border-stone-200/80"
                    : "text-stone-600 hover:text-stone-900 hover:bg-stone-200/50"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-amber-600" : "text-stone-500"}`} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Feature Card with Real Photo */}
        <div className="bg-stone-50/70 border border-stone-200 rounded-2xl p-6 sm:p-10 transition-all duration-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left overview */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-stone-900 text-amber-400 flex items-center justify-center shadow-xs">
                  <CurrentIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-stone-900">
                    {currentCategory.name}
                  </h3>
                  <p className="text-xs text-amber-800 font-medium">
                    {currentCategory.tagline}
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                {currentCategory.description}
              </p>

              <div className="pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-3">
                  Key Characteristics
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentCategory.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-stone-700">
                      <Check className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-white rounded-xl border border-stone-200/80 space-y-1">
                <span className="text-xs font-bold text-stone-900 uppercase tracking-wide">
                  Fitting & Styling Note
                </span>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {currentCategory.styleAdvice}
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={`https://wa.me/923236534461?text=${encodeURIComponent(
                    `Assalam o Alaikum, I am interested in ${currentCategory.name} at Mian Optical.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold rounded-xl transition-all shadow-xs active:scale-95"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>Inquire About {currentCategory.name} on WhatsApp</span>
                </a>
                <span className="text-xs text-stone-500">Visit Noorpur shop to try on</span>
              </div>
            </div>

            {/* Right side: Real Uploaded Display Photo - Full Corner to Corner */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="w-full rounded-2xl overflow-hidden border border-stone-200 shadow-md group relative">
                <img
                  src={currentCategory.photo}
                  alt={currentCategory.photoAlt}
                  className="w-full h-80 sm:h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute bottom-0 inset-x-0 p-3 bg-stone-950/85 backdrop-blur-xs text-white text-xs flex items-center justify-between">
                  <span className="font-semibold text-amber-400">Actual Shop Display</span>
                  <span className="text-[11px] text-stone-300">Mian Optical, Noorpur</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
