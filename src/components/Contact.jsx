// src/components/Contact.js
import React from 'react';
import { ExternalLink, Phone } from 'lucide-react';
import { GOOGLE_FORM_URL, WHATSAPP_URL } from '../constants';

const Contact = () => (
  <section id="contact" className="py-24 bg-white">
    <div className="max-w-6xl mx-auto px-6">
      <div className="max-w-3xl mx-auto bg-slate-50 rounded-3xl p-10 md:p-16 text-center border border-slate-100">
        
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Commencez votre projet aujourd'hui</h2>
          <p className="text-slate-600 text-lg">
            Que vous ayez une consultation technique ou un projet en phase de planification, nous sommes là pour vous aider.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch">
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-slate-900 text-white font-bold px-8 py-5 rounded-xl hover:bg-slate-800 transition-all duration-200 flex items-center justify-center gap-2 shadow-sm"
          >
            <span>Remplir le formulaire de service</span>
            <ExternalLink className="w-5 h-5 opacity-70" />
          </a>
          
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-white text-slate-900 border border-slate-200 font-bold px-8 py-5 rounded-xl hover:bg-slate-100 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <span>WhatsApp direct</span>
            <Phone className="w-5 h-5 text-green-600" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;