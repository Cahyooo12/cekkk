import React from 'react';

const Navbar: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-[100] px-6 md:px-12 py-8">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Minimalist Logo */}
        <div className="flex items-center gap-2">
           <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
              <path d="M0 0H12V12H0V0Z" fill="white"/>
              <path d="M22 22H40V40H22V22Z" fill="white"/>
           </svg>
        </div>
        
        {/* Center Links */}
        <div className="hidden md:flex items-center space-x-8 text-[13px] font-bold text-white">
          <a href="#about" className="hover:opacity-60 transition-opacity">About</a>
          <a href="#services" className="hover:opacity-60 transition-opacity">Services</a>
          <a href="#work" className="hover:opacity-60 transition-opacity">Work</a>
        </div>

        {/* Right Action */}
        <a href="#contact" className="border border-white/40 text-white px-5 py-2 rounded-full text-[11px] font-bold tracking-tight hover:bg-white hover:text-dark transition-all flex items-center gap-2">
          Start a project <span className="text-[14px]">→</span>
        </a>
      </nav>
    </div>
  );
};

export default Navbar;