import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translations
import ruTranslation from './locales/ru/translation.json';
import cheTranslation from './locales/che/translation.json';
import ttTranslation from './locales/tt/translation.json';

const resources = {
  ru: {
    translation: ruTranslation
  },
  che: {
    translation: cheTranslation
  },
  tt: {
    translation: ttTranslation
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ru',
    supportedLngs: ['ru', 'che', 'tt'],
    
    interpolation: {
      escapeValue: false
    },
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      cookieMinutes: 1440
    }
  });

export default i18n;

