"use client";

import { business } from "@/lib/content";
import { useLanguage } from "./LanguageProvider";

export function TrustBar() {
  const { t } = useLanguage();

  const items = [
    { value: `${business.yearsInBusiness}+`, label: t.trust.yearsLabel, display: t.trust.years },
    { value: t.trust.shops, label: t.trust.shopsLabel, display: t.trust.shops },
    { value: t.trust.pickup, label: t.trust.pickupLabel, display: t.trust.pickup },
    { value: t.trust.fit, label: t.trust.fitLabel, display: t.trust.fit },
  ];

  return (
    <section className="trust-bar" aria-label="Highlights">
      <div className="trust-inner">
        {items.map((item) => (
          <div key={item.label} className="trust-item">
            <strong>{item.display}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
