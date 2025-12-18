import React from 'react';

const activities = [
  {
    title: 'Brand Strategy Development',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200',
  },
  {
    title: 'Website Building',
    image: 'https://images.unsplash.com/photo-1522071823991-b9671f9d7f1f?auto=format&fit=crop&q=80&w=1200',
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-[#121212] text-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6 reveal-on-scroll">
          <div>
            <p className="text-iris text-[11px] font-black uppercase tracking-[0.3em] mb-4">Our Activity</p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Explore Our Team</h2>
          </div>
          <button className="group px-8 py-3 border border-white/10 rounded-full text-[11px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-dark transition-all flex items-center gap-3">
            View all projects <span className="transition-transform group-hover:translate-x-1">→</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 reveal-on-scroll">
          {activities.map((activity, idx) => (
            <div 
              key={activity.title} 
              className="group bg-white rounded-[2.5rem] p-10 h-[650px] flex flex-col overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_40px_100px_-30px_rgba(139,92,246,0.3)]"
            >
              <h3 className="text-2xl font-bold text-dark mb-8 tracking-tight group-hover:text-iris transition-colors">{activity.title}</h3>
              <div className="flex-1 rounded-[1.8rem] overflow-hidden relative">
                <img 
                  src={activity.image} 
                  className="w-full h-full object-cover transition-transform duration-[1500ms] cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-110" 
                  alt={activity.title} 
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;