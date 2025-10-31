<template>
  <div ref="elementRef" class="about">
    <div class="container">
      <h2 class="section-title">À Propos</h2>
      <div 
        class="about-content"
        :class="{ 'animate-slide-in-right': isVisible }"
      >
        <p class="about-text">
          Bienvenue sur mon portfolio ! Je suis un développeur full stack 
          passionné par les technologies web modernes comme React, Node.js, 
          Express, MongoDB, ainsi que l'intégration des outils IA tels que 
          GitHub Copilot, Qwen et ChatGPT.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useScrollAnimation } from '../utils/useScrollAnimation';

// Utiliser le composable pour détecter la visibilité de la section
const { isVisible, elementRef } = useScrollAnimation(0.2, true);
</script>

<style scoped>
.about {
  padding: var(--spacing-2xl) 0;
  background-color: var(--color-bg);
}

.about-content {
  max-width: 800px;
  margin: 0 auto;
  opacity: 0;
  transition: opacity var(--transition-base);
}

.about-content.animate-slide-in-right {
  animation: slideInRight 0.8s ease-out forwards;
}

.about-text {
  font-size: clamp(1rem, 2vw, 1.125rem);
  line-height: 1.8;
  color: var(--color-text-secondary);
  text-align: center;
  margin: 0;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .about {
    padding: var(--spacing-xl) 0;
  }
  
  .about-content {
    max-width: 100%;
  }
  
  .about-text {
    text-align: left;
    font-size: var(--font-size-base);
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .about-content {
    max-width: 700px;
  }
}

/* Accessibility - Reduced Motion */
@media (prefers-reduced-motion: reduce) {
  .about-content.animate-slide-in-right {
    animation: none;
    opacity: 1;
    transform: none;
  }
}
</style>
