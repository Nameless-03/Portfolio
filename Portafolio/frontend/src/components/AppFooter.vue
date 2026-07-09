<script setup>
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<template>
  <footer class="footer">
    <div class="container footer__container">
      <button @click="scrollToTop" class="footer__back-btn">
        Volver al principio
      </button>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 4rem 0;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  margin-top: auto;
}

.footer__container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer__back-btn {
  background: transparent;
  border: 1px solid var(--color-primary);
  color: var(--color-text-main);
  padding: 0.75rem 2rem;
  border-radius: 30px;
  font-family: var(--font-family-base);
  font-size: 0.95rem;
  font-weight: 500;
  transition: all var(--transition-normal);
}

.footer__back-btn:hover {
  background-color: var(--color-primary);
  color: var(--color-background);
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(251, 191, 36, 0.3);
}
</style>
