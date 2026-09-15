import { useRef, useEffect } from 'react';
import { Mail } from 'lucide-react';
import gsap from 'gsap';
import FloatingDock from './FloatingDock';
import { useLang } from '../i18n/LanguageContext.jsx';
import { social } from '../i18n/content.js';

const Soc = () => {
  const { t } = useLang();
  const iconsRef = useRef([]);
  const dotsRef = useRef([]);
  const containerRef = useRef(null);
  const animationsRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e) => {
      animationsRef.current.forEach(anim => anim?.kill());
      animationsRef.current = [];

      iconsRef.current.forEach((icon, index) => {
        if (!icon) return;
        const bounds = icon.getBoundingClientRect();
        const centerX = bounds.left + bounds.width / 2;
        const centerY = bounds.top + bounds.height / 2;
        const deltaX = e.clientX - centerX;
        const deltaY = e.clientY - centerY;

        const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
        const maxDistance = 150;
        const distanceRatio = Math.min(distance / maxDistance, 1);
        const scale = Math.max(1, 1.5 - distanceRatio);
        const yOffset = -(1 - distanceRatio) * 9;
        const opacity = Math.max(0, 0.3 - distanceRatio);

        animationsRef.current.push(
          gsap.to(icon, {
            duration: 0.3,
            y: yOffset,
            ease: "power2.out"
          }),
          gsap.to(dotsRef.current[index], {
            duration: 0.3,
            scale: scale + 0.2,
            y: yOffset,
            opacity: opacity,
            ease: "power2.out"
          })
        );
      });

      animationsRef.current.push(
        gsap.to(container, {
          duration: 0.3,
          width: 'auto',
          minWidth: 'fit-content',
          ease: "power2.out"
        })
      );
    };

    const handleMouseLeave = () => {
      animationsRef.current.forEach(anim => anim?.kill());
      animationsRef.current = [];

      iconsRef.current.forEach((icon, index) => {
        if (!icon) return;
        animationsRef.current.push(
          gsap.to(icon, {
            duration: 0.3,
            scale: 1,
            y: 0,
            ease: "power2.out"
          }),
          gsap.to(dotsRef.current[index], {
            duration: 0.3,
            opacity: 0,
            ease: "power2.out"
          })
        );
      });

      gsap.to(container, {
        duration: 0.3,
        width: '',
        minWidth: '',
        ease: "power2.out"
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      animationsRef.current.forEach(anim => anim?.kill());
    };
  }, []);

  return (
    <div className="flex justify-between px-2 border-t py-2 border-bline text-primarytext">
      <div>
        <p className="whitespace-pre-line">{t(social.tagline.zh, social.tagline.en)}</p>
      </div>
      <div className='z-50 hidden sm:block'>

      <FloatingDock/>
      </div>

      <div>
      <div
        className="inline-flex items-center justify-center h-12 gap-2 px-1 py-5 border border-bline rounded-full hover:bg-gray-800/20"
      >
        <a href={`mailto:${social.email}`} className='bg-primarytext p-1 rounded-full'>
          <Mail stroke='black'/>
        </a>
        <p>{social.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Soc;
