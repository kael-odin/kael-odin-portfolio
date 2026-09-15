import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLang } from '../i18n/LanguageContext.jsx';
import { intro, experience, tech, projects, caseStudies, social } from '../i18n/content.js';
import { Hero } from '../components/Hero';
import Aboutme from '../components/Aboutme';
import Projects from '../components/projects';
import TechStack from '../components/TechStack';

function ExperienceSkills() {
  const { t } = useLang();
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-16">
      <p className="text-center text-sm text-sectext">{t(experience.dot.zh, experience.dot.en)}</p>
      <p className="text-center text-sectext max-w-3xl mx-auto mt-3">
        {t(experience.para.zh, experience.para.en)}
      </p>
      <h2 className="text-center text-3xl sm:text-4xl font-bold text-primarytext mt-6">
        {t(experience.title.zh, experience.title.en)}
      </h2>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {experience.groups.map((g) => (
          <motion.div
            key={g.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="border border-bline rounded-2xl bg-bgcard p-6 sm:p-8"
          >
            <div className="flex items-baseline gap-3">
              <span className="text-sm text-sectext">{g.id}</span>
              <h3 className={`text-3xl sm:text-4xl font-semibold ${g.color}`}>{t(g.title.zh, g.title.en)}</h3>
            </div>
            <p className="text-sectext mt-3">{t(g.description.zh, g.description.en)}</p>
            <div className="flex flex-wrap gap-2 mt-5">
              {g.skills.map((s) => (
                <span key={s} className="border border-bline rounded-full px-3 py-1 text-sm text-primarytext/90">{s}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function TechHeading() {
  const { t } = useLang();
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 pt-4 pb-2 text-center">
      <p className="text-xs tracking-[0.3em] uppercase text-sectext">{t(tech.items ? 'MY TECH STACK' : 'MY TECH STACK', 'MY TECH STACK')}</p>
      <p className="text-sectext max-w-3xl mx-auto mt-3">
        {t(intro.side.zh, intro.side.en)}
      </p>
    </section>
  );
}

function Home() {
  const { t } = useLang();
  return (
    <>
      <Hero />
      <Aboutme />
      <ExperienceSkills />
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-6">
        <div className="flex items-end justify-between gap-4 border-b border-bline pb-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-primarytext">{t(caseStudies.title.zh, caseStudies.title.en)}</h2>
          <a href="#/casestudies" className="inline-flex items-center gap-1 text-sm text-accentc hover:text-accentv transition-colors">
            {t(caseStudies.all.zh, caseStudies.all.en)} <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {caseStudies.items.map((item) => (
            <motion.a
              key={item.link}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="border border-bline rounded-2xl bg-bgcard p-6 hover:border-accentv/60 transition-colors"
            >
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-accentv">{item.metric}</span>
                <span className="text-sm text-sectext">{t(item.metricLabel.zh, item.metricLabel.en)}</span>
              </div>
              <h3 className="text-lg font-semibold text-primarytext mt-2">{item.title}</h3>
              <p className="text-sm text-sectext mt-1">{t(item.role.zh, item.role.en)}</p>
            </motion.a>
          ))}
        </div>
      </section>
      <TechHeading />
      <Projects />
      <TechStack />
      <section className="max-w-7xl mx-auto px-4 sm:px-8 pb-16 text-center">
        <p className="text-sectext">{t(social.tagline.zh, social.tagline.en)}</p>
        <a href={`mailto:${social.email}`} className="text-accentc hover:text-accentv transition-colors">{social.email}</a>
      </section>
    </>
  );
}

export default Home;
