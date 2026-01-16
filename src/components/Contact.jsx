import React from 'react';
import { 
  RiFacebookCircleFill, 
  RiInstagramFill, 
  RiYoutubeFill, 
  RiLinkedinBoxFill, 
  RiTiktokFill,
  RiWhatsappLine,
  RiFileEditLine,
  RiArrowRightUpLine
} from 'react-icons/ri';
import { GOOGLE_FORM_URL, WHATSAPP_URL } from '../constants';

const Contact = () => {
  const socials = [
    { icon: <RiFacebookCircleFill />, name: "Facebook", href: "#", handle: "Immobra Services", color: "group-hover:text-blue-600" },
    { icon: <RiInstagramFill />, name: "Instagram", href: "#", handle: "@immobra_services", color: "group-hover:text-pink-500" },
    { icon: <RiYoutubeFill />, name: "YouTube", href: "#", handle: "Immobra Channel", color: "group-hover:text-red-600" },
    { icon: <RiTiktokFill />, name: "TikTok", href: "#", handle: "@immobra_official", color: "group-hover:text-slate-900" },
    { icon: <RiLinkedinBoxFill />, name: "LinkedIn", href: "#", handle: "Immobra Group", color: "group-hover:text-blue-700" },
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-slate-50 rounded-[2rem] p-8 md:p-12 border border-slate-100 shadow-sm">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            
            {/* Column 1: Primary Contact (Spans 3 columns) */}
            <div className="lg:col-span-3 space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
                  Prêt à construire ?
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Notre équipe est disponible pour répondre à vos questions techniques et vous accompagner dans vos démarches administratives et de planification.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  className="flex items-center justify-between bg-slate-900 text-white p-6 rounded-2xl group hover:bg-slate-800 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/10 rounded-lg">
                      <RiFileEditLine size={24} />
                    </div>
                    <div className="text-right">
                      <span className="block font-bold text-lg">Formulaire de projet</span>
                      <span className="text-slate-400 text-sm">Réponse sous 24h</span>
                    </div>
                  </div>
                  <RiArrowRightUpLine size={24} className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </a>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  className="flex items-center justify-between bg-white border border-slate-200 p-6 rounded-2xl group hover:border-green-500 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-green-50 text-green-600 rounded-lg">
                      <RiWhatsappLine size={24} />
                    </div>
                    <div className="text-right">
                      <span className="block font-bold text-lg text-slate-900">WhatsApp Direct</span>
                      <span className="text-slate-500 text-sm">Contact immédiat</span>
                    </div>
                  </div>
                  <RiArrowRightUpLine size={24} className="text-slate-300 group-hover:text-green-500 transition-all" />
                </a>
              </div>
            </div>

            {/* Column 2: Social List (Spans 2 columns) */}
            <div className="lg:col-span-2 bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
                Réseaux Sociaux
              </h3>
              <div className="space-y-2">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-all group"
                  >
                    <div className={`text-2xl text-slate-300 transition-colors ${social.color}`}>
                      {social.icon}
                    </div>
                    <div>
                      <span className="block text-sm font-bold text-slate-900">{social.name}</span>
                      <span className="block text-xs text-slate-400">{social.handle}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;