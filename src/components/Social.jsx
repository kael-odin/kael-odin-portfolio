import { useRef, useEffect } from 'react';
import { X, Github, Linkedin, Dribbble, BadgeCent, Mail } from 'lucide-react';
import gsap from 'gsap';

const Soc = () => {
  const iconsRef = useRef([]);
  const dotsRef = useRef([]);
  const containerRef = useRef(null);
  const animationsRef = useRef([]);

  const socialIcons = [
    { Icon: X, href: "#" },
    { Icon: Github, href: "#" },
    { Icon: Linkedin, href: "#" },
    { Icon: Dribbble, href: "#" },
    { Icon: BadgeCent, href: "#" }
  ];

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
    <div className="flex justify-between px-2 border-t py-2 border-[#444c44]">
      <div>
        <p>// Design, Code,<br />Engage</p>
      </div>
      <div 
        ref={containerRef} 
        className="inline-flex items-center justify-center h-12 gap-2 px-1 py-5 border border-gray-600 rounded-full hover:bg-gray-800/20"
      >
        {socialIcons.map(({ Icon, href }, index) => (
          <div key={index} className="relative">
            <a
              href={href}
              ref={el => iconsRef.current[index] = el}
              className="block w-11 h-11"
            >
              <Icon className="w-full h-full p-2 rounded-full bg-white text-black" />
            </a>
            <div
              ref={el => dotsRef.current[index] = el}
              className="absolute inset-0 bg-[#ffffe4] rounded-full opacity-0"
            />
          </div>
        ))}
      </div>
      <div>
      <div 
        className="inline-flex items-center justify-center h-12 gap-2 px-1 py-5 border border-gray-600 rounded-full hover:bg-gray-800/20"
      >
        <a href="mailto:araj0259@gmail.com" className='bg-[#ffffe4] p-1 rounded-full'>
          <Mail stroke='black'/>
        </a>
        <p>araj0259@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Soc;