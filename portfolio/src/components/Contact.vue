<template>
  <section id="contact" ref="elementRef" class="contact">
    <div class="container">
      <h2 class="section-title">Contactez-moi</h2>
      <div 
        class="contact-links"
        :class="{ 'animate-fade-in': isVisible }"
      >
        <a 
          href="mailto:quentin.delizee1@gmail.com" 
          class="contact-link"
          aria-label="Envoyer un email à Quentin Delizee"
        >
          <Mail class="contact-icon" :size="24" />
          <span class="contact-text">quentin.delizee1@gmail.com</span>
        </a>
        
        <a 
          href="https://github.com/20delizee" 
          target="_blank" 
          rel="noopener noreferrer"
          class="contact-link"
          aria-label="Visiter le profil GitHub de Quentin Delizee"
        >
          <Github class="contact-icon" :size="24" />
          <span class="contact-text">GitHub</span>
        </a>
        
        <a 
          href="https://www.linkedin.com/in/quentin-delizee-341386264/" 
          target="_blank" 
          rel="noopener noreferrer"
          class="contact-link"
          aria-label="Visiter le profil LinkedIn de Quentin Delizee"
        >
          <Linkedin class="contact-icon" :size="24" />
          <span class="contact-text">LinkedIn</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Mail, Github, Linkedin } from 'lucide-vue-next';
import { useScrollAnimation } from '../utils/useScrollAnimation';

// Utiliser le composable pour détecter la visibilité de la section
const { isVisible, elementRef } = useScrollAnimation(0.2, true);
</script>

<style scoped>
.contact {
  padding: var(--spacing-2xl) 0;
  background-color: var(--color-bg);
}

.contact-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-lg);
  max-width: 600px;
  margin: 0 auto;
  opacity: 0;
  transition: opacity var(--transition-base);
}

.contact-links.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-md) var(--spacing-lg);
  width: 100%;
  max-width: 500px;
  
  background-color: var(--color-bg-secondary);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: var(--radius-lg);
  
  color: var(--color-text);
  text-decoration: none;
  font-size: var(--font-size-lg);
  font-weight: 500;
  
  transition: 
    transform var(--transition-base),
    background-color var(--transition-base),
    border-color var(--transition-base),
    box-shadow var(--transition-base),
    color var(--transition-base);
}

.contact-link:hover {
  transform: scale(1.05);
  background-color: rgba(59, 130, 246, 0.1);
  border-color: var(--color-primary);
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
  color: var(--color-primary-light);
}

.contact-link:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 4px;
}

.contact-icon {
  flex-shrink: 0;
  color: var(--color-primary);
  transition: color var(--transition-base);
}

.contact-link:hover .contact-icon {
  color: var(--color-primary-light);
}

.contact-text {
  transition: color var(--transition-base);
}

/* Responsive Design */

/* Tablet (768px - 1024px) */
@media (max-width: 1024px) and (min-width: 768px) {
  .contact-links {
    gap: var(--spacing-md);
  }
  
  .contact-link {
    font-size: var(--font-size-base);
  }
}

/* Mobile (< 768px) */
@media (max-width: 767px) {
  .contact {
    padding: var(--spacing-xl) 0;
  }
  
  .contact-links {
    gap: var(--spacing-md);
    max-width: 100%;
  }
  
  .contact-link {
    padding: var(--spacing-sm) var(--spacing-md);
    font-size: var(--font-size-base);
    max-width: 100%;
  }
  
  .contact-text {
    font-size: var(--font-size-sm);
    word-break: break-all;
  }
}

/* Extra small mobile (< 375px) */
@media (max-width: 374px) {
  .contact-link {
    gap: var(--spacing-sm);
    padding: var(--spacing-sm);
  }
  
  .contact-icon {
    width: 20px;
    height: 20px;
  }
  
  .contact-text {
    font-size: var(--font-size-xs);
  }
}

/* Accessibility - Reduced Motion */
@media (prefers-reduced-motion: reduce) {
  .contact-links.animate-fade-in {
    animation: none;
    opacity: 1;
  }
  
  .contact-link {
    transition: none;
  }
  
  .contact-link:hover {
    transform: none;
  }
}
</style>
