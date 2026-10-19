"use client";

import { business, shops } from "@/lib/content";
import { simpleWhatsAppUrl } from "@/lib/whatsapp";
import { useLanguage } from "./LanguageProvider";

export function StickyCta() {
  const { t } = useLanguage();
  const shop1 = shops[0];

  return (
    <div className="sticky-cta" role="region" aria-label="Quick actions">
      <a className="sticky-book" href="#book">
        {t.sticky.book}
      </a>
      <a className="sticky-call" href={`tel:${shop1.phoneTel}`}>
        {t.sticky.call}
      </a>
      <a
        className="sticky-wa"
        href={simpleWhatsAppUrl(shop1.whatsappDigits)}
        target="_blank"
        rel="noopener noreferrer"
      >
        {t.sticky.whatsapp}
      </a>
      <span className="sticky-note">{business.yearsInBusiness}+ yrs</span>
    </div>
  );
}
