"use client";

import { shops } from "@/lib/content";
import { simpleWhatsAppUrl } from "@/lib/whatsapp";
import { useLanguage } from "./LanguageProvider";

export function WhatsAppFloat() {
  const { t } = useLanguage();
  const shop1 = shops[0];

  return (
    <a
      className="whatsapp-float"
      href={simpleWhatsAppUrl(shop1.whatsappDigits)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${t.nav.whatsapp} ${shop1.phoneDisplay}`}
      title={`Shop 1: ${shop1.phoneDisplay}`}
    >
      <svg viewBox="0 0 32 32" aria-hidden width="28" height="28">
        <path
          fill="currentColor"
          d="M16.01 3C9.39 3 4 8.34 4 14.9c0 2.1.56 4.14 1.62 5.95L4 29l8.35-1.57A12.1 12.1 0 0 0 16.01 27C22.63 27 28 21.66 28 15.1S22.63 3 16.01 3zm0 21.8c-1.78 0-3.52-.47-5.04-1.36l-.36-.21-4.95.93.96-4.78-.24-.38A9.7 9.7 0 0 1 6.2 14.9c0-5.35 4.4-9.7 9.81-9.7s9.81 4.35 9.81 9.7-4.4 9.9-9.81 9.9zm5.4-7.28c-.3-.15-1.76-.86-2.03-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.45-2.38-1.45-.88-.78-1.47-1.73-1.64-2.03-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.19-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.48s1.07 2.88 1.22 3.08c.15.2 2.11 3.2 5.12 4.48.72.31 1.28.49 1.72.63.72.23 1.38.2 1.9.12.58-.09 1.76-.71 2.01-1.4.25-.69.25-1.28.17-1.4-.07-.12-.27-.2-.57-.35z"
        />
      </svg>
    </a>
  );
}
