<script setup>
const scrollTo = (id) => {
  const el = document.querySelector(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <nav class="tab-nav">
    <div class="container tab-nav__container">
      <a href="#sobre-mi" @click.prevent="scrollTo('#sobre-mi')" class="tab-nav__link">Sobre Mí <span class="tab-nav__arrow">&darr;</span></a>
      <a href="#skills" @click.prevent="scrollTo('#skills')" class="tab-nav__link">Skills <span class="tab-nav__arrow">&darr;</span></a>
      <a href="#proyectos" @click.prevent="scrollTo('#proyectos')" class="tab-nav__link">Proyectos <span class="tab-nav__arrow">&darr;</span></a>
      <a href="#contacto" @click.prevent="scrollTo('#contacto')" class="tab-nav__link">Contacto <span class="tab-nav__arrow">&darr;</span></a>
    </div>
  </nav>
</template>
