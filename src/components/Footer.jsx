import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../i18n/LanguageContext.jsx';
import { footer, site } from '../i18n/content.js';

// Reference-exact footer: rounded-xl bordered wrap, three columns with
// blur-in reveal, colored headings, inline SVG social pills, two CTA rows
// with rotating 45deg arrow circles, giant name watermark, bottom credits.
function Footer() {
  const { lang, t } = useLang();
  const ref = useRef(null);
  const year = new Date().getFullYear();

  const reveal = {
    hidden: { opacity: 0, filter: 'blur(8px)', x: -20 },
    show: { opacity: 1, filter: 'blur(0px)', x: 0, transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] } },
  };

  const socials = footer.socials;

  const ArrowCircle = () => (
    <svg className="transition-all ease-in-out rotate-45 group-hover:rotate-0" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="18" cy="18" r="17.5" stroke="#323228" />
      <path fillRule="evenodd" clipRule="evenodd" d="M13.87 24.66a1.1 1.1 0 0 1-1.55-.01 1.13 1.13 0 0 1 0-1.66l8.95-9.64h-6.05a1.1 1.1 0 0 1-1.1-1.18 1.1 1.1 0 0 1 1.1-1.18h8.69a1.1 1.1 0 0 1 1.1 1.18v9.35a1.16 1.16 0 0 1-1.14 1.18 1.16 1.16 0 0 1-1.15-1.18v-6.51L13.87 24.66Z" fill="#0AE448" />
    </svg>
  );

  return (
    <footer className="relative flex flex-wrap items-center justify-center w-full pb-56 mt-6 border border-bline rounded-xl">
      <div className="flex items-start justify-between w-full px-3 pt-12 max-w-10xl md:px-6 xl:mx-10">
        <div className="flex flex-col items-start justify-between flex-grow gap-10 sm:flex-row md:gap-20 xl:gap-36 2xl:gap-56">
          <div className="flex items-start justify-between flex-grow w-full">
            <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <h1 className="text-2xl font-semibold text-primarytext">
                {t(footer.brand.pre.zh, footer.brand.pre.en)} <span className="text-bpink">{t(footer.brand.aesthetics.zh, footer.brand.aesthetics.en)}</span> &amp; <br /> <span className="text-bblue">{t(footer.brand.func.zh, footer.brand.func.en)}</span> {t(footer.brand.post.zh, footer.brand.post.en)}
              </h1>
            </motion.div>
            <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <h1 className="text-xl font-semibold text-borange">{t(footer.explore.zh, footer.explore.en)}</h1>
              <div className="flex flex-col mt-5">
                {footer.exploreLinks.map((l) => (
                  <a key={l.to} className="mt-2 text-lg transition-all text-primarytext hover:text-accentb cursor-pointer" onClick={() => { window.location.hash = '#' + l.to; }}>
                    {t(l.zh, l.en)}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="flex items-start justify-between w-full gap-10">
            <motion.div className="flex flex-col" variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <h1 className="text-xl font-semibold text-bblue">{t(footer.follow.zh, footer.follow.en)}</h1>
              <div className="flex flex-col items-start justify-center gap-3 mt-6 lg:flex-row lg:gap-10">
                <div className="flex flex-col gap-3">
                  {socials.slice(0, 2).map((s) => (
                    <div key={s.label} className="flex items-center justify-center gap-2 mt-0 cursor-pointer group" onClick={() => window.open(s.url, '_blank')}>
                      <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primarytext text-black text-[10px] font-bold">{s.label[0]}</span>
                      <h1 className="text-lg transition-all text-primarytext group-hover:text-accentb">{s.label}</h1>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-3">
                  {socials.slice(2, 4).map((s) => (
                    <div key={s.label} className="flex items-center justify-center gap-2 mt-0 cursor-pointer group" onClick={() => window.open(s.url, '_blank')}>
                      <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primarytext text-black text-[10px] font-bold">{s.label[0]}</span>
                      <h1 className="text-lg transition-all text-primarytext group-hover:text-accentb">{s.label}</h1>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <div className="flex gap-2 border-b border-bline group cursor-pointer" onClick={() => { window.location.hash = '#/contactme'; }}>
                <div>
                  <a className="text-xl font-semibold transition-all text-primarytext group-hover:text-accentb">{t(footer.contactCard.zh, footer.contactCard.en)}</a>
                  <h1 className="pb-3 text-sm text-sectext">{t(footer.contactHint.zh, footer.contactHint.en)}</h1>
                </div>
                <div className="pl-3"><ArrowCircle /></div>
              </div>
              <div className="flex justify-between gap-2 pt-3 group cursor-pointer" onClick={() => { window.location.hash = '#/projects'; }}>
                <div>
                  <a className="text-xl font-semibold transition-all text-primarytext group-hover:text-accentb">{t(footer.projectsCard.zh, footer.projectsCard.en)}</a>
                  <h1 className="pb-2 text-sm text-sectext">{t(footer.projectsHint.zh, footer.projectsHint.en)}</h1>
                </div>
                <ArrowCircle />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-full overflow-visible pointer-events-none select-none">
        <h1 className="text-[120px] sm:text-[180px] md:text-[240px] lg:text-[320px] text-primarytext/5 text-right font-bold whitespace-nowrap -mb-16 md:-mb-24 leading-none">
          {t(footer.watermark.zh, footer.watermark.en)}
        </h1>
      </div>
    </footer>
  ) ;
}

// Bottom credits + floating email pill, reference layout.
function FooterCredits() {
  const { t } = useLang();
  const year = new Date().getFullYear();
  return (
    <div className="relative z-10 w-full flex justify-center">
      <div className="w-screen max-w-13xl">
        <div className="h-1 border-t border-bline" />
        <div className="flex flex-col sm:flex-row justify-between items-center px-2 pt-3 pb-3 mx-1 text-primarytext">
          <p className="text-sm text-sectext">
            {site.name.en} ©{year} - {t('隐私政策', 'Privacy Policy')}
          </p>
          <p className="text-sm text-sectext">{t(site.location.zh, site.location.en)}</p>
        </div>
      </div>
    </div>
  );
}

export function FooterEmailPill() {
  return (
    <a
      href={'mailto:' + (site.email || 't445481611@gmail.com')}
      className="fixed bottom-4 right-4 z-40 hidden sm:flex items-center gap-2 px-4 py-2 rounded-full border border-bline bg-bgcard/80 backdrop-blur-md text-primarytext text-sm hover:border-accentb transition-colors"
    >
      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primarytext text-black text-[10px] font-bold">@</span>
      {site.email}
    </a>
  );
}

export default function FooterWrap() {
  return (
    <>
      <Footer />
      <FooterCredits />
      <FooterEmailPill />
    </>
  );
}
