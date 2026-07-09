<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { projects } from '../data/projects'

const route = useRoute()
const router = useRouter()

const project = computed(() => {
  return projects.find(p => p.id === route.params.id)
})

const goBack = () => {
  router.push('/#proyectos')
}
</script>

<template>
  <div class="project-view" v-if="project">
    <div class="container">
      <button @click="goBack" class="btn btn--outline back-btn">
        <span class="back-icon">←</span> Volver
      </button>

      <header class="project-header">
        <h1 class="project-title">{{ project.title }}</h1>
        <div class="project-tags">
          <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
      </header>

      <section class="project-content">
        <div class="project-description">
          <!-- We use v-html or just render pre-line text -->
          <div class="description-text">
            {{ project.fullDescription }}
          </div>
          
          <div v-if="project.github" class="project-actions">
            <a :href="project.github" target="_blank" rel="noopener" class="btn btn--outline github-btn">
              <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M12.545.5c-6.356 0-11.478 5.188-11.478 11.545 0 5.098 3.322 9.42 7.94 10.947.574.106.786-.25.786-.554 0-.273-.01-1.18-.016-2.146-3.193.694-3.866-1.353-3.866-1.353-.522-1.326-1.275-1.68-1.275-1.68-1.04-.712.079-.697.079-.697 1.15.08 1.756 1.18 1.756 1.18 1.022 1.753 2.68 1.246 3.332.953.104-.74.4-1.246.726-1.533-2.548-.29-5.225-1.274-5.225-5.666 0-1.25.446-2.274 1.178-3.076-.118-.29-.512-1.455.112-3.033 0 0 .963-.308 3.15 1.173a10.96 10.96 0 0 1 2.868-.386c.973.005 1.953.13 2.87.387 2.186-1.482 3.148-1.173 3.148-1.173.626 1.578.232 2.743.114 3.033.734.802 1.176 1.826 1.176 3.076 0 4.403-2.682 5.373-5.238 5.657.41.354.778 1.053.778 2.124 0 1.533-.014 2.766-.014 3.14 0 .307.21.666.793.553C20.18 21.46 23.5 17.142 23.5 12.045 23.5 5.688 18.334.5 11.978.5"></path>
              </svg>
              Repositorio de GitHub
            </a>
          </div>
        </div>

        <div class="project-gallery">
          <img v-for="(img, index) in project.images" :key="index" :src="img" :alt="`${project.title} screenshot ${index + 1}`" class="project-image" />
        </div>
      </section>
    </div>
  </div>
  <div v-else class="project-view not-found">
    <div class="container">
      <h2>Proyecto no encontrado</h2>
      <button @click="router.push('/')" class="btn btn--primary">Volver al inicio</button>
    </div>
  </div>
</template>

<style scoped>
.project-view {
  padding-top: var(--spacing-xl);
  padding-bottom: var(--spacing-xl);
  min-height: 100vh;
  position: relative;
  z-index: 10;
}

.back-btn {
  margin-bottom: var(--spacing-lg);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.2rem;
  background-color: rgba(26, 26, 36, 0.6);
  backdrop-filter: blur(8px);
}

.back-icon {
  font-size: 1.2rem;
  transition: transform var(--transition-fast);
}

.back-btn:hover .back-icon {
  transform: translateX(-5px);
}

.project-header {
  margin-bottom: var(--spacing-xl);
  animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.project-title {
  font-size: 3.5rem;
  background: linear-gradient(to right, var(--color-primary), var(--color-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: var(--spacing-sm);
  display: inline-block;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background-color: rgba(251, 191, 36, 0.1);
  color: var(--color-primary);
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid rgba(251, 191, 36, 0.2);
}

.project-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-xl);
  animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  opacity: 0;
  transform: translateY(20px);
}

@media (min-width: 992px) {
  .project-content {
    grid-template-columns: 1fr 1.2fr;
  }
}

.description-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--color-text-muted);
  white-space: pre-line;
  background: rgba(20, 20, 25, 0.6);
  padding: var(--spacing-lg);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
}

.project-actions {
  margin-top: var(--spacing-lg);
}

.github-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem 1.5rem;
}

.project-gallery {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.project-image {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: transform var(--transition-normal);
  object-fit: cover;
}

.project-image:hover {
  transform: scale(1.02);
}

@keyframes slideUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
