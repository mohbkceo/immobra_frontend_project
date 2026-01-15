// src/components/Methodology.js
import React from 'react';
import SectionHeader from './SectionHeader';
import { METHODOLOGY_STEPS } from '../constants';

const Methodology = () => (
  <section id="methodology" className="py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeader 
        title="Méthodologie de travail" 
        subtitle="Un parcours professionnel clair pour garantir la livraison efficace des projets" 
      />

      <div className="relative">
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>

        <div className="grid md:grid-cols-5 gap-10">
          {METHODOLOGY_STEPS.map((step) => (
            <div key={step.id} className="relative z-10 text-center group">
              <div className="w-16 h-16 bg-gray-100 border-2 border-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300 group-hover:bg-gray-200">
                <span className="text-lg font-semibold text-orange-800">{step.id}</span>
              </div>

              <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm transition-shadow duration-300 group-hover:shadow-md">
                <span className="block text-gray-500 font-medium text-sm mb-1">{step.label}</span>
                <h4 className="text-md font-bold text-orange-800 mb-2">{step.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Methodology;