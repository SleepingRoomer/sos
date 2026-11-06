// @ts-check
import { defineConfig } from 'astro/config';

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

export default defineConfig({
  site,
  base: base || '/',
  trailingSlash: 'ignore',
  compressHTML: false, // garde les espaces entre le texte et les liens
  build: { format: 'directory' },
  markdown: { rehypePlugins: [prefixerLiensInternes] },
});
