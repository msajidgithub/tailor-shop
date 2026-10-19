"use client";

import { business } from "@/lib/content";
import { useLanguage } from "./LanguageProvider";

export function Heritage() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section heritage">
      <div className="section-inner heritage-inner">
        <div className="heritage-stat" aria-hidden>
          <span className="heritage-number">{business.yearsInBusiness}+</span>
          <span className="heritage-unit">{t.heritage.yearsUnit}</span>
        </div>
        <div className="heritage-copy">
          <h2>{t.heritage.title}</h2>
          <p className="heritage-summary">{t.heritage.summary}</p>
          <ul className="heritage-points">
            {t.heritage.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
