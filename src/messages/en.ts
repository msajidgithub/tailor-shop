export const en = {
  langCode: "en" as "en" | "ur",
  dir: "ltr" as "ltr" | "rtl",
  nav: {
    services: "Services",
    pickup: "Pickup & Delivery",
    book: "Book",
    gallery: "Gallery",
    visit: "Visit us",
    call: "Call",
    whatsapp: "WhatsApp",
  },
  hero: {
    brand: "Asif Ladies Tailors",
    headline: "Stitched with care for every occasion",
    sub: "Custom ladies stitching in Lyari & PECHS, Karachi — with pickup and delivery at your door.",
    ctaBook: "Book pickup",
    ctaWhatsapp: "WhatsApp us",
  },
  services: {
    title: "Our services",
    sub: "From everyday wear to bridal — measured, cut, and finished with precision.",
    items: [
      {
        title: "Shalwar Kameez & Suit",
        desc: "Everyday and party suits with clean cuts and lasting fit.",
      },
      {
        title: "Bridal & Formal",
        desc: "Heavy work, lehnga, and occasion wear handled with care.",
      },
      {
        title: "Alterations & Fitting",
        desc: "Resize, reshape, and perfect garments you already love.",
      },
      {
        title: "Kids & Ladies Wear",
        desc: "Comfortable stitching for the whole family wardrobe.",
      },
    ],
  },
  pickup: {
    title: "Pickup & delivery",
    sub: "No need to visit the shop for every order — we come to you.",
    coverage: "Serving",
    steps: [
      {
        title: "Book online",
        desc: "Tell us what you need and your address in the form below.",
      },
      {
        title: "We pick up",
        desc: "Fabric or garments collected from your door at the agreed time.",
      },
      {
        title: "We deliver",
        desc: "Finished pieces returned to you — ready to wear.",
      },
    ],
  },
  booking: {
    title: "Book a service",
    sub: "Submit the form and we will continue on WhatsApp. Same details will power online bookings later.",
    name: "Your name",
    phone: "Phone number",
    serviceType: "Service type",
    fulfillment: "How should we help?",
    address: "Pickup / delivery address",
    addressHint: "Required for pickup or delivery",
    preferredDate: "Preferred date",
    preferredTime: "Preferred time",
    fabricNotes: "Fabric or garment notes",
    message: "Anything else?",
    submit: "Send on WhatsApp",
    services: {
      stitching: "Custom stitching",
      alteration: "Alteration",
      fitting: "Fitting",
      other: "Other",
    },
    fulfillments: {
      shop: "Shop visit",
      pickup: "Pickup only",
      delivery: "Delivery only",
      both: "Pickup & delivery",
    },
    errors: {
      name: "Please enter your name",
      phone: "Please enter a valid phone number",
      address: "Address is required for pickup or delivery",
    },
  },
  gallery: {
    title: "Our work",
    sub: "A glimpse of fabrics, finishes, and styles from the atelier.",
    placeholders: [
      "Party wear",
      "Formal suit",
      "Bridal detail",
      "Everyday wear",
      "Embroidery",
      "Kids wear",
    ],
  },
  visit: {
    title: "Visit our shops",
    sub: "Two locations in Karachi — walk in for measurements, fabric advice, and fittings.",
    address: "Address",
    hours: "Hours",
    monSat: "Monday – Saturday",
    sunday: "Sunday",
    phone: "Phone",
    directions: "Open in Maps",
    facebook: "Facebook page",
  },
  footer: {
    tagline: "Ladies stitching · Lyari & PECHS, Karachi",
    rights: "All rights reserved.",
  },
};

export type Messages = typeof en;
