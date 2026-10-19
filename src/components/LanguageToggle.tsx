"use client";

import { useLanguage } from "./LanguageProvider";

export function LanguageToggle() {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLang}
      className="lang-toggle"
      aria-label={lang === "en" ? "Switch to Urdu" : "Switch to English"}
    >
      <span className={lang === "en" ? "is-active" : ""}>EN</span>
      <span className="sep" aria-hidden>
        /
      </span>
      <span className={lang === "ur" ? "is-active" : ""}>اردو</span>
    </button>
  );
}
