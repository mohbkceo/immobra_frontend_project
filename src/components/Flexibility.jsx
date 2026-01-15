// src/components/Flexibility.js
import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { FLEXIBILITY_ITEMS } from '../constants';

const Flexibility = () => (
  <section id="flexibility" className="py-24 bg-slate-50 overflow-hidden relative">
    <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-100/50 -skew-x-12 translate-x-1/4 z-0"></div>

    <div className="max-w-6xl mx-auto px-6 relative z-10">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        
        <div className="relative order-2 lg:order-1">
          <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" 
              className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-700" 
              alt="Bâtiment professionnel" 
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Flexibilité contractuelle : <br />
            <span className="text-orange-600">Solutions sur mesure selon vos besoins</span>
          </h2>
          
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Chez <strong className="text-slate-900">IMMOBRA services</strong>, nous croyons que chaque projet est unique. C'est pourquoi nous supprimons les contraintes des modèles prêts à l'emploi et proposons des options contractuelles qui respirent avec vos exigences.
          </p>

          <div className="grid gap-4">
            {FLEXIBILITY_ITEMS.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-md">
                <div className="mt-1">
                  <CheckCircle2 className="w-5 h-5 text-orange-500" />
                </div>
                <span className="text-slate-700 font-medium leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Flexibility;