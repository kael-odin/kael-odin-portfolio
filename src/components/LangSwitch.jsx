import { useLang } from "../i18n/LanguageContext.jsx";

function LangSwitch() {
  const { lang, setLang } = useLang();
  const base = "px-3 py-1 text-xs rounded-full transition-colors";
  return (
    <div className="flex items-center gap-1 border border-bline rounded-full p-1 bg-black/20">
      <button
        type="button"
        aria-label="切换到中文"
        onClick={() => setLang("zh")}
        className={`${base} ${lang === "zh" ? "bg-primarytext text-black" : "text-primarytext hover:text-accentv"}`}
      >
        中文
      </button>
      <button
        type="button"
        aria-label="Switch to English"
        onClick={() => setLang("en")}
        className={`${base} ${lang === "en" ? "bg-primarytext text-black" : "text-primarytext hover:text-accentv"}`}
      >
        EN
      </button>
    </div>
  );
}

export default LangSwitch;
