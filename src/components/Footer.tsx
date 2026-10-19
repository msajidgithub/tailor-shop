"use client";

import { business, shops } from "@/lib/content";
import { useLanguage } from "./LanguageProvider";

export function Footer() {
  const { t, lang } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <p className="footer-brand">{business.name}</p>
          <p className="footer-tag">{t.footer.tagline}</p>
        </div>
        <div className="footer-meta footer-phones">
          {shops.map((shop) => (
            <a key={shop.id} href={`tel:${shop.phoneTel}`}>
              {lang === "ur" ? shop.labelUr : shop.labelEn}: {shop.phoneDisplay}
            </a>
          ))}
          <a href={business.facebook} target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </div>
        <p className="footer-copy">
          © {business.name}. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
