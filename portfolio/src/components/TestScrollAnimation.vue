<template>
  <section 
    ref="elementRef" 
    class="test-section"
    :class="{ 'is-visible': isVisible }"
  >
    <div class="test-content">
      <h2>Test Section</h2>
      <p>{{ isVisible ? 'Je suis visible! ✨' : 'Scroll pour me voir...' }}</p>
      <div class="status-indicator" :class="{ active: isVisible }"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useScrollAnimation } from '../utils/useScrollAnimation';

// Utiliser le composable avec un threshold de 0.2 (20% de l'élément visible)
const { isVisible, elementRef } = useScrollAnimation(0.2, true);
</script>

<style scoped>
.test-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.test-section.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.test-content {
  text-align: center;
  color: white;
  padding: 2rem;
}

.test-content h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.test-content p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.status-indicator {
  width: 60px;
  height: 60px;
  margin: 0 auto;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
}

.status-indicator.active {
  background: #10b981;
  box-shadow: 0 0 20px rgba(16, 185, 129, 0.6);
  transform: scale(1.2);
}
</style>
