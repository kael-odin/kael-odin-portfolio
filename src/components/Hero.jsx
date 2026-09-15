import { Circle } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { RoughNotation } from "react-rough-notation";
import Social from "./Social";
import { useNavigate } from 'react-router-dom';
import { useLang } from '../i18n/LanguageContext.jsx';
import { hero } from '../i18n/content.js';



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
  const adityaRef = useRef(null);
  const navigate = useNavigate()
  const { t } = useLang();

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
      gsap.to(adityaRef.current, {
        x: gsap.utils.random(-50, 50),
        y: gsap.utils.random(-30, 30),
        duration: 1,
        ease: "sine.inOut",
        onComplete: createRandomMovement,
        overwrite: true
      });
    };

    if (adityaRef.current) {
      gsap.set(adityaRef.current, {
        x: 0,
        y: 0,
        rotation: 0
      });
      createRandomMovement();
    }

    return () => {
      gsap.killTweensOf(adityaRef.current);
    };
  });

  return (
    <><main className="min-h-[85vh] flex flex-col items-center justify-center gap-4 sm:gap-6 px-4 sm:px-6 py-8">

      <div className="flex flex-col items-center gap-1 max-w-6xl w-full">
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="bg-white rounded-full w-8 h-8 sm:w-12 sm:h-12 lg:w-20 lg:h-20 overflow-hidden">
            <img src="/Avatar.png" alt="avatar" className="w-full h-full object-cover" />
          </div>

          <div className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 border border-bline rounded-full bg-black/20 hover:bg-gray-800/20 transition-colors flex items-center font-medium gap-1 sm:gap-2 text-sm sm:text-base lg:text-lg text-primarytext">
            {t(hero.hello.zh, hero.hello.en)}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold bg-gradient-to-r from-accentv to-accentp text-transparent bg-clip-text tracking-tight">
            {t(hero.line1.zh, hero.line1.en)}
          </h1>
          <div className="text-xs sm:text-sm lg:text-lg text-primarytext font-light text-center">
            {t(`// ${hero.based.zh}`, `// ${hero.based.en}`)}<br />{t(hero.city.zh, hero.city.en)}
          </div>
        </div>

        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold text-accenty tracking-tight text-center">
          {t(hero.line2.zh, hero.line2.en)}
        </h2>

        <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-primarytext tracking-tight">
            <RoughNotation type='circle' show={true} animationDelay={4000}>
              {t(hero.line3.zh, hero.line3.en)}
            </RoughNotation>
          </h2>
          <div>
            <img
              ref={adityaRef}
              src="/Blue_2Aditya.svg"
              height={"30px"}
              width={"90px"}
              alt=""
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
        </div>

        <div className="flex items-center gap-4 sm:gap-8 flex-wrap justify-center">
          <div className="text-xs sm:text-sm lg:text-lg text-primarytext font-light text-left whitespace-pre-line">
            {t(hero.roleSide.zh, hero.roleSide.en)}
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-accentc tracking-tight"><span className='text-primarytext'>&amp;</span> {t(hero.line4.zh, hero.line4.en)}</h2>
        </div>
      </div>
      <p className='text-center text-lg sm:text-3xl text-primarytext'>
        {t(hero.tagline.zh, hero.tagline.en).split(t(hero.tagWords.efficiency.zh, hero.tagWords.efficiency.en))[0]}
        <span className='bg-gradient-to-r from-accentv to-accentp text-transparent bg-clip-text tracking-tight'>{t(hero.tagWords.efficiency.zh, hero.tagWords.efficiency.en)}</span>
        {t('，', ', ')}
        <span className='text-accentc'>{t(hero.tagWords.aesthetics.zh, hero.tagWords.aesthetics.en)}</span>
        {t('与', ' and ')}
        <span className='text-accenty'>{t(hero.tagWords.functionality.zh, hero.tagWords.functionality.en)}</span>
        {t('。', '.')}
      </p>

    </main><Social /></>

  );
};

export { Hero , MagneticButton} ;
