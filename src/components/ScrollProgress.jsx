import { useEffect } from 'react';

// Binil-style 3px top scroll progress bar: accentv -> accentc -> accenty.
function ScrollProgress() {
  useEffect(() => {
    const bar = document.getElementById('binil-scroll-progress');
    if (!bar) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const ratio = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      bar.style.transform = `scaleX(${ratio})`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-accentv via-accentc to-accenty"
      id="binil-scroll-progress"
      style={{ transform: 'scaleX(0)' }}
    />
  );
}

export default ScrollProgress;
