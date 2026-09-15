/* eslint-disable react/prop-types */
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, Ghost , Brain, Computer, Brush,Zap } from 'lucide-react';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { RoughNotation , RoughNotationGroup} from "react-rough-notation";
import { useNavigate } from "react-router-dom";



gsap.registerPlugin(ScrollTrigger)

export const MagneticButton = ({ children, className }) => {
  // Previous button logic remains the same
  const buttonRef = useRef(null);
  const circleRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  
  // Existing useEffect and handlers remain the same
  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleMouseMove = (e) => {
      const button = buttonRef.current.getBoundingClientRect();
      
      const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      
      const centerX = button.left + button.width / 2 + scrollX;
      const centerY = button.top + button.height / 2 + scrollY;
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
          ease: "power2.out"
        });
        !isHovering && setIsHovering(true);
      } else {
        gsap.to(buttonRef.current, {
          x: 0,
          y: 0,
          duration: 0.3,
          ease: "power3.out"
        });
        isHovering && setIsHovering(false);
      }
    };

    const handleMouseLeave = () => {
      gsap.to(buttonRef.current, {
        x: 0,
        y: 0,
        duration: 0.3,
        ease: "power3.out"
      });
      setIsHovering(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isHovering]);

  const handleMouseEnter = () => {
    gsap.fromTo(circleRef.current, 
      {
        y: 0,
        scale: 1
      },
      {
        y: -100,
        scale: 1.5,
        duration: 0.4,
        ease: "slow(0.7,0.7,false)"
      }
    );
  };
  
  const handleMouseLeave = () => {
    gsap.to(circleRef.current, {
      y: -300,
      scale: 1,
      duration: 0.4,
      ease: "power2.in",
      onComplete: () => {
        gsap.set(circleRef.current, {
          clearProps: "all"
        })
      }
    });
  };

  return (
    <div 
      ref={buttonRef} 
      className={`
        relative px-3 sm:px-4 md:px-6 py-2 sm:py-3 
        border border-bline rounded-full 
        bg-black/20 hover:bg-gray-800/20 
        transition-colors duration-300
        flex items-center font-medium gap-1 sm:gap-2 
        text-sm sm:text-base md:text-lg text-primarytext
        z-10 overflow-hidden 
        cursor-pointer
        select-none
        ${className}
      `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        ref={circleRef} 
        className="h-[200px] w-[200px] bg-[#53a3ff] blur-sm
                   absolute rounded-full top-14 left-1 -z-10
                   pointer-events-none"
      />
      {children}
    </div>
  );
};

