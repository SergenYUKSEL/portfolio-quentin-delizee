# Design Document - Portfolio Quentin Delizee

## Overview

Le portfolio de Quentin Delizee sera construit avec Astro comme framework principal et Vue pour les composants interactifs. Cette architecture permet d'obtenir d'excellentes performances (Astro génère du HTML statique) tout en offrant des animations fluides et interactives (Vue pour les composants dynamiques).

### Architecture Technique

- **Framework principal**: Astro 5.x (génération de sites statiques)
- **Framework UI**: Vue 3.x (composants interactifs)
- **Animations**: CSS animations + Vue transitions + bibliothèque GSAP (GreenSock) pour les animations complexes
- **Styling**: CSS moderne avec variables CSS et possiblement TailwindCSS pour un développement rapide
- **Icons**: Lucide Icons ou Heroicons pour les icônes de compétences et réseaux sociaux

## Architecture

### Structure des Fichiers

```
portfolio/
├── src/
│   ├── components/          # Composants Vue réutilisables
│   │   ├── Hero.vue        # Section hero avec animations
│   │   ├── About.vue       # Section à propos
│   │   ├── Skills.vue      # Section compétences avec grid
│   │   ├── SkillCard.vue   # Carte individuelle de compétence
│   │   ├── Projects.vue    # Section projets
│   │   ├── ProjectCard.vue # Carte individuelle de projet
│   │   ├── Contact.vue     # Section contact
│   │   └── Footer.vue      # Footer avec copyright
│   ├── layouts/
│   │   └── Layout.astro    # Layout principal avec meta tags
│   ├── pages/
│   │   └── index.astro     # Page d'accueil (composition des sections)
│   ├── styles/
│   │   ├── global.css      # Styles globaux et variables CSS
│   │   └── animations.css  # Animations réutilisables
│   └── utils/
│       └── animations.ts   # Helpers pour les animations (intersection observer)
├── public/
│   ├── favicon.svg
│   └── images/             # Images des projets (à ajouter)
└── astro.config.mjs
```

### Flux de Navigation

Le portfolio sera une **Single Page Application (SPA)** avec scroll fluide entre les sections :

```
Hero Section (viewport complet)
    ↓ (scroll avec animation)
About Section
    ↓ (scroll avec animation)
Skills Section
    ↓ (scroll avec animation)
Projects Section
    ↓ (scroll avec animation)
Contact Section
    ↓
Footer
```

## Components and Interfaces

### 1. Layout.astro (Layout Principal)

**Responsabilité**: Wrapper principal avec meta tags, fonts, et styles globaux

**Structure**:
```astro
---
interface Props {
  title: string;
  description: string;
}
---
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{title}</title>
    <meta name="description" content={description} />
    <!-- Google Fonts pour typographie moderne -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
  </head>
  <body>
    <slot />
  </body>
</html>
```

### 2. Hero.vue (Section Hero)

**Responsabilité**: Section d'accueil avec animations d'entrée impressionnantes

**Props**: Aucun (contenu statique)

**Animations**:
- Fade-in + slide-up pour le nom (délai: 0.2s)
- Fade-in + slide-up pour le titre (délai: 0.4s)
- Fade-in pour le CTA scroll indicator (délai: 0.8s)
- Effet parallax subtil sur le background au scroll

**Structure**:
```vue
<template>
  <section class="hero">
    <div class="hero-content">
      <h1 class="hero-name">Quentin Delizee</h1>
      <p class="hero-title">Développeur Full Stack</p>
      <div class="scroll-indicator">
        <span>Découvrir</span>
        <svg><!-- Icône flèche vers le bas --></svg>
      </div>
    </div>
  </section>
</template>
```

**Styles clés**:
- Height: 100vh
- Background: Gradient moderne ou effet glassmorphism
- Centrage vertical et horizontal du contenu
- Typographie: Font size large (48-72px pour le nom)

### 3. About.vue (Section À Propos)

**Responsabilité**: Présentation personnelle avec animation au scroll

**Props**: Aucun (contenu statique)

**Animations**:
- Fade-in + slide-right pour le texte quand visible (Intersection Observer)
- Optionnel: Avatar ou illustration avec effet de rotation subtile

