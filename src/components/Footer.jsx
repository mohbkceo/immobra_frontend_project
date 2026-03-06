// src/components/Footer.js
import React from 'react';

const Footer = () => {
  const socialLinks = [
    { 
      name: 'Facebook', 
      href: 'https://www.facebook.com/share/18PVh5QL7p/', 
      svg: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /> 
    },
   
    { 
      name: 'Youtube', 
      href: 'https://youtube.com/@immobra.services?si=7-rztKSK19hKXU_p', 
      svg: <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.46-5.58zM9.75 15.02V8.98L15.55 12l-5.8 3.02z" /> 
    },
   
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center text-center space-y-10">
          
          <div className="space-y-3">
            <div className="text-2xl font-bold tracking-tight text-white">
              IMMOBRA <span className="text-[#D49E21] font-medium text-xl">services</span>
            </div>
            <p className="text-slate-400 max-w-xs mx-auto text-sm leading-relaxed">
              Le partenaire professionnel de confiance pour la gestion et l'étude de projets de construction avec efficacité et professionnalisme.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-10 gap-y-4 border-y border-slate-800/50 py-6 w-full max-w-2xl">
            {[
              { name: 'Accueil', id: 'home' },
              { name: 'À propos', id: 'about' },
              { name: 'Nos services', id: 'services' },
              { name: 'Contactez-nous', id: 'contact' }
            ].map((item) => (
              <a 
                key={item.id} 
                href={`/${item.id}`}
                className="text-sm font-medium hover:text-orange-400 transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-slate-400 hover:text-orange-400 transition-all duration-300 transform hover:-translate-y-1"
                  aria-label={social.name}
                  rel="noopener noreferrer"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {social.svg}
                  </svg>
                </a>
              ))}
            </div>
            <p className="text-xs text-slate-500 tracking-wide uppercase">
              &copy; 2026 IMMOBRA Services — La crédibilité dans l'exécution
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;