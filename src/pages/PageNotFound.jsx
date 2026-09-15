import { MagneticButton } from "../components/Aboutme";
import {ArrowUpRight} from "lucide-react"
import { useLang } from "../i18n/LanguageContext.jsx";
import { notFound } from "../i18n/content.js";

function PageNotFound() {
    const { t } = useLang();
    return (
      <div className="h-[80vh] flex items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-9xl font-bold text-primarytext">{notFound.title}</h1>
          <p className="text-sectext">{t(notFound.para.zh, notFound.para.en)}</p>

          <a href="#/">
          <MagneticButton className={"mt-3"}>
            {t(notFound.cta.zh, notFound.cta.en)} <ArrowUpRight/>
          </MagneticButton>
          </a>
        </div>
      </div>
    )
  }

  export default PageNotFound