**Structure**:
```vue
<template>
  <section id="about" class="about">
    <div class="container">
      <h2 class="section-title">À Propos</h2>
      <div class="about-content">
        <p class="about-text">
          Bienvenue sur mon portfolio ! Je suis un développeur full stack 
          passionné par les technologies web modernes comme React, Node.js, 
          Express, MongoDB, ainsi que l'intégration des outils IA tels que 
          GitHub Copilot, Qwen et ChatGPT.
        </p>
      </div>
    </div>
  </section>
</template>
```

### 4. Skills.vue + SkillCard.vue (Section Compétences)

**Responsabilité**: Affichage des compétences techniques en grid avec animations

**Props Skills.vue**: Aucun

**Props SkillCard.vue**:
```typescript
interface SkillCardProps {
  name: string;      // Ex: "ReactJS"
  icon: string;      // Nom de l'icône ou URL
  category: string;  // Ex: "Frontend", "Backend", "Tools", "AI"
}
```

**Animations**:
- Staggered fade-in pour chaque carte (délai progressif: 0.1s entre chaque)
- Hover: Scale up (1.05) + shadow elevation
- Transition smooth sur toutes les propriétés

**Structure Skills.vue**:
```vue
<template>
  <section id="skills" class="skills">
    <div class="container">
      <h2 class="section-title">Compétences</h2>
      <div class="skills-grid">
        <SkillCard 
          v-for="skill in skills" 
          :key="skill.name"
          :name="skill.name"
          :icon="skill.icon"
          :category="skill.category"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const skills = [
  { name: 'HTML', icon: 'html', category: 'Frontend' },
  { name: 'CSS', icon: 'css', category: 'Frontend' },
  { name: 'JavaScript', icon: 'javascript', category: 'Frontend' },
  { name: 'ReactJS', icon: 'react', category: 'Frontend' },
  { name: 'PHP', icon: 'php', category: 'Backend' },
  { name: 'NodeJS', icon: 'nodejs', category: 'Backend' },
  { name: 'Express', icon: 'express', category: 'Backend' },
  { name: 'MongoDB', icon: 'mongodb', category: 'Database' },
  { name: 'SQL', icon: 'sql', category: 'Database' },
  { name: 'Swagger', icon: 'swagger', category: 'Tools' },
  { name: 'GitHub', icon: 'github', category: 'Tools' },
  { name: 'Figma', icon: 'figma', category: 'Design' },
  { name: 'GitHub Copilot', icon: 'copilot', category: 'AI' },
  { name: 'ChatGPT', icon: 'chatgpt', category: 'AI' },
  { name: 'Qwen', icon: 'qwen', category: 'AI' }
];
</script>
```

**Structure SkillCard.vue**:
```vue
<template>
  <div class="skill-card">
    <div class="skill-icon">
      <!-- Icône SVG ou image -->
    </div>
    <h3 class="skill-name">{{ name }}</h3>
    <span class="skill-category">{{ category }}</span>
  </div>
</template>
```

**Layout Grid**:
- Desktop (>1024px): 5 colonnes
- Tablet (768-1024px): 3 colonnes
- Mobile (<768px): 2 colonnes
- Gap: 1.5rem
- Cards: Aspect ratio carré ou légèrement rectangulaire

### 5. Projects.vue + ProjectCard.vue (Section Projets)

**Responsabilité**: Présentation des projets avec détails et technologies

**Props Projects.vue**: Aucun

**Props ProjectCard.vue**:
```typescript
interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  status?: string;  // Ex: "en cours"
  link?: string;    // Optionnel: lien vers le projet
}
```

**Animations**:
- Fade-in + slide-up pour chaque carte au scroll
- Hover: Lift effect (translateY: -8px) + shadow
- Transition sur background et border

