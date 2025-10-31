<template>
  <div class="hero">
    <div class="hero-content">
      <h1 class="hero-name animate-fade-in-up stagger-1">
        Quentin Delizee
      </h1>
      <p class="hero-title animate-fade-in-up stagger-2">
        Développeur Full Stack
      </p>
      <a 
        href="#about" 
        class="scroll-indicator animate-fade-in stagger-4"
        aria-label="Faire défiler vers la section À propos"
      >
        <span class="scroll-text">Découvrir</span>
        <ChevronDown class="scroll-icon animate-bounce" :size="24" aria-hidden="true" />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next';
</script>

<style scoped>
.hero {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  
  /* Gradient background */
  background: linear-gradient(
    135deg,
    var(--color-bg) 0%,
    var(--color-bg-secondary) 50%,
    var(--color-bg) 100%
  );
  
  /* Add subtle pattern overlay */
  background-image: 
    linear-gradient(135deg, var(--color-bg) 0%, var(--color-bg-secondary) 50%, var(--color-bg) 100%),
    radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%);
}

.hero-content {
  text-align: center;
  padding: var(--spacing-lg);
  max-width: 1200px;
  width: 100%;
}

.hero-name {
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 700;
  margin-bottom: var(--spacing-md);
  color: var(--color-text);
  letter-spacing: -0.02em;
  
  /* Add text gradient effect */
  background: linear-gradient(
    135deg,
    var(--color-text) 0%,
    var(--color-primary-light) 50%,
    var(--color-accent) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 200%;
}

.hero-title {
  font-size: clamp(1.25rem, 3vw, 2rem);
  font-weight: 500;
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-2xl);
  letter-spacing: 0.02em;
}

.scroll-indicator {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-xs);
  cursor: pointer;
  margin-top: var(--spacing-xl);
  transition: transform var(--transition-base), color var(--transition-base);
}

.scroll-indicator:hover {
  transform: translateY(4px);
  color: var(--color-primary-light);
}

.scroll-text {
  font-size: var(--font-size-sm);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-text-secondary);
  transition: color var(--transition-base);
}

.scroll-indicator:hover .scroll-text {
  color: var(--color-primary-light);
}

.scroll-icon {
  color: var(--color-primary);
  transition: color var(--transition-base);
}

.scroll-indicator:hover .scroll-icon {
  color: var(--color-primary-light);
}

/* Responsive Design */

/* Tablet (768px - 1024px) */
@media (max-width: 1024px) and (min-width: 768px) {
  .hero-content {
    padding: var(--spacing-md);
  }
  
  .hero-name {
    font-size: clamp(2.5rem, 6vw, 4rem);
  }
  
  .hero-title {
    font-size: clamp(1.125rem, 2.5vw, 1.75rem);
    margin-bottom: var(--spacing-xl);
  }
}

/* Mobile (< 768px) */
@media (max-width: 767px) {
  .hero {
    min-height: 100vh;
    min-height: 100svh; /* Use small viewport height for mobile browsers */
  }
  
  .hero-content {
    padding: var(--spacing-md);
  }
  
  .hero-name {
    font-size: clamp(2rem, 10vw, 3rem);
    margin-bottom: var(--spacing-sm);
  }
  
  .hero-title {
    font-size: clamp(1rem, 4vw, 1.5rem);
    margin-bottom: var(--spacing-lg);
  }
  
  .scroll-indicator {
    margin-top: var(--spacing-lg);
  }
}

/* Extra small mobile (< 375px) */
@media (max-width: 374px) {
  .hero-name {
    font-size: 2rem;
  }
  
  .hero-title {
    font-size: 1rem;
  }
}

/* Accessibility - Reduced Motion */
@media (prefers-reduced-motion: reduce) {
  .scroll-indicator {
    transition: none;
  }
  
  .scroll-indicator:hover {
    transform: none;
  }
}
</style>
