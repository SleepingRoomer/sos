import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Visuel typographique affiché sur les cartes (mots en rouge entre crochets).
const couverture = z
  .object({
    titre: z.string(), // ex. "Port du [calot] à l'hôpital"
    surtitre: z.string().optional(),
    bas: z.string().optional(),
  })
  .optional();

// Actions du collectif : campagnes, affaires suivies, interventions, communiqués, événements.
// Pour en ajouter une : créer un fichier .md dans src/content/actions/ (voir le README).
const actions = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/actions' }),
  schema: z.object({
    titre: z.string(),
    date: z.coerce.date(),
    type: z.enum(['Campagne', 'Affaire suivie', 'Intervention', 'Communiqué', 'Événement', 'Série']),
    resume: z.string(),
    couverture,
    visuel: z.string().optional(), // visuel Instagram dans public/, affiché dans l'article
    image: z.string().optional(), // chemin dans public/, ex. /img/actions/calot.jpg
    imageAlt: z.string().optional(),
    lien: z.string().url().optional(), // lien externe (post Instagram, article…)
    lienTexte: z.string().optional(),
    une: z.boolean().default(false), // mise en avant en page d'accueil
    brouillon: z.boolean().default(false),
  }),
});

// Ressources : fiches pratiques, bibliographies, documents à télécharger, vidéos.
const ressources = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/ressources' }),
  schema: z.object({
    titre: z.string(),
    date: z.coerce.date(),
    type: z.enum(['Fiche pratique', 'Bibliographie', 'Document', 'Vidéo', 'Kit']),
    resume: z.string(),
    couverture,
    public: z.string().optional(), // ex. « Étudiant·es en santé »
    fichier: z.string().optional(), // PDF dans public/documents/, ex. /documents/fiche-calot.pdf
    lien: z.string().url().optional(),
    brouillon: z.boolean().default(false),
  }),
});

// Agenda : interventions et événements à venir.
// Sans date, l'événement s'affiche « Prochainement ».
const agenda = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/agenda' }),
  schema: z.object({
    titre: z.string(),
    date: z.coerce.date().optional(),
    heure: z.string().optional(), // ex. « 18 h 30 »
    lieu: z.string().optional(), // ex. « Faculté de médecine de Lyon »
    type: z.enum(['Intervention', 'Conférence', 'Atelier', 'Ciné-débat', 'Rassemblement', 'Événement']).default('Événement'),
    resume: z.string(),
    lien: z.string().url().optional(), // inscription, post Instagram…
    brouillon: z.boolean().default(false),
  }),
});

export const collections = { actions, ressources, agenda };
