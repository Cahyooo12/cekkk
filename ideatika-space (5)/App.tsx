import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';
import ConsultantChat from './components/ConsultantChat';

const testimonials = [
  {
    id: 1,
    quote: "Ideatika Space, understands our vision instantly, saving us countless hours. Their attention to detail and dedication consistently deliver results beyond our expectations.",
    name: "Evelea Ama",
    role: "Media Director at AmaOne Studio",
    avatar: "https://i.pravatar.cc/150?u=evelea"
  },
  {
    id: 2,
    quote: "The strategic approach they took for our rebranding was revolutionary. We saw a 40% increase in engagement within the first month of launching the new visual identity.",
    name: "Marcus Chen",
    role: "Creative Lead at Zen Digital",
    avatar: "https://i.pravatar.cc/150?u=marcus"
  }
];

const CornerLogo = ({ color = "currentColor" }: { color?: string }) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0H12V12H0V0Z" fill={color}/>
    <path d="M22 22H40V40H22V22Z" fill={color}/>
  </svg>
);

const PartnerLogos = () => (
  <div className="flex flex-wrap items-center justify-start gap-12 md:gap-24">
    <div className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
      <img src="https://api.iconify.design/logos:vortex.svg" className="w-8 h-8 md:w-10 md:h-10" alt="Vortex" />
      <span className="font-black text-xl tracking-tighter uppercase text-dark">VORTEX</span>
    </div>
    <div className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
      <img src="https://api.iconify.design/logos:quantum.svg" className="w-8 h-8 md:w-10 md:h-10" alt="Quantum" />
      <span className="font-black text-xl tracking-tighter uppercase text-dark">QUANTUM</span>
    </div>
    <div className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
      <div className="w-8 h-8 md:w-10 md:h-10 bg-dark rounded-full flex items-center justify-center text-white font-bold">W</div>
      <span className="font-black text-xl tracking-tighter uppercase text-dark">BUNSEN</span>
    </div>
  </div>
);

