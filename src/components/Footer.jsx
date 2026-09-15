import { SocialIcon } from 'react-social-icons';
import { useLang } from '../i18n/LanguageContext.jsx';
import { footer, site } from '../i18n/content.js';

const Footer = () => {
  const { lang, t } = useLang();
  const year = new Date().getFullYear();
  return (
    <main className="px-3 relative">
      <footer className="border border-bline rounded-lg text-primarytext p-4 md:p-8 relative overflow-hidden bg-bgcard">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-lg md:text-xl font-semibold">
              {t(footer.brand.pre.zh, footer.brand.pre.en)}<span className="text-accentc">{t(footer.brand.aesthetics.zh, footer.brand.aesthetics.en)}</span>{t(footer.brand.mid.zh, footer.brand.mid.en)}<br />
              <span className="text-accentc">{t(footer.brand.func.zh, footer.brand.func.en)}</span>{t(footer.brand.post.zh, footer.brand.post.en)}
            </h2>
          </div>

          {/* Navigation Section */}
          <div className="space-y-4">
            <div className="mb-8">
              <h3 className="text-borange font-semibold mb-4">{t(footer.explore.zh, footer.explore.en)}</h3>
              <nav className="space-y-2">
                {footer.exploreLinks.map((l) => (
                  <p
                    key={l.to}
                    className="hover:text-sectext cursor-pointer transition-colors"
                    onClick={() => { window.location.href = l.to; }}
                  >
                    {t(l.zh, l.en)}
                  </p>
                ))}
              </nav>
            </div>
          </div>

          {/* Social & Contact Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex flex-col sm:flex-row lg:flex-col gap-8">
              <div>
                <h3 className="text-accentc font-semibold mb-4">{t(footer.follow.zh, footer.follow.en)}</h3>
                <div className="flex space-x-4">
                  {footer.socials.map((s) => (
                    <SocialIcon
                      key={s.label}
                      url={s.url}
                      label={s.label}
                      className="hover:scale-110 transition-transform"
                      bgColor="transparent"
                      fgColor="#ffffe3"
                      style={{ height: 30, width: 30 }}
                    />
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="group cursor-pointer"
                  onClick={() => {
                    window.location.href = '/contactme'
                  }}
                >
                  <h3 className="text-lg md:text-xl font-semibold">{t(footer.contactCard.zh, footer.contactCard.en)}</h3>
                  <p className="text-sm text-sectext group-hover:text-primarytext transition-colors">{t(footer.contactHint.zh, footer.contactHint.en)}</p>
                </div>

                <div className="group cursor-pointer"
                  onClick={() => {
                    window.location.href = '/projects'
                  }}
                >
                  <h3 className="text-lg md:text-xl font-semibold">{t(footer.projectsCard.zh, footer.projectsCard.en)}</h3>
                  <p className="text-sm text-sectext group-hover:text-primarytext transition-colors">{t(footer.projectsHint.zh, footer.projectsHint.en)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Large text overlay */}
        <div className="absolute bottom-0 right-0 w-full overflow-visible pointer-events-none">
          <h1 className="text-[80px] sm:text-[120px] md:text-[160px] lg:text-[200px] xl:text-[240px] text-primarytext/5 text-right font-bold whitespace-nowrap -mb-10 md:-mb-20">
            {t(footer.watermark.zh, footer.watermark.en)}
          </h1>
        </div>
      </footer>

      {/* Credits section */}
      <div className="flex flex-col sm:flex-row justify-between items-center font-semibold text-base md:text-lg py-4 md:py-6 px-2 md:px-4 text-primarytext/80 gap-2 md:gap-4">
        <p className="flex items-center gap-2 text-center sm:text-left">
          {t(footer.madeWith.zh, footer.madeWith.en)} <span className="text-red-500 animate-pulse">❤️</span> {lang === 'zh' ? `by ${site.name.zh}` : `by ${site.name.en}`}
        </p>
        <p className="text-primarytext/60">{t(site.location.zh, site.location.en)} · ©{year} {site.name.zh} · {t('隐私政策', 'Privacy Policy')}</p>
      </div>
    </main>
  );
};

export default Footer;
