import { Github, Linkedin, Dribbble, X as Discord } from 'lucide-react';

const Footer = () => {
  return (
    <main className='px-3 relative'>
      <footer className="border border-white/20 rounded-lg text-white p-4 md:p-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-lg md:text-xl font-semibold">
              Where <span className="text-cyan-400">aesthetics</span> &<br />
              <span className="text-cyan-400">functionality</span> meet
            </h2>
          </div>

          {/* Navigation Section */}
          <div className="space-y-4">
            <div className="mb-8">
              <h3 className="text-orange-500 font-semibold mb-4">Explore</h3>
              <nav className="space-y-2">
                <p className="hover:text-gray-300 cursor-pointer transition-colors"
                onClick={() => {
                  window.location.href = '/'
                }}
                >Home</p>
                <p className="hover:text-gray-300 cursor-pointer transition-colors"
                onClick={() => {
                  window.location.href = '/aboutme'
                }}
                >About Me</p>
                <p className="hover:text-gray-300 cursor-pointer transition-colors" onClick={() => {
                  window.location.href = '/contactme'
                }}>Contact</p>
              </nav>
            </div>
          </div>

          {/* Social & Contact Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex flex-col sm:flex-row lg:flex-col gap-8">
              <div>
                <h3 className="text-cyan-400 font-semibold mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  <Linkedin className="w-5 h-5 md:w-6 md:h-6 hover:text-cyan-400 cursor-pointer transition-colors" />
                  <div className="w-5 h-5 md:w-6 md:h-6 text-[#0057ff] hover:text-cyan-400 cursor-pointer transition-colors">Be</div>
                  <Dribbble className="w-5 h-5 md:w-6 md:h-6 hover:text-cyan-400 cursor-pointer transition-colors" />
                  <Discord className="w-5 h-5 md:w-6 md:h-6 hover:text-cyan-400 cursor-pointer transition-colors" />
                  <Github className="w-5 h-5 md:w-6 md:h-6 hover:text-cyan-400 cursor-pointer transition-colors" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="group cursor-pointer">
                  <h3 className="text-lg md:text-xl font-semibold">Contact Me</h3>
                  <p className="text-sm text-gray-400 group-hover:text-white transition-colors">Say Hello!</p>
                </div>
                
                <div className="group cursor-pointer">
                  <h3 className="text-lg md:text-xl font-semibold">My Projects</h3>
                  <p className="text-sm text-gray-400 group-hover:text-white transition-colors">Explore Projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      
        {/* Large text overlay */}
        <div className="absolute bottom-0 right-0 w-full overflow-visible pointer-events-none">
          <h1 className="text-[80px] sm:text-[120px] md:text-[160px] lg:text-[200px] xl:text-[240px] text-white/5 text-right font-bold whitespace-nowrap -mb-10 md:-mb-20">
            awsm adi
          </h1>
        </div>
      </footer>

      {/* Credits section */}
      <div className='flex flex-col sm:flex-row justify-between items-center font-semibold text-base md:text-lg py-4 md:py-6 px-2 md:px-4 text-white/80 gap-2 md:gap-4'>
        <p className="flex items-center gap-2 text-center sm:text-left">
          Made with <span className="text-red-500 animate-pulse">❤️</span> by Aditya Raj Panjiyara
        </p>
        <p className="text-white/60">Raipur, India</p>
      </div>
    </main>
  );
};

export default Footer;