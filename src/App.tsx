import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowLeft, 
  CheckCircle2, 
  Phone, 
  ExternalLink, 
  Construction,
  Info,
  Briefcase,
  Layers,
  BarChart3,
  Star,
  MessageSquareQuote,
  ArrowRight
} from 'lucide-react';
import { 
  SERVICES_DATA, 
  METHODOLOGY_STEPS, 
  ADVANTAGES, 
  FLEXIBILITY_ITEMS, 
  GOOGLE_FORM_URL, 
  WHATSAPP_URL 
} from './constants';

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
    { name: 'Accueil', href: '#home', icon: <Construction className="w-4 h-4" /> },
    { name: 'À propos', href: '#about', icon: <Info className="w-4 h-4" /> },
    { name: 'Nos services', href: '#services', icon: <Briefcase className="w-4 h-4" /> },
    { name: 'Flexibilité', href: '#flexibility', icon: <Layers className="w-4 h-4" /> },
    { name: 'Méthodologie', href: '#methodology', icon: <BarChart3 className="w-4 h-4" /> },
    { name: 'Pourquoi nous', href: '#whyus', icon: <Star className="w-4 h-4" /> },
    { name: 'Contactez-nous', href: '#contact', icon: <Phone className="w-4 h-4" /> },
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
              <img src='./logo.png' className='w-32'/>
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className=" px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                className="bg-secondary-600 bg-orange-200 text-sm text-center text-orange-900 px-2 py-2  rounded-full font-bold hover:bg-secondary-700 transition-all duration-200  border-[0.3px] border-black/20"
              >
                Demander un conseil
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary-700 p-2 hover:bg-gray-50 rounded-lg transition-colors"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu color={scrolled ? '#000000':'#ffffff'} className="w-7 h-7" />}
            </button>
          </div>

          
        </div>
      </div>

      
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-primary-700 text-black hover:bg-secondary-50 block px-4 py-3 rounded-lg text-base font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              className="w-full text-center bg-secondary-600 bg-orange-200 text-orange-900 block px-4 py-3 rounded-lg text-base font-semibold hover:bg-secondary-700 transition-colors"
            >
              Demander un conseil
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};


const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      <div 
        className="absolute inset-0 z-0 opacity-40" 
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2000')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      />
      <div className="absolute inset-0 z-0 bg-slate-900/60" /> {/* Superposition douce */}

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="mb-8 inline-flex backdrop-blur-sm text-white items-center gap-2 text-secondary-200 border border-secondary-400/30 bg-secondary-900/20 px-4 py-1.5 rounded-full text-sm tracking-wide">
          <Construction className="w-4 h-4" />
          <span>Bureau spécialisé en gestion et études</span>
        </div>

        
        <h1 className="text-4xl md:text-6xl font-bold text-orange-100 mb-8 leading-[1.2]">
          IMMOBRA SERVICE <br />
          <span className="text-secondary-400">Gestion et étude de projets de construction</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed">
          Votre partenaire professionnel pour garantir la qualité et le coût de vos projets. Nous vous accompagnons de la planification à la réalisation avec des solutions sur mesure et complètes.
        </p>

      
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            className="w-full bg-orange-600 rounded-full sm:w-auto bg-secondary-600 hover:bg-secondary-500 text-white font-bold px-10 py-4 transition-all duration-300 flex items-center justify-center gap-3"
          >
            Demander un conseil
            <ArrowRight className="w-5 h-5" />
          </a>
          
          <a
            href="#about"
            className="w-full sm:w-auto border border-white/20 rounded-full text-slate-300 hover:text-white font-medium px-10 py-4 transition-colors duration-300"
          >
            En savoir plus
          </a>
        </div>
      </div>
    </section>
  );
};


