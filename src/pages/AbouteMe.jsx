import React from 'react';
import { MagneticButton } from '../components/Aboutme';

const AboutMe = () => {
  const services = [
    {
      number: '01',
      title: 'Design',
      description: 'With a proven track record in designing websites, I deliver robust and user-friendly digital designs that are seamlessly integrated with development. My expertise ensures that each project not only looks great but also performs flawlessly, providing an exceptional user experience from start to finish.'
    },
    {
      number: '02',
      title: 'Development',
      description: 'I build scalable websites from scratch that fit seamlessly with design. My focus is on micro animations, transitions, and interaction. I use Next.js and React.js for development and incorporate GSAP and Framer Motion for animations'
    },
    {
      number: '03',
      title: 'The full package',
      description: 'What sets me apart is my ability to deliver complete full-stack applications from concept to implementation. My keen eye for design, along with my expertise in frontend and backend development, including database integration, allows me to create exceptional projects'
    }
  ];

  return (
    <div className="min-h-screen bg-[#111111] text-[#e4e4e4] px-4 sm:px-8 py-12 sm:py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start mb-16 relative">
          <div className="w-full max-w-4xl border-b border-bline pb-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-primarytext">
                Hello! I&apos;m Aditya Raj
              </h1>
              <span className="text-4xl sm:text-5xl animate-wave">👋</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-primarytext mb-8">
              Crafting Digital Excellence
            </h2>
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
              <p className="text-base sm:text-lg text-[#888888] lg:max-w-2xl">
                As a Software Engineer, I excel in building scalable applications, enhancing user experiences, and streamlining development processes.
              </p>
              <p className="text-sm text-[#888888] lg:max-w-[250px] lg:border-l lg:border-bline lg:pl-8">
                My proficiency in design, coding, and interaction sets me apart within the domain of software engineering.
              </p>
            </div>
          </div>
          <div className="w-16 h-16 rounded-full bg-primarytext items-center justify-center hidden lg:flex absolute top-0 right-0">
            <span className="text-2xl text-black">A</span>
          </div>
        </div>

        {/* Services Section */}
        <div className="mt-16 sm:mt-24">
          <h3 className="text-xl text-purple-500 mb-12">I can help you with</h3>
          <div className="space-y-12 sm:space-y-16">
            {services.map((service) => (
              <div key={service.number} className="border-t border-[#333333] pt-8">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                  <span className="text-[#444444] text-sm">{service.number}</span>
                  <div className="flex-1">
                    <h4 className="text-xl sm:text-2xl text-[#e4e4e4] mb-4">{service.title}</h4>
                    <p className="text-[#888888] max-w-3xl text-base sm:text-lg">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Button */}
        <div className="mt-16 sm:mt-24 flex justify-center sm:justify-end">
          <a href="/contactme" className="no-underline">
            <MagneticButton>
              <div className="flex items-center gap-2">
                Contact Me
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  className="transform rotate-[-45deg]"
                >
                  <path 
                    d="M5 12H19M19 12L12 5M19 12L12 19" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </MagneticButton>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;