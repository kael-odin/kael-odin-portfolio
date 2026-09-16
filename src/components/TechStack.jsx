import { Cover } from './ui/Cover';
import { useLang } from '../i18n/LanguageContext.jsx';
import { tech } from '../i18n/content.js';

// Reference-style tech rail: real icon badges (scraped SVGs) scrolling in
// two mirrored marquees with gradient fade masks on the edges.
const icons = [
  'react', 'nextjs', 'typescript', 'javascript', 'tailwind', 'node', 'express',
  'mongodb', 'psql', 'sql', 'html', 'css', 'git', 'java', 'python', 'aws', 'shadcn',
];

const TechBadges = () => (
  <div className="flex items-center gap-6 px-3">
    {icons.map((name) => (
      <div key={name} className="flex flex-col items-center justify-center gap-2 h-20 w-20 rounded-xl border border-bline bg-bgcard p-2 hover:border-accentv/60 transition-colors">
        <img src={`ref-assets/${name}.svg`} alt={name} className="h-10 w-10 object-contain" loading="lazy" />
        <span className="text-[10px] uppercase tracking-wider text-sectext">{name}</span>
      </div>
    ))}
  </div>
);

function TechStack() {
  const { t } = useLang();
  return (
    <div className="overflow-hidden py-20">
      <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center relative py-6 text-primarytext">
        {t(tech.heading.pre.zh, tech.heading.pre.en)}<span className="z-40">{t(tech.heading.amazing.zh, tech.heading.amazing.en)}</span>{t(tech.heading.mid.zh, tech.heading.mid.en)}<br />{" "}
        <Cover>{t(tech.heading.cover.zh, tech.heading.cover.en)}</Cover>
      </h1>

      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap py-12">
          <TechBadges />
        </div>
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-12">
          <TechBadges />
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
      </div>
    </div>
  );
}

export default TechStack;