const SectionHeader = ({ title, subtitle, centered = true }: { title: string, subtitle?: string, centered?: boolean }) => (
  <div className={`mb-12 ${centered ? 'text-center' : 'text-right'}`}>
    <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4 relative inline-block">
      {title}
      <span className={`block h-1.5 w-1/2 bg-gradient-to-r from-secondary-500 to-secondary-300 mt-3 rounded-full ${centered ? 'mx-auto' : 'md:ml-0'}`}></span>
    </h2>
    {subtitle && <p className="text-gray-600 max-w-2xl mx-auto mt-5 text-lg leading-relaxed">{subtitle}</p>}
  </div>
);

const About = () => (
  <section id="about" className="py-20 bg-white">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Contenu texte */}
        <div>
          <div className="mb-2 text-sm font-semibold text-primary-700 uppercase tracking-wide">
            À propos
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Notre bureau et nos objectifs
          </h2>
          
          <div className="space-y-5 text-gray-600 leading-relaxed">
            <p className="text-lg">
              <span className="font-semibold text-primary-800">IMMOBRA SERVICE</span> est un bureau professionnel qui propose des services de gestion et d'étude de projets de construction, pour accompagner les entreprises et les entrepreneurs à toutes les étapes du projet.
            </p>
            <p>
              Nous nous appuyons sur une méthodologie de travail claire et un réseau de partenaires spécialisés pour garantir la réalisation des projets selon les normes techniques, dans le respect des délais et des coûts définis.
            </p>
          </div>
          
          
        </div>
        
        {/* Contenu image */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1000" 
              alt="Équipe de travail sur un chantier" 
              className="w-full h-[400px] object-cover"
              loading="lazy"
            />
          </div>
          {/* Élément décoratif subtil */}
          <div className="absolute -z-10 -bottom-4 -right-4 w-32 h-32 bg-secondary-100 rounded-xl"></div>
        </div>
      </div>
    </div>
  </section>
);



