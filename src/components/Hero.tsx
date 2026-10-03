import React from "react";
import { ArrowRight, Navigation, MapPin } from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { WhatsAppIcon } from "./WhatsAppIcon";

export const Hero: React.FC = () => {
  const handleScrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleOpenDirections = () => {
    window.open(siteConfig.address.mapsSearchUrl, "_blank", "noopener,noreferrer");
  };

  const whatsappUrl = `https://wa.me/923236534461?text=${encodeURIComponent(
    "Assalam o Alaikum, I would like to inquire about glasses / eyesight testing at Mian Optical."
  )}`;

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-stone-50 border-b border-stone-200/70">
      {/* Subtle architectural background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#e7e5e4_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Main Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-800">
              <span className="w-6 h-px bg-amber-600" />
              <span>Noorpur, Millat Road, Faisalabad</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 leading-[1.15] text-balance">
              Clear Vision.{" "}
              <span className="text-stone-700 block sm:inline">A Style That Suits You.</span>
            </h1>

            <p className="text-base sm:text-lg text-stone-600 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              Discover eyesight testing, prescription glasses and stylish frames at Mian Optical, Noorpur, Faisalabad.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-bold tracking-wide text-white bg-[#25D366] hover:bg-[#20bd5a] rounded-xl active:scale-[0.99] transition-all duration-150 shadow-md hover:shadow-lg"
              >
                <WhatsAppIcon className="w-5 h-5 text-white" />
                <span>WhatsApp: {siteConfig.contact.whatsapp}</span>
              </a>

              <a
                href="#services"
                onClick={handleScrollToServices}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold tracking-wide uppercase text-white bg-stone-900 rounded-md hover:bg-stone-800 active:scale-[0.99] transition-all duration-150 shadow-sm"
              >
                <span>Services</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </a>

              <button
                type="button"
                onClick={handleOpenDirections}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold tracking-wide text-stone-800 bg-white border border-stone-300 rounded-md hover:bg-stone-100 hover:border-stone-400 active:scale-[0.99] transition-all duration-150 shadow-xs"
              >
                <Navigation className="w-4 h-4 text-amber-600" />
                <span>Get Directions</span>
              </button>
            </div>

            {/* Address kicker in hero */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-2 text-xs text-stone-600">
              <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span>Main Bazar, Noorpur, Millat Road, Faisalabad</span>
            </div>
          </div>

          {/* Right Column: Authentic Storefront Photo - Full Corner to Corner */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-stone-300 shadow-md group">
              <img
                src={siteConfig.photos.storefront}
                alt="Mian Optical Storefront on Main Bazar, Noorpur, Faisalabad"
                className="w-full h-80 sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-stone-950/90 via-stone-950/60 to-transparent p-4 sm:p-5 text-white">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-400 block mb-0.5">
                  Actual Shop Front
                </span>
                <p className="text-sm font-bold text-stone-100">
                  Mian Optical · Main Bazar, Noorpur
                </p>
                <p className="text-xs text-stone-300">
                  Visit us in person for eyesight testing & precision frames
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
