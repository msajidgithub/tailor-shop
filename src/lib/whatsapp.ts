import { getShop, type BookingPayload } from "./content";

const serviceLabels = {
  en: {
    stitching: "Custom stitching",
    alteration: "Alteration",
    fitting: "Fitting",
    other: "Other",
    shop: "Shop visit",
    pickup: "Pickup",
    delivery: "Delivery",
    both: "Pickup & Delivery",
  },
  ur: {
    stitching: "کسٹم سلائی",
    alteration: "الٹریشن",
    fitting: "فٹنگ",
    other: "دیگر",
    shop: "دکان پر آنا",
    pickup: "پک اپ",
    delivery: "ڈیلیوری",
    both: "پک اپ اور ڈیلیوری",
  },
} as const;

/**
 * Builds a WhatsApp deep link. Form schema is stable for a future
 * POST /api/bookings — swap openWhatsApp for an API call without redesigning UX.
 */
export function buildBookingMessage(
  payload: BookingPayload,
  lang: "en" | "ur",
): string {
  const L = serviceLabels[lang];
  const shop = getShop(payload.shopId);
  const shopLabel = lang === "ur" ? shop.labelUr : shop.labelEn;

  const lines =
    lang === "ur"
      ? [
          "السلام علیکم! آصف لیڈیز ٹیلرز — نئی بکنگ",
          "",
          `دکان: ${shopLabel}`,
          `نام: ${payload.name}`,
          `فون: ${payload.phone}`,
          `سروس: ${L[payload.serviceType]}`,
          `طریقہ: ${L[payload.fulfillment]}`,
        ]
      : [
          "Assalam o Alaikum! Asif Ladies Tailors — New booking",
          "",
          `Shop: ${shopLabel}`,
          `Name: ${payload.name}`,
          `Phone: ${payload.phone}`,
          `Service: ${L[payload.serviceType]}`,
          `Fulfillment: ${L[payload.fulfillment]}`,
        ];

  if (payload.address.trim()) {
    lines.push(
      lang === "ur"
        ? `پتہ: ${payload.address}`
        : `Address: ${payload.address}`,
    );
  }
  if (payload.preferredDate.trim()) {
    lines.push(
      lang === "ur"
        ? `تاریخ: ${payload.preferredDate}`
        : `Preferred date: ${payload.preferredDate}`,
    );
  }
  if (payload.preferredTime.trim()) {
    lines.push(
      lang === "ur"
        ? `وقت: ${payload.preferredTime}`
        : `Preferred time: ${payload.preferredTime}`,
    );
  }
  if (payload.fabricNotes.trim()) {
    lines.push(
      lang === "ur"
        ? `کپڑا / نوٹس: ${payload.fabricNotes}`
        : `Fabric / notes: ${payload.fabricNotes}`,
    );
  }
  if (payload.message.trim()) {
    lines.push(
      lang === "ur"
        ? `پیغام: ${payload.message}`
        : `Message: ${payload.message}`,
    );
  }

  return lines.join("\n");
}

export function buildWhatsAppUrl(text: string, digits: string): string {
  return `https://wa.me/${digits}?text=${encodeURIComponent(text)}`;
}

export function openWhatsAppBooking(
  payload: BookingPayload,
  lang: "en" | "ur",
): void {
  const shop = getShop(payload.shopId);
  const url = buildWhatsAppUrl(
    buildBookingMessage(payload, lang),
    shop.whatsappDigits,
  );
  window.open(url, "_blank", "noopener,noreferrer");
}

export function simpleWhatsAppUrl(digits: string, prefill?: string): string {
  if (!prefill) return `https://wa.me/${digits}`;
  return buildWhatsAppUrl(prefill, digits);
}