const Services = () => (
  <section id="services" className="py-20 bg-gray-50">
    <div className="max-w-6xl mx-auto px-6">
      {/* En-tête simplifiée */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Nos services
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Des solutions intégrées couvrant toutes les étapes de votre projet
        </p>
      </div>
      
      {/* Grille simplifiée */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES_DATA.map((service) => (
          <div 
            key={service.id} 
            className="bg-white p-6 rounded-xl border border-gray-200 hover:border-primary-300 transition-colors duration-200"
          >
            {/* Conteneur icône épuré */}
            <div className="mb-5 p-3 bg-primary-50 rounded-lg w-fit">
              {service.icon}
            </div>
            
            {/* Contenu */}
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

const Flexibility = () => (
  <section id="flexibility" className="py-24 bg-slate-50 overflow-hidden relative">
    <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-100/50 -skew-x-12 translate-x-1/4 z-0"></div>

    <div className="max-w-6xl mx-auto px-6 relative z-10">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        
        {/* Côté visuel : épuré pour un seul point focal */}
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
            <span className="text-secondary-600">Solutions sur mesure selon vos besoins</span>
          </h2>
          
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Chez <strong className="text-slate-900">IMMOBRA services</strong>, nous croyons que chaque projet est unique. C'est pourquoi nous supprimons les contraintes des modèles prêts à l'emploi et proposons des options contractuelles qui respirent avec vos exigences.
          </p>

          <div className="grid gap-4">
            {FLEXIBILITY_ITEMS.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-md">
                <div className="mt-1">
                  <CheckCircle2 className="w-5 h-5 text-secondary-500" />
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

  const Methodology = () => (
    <section id="methodology" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          title="Méthodologie de travail" 
          subtitle="Un parcours professionnel clair pour garantir la livraison efficace des projets" 
        />

        <div className="relative">
          {/* Ligne horizontale subtile pour le flux */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>

          <div className="grid md:grid-cols-5 gap-10">
            {METHODOLOGY_STEPS.map((step) => (
              <div key={step.id} className="relative z-10 text-center group">
                
                {/* Cercle d'étape */}
                <div className="w-16 h-16 bg-gray-100 border-2 border-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300 group-hover:bg-gray-200">
                  <span className="text-lg font-semibold text-primary-800">{step.id}</span>
                </div>

                {/* Carte d'étape */}
                <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm transition-shadow duration-300 group-hover:shadow-md">
                  <span className="block text-gray-500 font-medium text-sm mb-1">{step.label}</span>
                  <h4 className="text-md font-bold text-primary-800 mb-2">{step.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
const WhyUs = () => (
  <section id="whyus" className="py-20 bg-gray-50">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Colonne gauche - Avantages */}
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
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-primary-600" />
                </div>
                <span className="text-gray-700">{adv}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Colonne droite - Citation */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
          <div className="mb-6 text-primary-600">
            <MessageSquareQuote className="w-10 h-10" />
          </div>
          
          <blockquote className="mb-8">
            <p className="text-xl text-gray-800 italic leading-relaxed">
              "Nous ne construisons pas seulement des projets, nous bâtissons des ponts de confiance avec nos clients grâce à l'excellence technique et à l'engagement éthique."
            </p>
          </blockquote>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
              <div className="text-primary-700 font-semibold">IM</div>
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

const Contact = () => (
  <section id="contact" className="py-24 bg-white">
    <div className="max-w-6xl mx-auto px-6">
      <div className="max-w-3xl mx-auto bg-slate-50 rounded-3xl p-10 md:p-16 text-center border border-slate-100">
        
        {/* Zone d'en-tête simplifiée */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Commencez votre projet aujourd'hui</h2>
          <p className="text-slate-600 text-lg">
            Que vous ayez une consultation technique ou un projet en phase de planification, nous sommes là pour vous aider.
          </p>
        </div>

        {/* Boutons d'action - Neutralisés pour le confort visuel */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch">
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            className="flex-1 bg-slate-900 text-white font-bold px-8 py-5 rounded-xl hover:bg-slate-800 transition-all duration-200 flex items-center justify-center gap-2 shadow-sm"
          >
            <span>Remplir le formulaire de service</span>
            <ExternalLink className="w-5 h-5 opacity-70" />
          </a>
          
          <a
            href={WHATSAPP_URL}
            target="_blank"
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


const Footer = () => {
  const socialLinks = [
    { 
      name: 'Facebook', 
      href: '#', 
      svg: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /> 
    },
    { 
      name: 'Instagram', 
      href: '#', 
      svg: (
        <>
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </>
      )
    },
    { 
      name: 'Youtube', 
      href: '#', 
      svg: <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.46-5.58zM9.75 15.02V8.98L15.55 12l-5.8 3.02z" /> 
    },
    { 
      name: 'TikTok', 
      href: '#', 
      svg: <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /> 
    },
    { 
      name: 'LinkedIn', 
      href: '#', 
      svg: <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z" /> 
    },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center text-center space-y-10">
          
          {/* Identité de marque */}
          <div className="space-y-3">
            <div className="text-2xl font-bold tracking-tight text-white">
              IMMOBRA <span className="text-secondary-400 font-medium text-xl">services</span>
            </div>
            <p className="text-slate-400 max-w-xs mx-auto text-sm leading-relaxed">
              Le partenaire professionnel de confiance pour la gestion et l'étude de projets de construction avec efficacité et professionnalisme.
            </p>
          </div>

          {/* Navigation simplifiée */}
          <nav className="flex flex-wrap justify-center gap-x-10 gap-y-4 border-y border-slate-800/50 py-6 w-full max-w-2xl">
            {[
              { name: 'Accueil', id: 'home' },
              { name: 'À propos', id: 'about' },
              { name: 'Nos services', id: 'services' },
              { name: 'Contactez-nous', id: 'contact' }
            ].map((item) => (
              <a 
                key={item.id} 
                href={`#${item.id}`}
                className="text-sm font-medium hover:text-secondary-400 transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Informations secondaires & Copyright */}
          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-slate-400 hover:text-secondary-400 transition-all duration-300 transform hover:-translate-y-1"
                  aria-label={social.name}
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

function App() {
  return (
    <div dir='auto' className="font-cairo bg-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Flexibility />
      <Methodology />
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;