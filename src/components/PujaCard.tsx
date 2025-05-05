import React from 'react';
import { Clock, MapPin, Share2 } from 'lucide-react';
import { Puja } from '../types';

interface PujaCardProps {
  puja: Puja;
}

const PujaCard: React.FC<PujaCardProps> = ({ puja }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative">
        <img 
          src={puja.imageUrl} 
          alt={puja.title} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 left-2 bg-red-600 text-white px-3 py-1 rounded-full flex items-center text-sm font-medium">
          <Clock className="w-4 h-4 mr-1" />
          {puja.countdown}
        </div>
        <button className="absolute bottom-2 right-2 bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition-colors duration-200">
          <Share2 className="w-5 h-5" />
        </button>
      </div>
      
      <div className="p-4">
        {puja.tag && (
          <span className="inline-block bg-orange-100 text-orange-700 px-2 py-1 text-xs font-medium rounded mb-2">
            {puja.tag}
          </span>
        )}
        <h3 className="font-bold text-lg text-gray-800 mb-2">{puja.title}</h3>
        <p className="text-gray-700 mb-4">{puja.description}</p>
        <div className="flex items-start text-gray-600 mb-2">
          <MapPin className="w-5 h-5 mr-2 flex-shrink-0 text-gray-500" />
          <span className="text-sm">{puja.location}</span>
        </div>
        
        {puja.benefits && (
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-green-600 font-medium">{puja.benefits}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PujaCard;