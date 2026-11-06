// Filtre les cartes d'une liste selon leur type (attribut data-type).
export function activerFiltres() {
  const boutons = document.querySelectorAll<HTMLButtonElement>('[data-filtre]');
  const cartes = document.querySelectorAll<HTMLElement>('[data-liste] [data-type]');
  boutons.forEach((bouton) => {
    bouton.addEventListener('click', () => {
      const filtre = bouton.dataset.filtre ?? '';
      boutons.forEach((b) => b.setAttribute('aria-pressed', String(b === bouton)));
      cartes.forEach((carte) => {
        carte.hidden = filtre !== '' && carte.dataset.type !== filtre;
      });
    });
  });
}
