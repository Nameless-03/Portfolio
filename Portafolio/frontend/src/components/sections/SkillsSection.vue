<script setup>
import { ref } from 'vue'

const skills = ref([
  { name: 'C++', icon: 'https://www.freeiconspng.com/uploads/c--logo-icon-0.png', isImage: true },
  { name: 'GDScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/godot/godot-original.svg', isImage: true },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', isImage: true },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg', isImage: true },
  { name: 'HTML, CSS & JS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', isImage: true },
  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg', isImage: true },
  { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg', isImage: true },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg', isImage: true },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg', isImage: true },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg', isImage: true },
  { name: 'PowerShell', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/powershell/powershell-original.svg', isImage: true },
  
  // Conocimientos / Herramientas funcionales (Iconos Minimalistas SVG)
  { name: 'Diseño Responsive', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>', isSvg: true },
  { name: 'API RESTful', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>', isSvg: true },
  { name: 'Arquitectura de Software', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>', isSvg: true },
  { name: 'Bases de Datos', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>', isSvg: true }
])
</script>

<template>
  <section id="skills" class="section">
    <div class="container">
      <h2 class="section__title">Skills y Herramientas</h2>
      <p class="section__subtitle" style="text-align: center; color: var(--color-text-muted); margin-bottom: var(--spacing-lg); max-width: 600px; margin-left: auto; margin-right: auto; font-size: 1.1rem;">
        Las herramientas, lenguajes y funcionalidades que utilizo para llevar a cabo mis proyectos adelante.
      </p>
      
      <div class="skills__grid">
        <div v-for="skill in skills" :key="skill.name" class="skill-card">
          <div class="skill-card__content">
            <div class="skill-card__icon" :class="{'skill-card__icon--github': skill.name === 'GitHub'}">
              <img v-if="skill.isImage" :src="skill.icon" :alt="skill.name + ' logo'" />
              <div v-else-if="skill.isSvg" v-html="skill.icon" style="display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; color: var(--color-primary);"></div>
              <span v-else>{{ skill.icon }}</span>
            </div>
            
            <div class="skill-card__info">
              <div class="skill-card__header">
                <span class="skill-card__name">{{ skill.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
