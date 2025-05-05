import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import TempleIcon from './TempleIcon';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <TempleIcon className="h-8 w-8 text-[#CC4522]" />
              <span className="ml-2 text-xl font-semibold text-[#CC4522] font-sanskritLike">देवधाम</span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-[#CC4522] px-3 py-2 text-sm font-medium transition-colors duration-200">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-[#CC4522] px-3 py-2 text-sm font-medium flex items-center transition-colors duration-200">
              <span className="mr-1">Abhimantit Store</span>
              <span className="inline-block w-5 h-5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                  <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                </svg>
              </span>
            </a>
            <a href="#" className="text-[#CC4522] border-b-2 border-[#CC4522] px-3 py-2 text-sm font-medium flex items-center transition-colors duration-200">
              <span className="mr-1">Book Pujas</span>
              <span className="inline-block w-5 h-5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                  <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"></path>
                  <path d="M16.5 9.4 7.55 4.24"></path>
                  <polyline points="3.29 7 12 12 20.71 7"></polyline>
                  <line x1="12" y1="22" x2="12" y2="12"></line>
                  <circle cx="18.5" cy="15.5" r="2.5"></circle>
                  <path d="M20.27 17.27 22 19"></path>
                </svg>
              </span>
            </a>
            <a href="#" className="text-gray-700 hover:text-[#CC4522] px-3 py-2 text-sm font-medium transition-colors duration-200">
              Offerings
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <button className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none">
                <span>English</span>
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <button className="bg-[#CC4522] text-white px-4 py-2 rounded font-medium hover:bg-[#B33D1E] transition-colors duration-200">
              LOGIN
            </button>
          </div>
          
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-[#CC4522] focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#CC4522]">
              Home
            </a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#CC4522]">
              Abhimantit Store
            </a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-[#CC4522]">
              Book Pujas
            </a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#CC4522]">
              Offerings
            </a>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5">
              <button className="w-full flex justify-between items-center text-base font-medium text-gray-700 hover:text-gray-900">
                <span>English</span>
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <div className="mt-3 px-2 space-y-1">
              <button className="w-full block bg-[#CC4522] text-white px-4 py-2 rounded font-medium hover:bg-[#B33D1E]">
                LOGIN
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;