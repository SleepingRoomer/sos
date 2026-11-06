import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Actions du collectif : campagnes, affaires suivies, interventions, communiqués, événements.
// Pour en ajouter une : créer un fichier .md dans src/content/actions/ (voir le README).
const actions = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/actions' }),
  schema: z.object({
    titre: z.string(),
    date: z.coerce.date(),
    type: z.enum(['Campagne', 'Affaire suivie', 'Intervention', 'Communiqué', 'Événement']),
    resume: z.string(),
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
    public: z.string().optional(), // ex. « Étudiant·es en santé »
    fichier: z.string().optional(), // PDF dans public/documents/, ex. /documents/fiche-calot.pdf
    lien: z.string().url().optional(),
    brouillon: z.boolean().default(false),
  }),
});

export const collections = { actions, ressources };
