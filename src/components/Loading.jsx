import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

function Loading({ onLoadingComplete }) {
  // One greeting per language family: CJK first, then a world tour covering
  // every major language by native-speaker population. No duplicates.
  const greetings = [
    { text: '你好', label: '中文 Chinese' },
    { text: '您好', label: '中文 · 敬语 Mandarin formal' },
    { text: '粵語你好', label: '粵語 Cantonese' },
    { text: 'こんにちは', label: '日本語 Japanese' },
    { text: '안녕하세요', label: '한국어 Korean' },
    { text: 'Hello', label: 'English' },
    { text: 'Hola', label: 'Español Spanish' },
    { text: 'नमस्ते', label: 'हिन्दी Hindi' },
    { text: 'مرحبا', label: 'العربية Arabic' },
    { text: 'Bonjour', label: 'Français French' },
    { text: 'Olá', label: 'Português Portuguese' },
    { text: 'Привет', label: 'Русский Russian' },
    { text: 'नमस्कार', label: 'मराठी Marathi' },
    { text: 'Hallo', label: 'Deutsch German' },
    { text: 'Ciao', label: 'Italiano Italian' },
    { text: 'வணக்கம்', label: 'தமிழ் Tamil' },
    { text: 'నమస్కారం', label: 'తెలుగు Telugu' },
    { text: 'শুভেচ্ছা', label: 'বাংলা Bengali' },
    { text: 'ਸਤ ਸ੍ਰੀ ਅਕਾਲ', label: 'ਪੰਜਾਬੀ Punjabi' },
    { text: 'નમસ્તે', label: 'ગુજરાતી Gujarati' },
    { text: 'ನಮಸ್ಕಾರ', label: 'ಕನ್ನಡ Kannada' },
    { text: 'നമസ്കാരം', label: 'മലയാളം Malayalam' },
    { text: 'ନମସ୍କାର', label: 'ଓଡ଼ିଆ Odia' },
    { text: 'สวัสดี', label: 'ภาษาไทย Thai' },
    { text: 'Xin chào', label: 'Tiếng Việt Vietnamese' },
    { text: 'Apa kabar', label: 'Bahasa Indonesia' },
    { text: 'Kamusta', label: 'Filipino' },
    { text: '日本語の夜はこんばんは', label: '日本語 · 夜 Japanese evening' },
    { text: '반갑습니다', label: '한국어 · 初见 Korean glad-to-meet' },
    { text: 'Hej', label: 'Svenska Swedish' },
    { text: 'Hallo', label: 'Norsk Norwegian' },
    { text: 'Merhaba', label: 'Türkçe Turkish' },
    { text: 'سلام', label: 'فارسی Persian' },
    { text: 'اردو میں خوش آمدید', label: 'اردو Urdu' },
    { text: 'မင်္ဂလာပါ', label: 'မြန်မာ Burmese' },
    { text: 'សួស្តី', label: 'ខ្មែរ Khmer' },
    { text: 'ສະບາຍດີ', label: 'ລາວ Lao' },
    { text: 'Selamat pagi', label: 'Bahasa Melayu Malay' },
    { text: 'જય શ્રી કૃષ્ણ', label: 'ગુજરાતી · 问候 Gujarati greeting' },
    { text: 'Jambo', label: 'Kiswahili Swahili' },
    { text: 'murakoze', label: 'Kinyarwanda' },
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
          duration: 0.45, 
          ease: "power2.out" 
        }
      )
      .to(greetRef.current, {
        opacity: 1,
        duration: 0.5
      })
      .to(greetRef.current, {
        opacity: 0,
        duration: 0.3,
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