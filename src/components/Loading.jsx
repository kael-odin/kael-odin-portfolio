import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

function Loading() {
  const greetings = [
    "Hello",
    "नमस्ते",
    "Bonjour",
    "Hola",
    "こんにちは",
    "안녕하세요",
    "Ciao",
    "你好",
    "Olá",
    "Привет"
  ];

  const greetRef = useRef(null);
  const indexRef = useRef(0);
  const tlRef = useRef(null);

  useGSAP(() => {
    tlRef.current = gsap.timeline({ repeat: -1 })
      .fromTo(greetRef.current, 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      )
      .to(greetRef.current, {
        opacity: 1,
        duration: 0.3
      })
      .to(greetRef.current, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          indexRef.current = (indexRef.current + 1) % greetings.length;
          if (greetRef.current) {
            greetRef.current.textContent = greetings[indexRef.current];
          }
        }
      });

    return () => {
      if (tlRef.current) {
        tlRef.current.kill();
      }
    };
  }, []);

  return (
    <div className='h-screen w-full bg-[#0e100f] flex items-center justify-center gap-2'>
      <div className='h-3 w-3 bg-primarytext rounded-full animate-pulse'></div>
      <div 
        ref={greetRef} 
        className='text-6xl font-light text-primarytext min-w-[200px]'
      >
        {greetings[0]}
      </div>
    </div>
  );
}

export default Loading;