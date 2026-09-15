import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

function Loading({ onLoadingComplete }) {
  const greetings = [
    { text: '你好', label: '中文 Chinese' },
    { text: '您好', label: '中文 · 敬语' },
    { text: 'こんにちは', label: '日本語 Japanese' },
    { text: 'こんばんは', label: '日本語 · 夜' },
    { text: '안녕하세요', label: '한국어 Korean' },
    { text: '반갑습니다', label: '한국어 · 初见' },
    { text: 'Hello', label: 'English' },
    { text: 'Bonjour', label: 'Français French' },
    { text: 'Hola', label: 'Español Spanish' },
    { text: 'Ciao', label: 'Italiano Italian' },
    { text: 'Olá', label: 'Português Portuguese' },
    { text: 'Hallo', label: 'Deutsch German' },
    { text: 'नमस्ते', label: 'हिन्दी Hindi' },
    { text: 'สวัสดี', label: 'ภาษาไทย Thai' },
    { text: 'Xin chào', label: 'Tiếng Việt Vietnamese' },
    { text: 'Apa kabar', label: 'Bahasa Indonesia' },
    { text: 'Kamusta', label: 'Filipino' },
    { text: 'مرحبا', label: 'العربية Arabic' },
    { text: 'Привет', label: 'Русский Russian' },
    { text: 'Hej', label: 'Svenska Swedish' },
    { text: 'Hallå', label: 'Norsk Norwegian' },
    { text: 'Guten tag', label: 'Deutsch · 你好呀' },
  ];

  const containerRef = useRef(null);
  const greetRef = useRef(null);
  const indexRef = useRef(0);
  const tlRef = useRef(null);

  useGSAP(() => {
    if (!greetRef.current) return;

    tlRef.current = gsap.timeline({ repeat: -1 })
      .fromTo(greetRef.current, 
        { 
          opacity: 0, 
          y: 20,
          immediateRender: true 
        },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.9, 
          ease: "power2.out" 
        }
      )
      .to(greetRef.current, {
        opacity: 1,
        duration: 1.1
      })
      .to(greetRef.current, {
        opacity: 0,
        duration: 0.6,
        onComplete: () => {
          indexRef.current = (indexRef.current + 1) % greetings.length;
          if (greetRef.current) {
            greetRef.current.querySelector("[data-greet]").textContent = greetings[indexRef.current].text; const lab = greetRef.current.querySelector("[data-lang]"); if (lab) lab.textContent = greetings[indexRef.current].label;
          }
        }
      });

    return () => tlRef.current?.kill();
  }, []);

  return (
    <div ref={containerRef} className="h-screen w-full bg-[#0e100f] flex items-center justify-center gap-2">
      <div className="h-3 w-3 bg-primarytext rounded-full animate-pulse" />
      <div ref={greetRef} className="flex flex-col items-center gap-3">
        <div data-lang className="text-xs tracking-[0.3em] uppercase text-sectext">{greetings[0].label}</div>
        <div data-greet className="text-6xl sm:text-7xl font-light text-primarytext min-w-[200px] text-center">{greetings[0].text}</div>
      </div>
    </div>
  );
}

export default Loading;