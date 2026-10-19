"use client";

import { useLanguage } from "./LanguageProvider";

export function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="section services">
      <div className="section-inner">
        <header className="section-head">
          <h2>{t.services.title}</h2>
          <p>{t.services.sub}</p>
        </header>
        <ul className="service-list">
          {t.services.items.map((item) => (
            <li key={item.title} className="service-item">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
