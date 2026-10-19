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
    eyebrow: "40+ years of trusted ladies stitching",
    headline: "Stitched with care for every occasion",
    sub: "Two shops in Lyari & PECHS — custom suits, bridal, alterations, plus pickup & delivery at your door.",
    ctaBook: "Book pickup",
    ctaWhatsapp: "WhatsApp Shop 1",
  },
  trust: {
    years: "40+ years",
    yearsLabel: "family craft",
    shops: "2 shops",
    shopsLabel: "Lyari & PECHS",
    pickup: "Pickup",
    pickupLabel: "& home delivery",
    fit: "Perfect fit",
    fitLabel: "trial & finish",
  },
  heritage: {
    yearsUnit: "years experience",
    title: "40+ years of ladies stitching",
    summary:
      "Asif Ladies Tailors has served Karachi families for over four decades — from everyday suits to bridal wear. With shops in Lyari and PECHS, we combine traditional craft, careful fittings, and modern pickup & delivery so every outfit feels made for you.",
    points: [
      "Trusted since the 1980s by neighbourhood families",
      "Expert cutting, finishing & bridal work",
      "Two shops + doorstep pickup & delivery",
    ],
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
  why: {
    title: "Why families choose us",
    sub: "Almost four decades of ladies tailoring — trust you can feel in every stitch.",
    items: [
      {
        title: "40+ years experience",
        desc: "Generations of Karachi families have trusted our cutting and finishing.",
      },
      {
        title: "Two convenient shops",
        desc: "Visit Lyari or PECHS — same care, same quality.",
      },
      {
        title: "Pickup & delivery",
        desc: "Busy week? We collect fabric and return ready-to-wear outfits.",
      },
      {
        title: "Fit that lasts",
        desc: "Proper measurements, careful trials, and finishing you can rely on.",
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
    sub: "Choose your preferred shop — we continue on that shop’s WhatsApp.",
    shop: "Preferred shop",
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
  stories: {
    title: "What customers say",
    sub: "Real trust built over 40+ years in Karachi.",
    items: [
      {
        quote:
          "My wedding outfits fit perfectly — they understood exactly what I wanted.",
        name: "Ayesha R.",
        meta: "Bridal · PECHS",
      },
      {
        quote:
          "Pickup saved me so much time. Fabric collected, suit delivered — no stress.",
        name: "Sana K.",
        meta: "Pickup · Lyari",
      },
      {
        quote:
          "We’ve been coming here for years. Reliable stitching and honest advice.",
        name: "Family customer",
        meta: "40+ years neighbourhood trust",
      },
    ],
  },
  faq: {
    title: "Common questions",
    sub: "Quick answers before you book.",
    items: [
      {
        q: "Do you offer pickup and delivery?",
        a: "Yes — book online, we collect fabric/garments and deliver when ready (Karachi coverage).",
      },
      {
        q: "Which shop should I contact?",
        a: "Shop 1 Lyari: 0321 2360150 · Shop 2 PECHS: 0348 0276736. Choose the nearer shop or pick in the booking form.",
      },
      {
        q: "How long does stitching take?",
        a: "Depends on design and season. Tell us your date when booking — we’ll confirm a realistic timeline on WhatsApp.",
      },
      {
        q: "Can I get a fitting / alteration?",
        a: "Absolutely. Bring the garment to either shop or request pickup for alterations.",
      },
    ],
  },
  visit: {
    title: "Visit our shops",
    sub: "Two locations in Karachi — walk in for measurements, fabric advice, and fittings.",
    address: "Address",
    hours: "Hours",
    monSat: "Monday – Saturday",
    sunday: "Sunday",
    phone: "Phone / WhatsApp",
    directions: "Open in Maps",
    facebook: "Facebook page",
    callShop: "Call shop",
    waShop: "WhatsApp",
  },
  sticky: {
    book: "Book now",
    call: "Call",
    whatsapp: "WhatsApp",
  },
  footer: {
    tagline: "40+ years · Ladies stitching · Lyari & PECHS, Karachi",
    rights: "All rights reserved.",
  },
};

export type Messages = typeof en;
