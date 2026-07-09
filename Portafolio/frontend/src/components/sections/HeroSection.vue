<script setup>
const scrollTo = (id) => {
  const el = document.querySelector(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

const onNameHover = () => {
  document.body.classList.add('hero-name-hovered');
}
const onNameLeave = () => {
  document.body.classList.remove('hero-name-hovered');
}
</script>

<template>
  <section id="inicio" class="section hero">
    <div class="container">
      <div class="hero__grid">
        <div class="hero__content">
          <h1 class="hero__title">Hola, soy <span class="hero__name" @mouseenter="onNameHover" @mouseleave="onNameLeave">Felipe Bernardi</span>.</h1>
          <p class="hero__subtitle">
            Bienvenido a mi espacio.
          </p>
          <a href="#contacto" @click.prevent="scrollTo('#contacto')" class="hero__cta">Trabajemos juntos</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero__name {
  transition: color var(--transition-normal);
  cursor: pointer;
}

.hero__name:hover {
  color: var(--color-primary);
}
</style>
