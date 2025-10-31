<script setup lang="ts">
import { ref, onMounted } from 'vue';
import ProjectCard from './ProjectCard.vue';
import { useScrollAnimation } from '../utils/useScrollAnimation';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  status?: string;
}

const projects: Project[] = [
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

const { isVisible, elementRef } = useScrollAnimation(0.1);
const cardRefs = ref<HTMLElement[]>([]);

const animateCards = () => {
  cardRefs.value.forEach((card, index) => {
    if (card) {
      setTimeout(() => {
        card.classList.add('animate-fade-in-up');
      }, index * 100);
    }
  });
};

onMounted(() => {
  if (isVisible.value) {
    animateCards();
  }
  
  // Watch for visibility changes
  const observer = new MutationObserver(() => {
    if (isVisible.value && cardRefs.value.length > 0) {
      animateCards();
    }
  });
  
  if (elementRef.value) {
    observer.observe(elementRef.value, { attributes: true });
  }
});
</script>

<template>
  <div ref="elementRef" class="projects" :class="{ 'is-visible': isVisible }">
    <div class="container">
      <h2 id="projects-title" class="section-title">Mes Projets</h2>
      <div class="projects-grid">
        <div
          v-for="(project, index) in projects"
          :key="project.title"
          :ref="el => { if (el) cardRefs[index] = el as HTMLElement }"
          class="project-wrapper"
        >
          <ProjectCard
            :title="project.title"
            :description="project.description"
            :technologies="project.technologies"
            :status="project.status"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.projects {
  padding: var(--spacing-2xl) 0;
  background: var(--color-bg);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-text);
  text-align: center;
  margin-bottom: var(--spacing-xl);
  line-height: 1.2;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
}

.project-wrapper {
  opacity: 0;
  transform: translateY(30px);
}

.project-wrapper.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}

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

/* Responsive design */
@media (max-width: 768px) {
  .projects {
    padding: var(--spacing-xl) 0;
  }

  .section-title {
    font-size: 2rem;
    margin-bottom: var(--spacing-lg);
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
  }

  .container {
    padding: 0 var(--spacing-md);
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .section-title {
    font-size: 2.25rem;
  }
}

/* Accessibility: Respect reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  .project-wrapper {
    opacity: 1;
    transform: none;
  }

  .project-wrapper.animate-fade-in-up {
    animation: none;
  }
}
</style>
