import React from "react";
import { Eye, Glasses, Frame, SunMedium, Wrench } from "lucide-react";
import { siteConfig } from "../config/siteConfig";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
  photo?: string;
  photoAlt?: string;
  photoLabel?: string;
}

export const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      id: "eyesight-testing",
      title: "Eyesight Testing",
      description:
        "Comprehensive vision assessment performed directly at our shop using specialized trial lenses and diagnostic instruments to identify your precise refractive power.",
      icon: Eye,
      photo: siteConfig.photos.eyeTesting,
      photoAlt: "Optometric trial lens set and testing equipment at Mian Optical",
      photoLabel: "On-site Testing Equipment",
      features: [
        "Assessment for distance and reading clarity",
        "Determination of required prescription numbers",
        "Assistance for first-time and regular spectacle wearers",
      ],
    },
    {
      id: "prescription-glasses",
      title: "Prescription Glasses",
      description:
        "Prescription glasses made according to the customer's eyesight test and verified prescription for clear, comfortable vision throughout the day.",
      icon: Glasses,
      photo: siteConfig.photos.counterFrames,
      photoAlt: "Eyeglass frame display counter and lens guide at Mian Optical",
      photoLabel: "Prescription Frame Trays",
      features: [
        "Crafted to match exact prescription numbers",
        "Single vision, bifocal, and protective lens options",
        "Careful lens mounting and edge finishing",
      ],
    },
    {
      id: "eyeglass-frames",
      title: "Eyeglass Frames",
      description:
        "Diverse variety of frame styles, materials, and sizes to ensure long-lasting durability, lightweight balance, and aesthetic appeal.",
      icon: Frame,
      features: [
        "Full-rim, semi-rimless, and rimless designs",
        "Sturdy metal and lightweight acetate materials",
        "Shapes suited for various facial contours",
      ],
    },
    {
      id: "fancy-sunglasses",
      title: "Fancy Glasses & Sunglasses",
      description:
        "Modern and stylish frames for special occasions and sunny days, combining contemporary aesthetics with eye comfort.",
      icon: SunMedium,
      features: [
        "Trending modern frame silhouettes",
        "Tinted sunglasses for outdoor protection",
        "Statement eyewear for fashion and daily wear",
      ],
    },
    {
      id: "fitting-adjustment",
      title: "Fitting & Adjustment",
      description:
        "Precision frame adjustments to guarantee a secure, comfortable fit that sits correctly on your nose bridge without slipping or pressing.",
      icon: Wrench,
      features: [
        "Temple and ear hook realignment",
        "Nose pad repositioning and replacement",
        "Proper optical height and bridge balancing",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-white border-b border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold tracking-wider uppercase text-amber-800">
            What We Do
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            Our Optical Services
          </h2>
          <p className="text-base text-stone-600 leading-relaxed">
            From testing your eyesight to preparing customized prescription glasses and adjusting your fit, Mian Optical provides complete optical services in Noorpur, Faisalabad.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const hasPhoto = Boolean(service.photo);

            return (
              <div
                key={service.id}
                className={`relative flex flex-col justify-between p-6 sm:p-7 rounded-xl border border-stone-200/90 bg-stone-50/50 hover:bg-white hover:border-amber-500/50 hover:shadow-md transition-all duration-200 group ${
                  index === 0 || index === 1 ? "md:col-span-1" : ""
                }`}
              >
                <div>
                  {/* Photo Thumbnail if service has a matched photo - corner-to-corner without black bars */}
                  {hasPhoto && (
                    <div className="mb-5 rounded-lg overflow-hidden border border-stone-200/80 shadow-2xs relative group/img">
                      <img
                        src={service.photo}
                        alt={service.photoAlt || service.title}
                        className="w-full h-52 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      {service.photoLabel && (
                        <div className="absolute bottom-2.5 left-2.5 bg-stone-950/85 backdrop-blur-xs text-white px-3 py-1 rounded text-[11px] font-semibold text-amber-300 shadow-xs">
                          {service.photoLabel}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Service Icon */}
                  <div className="w-11 h-11 rounded-lg bg-stone-900 text-amber-400 flex items-center justify-center mb-4 shadow-xs group-hover:scale-105 transition-transform duration-200">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-display text-xl font-bold text-stone-900 mb-2 group-hover:text-amber-900 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-stone-600 leading-relaxed mb-5">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-200/60">
                  <ul className="space-y-1.5">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-xs text-stone-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom service note */}
        <div className="mt-12 text-center text-xs text-stone-500">
          <span>Walk in to Mian Optical in Noorpur to discuss your vision requirements with our team.</span>
        </div>
      </div>
    </section>
  );
};
