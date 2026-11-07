# Site du collectif Soigner ou Saigner (SOS)

Site vitrine du collectif : présentation, appel à témoignages (formulaire intégré), actions, ressources, espace presse et contact.

Fait avec [Astro](https://astro.build). Les contenus sont de simples fichiers texte (Markdown) : pas besoin de savoir coder pour publier une action ou une ressource.

## Publier une action ou une ressource (sans rien installer)

1. Sur GitHub, ouvrez le dossier `src/content/actions/` (ou `src/content/ressources/`).
2. Cliquez sur **Add file → Create new file**.
3. Nommez le fichier, par exemple `2026-12-intervention-fac-lyon.md` (ce nom devient l'adresse de la page).
4. Copiez le modèle ci-dessous, remplissez-le, puis cliquez sur **Commit changes**.
5. Le site se met à jour tout seul en 1 à 2 minutes (onglet **Actions** pour suivre).

### Modèle d'action

```markdown
---
titre: "Titre de l'action"
date: 2026-12-01
type: Intervention   # Campagne, Affaire suivie, Intervention, Communiqué, Événement ou Série
resume: "Une ou deux phrases qui apparaissent sur les cartes."
couverture:          # visuel de la carte, dans la DA des carrousels
  surtitre: "Intervention en fac"
  titre: "Le soin n'est pas [neutre] !"   # mots en rouge entre crochets
visuel: /img/instagram/mon-visuel.jpg   # facultatif : aperçu du post Instagram (public/img/instagram/)
# image: /img/actions/mon-image.jpg   # facultatif : déposer l'image dans public/img/actions/
# imageAlt: "Description de l'image"
# lien: https://www.instagram.com/p/...   # facultatif : lien vers le post
# lienTexte: "Voir le post Instagram"
# brouillon: true   # pour préparer sans publier
---

Le texte de l'action. **Gras**, *italique*, listes avec des tirets,
liens internes comme [témoigner](/temoigner).

## Un intertitre

Suite du texte.
```

Les actions de type **Communiqué** apparaissent aussi dans l'espace presse.

### Modèle de ressource

```markdown
---
titre: "Titre de la ressource"
date: 2026-12-01
type: Fiche pratique   # Fiche pratique, Bibliographie, Document, Vidéo ou Kit
public: "Étudiant·es en santé"
resume: "Une ou deux phrases qui apparaissent sur les cartes."
# fichier: /documents/ma-fiche.pdf   # facultatif : déposer le PDF dans public/documents/
# lien: https://...                   # facultatif : ressource externe
---

Contenu de la ressource.
```

## Modifier les informations générales

E-mail, Instagram, formulaires Google, motifs du formulaire de contact, menu et galerie Instagram de l'accueil :
tout est dans `src/config.ts`. Pour une nouvelle campagne de témoignages, remplacez simplement l'`url` du formulaire.

## Formulaire de contact

Les messages de la page Contact sont envoyés par e-mail via [Web3Forms](https://web3forms.com).
La clé d'accès (gratuite) se renseigne dans `src/config.ts`, champ `CONTACT.cle`. Pour en obtenir une : sur
web3forms.com, saisir soigner.ou.saigner@gmail.com, la clé arrive par e-mail.
Si l'envoi échoue, le site propose d'ouvrir la messagerie avec le message déjà rédigé, ou de le copier.

## Mise en ligne (une seule fois)

Dans le dépôt GitHub : **Settings → Pages → Build and deployment → Source : GitHub Actions**.
Le site est alors publié à l'adresse https://sleepingroomer.github.io/sos/ à chaque modification.

**Avec un nom de domaine** (ex. `soigner-ou-saigner.fr`) : dans `.github/workflows/deploy.yml`, mettez
`SITE_URL: https://soigner-ou-saigner.fr` et `BASE_PATH: /`, ajoutez le domaine dans **Settings → Pages → Custom domain**,
puis configurez le DNS chez le registrar comme indiqué par GitHub.

## Travailler en local

```bash
npm install
npm run dev     # aperçu sur http://localhost:4321/sos/
npm run build   # génère le site dans dist/
```

## À compléter

- `src/pages/mentions-legales.astro` : statut du collectif et nom du ou de la directeur·rice de la publication (obligatoire).
- Lien de dons ou d'adhésion, si le collectif en a un.

## Choix techniques

- Police : Montserrat Arabic (Mohamed Gaber, licence libre SIL OFL 1.1, fichiers dans `src/assets/fonts/`).
- Aucun cookie, aucune mesure d'audience, polices hébergées sur le site (pas d'appel à Google Fonts).
- Le formulaire Google ne se charge qu'au clic, pour ne pas exposer les visiteur·ses à Google sans leur accord.
- DA reprise des visuels Instagram : bleu `#006476`, rouge `#c81111`, titres en capitales entre deux filets rouges, angles droits.
