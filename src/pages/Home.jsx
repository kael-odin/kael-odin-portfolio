import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Hero } from '../components/Hero';
import Aboutme from '../components/Aboutme';
import Projects from '../components/projects';
import TechStack from '../components/TechStack';
import Loading from '../components/Loading';

function App() {
  const [, setIsLoading] = useState(true);
  const loadingRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Initial content setup
    if (contentRef.current) {
      gsap.set(contentRef.current, { 
        opacity: 0,
        y: 20
      });
    }

    // Simulate loading time
    const timer = setTimeout(() => {
      // Animate loading screen up and out
      gsap.to(loadingRef.current, {
        y: '-100%',
        duration: 1,
        ease: 'power4.inOut',
        onComplete: () => setIsLoading(false)
      });

      // Fade in main content
      gsap.to(contentRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5,
        ease: 'power3.out'
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loading Screen */}
      <div 
        ref={loadingRef} 
        className="fixed inset-0 z-50 bg-bline"
        style={{ transform: 'translateY(0%)' }}
      >
        <Loading />
      </div>

      {/* Main Content */}
      <div ref={contentRef}>
        <Hero />
        <Aboutme />
        <Projects />
        <TechStack />
      </div>
    </>
  );
}

export default App;