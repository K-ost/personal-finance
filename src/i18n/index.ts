import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enLang from "./locales/en/en.json";
import ruLang from "./locales/ru/ru.json";

const resources = {
  en: {
    translation: enLang,
  },
  ru: {
    translation: ruLang,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});
