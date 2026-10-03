import React from "react";
import { Sparkles, CheckCircle2, Shield } from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { WhatsAppIcon } from "./WhatsAppIcon";

export const ProductCare: React.FC = () => {
  const careHighlights = [
    {
      title: "Multi-Purpose Solutions",
      desc: "All-in-one disinfecting, cleaning, and conditioning solutions for soft contact lenses.",
    },
    {
      title: "Hygienic Storage Cases",
      desc: "Durable lens cases and travel accessories to keep lenses safe and free from contaminants.",
    },
    {
      title: "Gentle Eye Comfort",
      desc: "Formulations designed to maintain moisture and ease eye fatigue during prolonged lens wear.",
    },
  ];

  const whatsappCareUrl = `https://wa.me/923236534461?text=${encodeURIComponent(
    "Assalam o Alaikum, I would like to inquire about contact lens solutions and eye care products at Mian Optical."
  )}`;

  return (
    <section id="care-products" className="py-16 md:py-24 bg-stone-100/70 border-b border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-stone-200 shadow-xs overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            {/* Left Column: Real Uploaded Photo - Corner to Corner */}
            <div className="lg:col-span-6 relative min-h-[320px] sm:min-h-[400px]">
              <img
                src={siteConfig.photos.contactLensCare}
                alt="Contact Lens Solutions and Care Products at Mian Optical"
                className="w-full h-full object-cover min-h-[320px] sm:min-h-[400px]"
                loading="lazy"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-stone-950/85 backdrop-blur-xs text-white px-3.5 py-2 rounded-lg text-xs flex items-center justify-between">
                <span className="font-semibold text-amber-300">In-Store Stock Display</span>
                <span className="text-[11px] text-stone-300">Solutions & Accessories</span>
              </div>
            </div>

            {/* Right Column: Informative Copy */}
            <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-800">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Lens Hygiene & Maintenance</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
                  Contact Lens Solutions & Eye Care
                </h3>
                <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                  Proper lens care is vital for comfortable wear and eye safety. In addition to optical frames, Mian Optical supplies trusted multi-purpose contact lens solutions and hygienic accessories.
                </p>

                <div className="space-y-3 pt-1">
                  {careHighlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-semibold text-stone-900">{item.title}</h4>
                        <p className="text-xs text-stone-500 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={whatsappCareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold rounded-xl transition-all shadow-md active:scale-95"
                >
                  <WhatsAppIcon className="w-5 h-5 text-white" />
                  <span>Inquire on WhatsApp: {siteConfig.contact.whatsapp}</span>
                </a>
                <div className="flex items-center gap-2 text-xs text-stone-500">
                  <Shield className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>Available at Noorpur counter</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
