// src/components/WhyUs.js
import React from 'react';
import { CheckCircle2, MessageSquareQuote } from 'lucide-react';
import { ADVANTAGES } from '../constants';

const WhyUs = () => (
  <section id="whyus" className="py-20 bg-gray-50">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pourquoi nous choisir ?
            </h2>
            <p className="text-gray-600">
              Nous proposons des solutions fondées sur l'expérience et l'engagement
            </p>
          </div>
          
          <div className="space-y-4">
            {ADVANTAGES.map((adv, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-orange-600" />
                </div>
                <span className="text-gray-700">{adv}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
          <div className="mb-6 text-orange-600">
            <MessageSquareQuote className="w-10 h-10" />
          </div>
          
          <blockquote className="mb-8">
            <p className="text-xl text-gray-800 italic leading-relaxed">
              "Nous ne construisons pas seulement des projets, nous bâtissons des ponts de confiance avec nos clients grâce à l'excellence technique et à l'engagement éthique."
            </p>
          </blockquote>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
              <div className="text-orange-700 font-semibold">IM</div>
            </div>
            <div>
              <div className="font-semibold text-gray-900">Direction IMMOBRA</div>
              <div className="text-gray-500 text-sm">Bureau d'études</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhyUs;