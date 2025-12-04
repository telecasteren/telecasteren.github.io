import {
  landingTexts,
  keywords,
  experience,
  contactTexts,
  projectTexts,
  switchTexts,
} from "/resources/texts/translations.js";

const setTranslations = (lang) => {
  const selectedLanding = landingTexts[lang];
  const selectedKeywords = keywords[lang];
  const selectedExperience = experience[lang];
  const selectedContactTexts = contactTexts[lang];
  const selectedProjectTexts = projectTexts[lang];
  const selectedSwitchTexts = switchTexts[lang];

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");

    el.innerHTML =
      selectedLanding[key] ||
      selectedKeywords[key] ||
      selectedExperience[key] ||
      selectedContactTexts[key] ||
      selectedProjectTexts[key] ||
      selectedSwitchTexts[key] ||
      key;
  });
};

export const setLanguage = (lang) => {
  localStorage.setItem("lang", lang);
  setTranslations(lang);
};

// defaults to Norwegian
const saved = localStorage.getItem("lang") || "no";
setTranslations(saved);

window.setLanguage = setLanguage;
