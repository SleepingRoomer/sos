// Informations générales du collectif : modifier ici, tout le site suit.

export const SITE = {
  nom: 'Soigner ou Saigner',
  sigle: 'SOS',
  description:
    "Collectif de soignant·es contre les discriminations dans la santé, notamment l'islamophobie. Écoute, soutien, témoignages et ressources.",
  email: 'soigner.ou.saigner@gmail.com',
  instagram: {
    pseudo: '@soigner_ou_saigner',
    url: 'https://www.instagram.com/soigner_ou_saigner/',
  },
};

// Formulaire d'appel à témoignages (Google Forms, compte du collectif).
export const FORMULAIRE = {
  titre: 'Appel à témoignages – Port du calot à l’hôpital',
  url: 'https://docs.google.com/forms/d/e/1FAIpQLSeevpLPj0EcFbbzIeLrvczWs7n_FmkYm-V4uEAeV6Mho_2LIg/viewform',
  embed:
    'https://docs.google.com/forms/d/e/1FAIpQLSeevpLPj0EcFbbzIeLrvczWs7n_FmkYm-V4uEAeV6Mho_2LIg/viewform?embedded=true',
};

// Menu principal
export const NAV = [
  { href: 'le-collectif', label: 'Le collectif' },
  { href: 'actions', label: 'Actions' },
  { href: 'ressources', label: 'Ressources' },
  { href: 'presse', label: 'Presse' },
  { href: 'contact', label: 'Contact' },
];

// Lien e-mail avec objet prérempli
export const mailto = (objet: string) =>
  `mailto:${SITE.email}?subject=${encodeURIComponent(objet)}`;
