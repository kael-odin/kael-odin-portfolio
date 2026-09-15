
import { MagneticButton } from '../components/Aboutme';
import { useLang } from '../i18n/LanguageContext.jsx';
import { aboutPage } from '../i18n/content.js';

const AboutMe = () => {
  const { t } = useLang();
  const services = aboutPage.services.map((s, i) => ({ ...s, number: `0${i + 1}` }));

  const ArrowIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="transform rotate-[-45deg]"
    >
      <path
        d="M5 12H19M19 12L12 5M19 12L12 19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <div className="min-h-screen text-sectext px-4 sm:px-8 py-12 sm:py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <header className="flex flex-col sm:flex-row justify-between items-start mb-16 relative">
          <div className="w-full max-w-4xl border-b border-bline pb-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-primarytext">
                {t(aboutPage.hello.zh, aboutPage.hello.en)}
              </h1>
              <span className="text-4xl sm:text-5xl animate-wave">👋</span>
              {/* Avatar */}
          <div className="hidden lg:flex w-16 h-16 rounded-full bg-gradient-to-tl from-purple-500/80 to-rose-400/80 absolute top-0 right-0 p-1 shadow-lg transition-all duration-300 ease-out group-hover:scale-[1.2] group-hover:rounded-[10px] group-hover:shadow-purple-500/40 group-active:translate-y-1">
            <img src="/Avatar.png" alt="Kael Odin" className="w-full h-full object-cover rounded-full" />
          </div>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-primarytext mb-8">
              {t(aboutPage.big.zh, aboutPage.big.en)}
            </h2>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
              <p className="text-base sm:text-lg text-sectext lg:max-w-2xl">
                {t(aboutPage.para1.zh, aboutPage.para1.en)}
              </p>
              <p className="text-sm text-sectext lg:max-w-[250px] lg:border-l lg:border-bline lg:pl-8">
                {t(aboutPage.para2.zh, aboutPage.para2.en)}
              </p>
            </div>
          </div>


        </header>

        {/* Services Section */}
        <section className="mt-16 sm:mt-24">
          <div className="flex justify-center mb-12">
            <h3 className="text-xl font-bold text-accentv sm:text-2xl">
              {t(aboutPage.help.zh, aboutPage.help.en)} <span className="animate-ping">.</span>
            </h3>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            {services.map(({ number, title, description }) => (
              <div key={number} className="border-t border-bline pt-8">
                <span className="text-sectext/60 text-sm block mb-4">{number}</span>
                <h4 className="text-xl sm:text-2xl text-primarytext mb-4">{t(title.zh, title.en)}</h4>
                <p className="text-primarytext text-base sm:text-lg">{t(description.zh, description.en)}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Button */}
        <div className="mt-16 sm:mt-24 flex justify-center sm:justify-end">
          <a href="#/contactme" className="no-underline">
            <MagneticButton>
              <div className="flex items-center gap-2">
                {t(aboutPage.contactCta.zh, aboutPage.contactCta.en)}
                <ArrowIcon />
              </div>
            </MagneticButton>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