**Structure Projects.vue**:
```vue
<template>
  <section id="projects" class="projects">
    <div class="container">
      <h2 class="section-title">Mes Projets</h2>
      <div class="projects-grid">
        <ProjectCard 
          v-for="project in projects" 
          :key="project.title"
          v-bind="project"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const projects = [
  {
    title: 'Taskflow',
    description: 'Création et gestion des tâches : Les utilisateurs peuvent créer des tâches avec un titre, une description, une date d\'échéance, une priorité (haute, moyenne, basse) et un statut (à faire, en cours, terminé). Possibilité de regrouper les tâches par projets ou catégories.',
    technologies: ['NodeJS', 'Express', 'Swagger', 'ReactJS', 'CSS']
  },
  {
    title: 'API manga',
    description: 'Création d\'une API afin d\'y intégrer tous les mangas disponibles en français + un front pour y ajouter des mangas ou des tomes qui viennent de sortir à un manga existant.',
    technologies: ['NodeJS', 'Express', 'Swagger', 'ReactJS', 'CSS']
  },
  {
    title: 'Bibliothèque manga',
    description: 'À l\'aide de l\'API manga, l\'utilisateur peut se créer un compte et ajouter des mangas à sa bibliothèque ce qui peut lui permettre de savoir ce qu\'il veut acheter dans le futur.',
    technologies: ['NodeJS', 'Express', 'Swagger', 'ReactJS', 'CSS']
  },
  {
    title: 'Site de cybersécurité',
    description: 'Le site permettra de signaler les potentiels sites arnaque ou phishing avec un formulaire à remplir. Des admins devront gérer le ticket afin de le valider ou non. Si c\'est validé, le site se retrouvera dans la liste des sites dangereux à faire bannir.',
    technologies: ['NodeJS', 'Express', 'Swagger', 'NextJS', 'TailwindCSS'],
    status: 'en cours'
  }
];
</script>
```

**Structure ProjectCard.vue**:
```vue
<template>
  <article class="project-card">
    <div class="project-header">
      <h3 class="project-title">{{ title }}</h3>
      <span v-if="status" class="project-status">{{ status }}</span>
    </div>
    <p class="project-description">{{ description }}</p>
    <div class="project-technologies">
      <span 
        v-for="tech in technologies" 
        :key="tech"
        class="tech-tag"
      >
        {{ tech }}
      </span>
    </div>
  </article>
</template>
```

**Layout Grid**:
- Desktop: 2 colonnes
- Mobile: 1 colonne
- Gap: 2rem

### 6. Contact.vue (Section Contact)

**Responsabilité**: Affichage des informations de contact avec liens

**Props**: Aucun (contenu statique)

**Animations**:
- Fade-in pour le contenu
- Hover sur les liens: Scale + color change

**Structure**:
```vue
<template>
  <section id="contact" class="contact">
    <div class="container">
      <h2 class="section-title">Contactez-moi</h2>
      <div class="contact-links">
        <a href="mailto:quentin.delizee1@gmail.com" class="contact-link">
          <svg><!-- Icône email --></svg>
          <span>quentin.delizee1@gmail.com</span>
        </a>
        <a href="https://github.com/20delizee" target="_blank" rel="noopener noreferrer" class="contact-link">
          <svg><!-- Icône GitHub --></svg>
          <span>GitHub</span>
        </a>
        <a href="https://www.linkedin.com/in/quentin-delizee-341386264/" target="_blank" rel="noopener noreferrer" class="contact-link">
          <svg><!-- Icône LinkedIn --></svg>
          <span>LinkedIn</span>
        </a>
      </div>
    </div>
  </section>
</template>
```

### 7. Footer.vue (Footer)

**Responsabilité**: Copyright et informations légales

**Props**: Aucun

**Structure**:
```vue
<template>
  <footer class="footer">
    <div class="container">
      <p class="copyright">© 2025 Quentin Delizee - Portfolio Personnel</p>
    </div>
  </footer>
</template>
```

## Data Models

### Skill Model
```typescript
interface Skill {
  name: string;
  icon: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools' | 'Design' | 'AI';
}
```

### Project Model
```typescript
interface Project {
  title: string;
  description: string;
  technologies: string[];
  status?: string;
  link?: string;
  image?: string;  // Pour une future amélioration
}
```

## Styling Strategy

### Design System

**Palette de Couleurs** (suggestion moderne):
```css
:root {
  /* Primary colors */
  --color-primary: #3b82f6;      /* Bleu moderne */
  --color-primary-dark: #2563eb;
  --color-primary-light: #60a5fa;
  
  /* Neutral colors */
  --color-bg: #0f172a;           /* Dark blue-gray */
  --color-bg-secondary: #1e293b;
  --color-text: #f1f5f9;
  --color-text-secondary: #cbd5e1;
  
  /* Accent */
  --color-accent: #8b5cf6;       /* Purple pour highlights */
  
  /* Spacing */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;
  --spacing-2xl: 4rem;
  
  /* Typography */
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-mono: 'Fira Code', monospace;
  
  /* Transitions */
  --transition-fast: 0.2s ease;
  --transition-base: 0.3s ease;
  --transition-slow: 0.5s ease;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);
}
```

