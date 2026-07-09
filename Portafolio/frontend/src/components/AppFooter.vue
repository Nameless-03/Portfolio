<script setup>
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="footer">
    <div class="container">
      <p class="footer__text">
        &copy; {{ currentYear }} Mi Portafolio. Todos los derechos reservados.
      </p>
    </div>
  </footer>
</template>
