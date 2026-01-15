// src/components/Services.js
import React from 'react';
import { SERVICES_DATA } from '../constants';

const Services = () => (
  <section id="services" className="py-20 bg-gray-50">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Nos services
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Des solutions intégrées couvrant toutes les étapes de votre projet
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES_DATA.map((service) => (
          <div 
            key={service.id} 
            className="bg-white p-6 rounded-xl border border-gray-200 hover:border-orange-300 transition-colors duration-200"
          >
            <div className="mb-5 p-3 bg-orange-50 rounded-lg w-fit">
              {service.icon}
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {service.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;