// Simple translation utility for English and French

import english from 'src/data/translations/english.json';
import french from 'src/data/translations/french.json';

// Supported languages
export type Language = 'en' | 'fr';

const translations: Record<Language, Record<string, string>> = {
  en: english as Record<string, string>,
  fr: french as Record<string, string>,
};

let currentLanguage: Language = 'fr';

export function setLanguage(lang: Language) {
  if (translations[lang]) {
    currentLanguage = lang;
  }
}

export function getLanguage(): Language {
  return currentLanguage;
}

export function t(key: string): string {
  return translations[currentLanguage][key] || translations['en'][key] || key;
}
