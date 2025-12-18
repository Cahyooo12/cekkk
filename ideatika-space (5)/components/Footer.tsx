import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-24 bg-dark text-white border-t border-white/5 relative z-10 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-iris/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24">
          <div className="col-span-2">
            <div className="flex items-center gap-4 mb-10">
               <div className="w-12 h-12 bg-iris rounded-2xl flex items-center justify-center font-black text-white text-[12px] shadow-xl shadow-iris/20">IS</div>
               <span className="font-extrabold tracking-tighter uppercase text-2xl">Ideatika Space</span>
            </div>
            <p className="text-gray-500 max-w-sm font-medium leading-relaxed text-lg">
              Transforming complex problems into elegant solutions through the power of visionary design and cutting-edge technology.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-[11px] uppercase tracking-[0.25em] mb-10 text-white/50">Navigation</h4>
            <ul className="space-y-4 text-gray-400 text-[14px] font-bold">
              <li><a href="#about" className="hover:text-iris transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-iris transition-colors">Our Services</a></li>
              <li><a href="#contact" className="hover:text-iris transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-iris transition-colors">Career</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-[11px] uppercase tracking-[0.25em] mb-10 text-white/50">Social Media</h4>
            <ul className="space-y-4 text-gray-400 text-[14px] font-bold">
              <li><a href="#" className="hover:text-iris transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-iris transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-iris transition-colors">Behance</a></li>
              <li><a href="#" className="hover:text-iris transition-colors">Dribbble</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 pt-16 border-t border-white/10">
          <div className="space-y-3">
            <a href="mailto:info@ideatikaspace.com" className="block text-white font-black text-lg hover:text-iris transition-colors">info@ideatikaspace.com</a>
            <a href="tel:+14158540347" className="block text-white font-black text-lg hover:text-iris transition-colors">+1 (415) 854-0347</a>
          </div>
          <div className="text-left md:text-right">
            <p className="text-[11px] text-gray-600 font-black uppercase tracking-[0.2em] leading-loose">
              © Copyright 2024 Ideatika Space. <br/> 
              Crafted with passion for the digital age.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;