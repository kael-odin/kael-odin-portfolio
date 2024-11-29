import { useRef, useState, useEffect } from "react";
import Social from "./Social";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const MagneticButton = ({ children, className }) => {
  const buttonRef = useRef(null);
  const circleRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  
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
        opacity: 0,
        scale: 1
      },
      {
        y: -100,
        opacity: 1,
        scale: 1.5,
        duration: 0.4,
        ease: "power2.out"
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
        border border-[#444c44] rounded-full 
        bg-black/20 hover:bg-gray-800/20 
        transition-colors duration-300
        flex items-center font-medium gap-1 sm:gap-2 
        text-base sm:text-lg text-primarytext
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
  
  const INITIAL_PATH = "M 0 50 Q 250 50 1280 50";
  const viewBoxWidth = 1280;
  const viewBoxHeight = 100;

  useGSAP(() => {
    const container = containerRef.current;
    if (!container) return;

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

  return (
    <section className="min-h-screen bg-background relative">
      <Social />
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="flex flex-col gap-8 md:flex-row sm:items-end md:items-start md:justify-between">
          <div className="max-w-3xl">
            <h1 className="text-xl font-light text-primarytext sm:text-2xl md:text-3xl lg:text-4xl">
              Empowering success in the digital landscape. Together, we shape a visionary future, delivering on promises and continuously pioneering innovation.
            </h1>
          </div>
          
          <div className="md:max-w-xs">
            <p className="max-w-xs text-lg text-primarytext sm:pl-10">
              My blend of design, coding, and interaction expertise distinguishes me within the tech industry.
            </p>
          </div>
        </div>
        
        <div className="text-primarytext sm:text-2xl">
          <h2 className="pb-0 mt-8 text-2xl font-semibold text-bgreen sm:text-3xl md:text-4xl sm:pt-3">
            Coding the Future<br />
            Architecting Innovation
          </h2>
        </div>
      </div>

      <div className="relative w-full">
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
              className="stroke-primarytext"
              strokeWidth="1"
              fill="transparent"
            />
          </svg>
        </div>

        <div className="container mx-auto px-4 mt-16 sm:mt-24">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-lg">
              <p className="text-lg font-light text-primarytext sm:text-2xl">
              I specialize in engineering bespoke solutions, consistently pushing the limits in each project, with an unwavering dedication to prioritizing excellence.
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="flex-grow"></div>
            <MagneticButton className={"items-end"}>
              About Me
              
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;