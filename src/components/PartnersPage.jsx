import React from 'react';
import { 
  RiShieldCheckLine, 
  RiUserAddLine, 
  RiLoginCircleLine, 
  RiBuilding2Line, 
  RiLockPasswordLine,
  RiArrowRightLine
} from 'react-icons/ri';
import { GOOGLE_FORM_URL, ORDER_SERVICE } from '../constants';


import { RiFileDownloadLine } from 'react-icons/ri';

const DownloadButton = () => {
  const PDF_DOWNLOAD_URL = "https://drive.google.com/uc?export=download&id=1YHsZIzygHb28mHTAj-fX_92OtoOoTC7S";

  return (
    <div className="mt-8">
      <a
        href={PDF_DOWNLOAD_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 bg-orange-50 text-zinc-600 font-bold px-6 py-3 rounded-xl border border-orange-200 hover:bg-orange-100 transition-all group"
      >
        <RiFileDownloadLine size={22} className="group-hover:bounce" />
        <span>Télécharger le devis (PDF)</span>
      </a>
      
    </div>
  );
};



const PartnersPage = () => {
 const requirements = [
  { 
    text: "Sélection des meilleurs entrepreneurs qualifiés de la liste IMMOBRA", 
    icon: <RiUserAddLine className="text-orange-500" /> 
  },
  { 
    text: "Participation directe et soumission des offres sur les projets", 
    icon: <RiBuilding2Line className="text-orange-500" /> 
  },
  { 
    text: "Suivi rigoureux et coordination de chaque étape par IMMOBRA", 
    icon: <RiShieldCheckLine className="text-orange-500" /> 
  },
  { 
    text: "Garantie de livraison finale complète et conforme", 
    icon: <RiShieldCheckLine className="text-orange-500" /> 
  },
];

  return (
    <div className="min-h-screen bg-slate-50 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        
        <nav className="flex items-center gap-2 text-slate-400 text-sm mb-12 font-medium">
          <a href="/" className="hover:text-slate-900 transition-colors">Accueil</a>
          <RiArrowRightLine size={14} />
          <span className="text-slate-900 font-semibold">Espace Partenaires</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <div className="space-y-10">
            <div>
              <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                Devenez un partenaire <br />
                <span className="text-orange-500">privilégié IMMOBRA</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed border-l-4 border-orange-400 pl-6">
                Cet espace est exclusivement destiné aux entreprises de sous-traitance souhaitant rejoindre la liste préférentielle <strong>IMMOBRA Services</strong> et accéder à nos appels d'offres privés.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-slate-800">Les avantages de nos partenaires privilégiés: </h3>
              <div className="grid gap-4">
                {requirements.map((req, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100 transition-transform hover:translate-x-1">
                    <div className="text-xl">{req.icon}</div>
                    <span className="text-slate-700 font-medium">{req.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-slate-200/40 border border-slate-100 relative">
            <div className="text-center mb-10">
              <div className="w-20 h-20 bg-slate-900 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform -rotate-3">
                <RiBuilding2Line size={40} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Espace Partenaires</h2>
              <p className="text-slate-500 text-sm mt-2">Gérez vos appels d'offres et collaborations</p>
            </div>

            <div className="space-y-4">
             <DownloadButton />
              
              

              <div className="relative py-8">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-slate-100"></span>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-4 text-slate-300 font-black tracking-widest">OU</span>
                </div>
              </div>

              <a 
                href={GOOGLE_FORM_URL} 
                className="w-full flex items-center justify-center gap-3 bg-white border-2 border-slate-900 text-slate-900 p-5 rounded-2xl font-bold hover:bg-slate-50 transition-all text-lg group"
              >
                 Devenir partenaire privilégié 
                <RiUserAddLine size={22} className="group-hover:translate-x-1 transition-transform" />
              </a>
              
              <p className="text-center text-[11px] text-slate-400 mt-8 leading-relaxed px-4 uppercase tracking-tighter">
                En créant un compte, vous acceptez notre politique de confidentialité et de gestion des données partenaires.
              </p>
            </div>
          </div>

        </div>


      </div>
    </div>
  );
};

export default PartnersPage;