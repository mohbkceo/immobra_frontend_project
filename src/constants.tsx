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
    title: "Gestion et étude de projets de construction",
    description: "Nous prenons en charge l'étude et la planification des projets, avec une vision globale tenant compte des aspects techniques, financiers et organisationnels.",
    icon: <Building2 className="w-10 h-10 text-secondary" />
  },
  {
    id: 2,
    title: "Préparation et suivi des dossiers d'appels d'offres",
    description: "Préparation des dossiers administratifs et techniques, accompagnement de la phase d'évaluation, et suivi jusqu'à l'attribution du projet.",
    icon: <FileText className="w-10 h-10 text-secondary" />
  },
  {
    id: 3,
    title: "Planification temporelle et financière",
    description: "Élaboration des plans d'exécution (Planning), gestion des ressources, et suivi de l'avancement des travaux.",
    icon: <CalendarClock className="w-10 h-10 text-secondary" />
  },
  {
    id: 4,
    title: "Suivi technique et administratif",
    description: "Suivi sur site et technique des travaux, et accompagnement administratif pour garantir la conformité du projet aux engagements contractuels.",
    icon: <ShieldCheck className="w-10 h-10 text-secondary" />
  },
  {
    id: 5,
    title: "Représentation du maître d'ouvrage",
    description: "Agir comme interface entre tous les intervenants, et assurer la coordination générale et la prise de décisions techniques et organisationnelles.",
    icon: <UserRoundCheck className="w-10 h-10 text-secondary" />
  },
  {
    id: 6,
    title: "Études (Architecturales et génie civil...etc)",
    description: "Fournir des études architecturales et techniques selon les exigences du projet et les réglementations en vigueur.",
    icon: <Ruler className="w-10 h-10 text-secondary" />
  },
  {
    id: 7,
    title: "Accompagnement de la réalisation et de l'approvisionnement",
    description: "Coordination des opérations de réalisation, d'approvisionnement, et suivi des fournisseurs et des entrepreneurs.",
    icon: <Truck className="w-10 h-10 text-secondary" />
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
  "Expérience dans le domaine des projets de construction",
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

export const GOOGLE_FORM_URL = "https://forms.gle/placeholder";
export const WHATSAPP_URL = "https://wa.me/213796809417"; 