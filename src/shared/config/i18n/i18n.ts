import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

export const supportedLngs = ["en", "vi"] as const;

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    react: { useSuspense: false },
    fallbackLng: "en",
    debug: true,

    supportedLngs,

    backend: {
      loadPath: "/locales/{{lng}}/translation.json"
    },

    detection: {
      order: ["localStorage", "navigator", "htmlTag", "path", "subdomain"],
      caches: ["localStorage"]
    },

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;