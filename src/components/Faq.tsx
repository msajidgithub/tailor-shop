"use client";

import { useLanguage } from "./LanguageProvider";

export function Faq() {
  const { t } = useLanguage();

  return (
    <section id="faq" className="section faq">
      <div className="section-inner faq-inner">
        <header className="section-head">
          <h2>{t.faq.title}</h2>
          <p>{t.faq.sub}</p>
        </header>
        <div className="faq-list">
          {t.faq.items.map((item) => (
            <details key={item.q} className="faq-item">
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
