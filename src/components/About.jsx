// src/components/About.js
import React from 'react';

const About = () => (
  <section id="about" className="py-20 bg-white">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="mb-2 text-sm font-semibold text-orange-700 uppercase tracking-wide">
            À propos
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Notre bureau et nos objectifs
          </h2>
          
          <div className="space-y-5 text-gray-600 leading-relaxed">
            <p className="text-lg">
              <span className="font-semibold text-orange-800">IMMOBRA SERVICE</span> est un bureau professionnel qui propose des services de gestion et d'étude de projets de construction, pour accompagner les entreprises et les entrepreneurs à toutes les étapes du projet.
            </p>
            <p>
              Nous nous appuyons sur une méthodologie de travail claire et un réseau de partenaires spécialisés pour garantir la réalisation des projets selon les normes techniques, dans le respect des délais et des coûts définis.
            </p>
          </div>
        </div>
        
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1000" 
              alt="Équipe de travail sur un chantier" 
              className="w-full h-[400px] object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -z-10 -bottom-4 -right-4 w-32 h-32 bg-orange-100 rounded-xl"></div>
        </div>
      </div>
    </div>
  </section>
);

export default About;