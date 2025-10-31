<script setup lang="ts">
interface Props {
  title: string;
  description: string;
  technologies: string[];
  status?: string;
}

defineProps<Props>();
</script>

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

<style scoped>
.project-card {
  background: var(--color-bg-secondary);
  border-radius: 12px;
  padding: var(--spacing-lg);
  transition: all var(--transition-base);
  border: 1px solid rgba(255, 255, 255, 0.1);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
  border-color: var(--color-primary);
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
}

.project-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text);
  margin: 0;
  line-height: 1.2;
}

.project-status {
  background: var(--color-accent);
  color: var(--color-text);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  white-space: nowrap;
  flex-shrink: 0;
}

.project-description {
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin: 0 0 var(--spacing-md) 0;
  flex-grow: 1;
}

.project-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background: rgba(59, 130, 246, 0.1);
  color: var(--color-primary-light);
  padding: 0.375rem 0.75rem;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid rgba(59, 130, 246, 0.2);
  transition: all var(--transition-fast);
}

.tech-tag:hover {
  background: rgba(59, 130, 246, 0.2);
  border-color: var(--color-primary);
}

@media (max-width: 768px) {
  .project-card {
    padding: var(--spacing-md);
  }

  .project-title {
    font-size: 1.25rem;
  }

  .project-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .project-status {
    align-self: flex-start;
  }
}
</style>
