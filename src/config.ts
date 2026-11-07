// Informations générales du collectif : modifier ici, tout le site suit.

export const SITE = {
  nom: 'Soigner ou Saigner',
  sigle: 'SOS',
  accroche: 'Face aux discriminations dans le soin, soignant·es et patient·es se mobilisent',
  description:
    "Collectif de soignant·es et de patient·es contre les discriminations dans la santé : islamophobie, racisme, antisémitisme, xénophobie. Écoute, soutien, témoignages et ressources.",
  email: 'soigner.ou.saigner@gmail.com',
  instagram: {
    pseudo: '@soigner_ou_saigner',
    url: 'https://www.instagram.com/soigner_ou_saigner/',
  },
};

// Formulaires Google (compte du collectif).
export const FORMULAIRES = {
  temoignage: {
    titre: 'Appel à témoignages – Port du calot à l’hôpital',
    url: 'https://docs.google.com/forms/d/e/1FAIpQLSeevpLPj0EcFbbzIeLrvczWs7n_FmkYm-V4uEAeV6Mho_2LIg/viewform',
    hauteur: 2400,
  },
  adhesion: {
    titre: 'Nous rejoindre – Collectif SOS',
    url: 'https://docs.google.com/forms/d/e/1FAIpQLSdhf6DAdtPKzx7qS70WyUQNY_-71t0PaD6IYJjvE8HNAt3W5A/viewform',
    hauteur: 3200,
  },
};

// Formulaire de contact du site : les messages arrivent par e-mail via Web3Forms.
// La clé d'accès s'obtient gratuitement sur https://web3forms.com avec l'adresse du collectif.
// Elle est faite pour être publique (elle permet seulement d'envoyer vers cette adresse).
export const CONTACT = {
  cle: '',
  envoi: 'https://api.web3forms.com/submit',
  motifs: [
    { id: 'presse', label: 'Presse et médias' },
    { id: 'intervention', label: 'Intervention, formation, conférence' },
    { id: 'conseil', label: 'Besoin de conseil (situation en cours)' },
    { id: 'partenariat', label: 'Association, partenariat' },
    { id: 'autre', label: 'Autre demande' },
  ],
};

// Menu principal
export const NAV = [
  { href: 'le-collectif', label: 'Le collectif' },
  { href: 'actions', label: 'Actions' },
  { href: 'ressources', label: 'Ressources' },
  { href: 'presse', label: 'Presse' },
  { href: 'contact', label: 'Contact' },
];

// Publications Instagram mises en avant (aperçus dans public/img/instagram/)
export const INSTAGRAM = [
  { image: 'img/instagram/calot-appel-temoignages.jpg', alt: "Port du calot à l'hôpital : ne laissons rien passer !" },
  { image: 'img/instagram/calot-jugement.jpg', alt: "Port du calot à l'hôpital ? Le combat n'est pas terminé !" },
  { image: 'img/instagram/recit-des-soignants.jpg', alt: "Islamophobie à l'hôpital, le récit des soignants : « Eh ben voilà, t'es bien plus belle comme ça »" },
  { image: 'img/instagram/reussir-etudes-medecine.jpg', alt: 'Comment réussir ses études de médecine' },
  { image: 'img/instagram/calot-post-unique.jpg', alt: 'Port du calot : ne banalisons rien, témoignez !' },
  { image: 'img/instagram/presentation-collectif.jpg', alt: 'Face aux discriminations dans le soin, soignants et patients se mobilisent' },
];
