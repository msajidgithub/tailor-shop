"use client";

import { useLanguage } from "./LanguageProvider";

export function Testimonials() {
  const { t } = useLanguage();

  return (
    <section id="stories" className="section stories">
      <div className="section-inner">
        <header className="section-head">
          <h2>{t.stories.title}</h2>
          <p>{t.stories.sub}</p>
        </header>
        <ul className="stories-list">
          {t.stories.items.map((item) => (
            <li key={item.name + item.meta} className="story-item">
              <blockquote>“{item.quote}”</blockquote>
              <p className="story-meta">
                <strong>{item.name}</strong>
                <span>{item.meta}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
