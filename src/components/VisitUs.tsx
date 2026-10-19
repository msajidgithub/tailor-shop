"use client";

import { business, shops } from "@/lib/content";
import { simpleWhatsAppUrl } from "@/lib/whatsapp";
import { useLanguage } from "./LanguageProvider";

export function VisitUs() {
  const { t, lang } = useLanguage();

  return (
    <section id="visit" className="section visit">
      <div className="section-inner visit-inner">
        <header className="section-head">
          <h2>{t.visit.title}</h2>
          <p>{t.visit.sub}</p>
        </header>

        <div className="shops-grid">
          {shops.map((shop) => (
            <article key={shop.id} className="shop-block">
              <div className="visit-info">
                <h3 className="shop-label">
                  {lang === "ur" ? shop.labelUr : shop.labelEn}
                </h3>
                <div>
                  <h4>{t.visit.address}</h4>
                  <p>
                    {shop.line1}
                    <br />
                    {shop.line2}
                    <br />
                    {shop.city}
                  </p>
                </div>
                <div>
                  <h4>{t.visit.hours}</h4>
                  <p>
                    {t.visit.monSat}: {business.hours.weekdays}
                    <br />
                    {t.visit.sunday}: {business.hours.sunday}
                  </p>
                </div>
                <div>
                  <h4>{t.visit.phone}</h4>
                  <p>
                    <a className="shop-phone" href={`tel:${shop.phoneTel}`}>
                      {shop.phoneDisplay}
                    </a>
                  </p>
                </div>
                <div className="visit-links">
                  <a className="btn btn-map" href={`tel:${shop.phoneTel}`}>
                    {t.visit.callShop}: {shop.phoneDisplay}
                  </a>
                  <a
                    className="btn btn-wa"
                    href={simpleWhatsAppUrl(shop.whatsappDigits)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.visit.waShop}
                  </a>
                  <a
                    className="btn btn-fb"
                    href={shop.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.visit.directions}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
