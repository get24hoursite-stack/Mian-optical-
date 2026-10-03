/**
 * Business configuration and image registry for Mian Optical
 * Exact uploaded shop photographs imported directly.
 */

import storefrontImg from "../assets/images/file_0000000079508210856bfecd85f6929b.png";
import eyeTestingImg from "../assets/images/file_000000002e50821098a0f30831ad5b8f.png";
import brandWallDisplayImg from "../assets/images/file_0000000048d08210a3263a6dac355ad0.png";
import framesAssortmentImg from "../assets/images/file_000000001e808210b85aa91b689149d6.png";
import counterFramesImg from "../assets/images/file_00000000a7c082109796e205f9e819c7.png";
import contactLensCareImg from "../assets/images/file_00000000a5bc8210bdb222169dfb7164.png";
import shopInteriorPortraitImg from "../assets/images/file_00000000292c8210a83d42ca00d97b5f.png";
import shopInteriorWideImg from "../assets/images/file_000000006ab882109a44c55f2b2aa29b.png";
import ownerImg from "../assets/images/owner.png";

export interface PhotoAsset {
  id: string;
  url: string;
  title: string;
  caption?: string;
  category: 'storefront' | 'testing' | 'frames' | 'care' | 'interior' | 'owner';
  aspect?: 'landscape' | 'portrait';
}

export interface SiteConfig {
  name: string;
  tagline: string;
  address: {
    street: string;
    area: string;
    road: string;
    city: string;
    country: string;
    full: string;
    mapsSearchUrl: string;
  };
  contact: {
    phone: string;
    whatsapp: string;
    openingHours: string;
  };
  photos: {
    owner: string;
    storefront: string;
    eyeTesting: string;
    brandWallDisplay: string;
    framesAssortment: string;
    counterFrames: string;
    contactLensCare: string;
    shopInteriorPortrait: string;
    shopInteriorWide: string;
    galleryImages: PhotoAsset[];
  };
}

export const siteConfig: SiteConfig = {
  name: "Mian Optical",
  tagline: "Clear Vision. A Style That Suits You.",
  address: {
    street: "Main Bazar",
    area: "Noorpur",
    road: "Millat Road",
    city: "Faisalabad",
    country: "Pakistan",
    full: "Main Bazar, Noorpur, Millat Road, Faisalabad, Pakistan.",
    mapsSearchUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      "Main Bazar, Noorpur, Millat Road, Faisalabad, Pakistan"
    )}`,
  },
  contact: {
    phone: "+92 323 6534461",
    whatsapp: "+92 323 6534461",
    openingHours: "",
  },
  photos: {
    owner: ownerImg,
    storefront: storefrontImg,
    eyeTesting: eyeTestingImg,
    brandWallDisplay: brandWallDisplayImg,
    framesAssortment: framesAssortmentImg,
    counterFrames: counterFramesImg,
    contactLensCare: contactLensCareImg,
    shopInteriorPortrait: shopInteriorPortraitImg,
    shopInteriorWide: shopInteriorWideImg,
    galleryImages: [
      {
        id: "gal-owner",
        url: ownerImg,
        title: "Owner & Optical Specialist",
        caption: "Owner of Mian Optical personally attending to customer eyesight testing and custom frame adjustments.",
        category: "owner",
        aspect: "portrait",
      },
      {
        id: "gal-storefront",
        url: storefrontImg,
        title: "Storefront & Main Entrance",
        caption: "Mian Optical exterior on Main Bazar, Noorpur with distinctive yellow & orange signage.",
        category: "storefront",
        aspect: "landscape",
      },
      {
        id: "gal-interior-wide",
        url: shopInteriorWideImg,
        title: "Main Optical Interior",
        caption: "Well-lit retail area with yellow showcase counters and branded eyewear displays.",
        category: "interior",
        aspect: "landscape",
      },
      {
        id: "gal-testing",
        url: eyeTestingImg,
        title: "Optometric Testing Equipment",
        caption: "Trial lens kit and precision eye-testing equipment used for on-site eyesight checks.",
        category: "testing",
        aspect: "landscape",
      },
      {
        id: "gal-brand-wall",
        url: brandWallDisplayImg,
        title: "Designer Frame & Sunglasses Wall",
        caption: "Organized display shelves showcasing popular eyewear and sunglasses collections.",
        category: "frames",
        aspect: "portrait",
      },
      {
        id: "gal-counter-frames",
        url: counterFramesImg,
        title: "Eyewear Counter & Lens Chart",
        caption: "Display counter featuring a wide selection of everyday frames and optical consultation aids.",
        category: "frames",
        aspect: "landscape",
      },
      {
        id: "gal-frames-assortment",
        url: framesAssortmentImg,
        title: "Spectacle Frames Assortment",
        caption: "Diverse array of fashionable and durable optical frames laid out for customer selection.",
        category: "frames",
        aspect: "landscape",
      },
      {
        id: "gal-interior-portrait",
        url: shopInteriorPortraitImg,
        title: "Showroom Display Counters",
        caption: "Close-up perspective of the interior counters and framed optical displays.",
        category: "interior",
        aspect: "portrait",
      },
      {
        id: "gal-care-products",
        url: contactLensCareImg,
        title: "Contact Lens Care & Accessories",
        caption: "Contact lens multi-purpose solutions, cases, and essential eye accessories.",
        category: "care",
        aspect: "landscape",
      },
    ],
  },
};
