import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Loading from './Loading';

// Full-screen opening splash: multilingual greetings first, then curtain lift.
function SplashGate({ children, minTime = 6000 }) {
  const [show, setShow] = useState(true);
  const loadingRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.set(contentRef.current, { opacity: 0, y: 20 });
    const timer = setTimeout(() => {
      const tl = gsap.timeline({ onComplete: () => setShow(false) });
      tl.to(loadingRef.current, { y: '-100%', duration: 1, ease: 'power4.inOut' }).to(
        contentRef.current,
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
        '-=0.3'
      );
    }, minTime);
    return () => clearTimeout(timer);
  }, [minTime]);

  return (
    <>
      {show && (
        <div ref={loadingRef} className="fixed inset-0 z-[70] bg-background" style={{ transform: 'translateY(0%)' }}>
          <Loading />
        </div>
      )}
      <div ref={contentRef} style={{ opacity: 0 }}>
        {children}
      </div>
    </>
  );
}

export default SplashGate;
