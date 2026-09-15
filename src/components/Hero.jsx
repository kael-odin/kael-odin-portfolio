import { Circle } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import Social from "./Social";
import { useNavigate } from 'react-router-dom';
import { useLang } from '../i18n/LanguageContext.jsx';
import { hero } from '../i18n/content.js';
import CellGrid, { useRevealGridCols } from './CellGrid.jsx';
import { TextAnimate, StaggerGroup, StaggerItem } from './motion.jsx';



const MagneticButton = ({ children ,className}) => {
  const buttonRef = useRef(null);
  const circleRef = useRef(null);
  const [, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (buttonRef.current) {
        const button = buttonRef.current.getBoundingClientRect();
        const centerX = button.left + button.width / 2;
        const centerY = button.top + button.height / 2;
        const deltaX = e.pageX - centerX;
        const deltaY = e.pageY - centerY;

        const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
        const magneticDistance = 120;
        const attractionStrength = 0.45;

        if (distance < magneticDistance) {
          const strength = 1 - distance / magneticDistance;
          gsap.to(buttonRef.current, {
            x: deltaX * strength * attractionStrength,
            y: deltaY * strength * attractionStrength,
            duration: 0.2,
          });
          setIsHovering(true);
        } else {
          gsap.to(buttonRef.current, {
            x: 0,
            y: 0,
            duration: 0.3,
          });
          setIsHovering(false);
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleMouseEnter = () => {
    gsap.to(circleRef.current, {
      y: -100,
      opacity: 1,
      scale: 1.5,
      duration: 0.4,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = () => {
    gsap.to(circleRef.current, {
      y: -300,
      scale: 1,
      duration: 0.4,
      ease: "power2.in",
      onComplete: () => {
        gsap.set(circleRef.current,{
          clearProps:"all"
        })
      }
    });
  };

  return (
    <div
      ref={buttonRef}
      className={`relative px-3 sm:px-4 md:px-6 py-2 sm:py-3 border border-bline rounded-full bg-black/20 hover:bg-gray-800/20 transition-colors flex items-center font-medium gap-1 sm:gap-2 text-base sm:text-lg z-10 overflow-hidden text-primarytext ${className ?? ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={circleRef}
        className="h-[200px] w-[200px] bg-[#53a3ff] absolute rounded-full top-14 left-1 -z-10"
      />
      {children}
    </div>
  );
};

const Hero = () => {
  const beepRef = useRef();
  const tagRef = useRef(null);
  const navigate = useNavigate()
  const { lang, t } = useLang();
  const gridCols = useRevealGridCols();

  useGSAP(() => {
    gsap.to(beepRef.current, {
      scale: 3,
      duration: 0.7,
      opacity: 0,
      delay: 1,
      repeat: -1,
      ease: "power2.inOut",
      repeatDelay: 0.6,
    });

    const createRandomMovement = () => {
      gsap.to(tagRef.current, {
        x: gsap.utils.random(-50, 50),
        y: gsap.utils.random(-30, 30),
        duration: 1,
        ease: "sine.inOut",
        onComplete: createRandomMovement,
        overwrite: true
      });
    };

    if (tagRef.current) {
      gsap.set(tagRef.current, {
        x: 0,
        y: 0,
        rotation: 0
      });
      createRandomMovement();
    }

    return () => {
      gsap.killTweensOf(tagRef.current);
    };
  });

  return (
    <><main className="min-h-[85vh] flex flex-col items-center justify-center gap-4 sm:gap-6 px-4 sm:px-6 py-8">

      <StaggerGroup className="flex flex-col items-center gap-1 max-w-6xl w-full" stagger={0.12} delay={0.1}>
        <StaggerItem className="flex items-center gap-2 sm:gap-4">
          <div className="rounded-full w-11 h-11 lg:w-14 lg:h-14 overflow-hidden border border-bline">
            <img src="/Avatar.png" alt="Kael Odin" className="w-full h-full object-cover" />
          </div>

          <div className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 border border-bline rounded-full bg-black/20 hover:bg-gray-800/20 transition-colors flex items-center font-medium gap-1 sm:gap-2 text-sm sm:text-base lg:text-lg text-primarytext">
            {t(hero.hello.zh, hero.hello.en)}
          </div>
        </StaggerItem>

        <StaggerItem className="text-primarytext flex text-[10px] items-center justify-center gap-2 pr-6 sm:ml-10">
          <p className="sm:hidden hidden">{t('// 产品设计师', '// Product Designer')}<br />{t('与经理', '& Manager')}</p>
          <TextAnimate as="h1" className="whitespace-pre-wrap text-5xl font-semibold text-accentv md:text-6xl lg:text-8xl" delay={0.15}>
            {lang === 'zh' ? 'AI 原生' : 'AI-NATIVE'}
          </TextAnimate>
          <p className="sm:text-xs md:text-sm lg:text-base hidden sm:block">{t('// 坐标', '// Based in')}<br />{t(hero.city.zh, hero.city.en)}</p>
        </StaggerItem>

        <StaggerItem>
          <TextAnimate as="h1" className="whitespace-pre-wrap text-5xl font-semibold text-accenty md:text-6xl lg:text-8xl" delay={0.3}>
            {lang === 'zh' ? '产品经理' : 'PRODUCT'}
          </TextAnimate>
        </StaggerItem>

        <StaggerItem className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center">
          <TextAnimate as="h1" className="whitespace-pre-wrap text-5xl font-semibold text-accentl md:text-6xl lg:text-8xl" delay={0.45}>
            {lang === 'zh' ? '经理' : 'MANAGER'}
          </TextAnimate>
          <div>
            <img
              ref={tagRef}
              src="/Kael_Tag.svg"
              height={"30px"}
              width={"90px"}
              alt="Kael"
              className='absolute z-30 w-20 sm:w-28 '
              style={{ willChange: 'transform' }} />
          </div>
          <MagneticButton>
            <div className='relative h-[20px] sm:h-[26px] w-[16px] sm:w-[20px]'>
              <Circle ref={beepRef} fill='#0ae448' stroke='none' width={16} className='absolute top-0 left-0 sm:hidden' />
              <Circle ref={beepRef} fill='#0ae448' stroke='none' width={20} className='absolute top-0 left-0 hidden sm:block' />
              <Circle fill='#0ae448' stroke='none' width={16} className='absolute top-0 left-0 sm:hidden' />
              <Circle fill='#0ae448' stroke='none' width={20} className='absolute top-0 left-0 hidden sm:block' />
            </div>
            <p
              onClick={() => {
                navigate('/contactme')
              }}
            >
              {t(hero.connect.zh, hero.connect.en)}
            </p>
          </MagneticButton>
        </StaggerItem>

        <StaggerItem className="text-primarytext flex text-[10px] items-center justify-center gap-4 sm:mr-24">
          <p>{t('// 产品使命', '// Product with')}<br />{t('目标与影响', 'Purpose & Impact')}</p>
          <TextAnimate as="h1" className="whitespace-pre-wrap text-5xl font-semibold text-accentc md:text-6xl lg:text-8xl" delay={0.6}>
            {lang === 'zh' ? '& 设计师' : '& DESIGNER'}
          </TextAnimate>
        </StaggerItem>
      </StaggerGroup>
      <StaggerGroup className="flex flex-col items-center gap-3 w-full" stagger={0.1} delay={0.65}>
        <StaggerItem>
          <p className='text-center text-lg sm:text-2xl text-primarytext max-w-4xl'>
            {t(hero.tagline.zh, hero.tagline.en).split(t(hero.tagWords.efficiency.zh, hero.tagWords.efficiency.en))[0]}
            <span className='bg-gradient-to-r from-accentv to-accentp text-transparent bg-clip-text tracking-tight'>{t(hero.tagWords.efficiency.zh, hero.tagWords.efficiency.en)}</span>
            {t('，', ', ')}
            <span className='text-accentc'>{t(hero.tagWords.aesthetics.zh, hero.tagWords.aesthetics.en)}</span>
            {t('与', ' and ')}
            <span className='text-accenty'>{t(hero.tagWords.functionality.zh, hero.tagWords.functionality.en)}</span>
            {t('。', '.')}
          </p>
        </StaggerItem>
        <StaggerItem className="w-full overflow-hidden">
          <CellGrid rows={10} cols={gridCols} cellSize={64} />
        </StaggerItem>
      </StaggerGroup>

    </main><Social /></>

  );
};

export { Hero , MagneticButton} ;
