import React from "react";
import { Store, Eye, CheckSquare, Sparkles, SlidersHorizontal } from "lucide-react";
import { siteConfig } from "../config/siteConfig";

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: "01",
      title: "Visit our shop",
      description: "Drop by Mian Optical located at Main Bazar, Noorpur, Millat Road, Faisalabad.",
      icon: Store,
    },
    {
      step: "02",
      title: "Get your eyesight checked",
      description: "Have your eyesight tested on-site using our trial lens set to determine your precise prescription values.",
      icon: Eye,
      highlight: true,
    },
    {
      step: "03",
      title: "Choose your frame",
      description: "Browse our selection of everyday, fancy, and sunglasses to find your ideal style and fit.",
      icon: CheckSquare,
    },
    {
      step: "04",
      title: "Have glasses prepared",
      description: "Your prescription lenses are crafted and mounted precisely according to your vision test.",
      icon: Sparkles,
    },
    {
      step: "05",
      title: "Get the fit adjusted",
      description: "We carefully adjust temples and nose pads so your new glasses sit comfortably and securely.",
      icon: SlidersHorizontal,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-stone-100/70 border-b border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold tracking-wider uppercase text-amber-800">
            Simple & Transparent Process
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            How It Works
          </h2>
          <p className="text-base text-stone-600 leading-relaxed">
            From your initial visit to your custom fitting, getting glasses made at Mian Optical is straightforward and focused on your comfort.
          </p>
        </div>

        {/* 5-Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className={`relative bg-white p-6 rounded-xl border transition-all duration-200 flex flex-col justify-between ${
                  item.highlight
                    ? "border-amber-500/70 shadow-sm ring-1 ring-amber-500/20"
                    : "border-stone-200 shadow-xs hover:border-amber-500/50"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-display text-2xl font-bold text-amber-700/80">
                      {item.step}
                    </span>
                    <div className="w-9 h-9 rounded-md bg-stone-100 text-stone-800 flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-display text-base font-bold text-stone-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-stone-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-10">
                    <span className="text-stone-300 text-sm font-bold">→</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Eye Testing Equipment Feature Banner */}
        <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 overflow-hidden shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 rounded-xl overflow-hidden border border-stone-200 shadow-2xs">
              <img
                src={siteConfig.photos.eyeTesting}
                alt="Optical testing equipment and trial lens kit at Mian Optical"
                className="w-full h-64 sm:h-72 object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                Precision Testing in Noorpur
              </span>
              <h3 className="font-display text-2xl font-bold text-stone-900">
                Accurate Eyesight Checks Before You Choose Frames
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Step 02 of our process ensures your lenses match your true optical numbers. With trial lenses and calibrated equipment on-site, we verify both reading and distance power so your glasses provide immediate clarity without strain.
              </p>
              <div className="pt-1 flex items-center gap-2 text-xs font-semibold text-stone-800">
                <span className="w-2 h-2 rounded-full bg-amber-600" />
                <span>Visit Mian Optical, Main Bazar, Noorpur to have your eyesight checked.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
