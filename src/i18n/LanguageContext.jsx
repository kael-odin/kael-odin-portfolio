import { createContext, useContext, useEffect, useState } from "react";

export const LanguageContext = createContext({ lang: "zh", setLang: () => {}, t: (zh, en) => zh });

const STORAGE_KEY = "kael-portfolio-lang";

function detectInitial() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "zh" || saved === "en") return saved;
  } catch {
    /* ignore */
  }
  return "zh";
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(detectInitial);

  useEffect(() => {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  const setLang = (next) => {
    if (next === "zh" || next === "en") setLangState(next);
  };

  const t = (zh, en) => (lang === "zh" ? zh : en);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
