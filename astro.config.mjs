// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Adresse du site. Par défaut : GitHub Pages (https://sleepingroomer.github.io/sos/).
// Avec un nom de domaine (ex. soigner-ou-saigner.fr), définir SITE_URL=https://soigner-ou-saigner.fr
// et BASE_PATH=/ dans le workflow .github/workflows/deploy.yml.
const site = process.env.SITE_URL ?? 'https://sleepingroomer.github.io';
const base = (process.env.BASE_PATH ?? '/sos').replace(/\/$/, '');

// Dans les fichiers Markdown, on écrit les liens internes simplement (« /temoigner »).
// Ce petit plugin ajoute le préfixe du site (« /sos ») quand il y en a un.
function prefixerLiensInternes() {
  /** @param {any} node */
  const visiter = (node) => {
    if (node.type === 'element') {
      for (const attr of ['href', 'src']) {
        const v = node.properties?.[attr];
        if (typeof v === 'string' && v.startsWith('/') && !v.startsWith('//') && base && !v.startsWith(base + '/')) {
          node.properties[attr] = base + v;
        }
      }
    }
    node.children?.forEach(visiter);
  };
  return visiter;
}

// Typographie française : espace insécable avant ; : ! ? » et après «,
// pour éviter qu'un signe se retrouve seul en début de ligne.
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

function typographieFrancaise() {
  /** @param {string} texte */
  const corriger = (texte) => texte.replace(/ ([:;!?»])/g, ' $1').replace(/« /g, '« ');
  /** @param {string} html */
  const traiter = (html) => {
    // On ne touche qu'au texte visible, jamais aux scripts, styles ni champs de saisie.
    const morceaux = html.split(/(<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<textarea[\s\S]*?<\/textarea>|<[^>]+>)/);
    return morceaux.map((m) => (m.startsWith('<') ? m : corriger(m))).join('');
  };
  /** @param {string} dossier @returns {Promise<string[]>} */
  const lister = async (dossier) => {
    const entrees = await readdir(dossier, { withFileTypes: true });
    const fichiers = await Promise.all(
      entrees.map((e) => (e.isDirectory() ? lister(join(dossier, e.name)) : [join(dossier, e.name)])),
    );
    return fichiers.flat().filter((f) => f.endsWith('.html'));
  };
  return {
    name: 'typographie-francaise',
    hooks: {
      /** @param {{ dir: URL }} options */
      'astro:build:done': async ({ dir }) => {
        for (const fichier of await lister(fileURLToPath(dir))) {
          const html = await readFile(fichier, 'utf8');
          await writeFile(fichier, traiter(html));
        }
      },
    },
  };
}

export default defineConfig({
  site,
  base: base || '/',
  trailingSlash: 'ignore',
  compressHTML: false, // garde les espaces entre le texte et les liens
  build: { format: 'directory' },
  markdown: { rehypePlugins: [prefixerLiensInternes] },
  integrations: [typographieFrancaise(), sitemap({ filter: (page) => !page.includes('/contact/merci') })],
});
