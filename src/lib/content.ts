export type Shop = {
  id: string;
  labelEn: string;
  labelUr: string;
  line1: string;
  line2: string;
  city: string;
  full: string;
  /** Opens Google Maps in a new tab (free link — no embed/API key). */
  mapLink: string;
};

export const shops: Shop[] = [
  {
    id: "lyari",
    labelEn: "Shop 1 — Lyari",
    labelUr: "دکان ۱ — لیاری",
    line1: "Shop no 6, Al-Hayat Market",
    line2: "Suleman Azad Rd, Lyari Town",
    city: "Karachi 75660, Pakistan",
    full: "Shop no 6, Al-Hayat Market, Suleman Azad Rd, Lyari Town, Karachi 75660, Pakistan",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=Shop+no+6+Al-Hayat+Market+Suleman+Azad+Rd+Lyari+Town+Karachi",
  },
  {
    id: "pechs",
    labelEn: "Shop 2 — PECHS",
    labelUr: "دکان ۲ — پی ای سی ایچ ایس",
    line1: "Mezzanine floor, Plot no 903-904-C",
    line2: "Near FH Autos, Block-2 PECHS",
    city: "Karachi, Pakistan",
    full: "Mezzanine floor on plot of land bearing no 903-904-C, Near FH AUTOS Block-2 PECHS, Karachi",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=903-904-C+Block-2+PECHS+Karachi+Near+FH+Autos",
  },
];

export const business = {
  name: "Asif Ladies Tailors",
  shortName: "Asif",
  phoneDisplay: "0348 0276736",
  phoneTel: "+923480276736",
  whatsappDigits: "923480276736",
  address: shops[0],
  hours: {
    weekdays: "9:00 AM – 8:00 PM",
    sunday: "10:00 AM – 3:00 PM",
  },
  facebook: "https://www.facebook.com/asifladiestailor/",
  mapLink: shops[0].mapLink,
  coverage: "Lyari, PECHS & nearby Karachi areas",
  logo: "/images/logo.png",
  banner: "/images/banner.png",
} as const;

/** Real gallery photos — add more files under public/images and list them here. */
export const galleryItems = [
  {
    src: "/images/teal-ruffled-lattice-top.png",
    labelEn: "Teal ruffled lattice neckline",
    labelUr: "ٹیال رفلیڈ لیٹس نیک لائن",
  },
] as const;

export const serviceTypes = [
  "stitching",
  "alteration",
  "fitting",
  "other",
] as const;

export const fulfillmentTypes = [
  "shop",
  "pickup",
  "delivery",
  "both",
] as const;

export type ServiceType = (typeof serviceTypes)[number];
export type FulfillmentType = (typeof fulfillmentTypes)[number];

/** Stable booking payload — same shape for future API (1B). */
export type BookingPayload = {
  name: string;
  phone: string;
  serviceType: ServiceType;
  fulfillment: FulfillmentType;
  address: string;
  preferredDate: string;
  preferredTime: string;
  fabricNotes: string;
  message: string;
};
