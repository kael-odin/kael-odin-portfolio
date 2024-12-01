import { useRef, useState, useEffect } from "react";
import Social from "./Social";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, Ghost , Brain, Computer, Brush } from 'lucide-react';
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

const MagneticButton = ({ children, className }) => {
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
        border border-[#444c44] rounded-full 
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
  const mywork = [
    {
      title: "Machine Learning",
      Icon: Brain,
      color: "text-blue-500", // Using Tailwind's built-in colors
      description: "Developing and implementing machine learning models and algorithms for data analysis, pattern recognition, and predictive modeling."
    },
    {
      title: "Full Stack Development",
      Icon: Computer,
      color: "text-purple-500",
      description: "I make awesome web apps using MERN stack which are Robust and Reliable"
    },
    {
      title: "Desginer",
      Icon: Brush,
      color: "text-cyan-400",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem alias in minus deleniti commodi sequi, consequatur quam quaerat saepe quasi perspiciatis ducimus nemo doloribus nisi dolore. Officia quam placeat quae!"
    }
  ];
  
  const INITIAL_PATH = "M 0 50 Q 250 50 1280 50";
  const viewBoxWidth = 1280;
  const viewBoxHeight = 100;

  useGSAP(() => {
    // Previous GSAP logic remains the same
    const container = containerRef.current;
    if (!container) return;
    ScrollTrigger.create({
      trigger: workRef.current,
      start: 'top center',
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

  return (
    <section className="min-h-screen bg-background relative overflow-hidden">
      <Social />
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-4 sm:py-8 md:py-16">
        <div className="flex flex-col gap-4 sm:gap-8 md:flex-row md:items-start md:justify-between">
          <div className="w-full md:max-w-3xl">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-light text-primarytext leading-relaxed">
              Empowering success in the digital landscape. Together, we shape a visionary future, delivering on promises and continuously pioneering innovation.
            </h1>
          </div>
          
          <div className="w-full md:w-auto md:max-w-xs">
            <p className="text-base sm:text-lg text-primarytext md:pl-10">
              My blend of design, coding, and interaction expertise distinguishes me within the tech industry.
            </p>
          </div>
        </div>
        
        {/* Title and Ghost Icon */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end text-primarytext mt-8 sm:mt-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-bgreen leading-tight">
            Coding the Future<br />
            Architecting Innovation
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
              className="stroke-[#444c44]"
              strokeWidth="1"
              fill="transparent"
            />
          </svg>
        </div>

        <div className="container mx-auto px-4">
          <div className="flex flex-col items-start gap-8">
            <div className="w-full md:max-w-lg">
              <p className="text-base sm:text-lg md:text-xl font-light text-primarytext">
                I specialize in engineering bespoke solutions, consistently pushing the limits in each project, with an unwavering dedication to prioritizing excellence.
              </p>
            </div>
          </div>

          <div className="flex justify-end mt-7">
            <MagneticButton>
              About Me 
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5"/>
            </MagneticButton>
          </div>
        </div>
      </div>
      <main className="flex flex-col items-center justify-center w-full m-auto max-w-7xl">
        <div className='flex-grow'></div>
      <div className="w-full text-center">
        <h1 className="text-xl text-purple-500 font-semibold sm:text-2xl md:text-3xl sm:pb-10">
          WHAT I DO
        </h1>
      </div>

      <div className="flex flex-row flex-wrap w-11/12 gap-4 pt-3 opacity-0" ref={workRef}>
        {mywork.map((work, index) => (
          <div key={index} className="flex-grow w-64 min-w-64">
            <div className="h-full pt-8 pb-8 px-6 border rounded-lg bg-[#191917] border-bline hover:shadow-lg transition-all duration-300">
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