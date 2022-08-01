import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en/translation.json';
import pl from './locales/pl/translation.json';
import { EN } from '../static/staticValues';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    pl: { translation: pl },
  },
  lng: EN,
  fallbackLng: EN,

  interpolation: {
    escapeValue: false,
  },
});