**Typographie**:
- Headings: Font weight 700, line-height 1.2
- Body: Font weight 400, line-height 1.6
- H1 (Hero name): 48-72px
- H2 (Section titles): 32-48px
- H3 (Card titles): 20-24px
- Body: 16-18px

### Responsive Breakpoints
```css
/* Mobile first approach */
--breakpoint-sm: 640px;   /* Small devices */
--breakpoint-md: 768px;   /* Tablets */
--breakpoint-lg: 1024px;  /* Laptops */
--breakpoint-xl: 1280px;  /* Desktops */
```

## Animation Strategy

### Intersection Observer Pattern

Utiliser un composable Vue pour détecter quand les sections entrent dans le viewport :

```typescript
// src/utils/useScrollAnimation.ts
import { onMounted, onUnmounted, ref } from 'vue';

export function useScrollAnimation(threshold = 0.1) {
  const isVisible = ref(false);
  const elementRef = ref<HTMLElement | null>(null);
  
  onMounted(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isVisible.value = true;
        }
      },
      { threshold }
    );
    
    if (elementRef.value) {
      observer.observe(elementRef.value);
    }
    
    onUnmounted(() => observer.disconnect());
  });
  
  return { isVisible, elementRef };
}
```

### Animation Classes

```css
/* animations.css */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}

.animate-fade-in {
  animation: fadeIn 0.6s ease-out forwards;
}

.animate-slide-in-right {
  animation: slideInRight 0.6s ease-out forwards;
}

/* Stagger delays for multiple items */
.stagger-1 { animation-delay: 0.1s; }
.stagger-2 { animation-delay: 0.2s; }
.stagger-3 { animation-delay: 0.3s; }
/* ... jusqu'à stagger-15 pour les 15 skills */
```

### Smooth Scroll

```css
html {
  scroll-behavior: smooth;
}

/* Pour un contrôle plus fin, utiliser JavaScript */
```

## Error Handling

### Cas d'Erreur Potentiels

1. **Images manquantes**: Utiliser des placeholders ou des icônes SVG inline
2. **Liens externes cassés**: Ajouter `rel="noopener noreferrer"` pour la sécurité
3. **Animations sur devices bas de gamme**: Utiliser `prefers-reduced-motion` media query

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Testing Strategy

### Tests Manuels

1. **Responsive Testing**:
   - Tester sur mobile (375px), tablet (768px), desktop (1440px)
   - Vérifier que toutes les sections s'adaptent correctement
   - Tester l'orientation portrait et paysage sur mobile

2. **Animation Testing**:
   - Vérifier que les animations se déclenchent au bon moment
   - Tester le smooth scroll entre sections
   - Vérifier les performances (pas de lag)

3. **Accessibility Testing**:
   - Navigation au clavier (Tab, Enter)
   - Test avec screen reader (VoiceOver sur Mac)
   - Vérifier le contraste des couleurs (WCAG AA minimum)

4. **Browser Testing**:
   - Chrome, Firefox, Safari, Edge
   - Versions mobiles de ces navigateurs

5. **Performance Testing**:
   - Lighthouse score (viser >90 pour Performance)
   - Temps de chargement initial (<3s)
   - First Contentful Paint (<1.5s)

### Validation

- Valider le HTML avec W3C Validator
- Vérifier qu'il n'y a pas d'erreurs console
- Tester tous les liens (email, GitHub, LinkedIn)

## Performance Optimizations

1. **Images**: Utiliser le format WebP avec fallback
2. **Fonts**: Précharger les fonts critiques
3. **CSS**: Minifier et combiner les fichiers CSS
4. **JavaScript**: Astro charge automatiquement le minimum de JS
5. **Lazy Loading**: Les composants Vue ne se chargent que quand nécessaire
6. **Critical CSS**: Inline le CSS critique dans le `<head>`

## Future Enhancements (Hors scope initial)

- Mode sombre / clair toggle
- Formulaire de contact fonctionnel avec backend
- Blog section
- Animations plus complexes avec GSAP
- Filtres pour les projets par technologie
- Galerie d'images pour chaque projet
- Internationalisation (FR/EN)
