import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Parallax calculations
  const textY = scrollY * 0.3;
  const opacity = Math.max(0, 1 - scrollY / 800);
  const glowOpacity = Math.max(0.2, 1 - scrollY / 600);

  return (
    <section className="relative h-full w-full flex items-center justify-center overflow-hidden bg-obsidian">
      {/* Grid Background Overlay */}
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none"></div>

      {/* Atmospheric Purple Glow at Bottom */}
      <div 
        className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[140%] h-[80%] bg-iris/30 blur-[180px] rounded-[100%] pointer-events-none transition-opacity duration-300"
        style={{ opacity: glowOpacity }}
      ></div>
      
      <div 
        className="container mx-auto px-6 relative z-10 text-center"
        style={{ 
          transform: `translateY(${textY}px)`,
          opacity: opacity
        }}
      >
        {/* Main Headline */}
        <h1 className="text-5xl md:text-[7.5rem] font-bold tracking-tight mb-8 leading-[1] animate-reveal-up text-white drop-shadow-sm">
          Where Creativity <br />
          Drives Innovation.
        </h1>
        
        {/* Sub-headline */}
        <p className="text-white/60 text-[16px] md:text-[20px] mb-12 font-medium max-w-2xl mx-auto animate-reveal-up [animation-delay:200ms] tracking-tight">
          Bridging design and technology to shape the future.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-row justify-center items-center gap-5 animate-reveal-up [animation-delay:400ms]">
          <a 
            href="#work" 
            className="px-10 py-4 bg-white text-dark rounded-full font-black text-[14px] hover:scale-105 transition-all active:scale-95 shadow-[0_20px_50px_rgba(255,255,255,0.1)] flex items-center justify-center uppercase tracking-widest"
          >
            Our Work
          </a>
          <a 
            href="#contact" 
            className="px-10 py-4 border border-white/20 text-white rounded-full font-black text-[14px] hover:bg-white/5 transition-all active:scale-95 flex items-center justify-center gap-3 uppercase tracking-widest"
          >
            Start a project <span>→</span>
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce opacity-40">
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;