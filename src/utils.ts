// Préfixe un chemin interne avec la base du site (utile sur GitHub Pages).
export function url(path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.replace(/^\//, '');
  return clean ? `${base}/${clean}` : `${base}/`;
}

export function dateFr(d: Date): string {
  return d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
}

export function isoDate(d: Date): string {
  return d.toISOString().slice(0, 10);
}
