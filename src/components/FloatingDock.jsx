import React, { useRef, useState } from 'react';
import { IconBrandDiscord, IconBrandLinkedin, IconBrandGithub,IconLetterX,IconBrandInstagram  } from '@tabler/icons-react';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion';

const FloatingDock = () => {
  const mouseX = useMotionValue(Infinity);

  const icons = [
    { Icon: IconLetterX , href: "https://x.com/Truterrrrr", title: "Twitter" },
    { Icon: IconBrandGithub, href: "https://github.com/dryruffian", title: "Github" },
    { Icon: IconBrandLinkedin, href: "https://www.linkedin.com/in/aditya-raj-panjiyara-1801b7249/", title: "LinkedIn" },
    { Icon: IconBrandInstagram , href: "https://www.instagram.com/aditya.hu.mein/", title: "Instagram" },
  ];

  return (
    <motion.div 
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="mx-auto flex h-16 items-end gap-4 rounded-full bg-primarytext dark:bg-neutral-900 border border-bline px-1 pb-2"
    >
      {icons.map((item) => (
        <DockItem 
          key={item.title} 
          mouseX={mouseX} 
          {...item} 
        />
      ))}
    </motion.div>
  );
};

const DockItem = ({ mouseX, Icon, href, title }) => {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  // Create transforms for both the container and the icon
  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const iconSizeTransform = useTransform(distance, [-100, 0, 100], [20, 40, 20]);

  // Apply spring physics
  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12
  });
  
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12
  });

  const iconSize = useSpring(iconSizeTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12
  });

  return (
    <motion.a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        ref={ref}
        style={{ width, height }}
        className="aspect-square rounded-full bg-primarytext  flex items-center justify-center relative"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="absolute left-1/2 -top-8 px-3 py-1 rounded-md bg-bline  text-xs whitespace-nowrap"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        
        <motion.div
          style={{ 
            width: iconSize, 
            height: iconSize 
          }}
          className="flex items-center justify-center"
        >
          <Icon className="w-full h-full text-black " />
        </motion.div>
      </motion.div>
    </motion.a>
  );
};

export default FloatingDock;