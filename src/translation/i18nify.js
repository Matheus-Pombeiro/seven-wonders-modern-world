import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import En from "./locales/en.json";
import Pt from "./locales/pt.json";

// Getting each tanslation
const resources = {
    en: {
        translation: En
    },
    pt: {
        translation: Pt
    }
};

i18n
    .use(initReactI18next) // Initializing the 'react-i18next'
    .init({
        resources,
        debug: true,
        lng: "en",  // Default language
        fallback: "en", // Use this language if the chosen one isn't available
        interpolation: {
            escapeValue: false // Allows to use HTML code in the translations
        },
        react: {
            wait: true
        }
    });

export default i18n;