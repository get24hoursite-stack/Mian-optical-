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

          {/* Right Column: Actual Shop Showcase Photo - Corner to Corner */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-stone-300 shadow-md group relative">
              <img
                src={siteConfig.photos.shopInteriorPortrait}
                alt="Inside Mian Optical, Noorpur, Faisalabad"
                className="w-full h-96 sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="p-4 bg-stone-950/85 backdrop-blur-xs text-white absolute bottom-0 inset-x-0">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-400 block">
                  Inside Our Shop
                </span>
                <h4 className="font-display text-sm font-bold text-stone-100 mt-0.5">
                  Mian Optical Showroom & Counter
                </h4>
                <p className="text-xs text-stone-300 mt-0.5">
                  Main Bazar, Noorpur, Millat Road, Faisalabad
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
