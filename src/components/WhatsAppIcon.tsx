import React from "react";

/**
 * Pure, authentic WhatsApp Icon (White telephone in speech bubble)
 * Solid fill without fragile SVG gradient IDs that break in iframes or hash navigation.
 */
export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.477 2 12c0 1.885.522 3.65 1.43 5.165L2.05 21.95l4.922-1.332A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2Zm5.59 14.28c-.23.65-1.16 1.25-1.89 1.41-.5.11-1.15.2-3.35-.71-2.82-1.17-4.63-4.04-4.77-4.23-.14-.19-1.14-1.52-1.14-2.9 0-1.38.72-2.06.98-2.34.25-.28.56-.35.75-.35.19 0 .38 0 .54.01.18.01.42-.07.65.49.24.58.82 2 .89 2.15.07.15.12.33.02.53-.1.2-.15.33-.3.51-.15.18-.32.4-.46.54-.15.15-.31.31-.13.62.18.31.8 1.32 1.72 2.14 1.18 1.05 2.18 1.38 2.49 1.53.31.15.49.13.67-.08.18-.21.78-.91.99-1.22.21-.31.42-.26.7-.15.28.11 1.78.84 2.09.99.31.15.51.23.59.36.08.13.08.76-.15 1.41Z"
    />
  </svg>
);

/**
 * Authentic WhatsApp Squircle App Icon matching user's uploaded reference:
 * Solid green squircle background (#25D366) with crisp white WhatsApp speech bubble & handset.
 * No gradient IDs - 100% visible on every device, browser, and iframe.
 */
export const WhatsAppAppIcon: React.FC<{ className?: string; size?: number }> = ({
  className = "w-10 h-10",
}) => (
  <div
    className={`inline-flex items-center justify-center bg-[#25D366] text-white rounded-[22%] shadow-md shrink-0 ${className}`}
  >
    <WhatsAppIcon className="w-[62%] h-[62%] text-white" />
  </div>
);

/**
 * Floating WhatsApp Button with official WhatsApp icon & "Chat on WhatsApp" text label!
 * Fixed at bottom-right corner with direct link to WhatsApp chat.
 */
export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl =
    "https://wa.me/923236534461?text=Assalam%20o%20Alaikum%2C%20I%20would%20like%20to%20inquire%20about%20glasses%20%2F%20eyesight%20testing%20at%20Mian%20Optical.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp +92 323 6534461"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-white focus:outline-hidden focus:ring-4 focus:ring-emerald-400/50 group"
    >
      <div className="relative flex items-center justify-center">
        <WhatsAppIcon className="w-6 h-6 text-white shrink-0" />
        {/* Subtle live indicator dot */}
        <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
        </span>
      </div>
      <span className="text-xs sm:text-sm font-bold tracking-wide pr-1 select-none">
        Chat on WhatsApp
      </span>
    </a>
  );
};
