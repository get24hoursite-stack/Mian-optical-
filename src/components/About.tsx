import React from "react";
import { CheckCircle2, ShieldCheck, HeartHandshake, Eye } from "lucide-react";
import { siteConfig } from "../config/siteConfig";

export const About: React.FC = () => {
  const commitments = [
    {
      title: "Accurate Prescription Alignment",
      description:
        "Every pair of glasses is crafted to match the exact eyesight test results and specifications for dependable clarity.",
      icon: Eye,
    },
    {
      title: "Individual Fit & Comfort",
      description:
        "Glasses should never pinch your nose or slip off. We take the time to adjust frames to each customer's facial contours.",
      icon: HeartHandshake,
    },
    {
      title: "Honest Guidance",
      description:
        "From selecting the right frame size for your prescription strength to choosing practical everyday styles, we provide straightforward guidance.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-stone-50 border-b border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Editorial Text */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-semibold tracking-wider uppercase text-amber-800">
              About Mian Optical
            </span>

            <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight leading-tight">
              Dedicated to Clear Vision & Everyday Comfort in Faisalabad
            </h2>

            <div className="space-y-4 text-base text-stone-600 leading-relaxed">
              <p>
                Located in Noorpur, Millat Road, Mian Optical is committed to helping customers find optical eyewear that combines accurate vision correction with comfortable daily wear.
              </p>
              <p>
                We believe that clear vision begins with a proper eyesight assessment and thoughtful frame selection. Whether you need your first pair of reading glasses, a durable pair of everyday frames for work, or fashionable sunglasses for sunny weather, we focus on delivering frames that suit both your prescription and your facial shape.
              </p>
              <p>
                Beyond preparing glasses according to your prescription, we prioritize meticulous physical adjustments—ensuring that nose pads, bridge angles, and temple arms sit evenly without causing pressure or slipping during your daily routine.
              </p>
            </div>

            {/* Commitments */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {commitments.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs space-y-2"
                  >
                    <Icon className="w-5 h-5 text-amber-700" />
                    <h3 className="font-display text-xs font-bold text-stone-900">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-stone-500 leading-normal">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Owner Showcase Photo */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl overflow-hidden border border-stone-300 shadow-md group relative bg-white">
              <div className="relative aspect-[3/4] overflow-hidden bg-stone-100">
                <img
                  src={siteConfig.photos.owner}
                  alt="Owner of Mian Optical, Noorpur, Faisalabad"
                  className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="p-4 sm:p-5 bg-gradient-to-t from-stone-950/95 via-stone-950/60 to-transparent text-white absolute bottom-0 inset-x-0">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block">
                    Owner & Optical Specialist
                  </span>
                  <h4 className="font-display text-lg font-bold text-white mt-0.5">
                    Mian Optical
                  </h4>
                  <p className="text-xs text-stone-200 mt-1 leading-relaxed">
                    Personally attending to customer eyesight testing, precise frame alignment, and quality lenses.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-2xs flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-amber-700" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-stone-900">Personalized Eye Care</h5>
                  <p className="text-[11px] text-stone-500">Visit Noorpur counter for custom fitting</p>
                </div>
              </div>
              <a
                href={`https://wa.me/923236534461?text=${encodeURIComponent(
                  "Assalam o Alaikum, I would like to consult with the owner of Mian Optical regarding glasses."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-emerald-600 hover:text-emerald-700 underline shrink-0"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
