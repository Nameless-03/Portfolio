<script setup>
const scrollTo = (id) => {
  const el = document.querySelector(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <section id="inicio" class="section hero">
    <div class="container">
      <div class="hero__grid">
        <div class="hero__content">
          <h1 class="hero__title">Hola, soy Felipe Bernardi.</h1>
          <p class="hero__subtitle">
            Bienvenido a mi espacio.
          </p>
          <a href="#contacto" @click.prevent="scrollTo('#contacto')" class="hero__cta">Trabajemos juntos</a>
        </div>
        <div class="hero__visual">
          <div class="hero__graphic">
            <div class="hero__graphic-title">Fb</div>
            <div class="hero__graphic-bar"></div>
            <div class="hero__graphic-bar"></div>
            <div class="hero__graphic-bar"></div>
            <div class="hero__graphic-bar"></div>
            <div class="hero__graphic-bar"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
