<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const scrollTo = (id) => {
  const el = document.querySelector(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

const handleNavClick = (id) => {
  scrollTo(id)
  // Añadir un pequeño retraso (150ms) antes de cerrar para que la transición
  // y la sensación del click se sientan mucho más orgánicas.
  setTimeout(() => {
    isMenuOpen.value = false
  }, 150)
}
</script>

<template>
  <nav class="tab-nav">
    <div class="container tab-nav__container">
      <div class="tab-nav__mobile-header">
        <div class="tab-nav__mobile-spacer"></div>
        <button class="tab-nav__hamburger" @click="isMenuOpen = !isMenuOpen" :class="{ 'is-open': isMenuOpen }" aria-label="Abrir menú">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      
      <div class="tab-nav__links" :class="{ 'is-open': isMenuOpen }">
        <a href="#sobre-mi" @click.prevent="handleNavClick('#sobre-mi')" class="tab-nav__link">Sobre Mí <span class="tab-nav__arrow">&darr;</span></a>
        <a href="#skills" @click.prevent="handleNavClick('#skills')" class="tab-nav__link">Skills <span class="tab-nav__arrow">&darr;</span></a>
        <a href="#proyectos" @click.prevent="handleNavClick('#proyectos')" class="tab-nav__link">Proyectos <span class="tab-nav__arrow">&darr;</span></a>
        <a href="#contacto" @click.prevent="handleNavClick('#contacto')" class="tab-nav__link">Contacto <span class="tab-nav__arrow">&darr;</span></a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.tab-nav__mobile-header {
  display: none;
}

.tab-nav__links {
  display: flex;
  width: 100%;
}

@media (max-width: 768px) {
  .tab-nav__container {
    flex-direction: column;
    width: 100%;
  }

  .tab-nav__mobile-header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    padding: 1rem;
    box-sizing: border-box;
  }

  .tab-nav__hamburger {
    background: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 0.5rem;
    z-index: 1001;
  }

  .tab-nav__hamburger span {
    display: block;
    width: 25px;
    height: 2px;
    background-color: var(--color-text-main);
    transition: all 0.3s ease;
  }

  /* Animación del botón hamburguesa a "X" */
  .tab-nav__hamburger.is-open span:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }
  .tab-nav__hamburger.is-open span:nth-child(2) {
    opacity: 0;
  }
  .tab-nav__hamburger.is-open span:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }

  .tab-nav__links {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease;
    background-color: rgba(15, 23, 42, 0.95);
  }

  .tab-nav__links.is-open {
    max-height: 300px; /* Suficiente espacio para los 4 enlaces */
    opacity: 1;
  }

  .tab-nav__link {
    width: 100%;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    padding: 1.5rem;
  }
}
</style>
