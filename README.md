# Gaia D'Alessio — Editorial Portfolio

Un sito web portfolio accademico e professionale monopagina e multisezione, curato con direzione artistica editoriale (Anti-AI Look), 100% responsive e ottimizzato per il deployment su **Cloudflare Pages**.

Tutti i contenuti sono stati rigorosamente estratti e mappati dal documento ufficiale: `_GAIA_DALESSIO_CV_.pdf`.

---

## ✦ Direzione Artistica & Filosofia Visiva (Anti-AI Look)

- **Concept**: Editoriale, accademico-istituzionale, sobrio, ispirato all'eleganza parigina e alle pubblicazioni culturali d'alta scuola.
- **Palette Cromatica**:
  - Sfondo base carta/avorio riposante: `#FAF8F5` e `#F5F3EF`
  - Testo fumo antracite profondo: `#1A1918` (nessun nero `#000000` puro)
  - Bordi ultra-fini da 1px: `#E6E1DA`
  - Accenti sofisticati: Terracotta cipriato `#B76E59`, Salvia tenue `#7A8471`, Vinaccia desaturato `#6B3E48`
- **Tipografia**:
  - Titoli & Display: *Cormorant Garamond* (Google Fonts serif)
  - Testi, metadati e tabelle: *Plus Jakarta Sans* (Google Fonts sans-serif)
- **Standard Rigidi**:
  - Nessun gradiente neon o effetto glow sintetico.
  - Nessuna card stile SaaS/dashboard.
  - Nessuna progress bar percentuale per le lingue (usati standard ufficiali **QCER / CEFR** e certificazione DELE Cervantes B2).
  - Testi asciutti, colti e perfettamente allineati al curriculum vitae.

---

## ✦ Stack Tecnologico

- **Framework**: [Vue 3](https://vuejs.org/) (Composition API con `<script setup>`)
- **Build Tool**: [Vite 6](https://vite.dev/)
- **Linguaggio**: [TypeScript 5](https://www.typescriptlang.org/) (strict mode)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) + PostCSS + Autoprefixer
- **Iconografia**: [Lucide Icons](https://lucide.dev/)
- **Target Hosting**: [Cloudflare Pages](https://pages.cloudflare.com/)

---

## ✦ Architettura del Progetto

```
gdalessio-portfolio/
├── dist/                          # Output compilato pronto per Cloudflare Pages
├── public/
│   ├── _GAIA_DALESSIO_CV_.pdf     # File PDF originale scaricabile
│   ├── gaia_dalessio.jpg          # Ritratto fotografico ad alta risoluzione
│   ├── favicon.svg                # Favicon monogramma GD
│   ├── _headers                   # Regole di caching e sicurezza Cloudflare Pages
│   └── robots.txt
├── src/
│   ├── assets/
│   │   └── main.css               # Direttive Tailwind ed estensioni editoriali
│   ├── components/
│   │   ├── Navbar.vue             # Header fisso, monogramma, switch IT/EN, scarica CV
│   │   ├── HeroSection.vue        # Copertina tipografica, ritratto e credenziali
│   │   ├── AboutSection.vue       # Profilo biografico narrativo e tabella istituzionale
│   │   ├── EducationSection.vue   # Dettaglio 4 aree didattiche Università di Perugia
│   │   ├── ExperienceSection.vue  # Amnesty International Italia & Mediocasa
│   │   ├── ResearchSection.vue    # 4 focus di ricerca e metodologia applicata
│   │   ├── SkillsSection.vue      # Quadro QCER lingue & competenze trasversali
│   │   ├── ContactSection.vue     # Recapiti con copia al volo e box download
│   │   └── FooterSection.vue      # Colophon, copyright e back-to-top
│   ├── composables/
│   │   └── useLanguage.ts         # Gestione reattiva multilingua (IT | EN)
│   ├── data/
│   │   └── portfolioData.ts       # Mappatura rigorosa e tipizzata dei dati del CV
│   ├── types/
│   │   └── portfolio.ts           # Interfacce e tipi TypeScript
│   ├── App.vue                    # Layout monopagina
│   └── main.ts                    # Entry point Vue
├── index.html                     # Meta tag SEO, Open Graph e preconnect font
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## ✦ Installazione ed Esecuzione Locale

```bash
# Entra nella cartella del progetto
cd gdalessio-portfolio

# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev

# Esegui il check dei tipi e compila per la produzione
npm run build

# Anteprima locale della build
npm run preview
```

---

## ✦ Deployment su Cloudflare Pages

### Metodo 1: Git Integration (GitHub / GitLab)
1. Collega il repository su **Cloudflare Dashboard > Workers & Pages > Create application > Pages > Connect to Git**.
2. Configura le impostazioni di build:
   - **Framework preset**: `Vite` (o `None`)
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `gdalessio-portfolio` (se in monorepo) o `/`
3. Clicca su **Save and Deploy**.

### Metodo 2: Cloudflare Wrangler CLI (Deploy Diretto)
```bash
# Dalla cartella gdalessio-portfolio
npm run build
npx wrangler pages deploy dist --project-name gdalessio-portfolio
```

### Policy di Caching & Header di Sicurezza (`public/_headers`)
Il file `public/_headers` (automaticamente copiato in `dist/_headers`) applica:
- `Cache-Control: public, max-age=31536000, immutable` per gli asset versionati (`/assets/*`).
- `Cache-Control: public, max-age=0, must-revalidate` per `index.html` per garantire l'aggiornamento immediato ad ogni nuovo rilascio.
- Header di sicurezza: `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `Permissions-Policy`.
