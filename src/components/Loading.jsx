import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

function Loading({ onLoadingComplete }) {
  // One greeting per language: CJK first, then a world tour covering every
  // major language by native-speaker population. No duplicate texts.
  const greetings = [
    { text: '你好', label: '中文' },
    { text: 'こんにちは', label: '日本語' },
    { text: '안녕하세요', label: '한국어' },
    { text: 'Hello', label: 'English' },
    { text: 'Hola', label: 'Español' },
    { text: 'Bonjour', label: 'Français' },
    { text: 'नमस्ते', label: 'हिन्दी' },
    { text: 'مرحبا', label: 'العربية' },
    { text: 'Olá', label: 'Português' },
    { text: 'Привет', label: 'Русский' },
    { text: 'Hallo', label: 'Deutsch' },
    { text: 'Ciao', label: 'Italiano' },
    { text: 'سلام', label: 'فارسی' },
    { text: 'வணக்கம்', label: 'தமிழ்' },
    { text: 'শুভেচ্ছা', label: 'বাংলা' },
    { text: 'నమస్కారం', label: 'తెలుగు' },
    { text: 'ನಮಸ್ಕಾರ', label: 'ಕನ್ನಡ' },
    { text: 'നമസ്കാരം', label: 'മലയാളം' },
    { text: 'สวัสดี', label: 'ไทย' },
    { text: 'Xin chào', label: 'Tiếng Việt' },
    { text: 'Halo', label: 'Indonesia' },
    { text: 'Kamusta', label: 'Filipino' },
    { text: 'Merhaba', label: 'Türkçe' },
    { text: 'Hej', label: 'Svenska' },
    { text: 'Hei', label: 'Norsk' },
    { text: 'Halló', label: 'Íslenska' },
    { text: 'Witaj', label: 'Polski' },
    { text: 'Ahoj', label: 'Čeština' },
    { text: 'Szia', label: 'Magyar' },
    { text: 'Salut', label: 'Română' },
    { text: 'Здравей', label: 'Български' },
    { text: 'Привіт', label: 'Українська' },
    { text: 'Γεια σου', label: 'Ελληνικά' },
    { text: 'Shalom', label: 'עברית' },
    { text: 'Salam', label: 'Azərbaycan' },
    { text: 'Sawubona', label: 'isiZulu' },
    { text: 'Jambo', label: 'Kiswahili' },
    { text: 'ሰላም', label: 'አማርኛ' },
    { text: 'ਸਤ ਸ੍ਰੀ ਅਕਾਲ', label: 'ਪੰਜਾਬੀ' },
    { text: 'નમસ્તે', label: 'ગુજરાતી' },
    { text: 'ନମସ୍କାର', label: 'ଓଡ଼ିଆ' },
    { text: 'نمیں آداب', label: 'اردو' },
    { text: 'नमस्कार', label: 'नेपाली' },
    { text: 'မင်္ဂလာပါ', label: 'မြန်မာ' },
    { text: 'សួស្តី', label: 'ខ្មែរ' },
    { text: 'ສະບາຍດີ', label: 'ລາວ' },
    { text: 'Kia ora', label: 'Te Reo Māori' },
    { text: 'Aloha', label: 'ʻŌlelo Hawaiʻi' },
    { text: 'Bula', label: 'Vakaviti' },
    { text: 'Talofa', label: 'Sāmoa' },
    { text: 'Yáʼátʼééh', label: 'Diné' },
    { text: 'Sannu', label: 'Hausa' },
    { text: 'Ndëwó', label: 'Yorùbá' },
    { text: 'Nno', label: 'Ìgbò' },
    { text: 'Moni', label: 'Chichewa' },
    { text: 'Dumela', label: 'Setswana' },
    { text: 'Salama', label: 'Malagasy' },
    { text: 'Molweni', label: 'isiXhosa' },
    { text: 'Mhoro', label: 'Shona' },
    { text: 'Muraho', label: 'Kinyarwanda' },
    { text: 'Saluton', label: 'Esperanto' },
    { text: 'Hyvää päivää', label: 'Suomi' },
    { text: 'Tere', label: 'Eesti' },
    { text: 'Sveiki', label: 'Latviešu' },
    { text: 'Labas', label: 'Lietuvių' },
    { text: 'Živjo', label: 'Slovenščina' },
    { text: 'Përshëndetje', label: 'Shqip' },
    { text: 'Բարև', label: 'Հայերեն' },
    { text: 'გამარჯობა', label: 'ქართული' },
    { text: '你好呀', label: '粵語' },
    { text: 'آداب', label: 'اردو · ادب' },
    { text: 'Đżesi', label: 'Kashubian' },
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
          duration: 0.28, 
          ease: "power2.out" 
        }
      )
      .to(greetRef.current, {
        opacity: 1,
        duration: 0.34
      })
      .to(greetRef.current, {
        opacity: 0,
        duration: 0.2,
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