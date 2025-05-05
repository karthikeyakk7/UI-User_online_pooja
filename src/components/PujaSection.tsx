import { useState } from 'react';
import PujaCard from './PujaCard';
import SectionDivider from './SectionDivider';
import { pujas } from '../data/pujas';

type FilterType = 'closing-soon' | 'this-week' | 'all';

const PujaSection = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('closing-soon');

  return (
    <section className="py-10 px-4 bg-[#CC4522] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center items-center mb-8">
          <SectionDivider position="left" />
          <h2 className="text-3xl md:text-4xl font-bold px-4 text-center">Upcoming Pujas</h2>
          <SectionDivider position="right" />
        </div>
        
        <div className="flex justify-center mb-8 space-x-4">
          <button 
            onClick={() => setActiveFilter('closing-soon')}
            className={`px-6 py-2 rounded-md transition-colors duration-200 ${
              activeFilter === 'closing-soon' 
                ? 'bg-white text-[#CC4522] font-medium' 
                : 'bg-[#CC4522] text-white border border-white hover:bg-white/10'
            }`}
          >
            Closing Soon
          </button>
          <button 
            onClick={() => setActiveFilter('this-week')}
            className={`px-6 py-2 rounded-md transition-colors duration-200 ${
              activeFilter === 'this-week' 
                ? 'bg-white text-[#CC4522] font-medium' 
                : 'bg-[#CC4522] text-white border border-white hover:bg-white/10'
            }`}
          >
            This Week
          </button>
          <button 
            onClick={() => setActiveFilter('all')}
            className={`px-6 py-2 rounded-md transition-colors duration-200 ${
              activeFilter === 'all' 
                ? 'bg-white text-[#CC4522] font-medium' 
                : 'bg-[#CC4522] text-white border border-white hover:bg-white/10'
            }`}
          >
            All
          </button>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {pujas.map(puja => (
            <PujaCard key={puja.id} puja={puja} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PujaSection;