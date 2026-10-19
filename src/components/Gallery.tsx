"use client";

import Image from "next/image";
import { galleryItems } from "@/lib/content";
import { useLanguage } from "./LanguageProvider";

const accents = [
  "accent-magenta",
  "accent-navy",
  "accent-gold",
  "accent-rose",
  "accent-deep",
  "accent-wine",
];

export function Gallery() {
  const { t, lang } = useLanguage();

  return (
    <section id="gallery" className="section gallery">
      <div className="section-inner">
        <header className="section-head">
          <h2>{t.gallery.title}</h2>
          <p>{t.gallery.sub}</p>
        </header>
        <ul className="gallery-grid">
          {galleryItems.map((item) => (
            <li key={item.src} className="gallery-tile gallery-tile-photo">
              <Image
                src={item.src}
                alt={lang === "ur" ? item.labelUr : item.labelEn}
                fill
                className="gallery-photo"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <span>{lang === "ur" ? item.labelUr : item.labelEn}</span>
            </li>
          ))}
          {t.gallery.placeholders
            .slice(galleryItems.length)
            .map((label, i) => (
              <li
                key={label}
                className={`gallery-tile ${accents[(i + galleryItems.length) % accents.length]}`}
              >
                <span>{label}</span>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}
