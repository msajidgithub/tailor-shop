"use client";

import Image from "next/image";
import { business, shops } from "@/lib/content";
import { simpleWhatsAppUrl } from "@/lib/whatsapp";
import { useLanguage } from "./LanguageProvider";

export function Hero() {
  const { t, lang } = useLanguage();
  const shop1 = shops[0];

  return (
    <section id="top" className="hero">
      <div className="hero-media" aria-hidden>
        <Image
          src={business.banner}
          alt=""
          width={1600}
          height={900}
          priority
          className="hero-banner-img"
          sizes="100vw"
        />
        <div className="hero-wash" />
      </div>

      <div className="hero-content">
        <p className="hero-eyebrow reveal">{t.hero.eyebrow}</p>
        <p className="hero-brand reveal">{t.hero.brand}</p>
        <h1 className="hero-headline reveal reveal-delay-1">{t.hero.headline}</h1>
        <p className="hero-sub reveal reveal-delay-2">{t.hero.sub}</p>
        <div className="hero-cta reveal reveal-delay-3">
          <a className="btn btn-gold btn-lg" href="#book">
            {t.hero.ctaBook}
          </a>
          <a
            className="btn btn-outline btn-lg"
            href={simpleWhatsAppUrl(
              shop1.whatsappDigits,
              lang === "ur"
                ? "السلام علیکم! مجھے سلائی کی معلومات چاہییں۔"
                : "Assalam o Alaikum! I would like stitching information.",
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.hero.ctaWhatsapp}
          </a>
        </div>
      </div>
    </section>
  );
}
