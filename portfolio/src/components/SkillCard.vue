<template>
  <div ref="elementRef" class="skill-card" :class="{ 'is-visible': isVisible }">
    <div class="skill-icon" :aria-label="`Icône ${name}`" role="img">
      <component :is="iconComponent" :size="32" :stroke-width="2" aria-hidden="true" />
    </div>
    <h3 class="skill-name">{{ name }}</h3>
    <span class="skill-category">{{ category }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useScrollAnimation } from '../utils/useScrollAnimation';
import {
  Code2,
  Palette,
  Database,
  Server,
  FileCode,
  Braces,
  Workflow,
  Github,
  Figma,
  Bot,
  Sparkles,
  Brain
} from 'lucide-vue-next';

interface Props {
  name: string;
  icon: string;
  category: string;
  delay?: number;
}

const props = defineProps<Props>();
const { isVisible, elementRef } = useScrollAnimation(0.1);

const iconMap: Record<string, any> = {
  html: Code2,
  css: Palette,
  javascript: FileCode,
  react: Braces,
  php: Server,
  nodejs: Server,
  express: Workflow,
  mongodb: Database,
  sql: Database,
  swagger: FileCode,
  github: Github,
  figma: Figma,
  copilot: Bot,
  chatgpt: Sparkles,
  qwen: Brain
};

const iconComponent = computed(() => iconMap[props.icon] || Code2);
</script>

<style scoped>
.skill-card {
  background: var(--color-bg-secondary);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  text-align: center;
  transition: all var(--transition-base);
  opacity: 0;
  transform: translateY(20px);
}

.skill-card.is-visible {
  animation: fadeInUp 0.6s ease-out forwards;
  animation-delay: calc(var(--stagger-delay, 0) * 0.1s);
}

.skill-card:hover {
  transform: translateY(-4px) scale(1.05);
  box-shadow: var(--shadow-xl);
  border-color: var(--color-primary);
}

.skill-icon {
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  border-radius: 12px;
  color: white;
}

.skill-name {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-text);
  margin: 0;
}

.skill-category {
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
