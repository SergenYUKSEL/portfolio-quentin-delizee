<template>
  <section id="skills" class="skills">
    <div class="container">
      <h2 class="section-title">Compétences</h2>
      <div class="skills-grid">
        <SkillCard 
          v-for="(skill, index) in skills" 
          :key="skill.name"
          :name="skill.name"
          :icon="skill.icon"
          :category="skill.category"
          :style="{ '--stagger-delay': index }"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SkillCard from './SkillCard.vue';

interface Skill {
  name: string;
  icon: string;
  category: string;
}

const skills: Skill[] = [
  { name: 'HTML', icon: 'html', category: 'Frontend' },
  { name: 'CSS', icon: 'css', category: 'Frontend' },
  { name: 'PHP', icon: 'php', category: 'Backend' },
  { name: 'JavaScript', icon: 'javascript', category: 'Frontend' },
  { name: 'ReactJS', icon: 'react', category: 'Frontend' },
  { name: 'NodeJS', icon: 'nodejs', category: 'Backend' },
  { name: 'Express', icon: 'express', category: 'Backend' },
  { name: 'Swagger', icon: 'swagger', category: 'Tools' },
  { name: 'MongoDB', icon: 'mongodb', category: 'Database' },
  { name: 'SQL', icon: 'sql', category: 'Database' },
  { name: 'GitHub', icon: 'github', category: 'Tools' },
  { name: 'Figma', icon: 'figma', category: 'Design' },
  { name: 'Qwen', icon: 'qwen', category: 'AI' },
  { name: 'GitHub Copilot', icon: 'copilot', category: 'AI' },
  { name: 'ChatGPT', icon: 'chatgpt', category: 'AI' }
];
</script>

<style scoped>
.skills {
  padding: var(--spacing-2xl) 0;
  background: var(--color-bg);
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-text);
  text-align: center;
  margin-bottom: var(--spacing-xl);
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.skills-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(2, 1fr);
}

/* Tablet: 3 columns */
@media (min-width: 768px) {
  .skills-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Desktop: 5 columns */
@media (min-width: 1024px) {
  .skills-grid {
    grid-template-columns: repeat(5, 1fr);
  }
}
</style>
