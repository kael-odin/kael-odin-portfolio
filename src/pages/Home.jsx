import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Hero } from '../components/Hero';
import Aboutme from '../components/Aboutme';
import Projects from '../components/projects';
import TechStack from '../components/TechStack';
import Loading from '../components/Loading';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const loadingRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial content setup
      gsap.set(contentRef.current, { 
        opacity: 0,
        y: 20
      });

      // Simulate loading time and animate
      const timer = setTimeout(() => {
        const tl = gsap.timeline({
          onComplete: () => {
            setIsLoading(false); // Update loading state
          }
        });

        tl.to(loadingRef.current, {
          y: '-100%',
          duration: 1,
          ease: 'power4.inOut'
        })
        .to(contentRef.current, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out'
        }, "-=0.3"); // Slightly overlap animations

      }, 3000);

      return () => clearTimeout(timer);
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Loading Screen */}
      {isLoading && (
        <div 
          ref={loadingRef} 
          className="fixed inset-0 z-50 bg-bline"
          style={{ transform: 'translateY(0%)' }}
        >
          <Loading />
        </div>
      )}

      {/* Main Content */}
      <main ref={contentRef} className="opacity-0">
        <Hero />
        <Aboutme />
        <Projects />
        <TechStack />
      </main>
    </>
  );
}

export default App;