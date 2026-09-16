import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BiHomeAlt2, BiBookOpen, BiBriefcase, BiIdCard, BiMailSend } from 'react-icons/bi';
import { useLang } from '../i18n/LanguageContext.jsx';
import { nav } from '../i18n/content.js';
import LangSwitch from './LangSwitch.jsx';

// Reference-style navbar: brand pill left, link pill center (desktop),
// social circles + LangSwitch right. Mobile opens a full-screen numbered menu.
function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useLang();

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open ]);

  const links = [
    { href: '/', Icon: BiHomeAlt2, label: t(nav.links[0].zh, nav.links[0].en) },
    { href: '/casestudies', Icon: BiBookOpen, label: t('案例', 'Case Studies') },
    { href: '/projects', Icon: BiBriefcase, label: t(nav.links[1].zh, nav.links[1].en) },
    { href: '/aboutme', Icon: BiIdCard, label: t(nav.links[2].zh, nav.links[2].en) },
    { href: '/contactme', Icon: BiMailSend, label: t(nav.links[3].zh, nav.links[3].en) },
  ];

  const go = (href) => {
    setOpen(false);
    navigate(href);
  };

  const socials = [
    { href: 'https://x.com/', label: 'X' },
    { href: 'https://github.com/', label: 'GitHub' },
    { href: 'https://www.linkedin.com/', label: 'LinkedIn' },
  ];

  return (
    <>
      <nav className="flex items-center justify-between mx-1 sm:mx-2 md:mx-3 lg:mx-4 h-14 sm:h-16 lg:h-20 max-w-13xl lg:m-auto px-0 lg:px-2">
        <div>
          <div className="flex items-center gap-2 px-3 py-2 border border-bline rounded-3xl">
            <div className="w-3 h-3 rounded-3xl bg-primarytext sm:w-4 sm:h-4" />
            <button type="button" onClick={() => go('/')} className="text-md text-primarytext sm:text-lg">
              {t(nav.brand.zh, nav.brand.en)}
            </button>
          </div>
        </div>

        <div className="flex">
          <div className="flex items-center lg:border lg:border-bline rounded-3xl lg:p-3">
            <ul className="hidden gap-5 text-base lg:flex lg:items-center text-primarytext">
              {links.map(({ href, Icon, label }) => {
                const active = location.pathname === href;
                return (
                  <li key={href}>
                    <button
                      type="button"
                      onClick={() => go(href)}
                      className={'flex items-center gap-1 transition-all ' + (active ? 'text-accentb' : 'hover:text-accentb')}
                    >
                      <Icon size={16} /> {label}
                    </button>
                  </li>
                );
              })}
            </ul>
            <div className="lg:hidden text-primarytext">
              <button
                type="button"
                aria-label={open ? 'Close menu' : 'Open menu'}
                aria-expanded={open}
                onClick={() => setOpen(!open)}
                className="flex flex-col items-center justify-center w-11 h-11 gap-[6px] border rounded-full border-bline"
              >
                <span className={'block h-[2px] w-5 rounded-full ' + (open ? 'bg-accentv' : 'bg-primarytext')} />
                <span className={'block h-[2px] w-5 rounded-full ' + (open ? 'bg-accentv' : 'bg-primarytext')} />
              </button>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-2">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-primarytext text-black text-xs font-bold"
            >
              {s.label[0]}
            </a>
          ))}
          <LangSwitch />
        </div>
        <div className="lg:hidden">
          <LangSwitch />
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-[80] bg-background/95 backdrop-blur-md lg:hidden">
          <div className="flex flex-col h-full px-6 pt-20 pb-8">
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="relative flex items-center justify-center border rounded-full w-11 h-11 border-bline self-end"
            >
              <span className="absolute block h-[2px] w-5 rounded-full bg-accentv" style={{ transform: 'rotate(45deg)' }} />
              <span className="absolute block h-[2px] w-5 rounded-full bg-accentv" style={{ transform: 'rotate(-45deg)' }} />
            </button>
            <ul className="mt-6 flex flex-col gap-2">
              {links.map(({ href, Icon, label }, i) => {
                const active = location.pathname === href;
                return (
                  <li key={href}>
                    <button
                      type="button"
                      onClick={() => go(href)}
                      className="group flex items-center gap-4 w-full text-left py-2"
                    >
                      <span className="text-sm text-sectext">{String(i + 1).padStart(2, '0')}</span>
                      <span className={'text-5xl font-light tracking-tight transition-colors ' + (active ? 'text-accentb' : 'text-sectext group-hover:text-primarytext')}>
                        {label}
                      </span>
                      <Icon size={20} className={active ? 'text-accentb' : 'text-sectext'} />
                    </button>
                  </li>
                );
              })}
            </ul>
            <div className="mt-auto flex justify-center">
              <LangSwitch />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
