import { Cover } from './ui/cover';

const TechLogos = () => (
  <div className="flex items-center gap-16 px-4">
    <div className="flex flex-col items-center gap-2">
      <div className="text-4xl text-diffblue font-bold">React</div>
      <div className="h-1 w-12 bg-diffblue rounded-full"></div>
    </div>
    <div className="flex flex-col items-center gap-2">
      <div className="text-4xl text-bgreen font-bold">Next.js</div>
      <div className="h-1 w-12 bg-bgreen rounded-full"></div>
    </div>
    <div className="flex flex-col items-center gap-2">
      <div className="text-4xl text-accentv font-bold">TypeScript</div>
      <div className="h-1 w-12 bg-accentv rounded-full"></div>
    </div>
    <div className="flex flex-col items-center gap-2">
      <div className="text-4xl text-primarytext font-bold">JavaScript</div>
      <div className="h-1 w-12 bg-primarytext rounded-full"></div>
    </div>
    <div className="flex flex-col items-center gap-2">
      <div className="text-4xl text-diffblue font-bold">Tailwind</div>
      <div className="h-1 w-12 bg-diffblue rounded-full"></div>
    </div>
    <div className="flex flex-col items-center gap-2">
      <div className="text-4xl text-bgreen font-bold">Node.js</div>
      <div className="h-1 w-12 bg-bgreen rounded-full"></div>
    </div>
    <div className="flex flex-col items-center gap-2">
      <div className="text-4xl text-accentv font-bold">MongoDB</div>
      <div className="h-1 w-12 bg-accentv rounded-full"></div>
    </div>
    <div className="flex flex-col items-center gap-2">
      <div className="text-4xl text-primarytext font-bold">Firebase</div>
      <div className="h-1 w-12 bg-primarytext rounded-full"></div>
    </div>
    <div className="flex flex-col items-center gap-2">
      <div className="text-4xl text-diffblue font-bold">Git</div>
      <div className="h-1 w-12 bg-diffblue rounded-full"></div>
    </div>
  </div>
);

function TechStack() {
  return (
    <div className="overflow-hidden py-20">
      <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center relative py-6 text-primarytext">
        I Build <span className="z-40">amazing</span> Webapps <br /> at{" "}
        <Cover>Warping speed</Cover>
      </h1>
      
      {/* Marquee container */}
      <div className="relative flex overflow-x-hidden ">
        {/* First marquee */}
        <div className="animate-marquee whitespace-nowrap py-12">
          <TechLogos />
        </div>
        
        {/* Duplicated marquee for seamless loop */}
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-12">
          <TechLogos />
        </div>
      </div>
    </div>
  );
}

export default TechStack;