const App: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative">
      <Navbar />
      
      {/* Container to handle the scroll layering effect */}
      <div className="relative">
        {/* Hero section is fixed/sticky behind the content */}
        <div className="sticky top-0 z-0 h-screen w-full">
          <Hero />
        </div>

        {/* Content sections that slide over the Hero */}
        <div className="relative z-10 bg-white rounded-t-[3rem] shadow-[0_-50px_100px_rgba(0,0,0,0.5)] min-h-screen">
          
          {/* About Section - Matching Reference Image */}
          <section id="about" className="py-24 md:py-40 bg-white text-dark overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                
                {/* Rhombus Shapes and Branding Column */}
                <div className="lg:col-span-3 flex flex-col gap-8 reveal-on-scroll">
                  <div className="relative w-32 h-32 flex items-center justify-center">
                    {/* Rhombus Shapes Animation */}
                    <div className="absolute top-0 left-4 w-6 h-6 bg-dark rotate-45 animate-bounce [animation-duration:3s]"></div>
                    <div className="absolute top-10 left-0 w-12 h-12 bg-dark rotate-45 animate-pulse [animation-duration:4s]"></div>
                  </div>
                </div>

                {/* Main Text Content */}
                <div className="lg:col-span-9">
                  <h3 className="text-3xl md:text-[3.2rem] font-bold leading-[1.1] mb-20 text-black tracking-tight reveal-on-scroll">
                    At Ideatika Space, we simplify the complex. Our team transforms intricate concepts into compelling stories and captivating visuals, making every project a seamless blend of creativity and strategy.
                  </h3>
                  
                  {/* Partner Logos Styled like Reference */}
                  <div className="reveal-on-scroll [animation-delay:300ms]">
                    <PartnerLogos />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <Services />

          {/* Testimonial Section */}
          <section className="py-24 md:py-32 bg-white text-dark">
            <div className="container mx-auto px-6 max-w-7xl">
              <div className="flex flex-col md:flex-row gap-16 md:gap-24 reveal-on-scroll">
                <div className="md:w-1/3">
                   <h2 className="text-4xl md:text-[2.8rem] font-bold mb-4 tracking-tight">Testimonial</h2>
                   <p className="text-gray-500 text-[14px] font-medium leading-relaxed max-w-[220px]">Here’s what our subscribers had to say about our creative production</p>
                   <div className="flex gap-4 mt-10">
                     <button 
                      onClick={prevTestimonial}
                      className="w-12 h-12 rounded-full border border-dark/10 flex items-center justify-center hover:bg-dark hover:text-white transition-all active:scale-90"
                     >
                       <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                     </button>
                     <button 
                      onClick={nextTestimonial}
                      className="w-12 h-12 rounded-full border border-dark/10 flex items-center justify-center hover:bg-dark hover:text-white transition-all active:scale-90"
                     >
                       <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                     </button>
                   </div>
                </div>
                <div className="md:w-2/3 relative">
                   <div key={currentTestimonial} className="animate-reveal-up">
                     <span className="text-8xl font-serif text-iris block mb-4 leading-none opacity-30">“</span>
                     <p className="text-2xl md:text-[2rem] font-bold italic leading-tight mb-14 text-black max-w-2xl">
                       {testimonials[currentTestimonial].quote}
                     </p>
                     <div className="flex items-center gap-5">
                       <div className="w-16 h-16 rounded-full border border-gray-100 overflow-hidden bg-gray-50 p-0.5">
                          <img 
                            src={testimonials[currentTestimonial].avatar} 
                            alt={testimonials[currentTestimonial].name} 
                            className="w-full h-full object-cover grayscale rounded-full" 
                          />
                       </div>
                       <div>
                         <p className="font-bold text-xl leading-tight">{testimonials[currentTestimonial].name}</p>
                         <p className="text-gray-400 text-[12px] font-bold mt-1 uppercase tracking-[0.15em]">{testimonials[currentTestimonial].role}</p>
                       </div>
                     </div>
                   </div>
                </div>
              </div>
            </div>
          </section>

          {/* Full-Frame Immersive Banner Section */}
          <section className="relative w-full bg-[#080808] overflow-hidden min-h-[700px] flex flex-col justify-center py-32 reveal-on-scroll">
            <div className="absolute inset-0 z-0 pointer-events-none">
              <div className="absolute top-1/2 right-[-10%] -translate-y-1/2 w-[800px] h-[800px] bg-iris/25 blur-[200px] rounded-full animate-pulse-glow"></div>
              <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/15 blur-[160px] rounded-full animate-drift"></div>
              <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-iris/10 blur-[130px] rounded-full animate-drift-reverse"></div>
              
              {[...Array(15)].map((_, i) => (
                <div 
                  key={i} 
                  className="absolute w-1 h-1 bg-white/40 rounded-full animate-pulse-slow" 
                  style={{ 
                    top: `${Math.random() * 100}%`, 
                    left: `${Math.random() * 100}%`, 
                    animationDelay: `${i * 0.8}s` 
                  }}
                ></div>
              ))}
            </div>
            
            <div className="container mx-auto px-6 md:px-24 max-w-screen-2xl relative z-10 flex flex-col justify-between h-full">
              <div className="absolute top-0 right-6 md:right-24">
                <CornerLogo color="white" />
              </div>

              <div className="flex-1 flex flex-col justify-center">
                <h2 className="text-4xl md:text-[5rem] font-bold text-white leading-[1] mb-16 tracking-tight max-w-5xl drop-shadow-2xl">
                  Transforming ideas into impactful experiences through strategic design and storytelling.
                </h2>
                <div>
                  <a 
                    href="#about" 
                    className="group inline-flex items-center px-10 py-4 bg-white text-dark rounded-full text-[13px] font-black tracking-widest hover:bg-iris hover:text-white transition-all uppercase relative overflow-hidden active:scale-95"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      About Us <span className="transition-transform group-hover:translate-x-2">→</span>
                    </span>
                  </a>
                </div>
              </div>

              <div className="mt-32 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                <div className="space-y-4">
                  <p className="text-white text-[12px] font-black leading-relaxed tracking-[0.2em] uppercase opacity-70">
                    Global Design <br /> Network
                  </p>
                  <div className="flex gap-2.5">
                     <div className="w-2.5 h-2.5 rounded-full bg-iris animate-ping"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-iris/40"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-iris/10"></div>
                  </div>
                </div>
                <p className="text-white/40 text-[11px] font-bold uppercase tracking-[0.3em] max-w-[200px]">
                  CRAFTING FUTURES SINCE 2024
                </p>
              </div>
            </div>
          </section>

          {/* Bring Your Vision to Life Section */}
          <section id="contact" className="py-24 md:py-56 bg-white overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl text-center reveal-on-scroll">
              <div className="relative">
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-gray-50 opacity-[0.06] select-none whitespace-nowrap pointer-events-none uppercase tracking-tighter">CREATE</div>
                 
                 <h2 className="text-5xl md:text-[7.5rem] font-bold text-dark mb-20 tracking-tight leading-none relative z-10">Bring your vision to life?</h2>
                 <button className="px-16 py-6 bg-black text-white rounded-full font-black text-[15px] uppercase tracking-[0.2em] hover:scale-110 transition-all active:scale-95 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] relative z-10">
                   Start a project &rarr;
                 </button>
              </div>
            </div>
          </section>

          {/* Footer */}
          <Footer />
        </div>
      </div>
      <ConsultantChat />
    </div>
  );
};

export default App;