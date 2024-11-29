
import { House, Briefcase, IdCard, User } from 'lucide-react';
import PropTypes from 'prop-types';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import gsap from "gsap";

const NavItems = ({ children, className = '' }) => (
  <div className={`flex items-center h-6 gap-1 px-3 py-4 border border-[#444c44] rounded-full hover:bg-gray-800/20 ${className}`}>
    {children}
  </div>
);


const Navbar = () => {

    const NavRef = useRef();
    
    useGSAP(() => {
        gsap.from(NavRef.current,{
            y: -50,
            duration:1
        })
    })
    return(
  <nav ref={NavRef} className="px-1 py-3 flex justify-between border-[#444c44] items-center gap-2 border-b mx-1">
    <NavItems>
      <div className="flex items-center gap-1">
        <div className='w-3 h-3 rounded-3xl bg-white sm:w-4 sm:h-4'></div>
        <a href="#" className="text-sm hover:text-violet-500 transition-colors">Aditya Raj Panjiyara</a>
      </div>
    </NavItems>

    <NavItems className="gap-2">
      {[
        { icon: <House size={16} />, text: 'Home' },
        { icon: <Briefcase size={16} />, text: 'Projects' },
        { icon: <IdCard size={16} />, text: 'About' }
      ].map(({ icon, text }) => (
        <a key={text} href="#" className="flex items-center gap-1 text-sm transition-all hover:text-violet-500">
          {icon} {text}
        </a>
      ))}
    </NavItems>
    
    <NavItems>
      <a href="#" className="flex items-center gap-1 text-sm transition-all hover:text-violet-500">
        <User size={16} /> Contact
      </a>
    </NavItems>
  </nav>
)};

export default Navbar;