
import React from 'react';
import { PortfolioItem } from '../types';

const items: PortfolioItem[] = [
  { id: 1, title: 'Lunar App', category: 'Mobile UI', imageUrl: 'https://picsum.photos/seed/p1/800/800' },
  { id: 2, title: 'Zebra Branding', category: 'Identity', imageUrl: 'https://picsum.photos/seed/p2/800/1000' },
  { id: 3, title: 'Cosmic Web', category: 'Website', imageUrl: 'https://picsum.photos/seed/p3/800/800' },
  { id: 4, title: 'Zen Dash', category: 'Dashboard', imageUrl: 'https://picsum.photos/seed/p4/800/1000' },
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-dark mb-4 tracking-tight">Featured Works</h2>
          <p className="text-slate-500 font-medium max-w-xl mx-auto">
            A selection of our recent projects that showcase our commitment to quality and innovation.
          </p>
        </div>

        <div className="columns-1 md:columns-2 gap-8 space-y-8">
          {items.map((item) => (
            <div key={item.id} className="relative group overflow-hidden rounded-[2rem] bg-white break-inside-avoid">
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <p className="text-primary-light text-sm font-bold uppercase tracking-widest text-indigo-300 mb-2">{item.category}</p>
                <h3 className="text-white text-3xl font-black">{item.title}</h3>
                <button className="mt-4 w-fit px-6 py-2 bg-white text-dark rounded-full text-xs font-bold uppercase tracking-wider">
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-white border-2 border-slate-200 text-dark rounded-full font-bold hover:bg-dark hover:text-white transition-all shadow-sm">
            Load More Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
