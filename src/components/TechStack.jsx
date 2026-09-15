import { Cover } from './ui/cover';
import { useLang } from '../i18n/LanguageContext.jsx';
import { tech } from '../i18n/content.js';

const TechLogos = () => {
  const colors = ["text-accentc", "text-bgreen", "text-accentv", "text-primarytext"];
  return (
    <div className="flex items-center gap-16 px-4">
      {tech.items.map((name, i) => (
        <div key={name} className="flex flex-col items-center gap-2">
          <div className={`text-4xl ${colors[i % colors.length]} font-bold`}>{name}</div>
          <div className={`h-1 w-12 rounded-full ${colors[i % colors.length].replace('text-', 'bg-')}`}></div>
        </div>
      ))}
    </div>
  );
};

function TechStack() {
  const { t } = useLang();
  return (
    <div className="overflow-hidden py-20">
      <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center relative py-6 text-primarytext">
        {t(tech.heading.pre.zh, tech.heading.pre.en)}<span className="z-40">{t(tech.heading.amazing.zh, tech.heading.amazing.en)}</span>{t(tech.heading.mid.zh, tech.heading.mid.en)}<br /> at{" "}
        <Cover>{t(tech.heading.cover.zh, tech.heading.cover.en)}</Cover>
      </h1>

      {/* Marquee container */}
      <div className="relative flex overflow-x-hidden ">
        {/* First marquee */}
        <div className="animate-marquee whitespace-nowrap py-12">
          <TechLogos />
        </div>

        {/* Duplicated marquee for seamless loop */}
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-12">
          <TechLogos />
        </div>
      </div>
    </div>
  );
}

export default TechStack;
