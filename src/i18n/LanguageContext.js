import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import translations from './translations';

const SUPPORTED_LANGUAGES = ['fr', 'en'];
const DEFAULT_LANGUAGE = 'en';
const STORAGE_KEY = 'gameday-lang';

const LanguageContext = createContext(null);

// Detect the preferred language from (1) a stored choice, then (2) the browser.
const detectLanguage = () => {
  if (typeof window === 'undefined') return DEFAULT_LANGUAGE;

  const stored = window.localStorage?.getItem(STORAGE_KEY);
  if (stored && SUPPORTED_LANGUAGES.includes(stored)) {
    return stored;
  }

  const browserLanguages = navigator.languages && navigator.languages.length
    ? navigator.languages
    : [navigator.language || navigator.userLanguage || DEFAULT_LANGUAGE];

  for (const lang of browserLanguages) {
    const base = lang.toLowerCase().split('-')[0];
    if (SUPPORTED_LANGUAGES.includes(base)) {
      return base;
    }
  }

  return DEFAULT_LANGUAGE;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(detectLanguage);

  // Keep <html lang="...">, the document title and the stored preference in sync.
  useEffect(() => {
    document.documentElement.lang = language;
    const dictionary = translations[language] || translations[DEFAULT_LANGUAGE];
    if (dictionary['document.title']) {
      document.title = dictionary['document.title'];
    }
    try {
      window.localStorage?.setItem(STORAGE_KEY, language);
    } catch {
      // Ignore storage errors (e.g. private mode).
    }
  }, [language]);

  const setLanguage = (lang) => {
    if (SUPPORTED_LANGUAGES.includes(lang)) {
      setLanguageState(lang);
    }
  };

  const value = useMemo(() => {
    const dictionary = translations[language] || translations[DEFAULT_LANGUAGE];

    // Translate a key; falls back to English, then to the key itself.
    const t = (key) =>
      dictionary[key] ?? translations[DEFAULT_LANGUAGE][key] ?? key;

    return { language, setLanguage, t, supportedLanguages: SUPPORTED_LANGUAGES };
  }, [language]);

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
