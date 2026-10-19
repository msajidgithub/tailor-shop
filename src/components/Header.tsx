"use client";

import Image from "next/image";
import { business, shops } from "@/lib/content";
import { simpleWhatsAppUrl } from "@/lib/whatsapp";
import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "./LanguageProvider";

const links = [
  { href: "#services", key: "services" as const },
  { href: "#pickup", key: "pickup" as const },
  { href: "#book", key: "book" as const },
  { href: "#gallery", key: "gallery" as const },
  { href: "#visit", key: "visit" as const },
];

export function Header() {
  const { t } = useLanguage();
  const shop1 = shops[0];

  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="#top" className="brand-mark">
          <Image
            src={business.logo}
            alt={business.name}
            width={52}
            height={52}
            className="brand-logo"
            priority
          />
          <span className="brand-mark-text">
            <span className="brand-mark-name">{business.shortName}</span>
            <span className="brand-mark-sub">
              {business.yearsInBusiness}+ yrs · Ladies Tailors
            </span>
          </span>
        </a>

        <nav className="header-nav" aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {t.nav[link.key]}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <LanguageToggle />
          <a className="btn btn-ghost btn-sm" href={`tel:${shop1.phoneTel}`}>
            {t.nav.call}
          </a>
          <a
            className="btn btn-gold btn-sm"
            href={simpleWhatsAppUrl(shop1.whatsappDigits)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.nav.whatsapp}
          </a>
        </div>
      </div>
    </header>
  );
}
