import { ref } from 'vue';
import english from 'src/data/translations/english.json';
import french from 'src/data/translations/french.json';

export type Language = 'en' | 'fr';

const translations: Record<Language, Record<string, string>> = {
  en: english as Record<string, string>,
  fr: french as Record<string, string>,
};
const LANGUAGE_KEY = 'portfolio_language';
const savedLanguage = (localStorage.getItem(LANGUAGE_KEY) as Language) || 'fr';
const currentLanguage = ref<Language>(savedLanguage);

export function setLanguage(lang: Language) {
  if (translations[lang]) {
    currentLanguage.value = lang;
    localStorage.setItem(LANGUAGE_KEY, lang);
  }
}

export function getLanguage(): Language {
  return currentLanguage.value;
}

export function t(key: string): string {
  return translations[currentLanguage.value][key] || translations['en'][key] || key;
}
