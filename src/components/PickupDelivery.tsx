"use client";

import { business } from "@/lib/content";
import { useLanguage } from "./LanguageProvider";

export function PickupDelivery() {
  const { t } = useLanguage();

  return (
    <section id="pickup" className="section pickup">
      <div className="section-inner">
        <header className="section-head">
          <h2>{t.pickup.title}</h2>
          <p>{t.pickup.sub}</p>
          <p className="coverage">
            {t.pickup.coverage}: <strong>{business.coverage}</strong>
          </p>
        </header>
        <ol className="steps">
          {t.pickup.steps.map((step, index) => (
            <li key={step.title} className="step">
              <span className="step-num" aria-hidden>
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
