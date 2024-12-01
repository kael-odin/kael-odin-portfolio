import React from 'react';
import { Github, Linkedin, Dribbble, X as Discord } from 'lucide-react';

const Footer = () => {
  return (
    <main className='px-3'>

    <footer className="border-bline border rounded-lg text-white p-8 h-">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">
            Where <span className="text-cyan-400">aesthetics</span> &<br />
            <span className="text-cyan-400">functionality</span> meet
          </h2>
        </div>

        {/* Navigation Section */}
        <div className="space-y-4">
          <div className="mb-8">
            <h3 className="text-orange-500 font-semibold mb-4">Explore</h3>
            <nav className="space-y-2">
              <p className="hover:text-gray-300 cursor-pointer">Home</p>
              <p className="hover:text-gray-300 cursor-pointer">About Me</p>
              <p className="hover:text-gray-300 cursor-pointer">Contact</p>
            </nav>
          </div>
        </div>

        {/* Social & Contact Section */}
        <div className="space-y-8 flex justify-between">
          <div>
            <h3 className="text-cyan-400 font-semibold mb-4">Follow Me</h3>
            <div className="flex space-x-4">
              <Linkedin className="w-6 h-6 hover:text-cyan-400 cursor-pointer" />
              <div className="w-6 h-6 text-[#0057ff] hover:text-cyan-400 cursor-pointer">Be</div>
              <Dribbble className="w-6 h-6 hover:text-cyan-400 cursor-pointer" />
              <Discord className="w-6 h-6 hover:text-cyan-400 cursor-pointer" />
              <Github className="w-6 h-6 hover:text-cyan-400 cursor-pointer" />
            </div>
          </div>

          <div className="space-y-4">
            <div className="group cursor-pointer">
              <h3 className="text-xl font-semibold">Contact Me</h3>
              <p className="text-sm text-gray-400 group-hover:text-white">Say Hello!</p>
            </div>
            
            <div className="group cursor-pointer">
              <h3 className="text-xl font-semibold">My Projects</h3>
              <p className="text-sm text-gray-400 group-hover:text-white">Explore Projects</p>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full'>
        <h1 className='text-[200px]'>awsm aditya</h1>
      </div>
    </footer>
    </main>
  );
};

export default Footer;