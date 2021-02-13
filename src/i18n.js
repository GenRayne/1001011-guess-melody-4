import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
const translationData = require(`./translation.json`);

i18n
  .use(initReactI18next)
  .init({
    lng: `ru`,
    fallbackLng: `ru`,
    resources: translationData,
    interpolation: {
      escapeValue: false
    },
    debug: true,
  });

export default i18n;
