import React, { useState, useEffect } from 'react';
import { GOOGLE_FORM_URL } from '../constants';
import { Contact, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const images = [
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800',
    './image.png',
    './image02.jpeg',
    './image03.jpeg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); 

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section id="home" className="relative pt-32 min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      
      <div className="absolute inset-0 z-0 bg-slate-900" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px]" />

      <div className="relative z-10 w-full mx-auto px-6 text-center">
        
        
        <div className="mb-10 w-full relative inline-block">
          <div className="relative w-full h-64  mx-auto overflow-hidden rounded-2xl shadow-2xl border-4 border-slate-800/50">
            {images.map((img, index) => (
              <div
                key={index}
                className={`absolute inset-0 flex justify-center items-center transition-all duration-[1000ms]  transform ${
                  index === currentIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
                }`}
              >
                <img 
                  src={img} 
                  alt="Construction project" 
                  className="w-full  object-fill"
                />
              </div>
            ))}
          </div>
          
          
          <div className="absolute -inset-3 border border-orange-500/20 rounded-[2rem] -z-10 animate-pulse" />
        </div>

        
        <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
          IMMOBRA <span className="text-orange-400">Services</span>
        </h1>

        <div className="w-16 h-1 bg-orange-500 mx-auto mb-8 rounded-full"></div>

        <p className="text-lg md:text-xl text-slate-300 max-w-xl mx-auto mb-12 leading-relaxed font-light">
          GESTION ET MANAGEMENT DE PROJETS IMMOBILIERS
        </p>

        
        <div className="flex flex-col mx-2 justify-center gap-4">
          <button className="  bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-lg transition-all shadow-lg shadow-orange-500/20">
            <a className='h-full  w-full' href="/contact">Présenter votre projet</a>
          </button>
          <button className="bg-white/20 text-white font-bold px-8 py-3 rounded-lg transition-all shadow-lg ">
            <a href='/partner' className='h-full flex justify-center items-center gap-2 w-full' ><Contact /> Nos appels d’offres </a>
          </button>
        </div>
      </div>
    </section>
  );
};


export default Hero;