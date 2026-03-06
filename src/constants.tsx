import React from 'react';
import { 
  Building2, 
  FileText, 
  CalendarClock, 
  ShieldCheck, 
  UserRoundCheck, 
  Ruler, 
  Truck,
  CheckCircle2,
  Phone,
  LayoutGrid
} from 'lucide-react';

export const SERVICES_DATA = [
  {
    id: 1,
    title: "Préparation des appels d’offres",
    description: "Nous préparons vos dossiers de manière complète et conforme aux exigences des marchés.",
    icon: <FileText className="w-10 h-10 text-secondary" />
  },
  {
    id: 2,
    title: "Gestion et suivi des projets",
    description: "Chaque étape de votre projet est suivie et coordonnée pour garantir réussite et qualité.",
    icon: <Building2 className="w-10 h-10 text-secondary" />
  },
  {
    id: 3,
    title: "Coordination des travaux",
    description: "Nous organisons les équipes et les ressources pour un déroulement optimal des travaux.",
    icon: <CalendarClock className="w-10 h-10 text-secondary" />
  },
  {
    id: 4,
    title: "Livraison finale",
    description: "Votre projet est livré clé en main, dans les délais et selon vos attentes.",
    icon: <ShieldCheck className="w-10 h-10 text-secondary" />
  }
];

export const METHODOLOGY_STEPS = [
  { id: 1, label: "Étape 1", title: "Étude des besoins du projet", description: "Compréhension approfondie des exigences du client et des objectifs initiaux du projet." },
  { id: 2, label: "Étape 2", title: "Analyse technique et organisationnelle", description: "Évaluation des aspects techniques et logistiques pour garantir la faisabilité." },
  { id: 3, label: "Étape 3", title: "Proposition de solutions et plan d'action", description: "Présentation d'une stratégie intégrée et de calendriers précis." },
  { id: 4, label: "Étape 4", title: "Exécution ou suivi de la phase convenue", description: "Passage à la phase opérationnelle sur site ou administrative avec précision." },
  { id: 5, label: "Étape 5", title: "Évaluation et suivi continu", description: "Assurance qualité et traitement des défis éventuels pendant le projet." }
];

export const ADVANTAGES = [
  "Expérience dans le domaine de projets de construction",
  "Méthodologie de travail claire et organisée",
  "Flexibilité contractuelle",
  "Réseau de partenaires spécialisés",
  "Engagement sur la qualité et les délais"
];

export const FLEXIBILITY_ITEMS = [
  "Contrat pour un projet complet du début à la livraison",
  "Contrat pour une seule étape seulement",
  "Contrat pour plusieurs étapes spécifiques",
  "Contrat pour l'étude seulement",
  "Contrat pour le suivi seulement"
];

export const GOOGLE_FORM_URL = "https://tally.so/r/687VBJ";
export const WHATSAPP_URL = "https://wa.me/213556990806"; 