// i18n.tsx
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from '../i18/entranslation.json';
import translationES from '../i18/estranslation.json';
import translationHI from '../i18/hinditranslation.json'; // Add Hindi translations

const resources = {
  en: {
    translation: translationEN,
  },
  es: {
    translation: translationES,
  },
  hi: {
    translation: translationHI, // Include Hindi translations
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });
  console.log('i18n configuration executed successfully'); // Add this line

export default i18n;
