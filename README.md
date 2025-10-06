# Kancelaria Adwokacka Romańska Krysa - Strona Internetowa

Profesjonalna strona internetowa dla kancelarii adwokackiej zbudowana przy użyciu Astro, React i Tailwind CSS.

## 🚀 Technologie

- **Astro 4.16** - Framework do generowania statycznych stron
- **React 18** - Biblioteka UI dla interaktywnych komponentów
- **Tailwind CSS 3** - Utility-first CSS framework
- **TypeScript** - Typowanie statyczne
- **Zod** - Walidacja danych w formularzach

## 📁 Struktura Projektu

```
/
├── public/              # Pliki statyczne (favicon, robots.txt)
├── src/
│   ├── components/      # Komponenty
│   │   ├── layout/      # Header, Footer, BaseHead
│   │   ├── react/       # Interaktywne komponenty React
│   │   ├── sections/    # Sekcje strony głównej
│   │   └── ui/          # Reużywalne komponenty UI
│   ├── content/         # Content Collections
│   │   ├── blog/        # Wpisy blogowe (Markdown)
│   │   └── specializations/  # Specjalizacje (Markdown)
│   ├── data/            # Dane JSON (team, testimonials, config)
│   ├── layouts/         # Layouty stron
│   ├── pages/           # Strony (routing)
│   ├── styles/          # Globalne style CSS
│   └── utils/           # Funkcje pomocnicze (SEO, Schema)
└── package.json
```

## 🎨 Design System

### Kolory
- **Główny:** Biały (#FFFFFF)
- **Tła:** Jasny szary (#F8F9FA)
- **Tekst:** Prawie czarny (#1A1A1A)
- **Akcent:** Burgundowy (#8B1538)

### Typografia
- **Nagłówki:** Cormorant Garamond (serif, elegancki)
- **Tekst:** Inter (sans-serif, czytelny)

## 🛠️ Komendy

| Komenda                | Akcja                                      |
|:----------------------|:-------------------------------------------|
| `npm install`          | Instalacja zależności                      |
| `npm run dev`          | Uruchomienie dev servera na `localhost:4321` |
| `npm run build`        | Build produkcyjny do `./dist/`            |
| `npm run preview`      | Podgląd buildu lokalnie                   |
| `npm run astro`        | Komendy CLI Astro                         |

## 📝 Edycja Treści

### Dodawanie Wpisu Blogowego

1. Utwórz nowy plik `.md` w `src/content/blog/`
2. Dodaj frontmatter:

```markdown
---
title: "Tytuł wpisu"
description: "Krótki opis"
pubDate: 2024-01-15
author: "Autor"
tags: ["Tag1", "Tag2"]
image: "/assets/images/blog/obrazek.jpg"
---

Treść wpisu...
```

### Dodawanie Specjalizacji

1. Utwórz plik `.md` w `src/content/specializations/`
2. Dodaj frontmatter:

```markdown
---
title: "Nazwa Specjalizacji"
description: "Krótki opis"
icon: "scale"  # dostępne: scale, briefcase, document, users, shield
order: 1
metaDescription: "Meta opis dla SEO"
---

Treść specjalizacji...
```

### Edycja Danych Zespołu

Edytuj plik `src/data/team.json`:

```json
{
  "id": "jan-kowalski",
  "name": "Adwokat Jan Kowalski",
  "title": "Partner",
  "specializations": ["Prawo Karne"],
  "image": "/assets/images/team/kowalski.jpg",
  "bio": "Opis...",
  "email": "jan@adwokat-rk.pl",
  "phone": "+48 123 456 789"
}
```

### Edycja Opinii Klientów

Edytuj plik `src/data/testimonials.json`

### Edycja Danych Kontaktowych

Edytuj plik `src/data/site-config.json`

## 🔧 Konfiguracja

### Zmiana Domeny

W pliku `astro.config.mjs` zmień:

```javascript
export default defineConfig({
  site: 'https://twoja-domena.pl',
  // ...
});
```

Zaktualizuj także w:
- `src/utils/schema.ts`
- `public/robots.txt`

### Customizacja Kolorów

W pliku `tailwind.config.cjs` w sekcji `theme.extend.colors`

## 🚢 Deployment

### Vercel (Zalecane)

1. Połącz repozytorium z Vercel
2. Framework Preset: Astro (auto-detect)
3. Deploy

### Netlify

1. Połącz repozytorium z Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy

### Inne

Build tworzy statyczne pliki w folderze `dist/`, które mogą być hostowane na dowolnym serwerze obsługującym statyczne pliki.

## 📦 Integracja Formularza Kontaktowego

Formularz wymaga backendu do wysyłania wiadomości. Opcje:

1. **Formspree** (zalecane)
   - Zarejestruj się na formspree.io
   - Zaktualizuj endpoint w `src/components/react/ContactForm.tsx`

2. **Netlify Forms**
   - Dodaj atrybut `netlify` do formularza

3. **Custom Backend**
   - Implementuj własny endpoint API

## 📊 Analytics

Projekt jest przygotowany do integracji z:
- Google Analytics
- Plausible Analytics (privacy-friendly)
- Simple Analytics

Dodaj skrypt trackingu w `src/components/layout/BaseHead.astro`

## ✨ Funkcje

- ✅ Responsywny design (mobile-first)
- ✅ Optymalizacja Core Web Vitals
- ✅ SEO-friendly (meta tags, sitemap, robots.txt)
- ✅ Schema.org markup (JSON-LD)
- ✅ Dostępność (a11y)
- ✅ Interaktywny formularz kontaktowy z walidacją
- ✅ Blog z Markdown
- ✅ Dynamiczne routing dla specjalizacji i postów
- ✅ Content Collections (type-safe content)

## 📄 Licencja

Projekt stworzony dla Kancelarii Adwokackiej Romańska Krysa.

## 🤝 Wsparcie

W przypadku pytań lub problemów, skontaktuj się z developerem projektu.
