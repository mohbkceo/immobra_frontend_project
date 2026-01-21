// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { GOOGLE_FORM_URL, WHATSAPP_URL } from '../constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'À propos', href: '#about' },
    { name: 'Nos services', href: '#services' },
    { name: 'Flexibilité', href: '#flexibility' },
    { name: 'Méthodologie', href: '#methodology' },
    { name: 'Pourquoi nous', href: '#whyus' },
    { name: 'Contactez-nous', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50  transition-all duration-300 ${
      scrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-sm py-3 text-black border-b border-gray-100' 
        : 'bg-transparent py-5 text-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center gap-2">
            <span className="text-2xl font-bold text-primary-800 tracking-wider">
            <a href="/"><img src='./logo.png' className='w-40 ' alt="IMMOBRA Logo"/></a>
            </span>
          </div>
          
          <div className="hidden">
            <div className="flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:text-secondary-600"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-200 text-sm text-center text-orange-900 px-4 py-2 rounded-full font-bold hover:bg-orange-300 transition-all duration-200 border-[0.3px] border-black/20"
              >
                Demander un service
              </a>
            </div>
          </div>

          <div className="">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary-700 p-2 hover:bg-gray-50 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X color='#ffA500' className="w-7 h-7" /> : <Menu color="#ffA500" className="w-7 h-7" /> }
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className=" bg-white border-t border-gray-100 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-black hover:bg-orange-50 block px-4 py-3 rounded-lg text-base font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center bg-orange-200 text-orange-900 block px-4 py-3 rounded-lg text-base font-semibold hover:bg-orange-300 transition-colors"
            >
           Demander un service
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;