import React from "react";
import { ArrowUp, MapPin, Glasses, Phone } from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { WhatsAppIcon } from "./WhatsAppIcon";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappUrl = `https://wa.me/923236534461?text=${encodeURIComponent(
    "Assalam o Alaikum, I would like to inquire about glasses / eyesight testing at Mian Optical."
  )}`;

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About Mian Optical", href: "#about" },
    { label: "Our Services", href: "#services" },
    { label: "Eyewear Collection", href: "#collection" },
    { label: "Frequently Asked Questions", href: "#faqs" },
    { label: "Visit Our Shop", href: "#visit-us" },
  ];

  const servicesList = [
    "Eyesight Testing",
    "Prescription Glasses",
    "Eyeglass Frames",
    "Fancy & Fashionable Glasses",
    "Sunglasses",
    "Glasses Fitting & Adjustment",
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Col 1: Brand & Address */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5 text-white">
              <div className="w-8 h-8 rounded-md bg-stone-800 text-amber-400 flex items-center justify-center">
                <Glasses className="w-4 h-4" />
              </div>
              <span className="font-display text-2xl font-bold tracking-tight">
                {siteConfig.name}
              </span>
            </div>

            <p className="text-sm text-stone-400 leading-relaxed max-w-sm">
              Providing eyesight testing, prescription glasses, stylish frames, sunglasses, and custom adjustments in Noorpur, Faisalabad.
            </p>

            <div className="pt-1 flex items-start gap-2.5 text-xs text-stone-400">
              <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <span>{siteConfig.address.full}</span>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold transition-all shadow-xs active:scale-95"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>WhatsApp: {siteConfig.contact.whatsapp}</span>
              </a>

              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-medium transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Call: {siteConfig.contact.phone}</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-stone-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Services
            </h4>
            <ul className="space-y-2 text-xs">
              {servicesList.map((service, index) => (
                <li key={index} className="flex items-center gap-2 text-stone-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500/80" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Mian Optical. All rights reserved. Faisalabad, Pakistan.</p>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-stone-400 hover:text-white transition-colors p-1"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
