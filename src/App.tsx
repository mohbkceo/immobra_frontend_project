// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Flexibility from './components/Flexibility';
import Methodology from './components/Methodology';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

import { Info, Briefcase, Settings2, GitMerge, ShieldCheck, Mail, ChevronLeft, ChevronRight } from 'lucide-react';

const ServiceNavigation = () => {
  const links = [
    { path: "/about", label: "À propos", icon: <Info className="w-5 h-5" />, description: "Notre histoire et vision" },
    { path: "/services", label: "Nos services", icon: <Briefcase className="w-5 h-5" />, description: "Solutions de construction" },
    { path: "/flexibility", label: "Flexibilité", icon: <Settings2 className="w-5 h-5" />, description: "Adaptation à vos besoins" },
    { path: "/methodology", label: "Méthodologie", icon: <GitMerge className="w-5 h-5" />, description: "Processus et rigueur" },
    { path: "/whyus", label: "Pourquoi nous", icon: <ShieldCheck className="w-5 h-5" />, description: "Engagement et confiance" },
    { path: "/contact", label: "Contact", icon: <Mail className="w-5 h-5" />, description: "Discutons de votre projet" }
  ];

  return (
    <div id='servicenavigation' className="py-20 bg-slate-50 border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Title - Left aligned for a list feel */}
        <div className="mb-12 text-center md:text-right">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Explorez Nos Sections</h2>
          <p className="text-slate-500">Accédez rapidement aux détails de notre expertise</p>
        </div>

        {/* List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {links.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className="group flex items-center bg-white p-5 rounded-xl border border-slate-200 transition-all duration-300 hover:border-secondary-400 hover:shadow-md hover:shadow-secondary-500/5"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-lg bg-slate-50 text-slate-400 group-hover:bg-secondary-50 group-hover:text-secondary-600 transition-colors duration-300">
                {link.icon}
              </div>

              {/* Text Content */}
              <div className="mr-4 ml-4 flex-grow">
                <div className="text-slate-900 font-bold group-hover:text-secondary-700 transition-colors">
                  {link.label}
                </div>
                <div className="text-slate-500 text-xs mt-0.5">
                  {link.description}
                </div>
              </div>

              {/* Subtle Arrow */}
              <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-secondary-400 transform group-hover:-translate-x-1 transition-all" />
            </Link>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200/60 text-center">
          <p className="text-slate-400 text-sm italic">
            IMMOBRA Services * Votre partenaire de confiance
          </p>
        </div>
      </div>
    </div>
  );
};

function HomePage() {
  return (
    <>
      <Hero />
     <ServiceNavigation />
    </>
  );
}

function App() {
  return (
    <Router>
      <div dir='auto' className="font-cairo bg-white">
        <Navbar />
        
        <Routes >
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/flexibility" element={<Flexibility />} />
          <Route path="/methodology" element={<Methodology />} />
          <Route path="/whyus" element={<WhyUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;