const AboutMe = () => {
  const pathRef = useRef();
  const containerRef = useRef();
  const workRef = useRef(null)
  const navigate = useNavigate()
  const { t } = useLang();
  const iconByIndex = [Brain, Computer, Brush, Zap];
  const mywork = intro.cards.map((c, i) => ({
    title: t(c.title.zh, c.title.en),
    Icon: iconByIndex[i] ?? Zap,
    color: c.color,
    description: t(c.description.zh, c.description.en),
  }));
  
  const INITIAL_PATH = "M 0 50 Q 250 50 1280 50";
  const viewBoxWidth = 1280;
  const viewBoxHeight = 100;

  useGSAP(() => {
    // Previous GSAP logic remains the same
    const container = containerRef.current;
    if (!container) return;
    ScrollTrigger.create({
      trigger: workRef.current,
      start: 'top center +=200',
      end: 'bottom center',
      once:true,
      onEnter: () => {
        gsap.to(workRef.current, {
          opacity: 1,
          duration: 0.1,
          ease: 'none',
        });
        gsap.from(workRef.current.children, {
          y: 50,
          opacity: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: 'power2.out',
        });
      }
    });

    const updatePath = (x, y) => {
      const rect = container.getBoundingClientRect();
      const scaledX = (x / rect.width) * viewBoxWidth;
      const scaledY = (y / rect.height) * viewBoxHeight;
      const newPath = `M 0 50 Q ${scaledX} ${scaledY} ${viewBoxWidth} 50`;
      
      
      gsap.to(pathRef.current, {
        attr: { d: newPath },
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const resetPath = () => {
      gsap.to(pathRef.current, {
        attr: { d: INITIAL_PATH },
        duration: 0.5,
        ease: "elastic.out(1, 0.3)"
      });
    };

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      updatePath(e.clientX - rect.left, e.clientY - rect.top);
    };

    const handleTouchMove = (e) => {
      e.preventDefault();
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const rect = container.getBoundingClientRect();
        updatePath(touch.clientX - rect.left, touch.clientY - rect.top);
      }
    };

    const handleTouchEnd = () => {
      resetPath();
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", resetPath);
    container.addEventListener("touchmove", handleTouchMove, { passive: false });
    container.addEventListener("touchend", handleTouchEnd);
    container.addEventListener("touchcancel", handleTouchEnd);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", resetPath);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
      container.removeEventListener("touchcancel", handleTouchEnd);
    };
  }, []);

  const highRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (highRef.current) {
        const rect = highRef.current.getBoundingClientRect();
        const isVisible = (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
        setIsVisible(isVisible);
      }}

      window.addEventListener('scroll',handleScroll);
      handleScroll();
      return () => {
        window.removeEventListener('scroll', handleScroll);
      }
  })

  return (
    <section className="min-h-screen bg-background relative overflow-hidden">
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-4 sm:py-8 md:py-16">
        <div className="flex flex-col gap-4 sm:gap-8 md:flex-row md:items-start md:justify-between">
          <div className="w-full md:max-w-3xl">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-light text-primarytext leading-relaxed">
            {t(intro.blend.pre.zh, intro.blend.pre.en)}
              <RoughNotationGroup>

                <RoughNotation type="underline" color="#ffd54f" show={isVisible} padding={1} opacity={0.2} >{t(intro.blend.design.zh, intro.blend.design.en)}</RoughNotation>
                <RoughNotation type="underline" color="#ffd54f" show={isVisible} padding={0} opacity={0.2} >{t(intro.blend.code.zh, intro.blend.code.en)}</RoughNotation>
                <RoughNotation type="underline" color="#ffd54f" show={isVisible} padding={0} opacity={0.2} >{t(intro.blend.func.zh, intro.blend.func.en)}</RoughNotation>
                {t(intro.blend.and.zh, intro.blend.and.en)}
                <RoughNotation type="underline" color="#ffd54f" show={isVisible} padding={0} opacity={0.2} >{t(intro.blend.interaction.zh, intro.blend.interaction.en)}</RoughNotation>

                 {t(intro.blend.post.zh, intro.blend.post.en)}
                </RoughNotationGroup>
            </h1>
          </div>

          <div className="w-full md:w-auto md:max-w-xs" ref={highRef}>
            <p className="text-base sm:text-lg text-primarytext md:pl-10">
            {t(intro.side.zh, intro.side.en)}
            </p>
          </div>
        </div>
        
        {/* Title and Ghost Icon */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end text-primarytext mt-8 sm:mt-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-bgreen  leading-tight">
            {t(intro.big1.zh, intro.big1.en)}<br />
            {t(intro.big2.zh, intro.big2.en)}
          </h2>
          <div className="hidden sm:flex justify-center bg-white rounded-full p-2 sm:p-4 items-center sm:-translate-y-2">
            <Ghost size={32} className="sm:w-10 sm:h-10 md:w-12 md:h-12" stroke="black" />
          </div>
        </div>
      </div>

      {/* Interactive Line and Bottom Content */}
      <div className="relative w-full mt-8 sm:-translate-y-24">
        <div 
          ref={containerRef}
          className="relative mx-auto touch-none"
          style={{
            maxWidth: '1300px',
            height: '100px'
          }}
        >
          <svg 
            viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
            className="w-full h-auto"
            preserveAspectRatio="xMidYMid meet"
          >
              <path
              ref={pathRef}
              d={INITIAL_PATH}
              className="stroke-bline"
              strokeWidth="1"
              fill="transparent"
            />
          </svg>
        </div>

        <div className="container mx-auto px-4">
          <div className="flex flex-col items-start gap-8">
            <div className="w-full md:max-w-lg">
              <p className="text-base sm:text-lg md:text-xl font-light text-primarytext">
                {t(intro.para.zh, intro.para.en)}
              </p>
            </div>
          </div>

          <div className="flex justify-end mt-7" onClick={() => navigate("/aboutme")}>
            <MagneticButton>
              {t(intro.aboutCta.zh, intro.aboutCta.en)}
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5"/>
            </MagneticButton>
          </div>
        </div>
      </div>
      <main className="flex flex-col items-center justify-center w-full m-auto max-w-7xl">
        <div className='flex-grow'></div>
      <div className="w-full text-center">
        <h1 className="text-xl text-accentv font-semibold sm:text-2xl md:text-3xl sm:pb-10">
          {t(intro.whatido.zh, intro.whatido.en)}
        </h1>
      </div>

      <div className="flex flex-row flex-wrap w-11/12 gap-4 pt-3 opacity-0" ref={workRef}>
        {mywork.map((work, index) => (
          <div key={index} className="flex-grow w-64 min-w-64">
            <div className="h-full pt-8 pb-8 px-6 border rounded-lg bg-bgcard border-bline hover:shadow-lg transition-all duration-300">
              <div className={`${work.color} mb-4`}>
                <work.Icon className="w-8 h-8 mb-3" />
                <h2 className="text-lg font-semibold">
                  {work.title}
                </h2>
              </div>
              <p className="text-primarytext leading-relaxed">
                {work.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
    </section>
  );
};

export default AboutMe;