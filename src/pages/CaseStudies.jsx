import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLang } from '../i18n/LanguageContext.jsx';
import { caseStudies } from '../i18n/content.js';

const card = {
  initial: { opacity: 0, y: 24, scale: 0.96 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
};

// Binil-style Case Studies rail: big metric + role line per study.
function CaseStudies() {
  const { lang, t } = useLang();
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-16">
      <div className="flex items-end justify-between gap-4 border-b border-bline pb-6">
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-sectext">Case Studies</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primarytext mt-2">
            {t(caseStudies.title.zh, caseStudies.title.en)}
          </h1>
        </div>
        <a
          href="/projects"
          className="hidden sm:inline-flex items-center gap-2 border border-bline rounded-full px-4 py-2 text-sm text-primarytext hover:text-accentv hover:border-accentv transition-colors"
        >
          {t(caseStudies.all.zh, caseStudies.all.en)} <ArrowUpRight size={16} />
        </a>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {caseStudies.items.map((item) => (
          <motion.a
            key={item.link}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            variants={card}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="group border border-bline rounded-2xl bg-bgcard p-6 flex flex-col gap-4 hover:border-accentv/60 hover:shadow-[0_0_40px_-12px_#a374ff] transition-all"
          >
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-bold text-accentv">{item.metric}</span>
              <span className="text-sm text-sectext">{t(item.metricLabel.zh, item.metricLabel.en)}</span>
            </div>
            <h2 className="text-xl font-semibold text-primarytext group-hover:text-accentv transition-colors">
              {lang === 'zh' ? item.title : item.enTitle}
            </h2>
            <p className="text-sm text-sectext">{t(item.role.zh, item.role.en)}</p>
            <span className="mt-auto inline-flex items-center gap-1 text-sm text-accentc">
              {lang === 'zh' ? '查看案例' : 'View case'} <ArrowUpRight size={16} />
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

export default CaseStudies;
