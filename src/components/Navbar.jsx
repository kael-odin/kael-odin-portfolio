import { House, Briefcase, IdCard, User, Menu, X } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import { useRef, useState } from 'react';
import gsap from "gsap";
import { useNavigate } from 'react-router-dom';

const NavItems = ({ children, className = '', onClick }) => (
  <div onClick={onClick} className={`flex items-center h-6 gap-1 px-3 py-4 border border-[#444c44] rounded-full hover:bg-gray-800/20 cursor-pointer transition-colors ${className}`}>
    {children}
  </div>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef();
  const menuRef = useRef();
  const navigate = useNavigate();
  
  useGSAP(() => {
    gsap.from(navRef.current, {
      y: -50,
      duration: 1,
      ease: "power2.out"
    });
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
    
    if (!isMenuOpen) {
      gsap.fromTo(menuRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
      );
    } else {
      gsap.to(menuRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.3,
        ease: "power2.in"
      });
    }
  };

  const navLinks = [
    { icon: <House size={16} />, text: 'Home', path: '/' },
    { icon: <Briefcase size={16} />, text: 'Projects', path: '/projects' },
    { icon: <IdCard size={16} />, text: 'About', path: '/aboutme' },
    { icon: <User size={16} />, text: 'Contact', path: '/contactme' }
  ];

  const handleNavigation = (path, e) => {
    e.preventDefault();
    navigate(path);
    if (isMenuOpen) setIsMenuOpen(false);
  };

  return (
    <div className="relative">
      <nav ref={navRef} className="px-1 py-3 flex justify-between border-[#444c44] items-center gap-2 border-b mx-1">
        <NavItems onClick={() => navigate("/")}>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-3xl bg-white sm:w-4 sm:h-4"></div>
            <span className="text-sm hover:text-violet-500 transition-colors">Aditya Raj Panjiyara</span>
          </div>
        </NavItems>

        {/* Desktop Menu */}
        <NavItems className="hidden sm:flex gap-2">
          {navLinks.slice(0, 3).map(({ icon, text, path }) => (
            <a 
              key={text} 
              href={path}
              onClick={(e) => handleNavigation(path, e)}
              className="flex items-center gap-1 text-sm transition-all hover:text-violet-500"
            >
              {icon} {text}
            </a>
          ))}
        </NavItems>
        
        <NavItems className="hidden sm:flex">
          <a 
            href="/contactme"
            onClick={(e) => handleNavigation('/contactme', e)}
            className="flex items-center gap-1 text-sm transition-all hover:text-violet-500"
          >
            <User size={16} /> Contact
          </a>
        </NavItems>

        {/* Mobile Menu Button */}
        <NavItems className="sm:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="flex items-center gap-1 text-sm transition-all hover:text-violet-500"
          >
            {isMenuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </NavItems>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="absolute top-full left-0 right-0 bg-black/95 border border-[#444c44] rounded-lg mt-2 mx-1 p-4 sm:hidden z-50"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map(({ icon, text, path }) => (
              <a
                key={text}
                href={path}
                onClick={(e) => handleNavigation(path, e)}
                className="flex items-center gap-2 text-sm transition-all hover:text-violet-500 p-2"
              >
                {icon} {text}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;