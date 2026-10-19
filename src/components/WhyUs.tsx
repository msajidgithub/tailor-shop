"use client";

import { useLanguage } from "./LanguageProvider";

export function WhyUs() {
  const { t } = useLanguage();

  return (
    <section id="why" className="section why">
      <div className="section-inner">
        <header className="section-head">
          <h2>{t.why.title}</h2>
          <p>{t.why.sub}</p>
        </header>
        <ul className="why-list">
          {t.why.items.map((item, i) => (
            <li key={item.title} className="why-item">
              <span className="why-num" aria-hidden>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
