"use client";

import { business } from "@/lib/content";
import { useLanguage } from "./LanguageProvider";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <p className="footer-brand">{business.name}</p>
          <p className="footer-tag">{t.footer.tagline}</p>
        </div>
        <div className="footer-meta">
          <a href={`tel:${business.phoneTel}`}>{business.phoneDisplay}</a>
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
