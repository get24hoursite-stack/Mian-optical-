import React, { useState } from "react";
import { MapPin, Navigation, Copy, Check, Phone, Clock } from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { WhatsAppIcon, WhatsAppAppIcon } from "./WhatsAppIcon";

export const VisitUs: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(siteConfig.address.full);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleGetDirections = () => {
    window.open(siteConfig.address.mapsSearchUrl, "_blank", "noopener,noreferrer");
  };

  const hasPhone = Boolean(siteConfig.contact.phone && siteConfig.contact.phone.trim().length > 0);
  const hasWhatsapp = Boolean(siteConfig.contact.whatsapp && siteConfig.contact.whatsapp.trim().length > 0);
  const hasHours = Boolean(siteConfig.contact.openingHours && siteConfig.contact.openingHours.trim().length > 0);

  return (
    <section id="visit-us" className="py-20 md:py-28 bg-white border-b border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold tracking-wider uppercase text-amber-800">
            Find Our Shop
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            Visit Mian Optical
          </h2>
          <p className="text-base text-stone-600 leading-relaxed">
            Conveniently located in Main Bazar, Noorpur, along Millat Road in Faisalabad. Stop by for eyesight testing, frames selection, and personal fitting adjustments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Address & Direction Card */}
          <div className="lg:col-span-7 bg-stone-50 rounded-2xl border border-stone-200/90 p-6 sm:p-9 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-stone-900 text-amber-400 flex items-center justify-center shadow-xs">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-stone-900">
                    Shop Address
                  </h3>
                  <p className="text-xs text-stone-500">Noorpur, Faisalabad</p>
                </div>
              </div>

              <div className="p-5 bg-white rounded-xl border border-stone-200/80 space-y-3 shadow-2xs">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                  Full Location Details
                </span>
                <p className="text-lg font-medium text-stone-900 leading-snug">
                  {siteConfig.address.full}
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-xs text-stone-500">
                  <span>Street: {siteConfig.address.street}</span>
                  <span>·</span>
                  <span>Area: {siteConfig.address.area}</span>
                  <span>·</span>
                  <span>Road: {siteConfig.address.road}</span>
                  <span>·</span>
                  <span>City: {siteConfig.address.city}</span>
                </div>
              </div>

              {/* Dynamic Contact Fields: Hidden cleanly if empty */}
              {(hasPhone || hasWhatsapp || hasHours) && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {hasPhone && (
                    <div className="p-4 bg-white rounded-xl border border-stone-200 flex items-center gap-3">
                      <Phone className="w-5 h-5 text-amber-700" />
                      <div>
                        <div className="text-xs text-stone-500">Phone</div>
                        <a
                          href={`tel:${siteConfig.contact.phone}`}
                          className="text-sm font-semibold text-stone-900 hover:text-amber-800"
                        >
                          {siteConfig.contact.phone}
                        </a>
                      </div>
                    </div>
                  )}

                  {hasWhatsapp && (
                    <div className="p-4 bg-white rounded-xl border border-stone-200 flex items-center gap-3">
                      <WhatsAppAppIcon className="w-11 h-11 shrink-0 drop-shadow-xs" />
                      <div>
                        <div className="text-xs text-stone-500 font-medium">WhatsApp Contact</div>
                        <a
                          href={`https://wa.me/923236534461?text=${encodeURIComponent(
                            "Assalam o Alaikum, I would like to inquire about glasses / eyesight testing at Mian Optical."
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-bold text-stone-900 hover:text-emerald-600 transition-colors"
                        >
                          {siteConfig.contact.whatsapp}
                        </a>
                      </div>
                    </div>
                  )}

                  {hasHours && (
                    <div className="p-4 bg-white rounded-xl border border-stone-200 sm:col-span-2 flex items-center gap-3">
                      <Clock className="w-5 h-5 text-amber-700" />
                      <div>
                        <div className="text-xs text-stone-500">Opening Hours</div>
                        <div className="text-sm font-semibold text-stone-900">
                          {siteConfig.contact.openingHours}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={`https://wa.me/923236534461?text=${encodeURIComponent(
                  "Assalam o Alaikum, I would like to inquire about glasses / eyesight testing at Mian Optical."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-bold tracking-wide text-white bg-[#25D366] hover:bg-[#20bd5a] rounded-xl active:scale-[0.99] transition-all duration-150 shadow-md"
              >
                <WhatsAppIcon className="w-5 h-5 text-white" />
                <span>Message on WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={handleGetDirections}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold tracking-wide uppercase text-white bg-stone-900 rounded-md hover:bg-stone-800 active:scale-[0.99] transition-all duration-150 shadow-xs"
              >
                <Navigation className="w-4 h-4 text-amber-400" />
                <span>Get Directions</span>
              </button>

              <button
                type="button"
                onClick={handleCopyAddress}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-medium text-stone-700 bg-white border border-stone-300 rounded-md hover:bg-stone-100 hover:border-stone-400 active:scale-[0.99] transition-all duration-150"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700 font-semibold">Address Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-stone-500" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Storefront Photo for easy recognition - Full Corner to Corner */}
          <div className="lg:col-span-5 bg-stone-900 text-stone-100 rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="rounded-xl overflow-hidden border border-stone-700/80 shadow-md">
                <img
                  src={siteConfig.photos.storefront}
                  alt="Mian Optical Storefront on Main Bazar, Noorpur"
                  className="w-full h-64 sm:h-72 object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">
                  Look For This Signboard
                </span>
                <h3 className="font-display text-xl font-bold text-white leading-tight">
                  Spotting Mian Optical in Main Bazar
                </h3>
                <p className="text-xs text-stone-300 mt-2 leading-relaxed">
                  Look for our prominent yellow and orange Urdu & English signboard along the market street in Noorpur, Millat Road, Faisalabad.
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-stone-800/80 border border-stone-700/60 text-xs text-stone-300 space-y-1">
                <span className="font-bold text-amber-300 block">
                  Visiting with Previous Glasses
                </span>
                <p className="text-[11px] text-stone-400 leading-normal">
                  Feel free to bring your existing frames or previous doctor prescription slip when visiting for an eyesight check.
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-stone-800 flex items-center justify-between text-xs text-stone-400">
              <span>Main Bazar, Noorpur, Faisalabad</span>
              <a
                href={siteConfig.address.mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 font-semibold"
              >
                Open Google Maps →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
