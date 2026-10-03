import React, { useState, useEffect } from "react";
import { Menu, X, MapPin } from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { WhatsAppIcon, WhatsAppAppIcon } from "./WhatsAppIcon";

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Collection", href: "#collection" },
    { label: "Gallery", href: "#gallery" },
    { label: "Visit Us", href: "#visit-us" },
  ];

  const whatsappUrl = `https://wa.me/923236534461?text=${encodeURIComponent(
    "Assalam o Alaikum, I would like to inquire about glasses / eyesight testing at Mian Optical."
  )}`;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-xs border-b border-stone-200/80 py-3"
          : "bg-white/80 backdrop-blur-xs border-b border-stone-200/50 py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="font-display text-xl sm:text-2xl font-bold tracking-tight text-stone-900 hover:text-amber-800 transition-colors"
          >
            {siteConfig.name}
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-600">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-stone-950 transition-colors py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Mian Optical +92 323 6534461"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold shadow-xs active:scale-95 transition-all"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>+92 323 6534461</span>
            </a>

            <a
              href="#visit-us"
              onClick={(e) => handleNavClick(e, "#visit-us")}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wide uppercase text-white bg-stone-900 rounded-md hover:bg-stone-800 active:scale-[0.99] transition-all duration-150 shadow-xs border border-stone-800"
            >
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Visit Shop</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="sm:hidden flex items-center justify-center w-9 h-9 rounded-xl bg-[#25D366] text-white shadow-xs active:scale-95 transition-transform"
            >
              <WhatsAppIcon className="w-5 h-5 text-white" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-700 hover:text-stone-950 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-amber-500 rounded-md"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in fade-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-1.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-base font-medium text-stone-700 hover:text-stone-950 hover:bg-stone-100 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-stone-100 space-y-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2.5 px-4 py-3 text-sm font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] rounded-xl transition-colors shadow-xs"
            >
              <WhatsAppIcon className="w-5 h-5 text-white" />
              <span>WhatsApp: +92 323 6534461</span>
            </a>

            <a
              href="#visit-us"
              onClick={(e) => handleNavClick(e, "#visit-us")}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold tracking-wide uppercase text-white bg-stone-900 rounded-md hover:bg-stone-800 transition-colors shadow-xs"
            >
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>Visit Our Shop</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
