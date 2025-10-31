<template>
  <footer class="footer" role="contentinfo">
    <div class="container">
      <p class="copyright">© 2025 Quentin Delizee - Portfolio Personnel</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Footer component - Simple copyright display
</script>

<style scoped>
.footer {
  padding: var(--spacing-xl) 0;
  background-color: var(--color-bg-secondary);
  border-top: 1px solid rgba(59, 130, 246, 0.1);
  margin-top: auto;
}

.copyright {
  text-align: center;
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
  margin: 0;
}

/* Responsive Design */

/* Mobile (< 768px) */
@media (max-width: 767px) {
  .footer {
    padding: var(--spacing-lg) 0;
  }

  .copyright {
    font-size: var(--font-size-xs);
  }
}
</style>
