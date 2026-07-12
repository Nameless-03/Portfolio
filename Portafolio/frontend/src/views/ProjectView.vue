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
  router.push('/')
}

// Analizador inteligente de texto para categorizar en bloques
const categorizedBlocks = computed(() => {
  if (!project.value) return { intro: [], middle: [], value: [] }
  const text = project.value.fullDescription
  const lines = text.split('\n')
  
  const blocks = { intro: [], middle: [], value: [] }
  let currentCategory = 'intro'
  let currentList = null
  let currentParagraph = []

  const flushParagraph = () => {
    if (currentParagraph.length > 0) {
      blocks[currentCategory].push({ type: 'paragraph', content: currentParagraph.join(' ') })
      currentParagraph = []
    }
  }

  lines.forEach(line => {
    line = line.trim()
    if (!line) {
      flushParagraph()
      currentList = null
      return
    }

    if (line.startsWith('*') || line.startsWith('·')) {
      flushParagraph()
      if (!currentList) {
        currentList = { type: 'list', items: [] }
        blocks[currentCategory].push(currentList)
      }
      currentList.items.push(line.substring(1).trim())
    } else {
      currentList = null
      // Identificar si es un título
      if (line.length < 50 && !line.endsWith('.') && currentParagraph.length === 0) {
        const headingText = line.replace(':', '')
        const headingLower = headingText.toLowerCase()
        
        // Cambiar la categoría basada en el título
        if (headingLower.includes('valor')) {
          currentCategory = 'value'
        } else if (headingLower.includes('característica') || headingLower.includes('tecnología') || headingLower.includes('funcionalidad')) {
          currentCategory = 'middle'
        }
        
        blocks[currentCategory].push({ type: 'heading', content: headingText })
      } else {
        currentParagraph.push(line)
      }
    }
  })
  flushParagraph()
  
  return blocks
})

// Función para poner en negrita la primera frase (hasta el primer punto o dos puntos)
const formatListItem = (text) => {
  const dotIndex = text.indexOf('.')
  const colonIndex = text.indexOf(':')
  let splitIndex = -1
  
  if (dotIndex > 0 && (colonIndex === -1 || dotIndex < colonIndex)) splitIndex = dotIndex
  else if (colonIndex > 0) splitIndex = colonIndex
  
  if (splitIndex > 0 && splitIndex < 100) {
    return `<strong class="list-highlight">${text.substring(0, splitIndex + 1)}</strong>${text.substring(splitIndex + 1)}`
  }
  return text
}
const formatParagraph = (text, title) => {
  if (!title) return text
  // Reemplazar el título con un strong resaltado (case-insensitive)
  const regex = new RegExp(`(${title})`, 'gi')
  return text.replace(regex, `<strong class="title-highlight">$1</strong>`)
}
</script>

<template>
  <div :class="['project-view', project && project.theme === 'client' ? 'theme-client' : '']" v-if="project">
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

      <section class="project-layout">
        <!-- Panel 1: Introducción -->
        <div class="panel-intro" v-if="categorizedBlocks.intro.length">
          <div class="description-text">
            <template v-for="(block, index) in categorizedBlocks.intro" :key="'intro-'+index">
              <h3 v-if="block.type === 'heading'" class="desc-heading">{{ block.content }}</h3>
              <p v-else-if="block.type === 'paragraph'" class="desc-paragraph" v-html="formatParagraph(block.content, project.title)"></p>
            </template>
          </div>
        </div>

        <!-- Panel 2: Galería (Izquierda) y Características (Derecha) -->
        <div :class="['panel-middle-split', (!project.images || project.images.length === 0) ? 'no-gallery' : '']">
          <!-- Galería a la izquierda -->
          <div v-if="project.images && project.images.length > 0" class="project-gallery">
            <img v-for="(img, index) in project.images" :key="'img-'+index" :src="img" :alt="`${project.title} screenshot ${index + 1}`" class="project-image" />
          </div>
          
          <!-- Características a la derecha -->
          <div class="panel-middle" v-if="categorizedBlocks.middle.length">
            <div class="description-text h-full">
              <template v-for="(block, index) in categorizedBlocks.middle" :key="'mid-'+index">
                <h3 v-if="block.type === 'heading'" class="desc-heading">{{ block.content }}</h3>
                <ul v-else-if="block.type === 'list'" class="desc-list">
                  <li v-for="(item, i) in block.items" :key="i" class="desc-list-item">
                    <span class="bullet-point"></span>
                    <span v-html="formatListItem(item)"></span>
                  </li>
                </ul>
                <p v-else class="desc-paragraph" v-html="formatParagraph(block.content, project.title)"></p>
              </template>
            </div>
          </div>
        </div>

        <!-- Panel 3: Valor aportado -->
        <div class="panel-value" v-if="categorizedBlocks.value.length">
          <div class="description-text">
            <template v-for="(block, index) in categorizedBlocks.value" :key="'val-'+index">
              <h3 v-if="block.type === 'heading'" class="desc-heading">{{ block.content }}</h3>
              <p v-else-if="block.type === 'paragraph'" class="desc-paragraph" v-html="formatParagraph(block.content, project.title)"></p>
            </template>
            
            <div v-if="project.github || project.website" class="project-actions">
              <a v-if="project.github" :href="project.github" target="_blank" rel="noopener" class="btn btn--outline github-btn">
                <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M12.545.5c-6.356 0-11.478 5.188-11.478 11.545 0 5.098 3.322 9.42 7.94 10.947.574.106.786-.25.786-.554 0-.273-.01-1.18-.016-2.146-3.193.694-3.866-1.353-3.866-1.353-.522-1.326-1.275-1.68-1.275-1.68-1.04-.712.079-.697.079-.697 1.15.08 1.756 1.18 1.756 1.18 1.022 1.753 2.68 1.246 3.332.953.104-.74.4-1.246.726-1.533-2.548-.29-5.225-1.274-5.225-5.666 0-1.25.446-2.274 1.178-3.076-.118-.29-.512-1.455.112-3.033 0 0 .963-.308 3.15 1.173a10.96 10.96 0 0 1 2.868-.386c.973.005 1.953.13 2.87.387 2.186-1.482 3.148-1.173 3.148-1.173.626 1.578.232 2.743.114 3.033.734.802 1.176 1.826 1.176 3.076 0 4.403-2.682 5.373-5.238 5.657.41.354.778 1.053.778 2.124 0 1.533-.014 2.766-.014 3.14 0 .307.21.666.793.553C20.18 21.46 23.5 17.142 23.5 12.045 23.5 5.688 18.334.5 11.978.5"></path>
                </svg>
                Repositorio de GitHub
              </a>
              
              <a v-if="project.website" :href="project.website" target="_blank" rel="noopener" class="btn btn--outline website-btn">
                <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                Visitar el sitio web
              </a>
            </div>
          </div>
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

.project-layout {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
  animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  opacity: 0;
  transform: translateY(20px);
}

.panel-middle-split {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-xl);
}

@media (min-width: 992px) {
  .panel-middle-split {
    grid-template-columns: 1fr 1.2fr;
  }
  .panel-middle-split.no-gallery {
    grid-template-columns: 1fr;
  }
}

.h-full {
  height: 100%;
}

.description-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--color-text-muted);
  background: rgba(20, 20, 25, 0.6);
  padding: var(--spacing-lg);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.desc-heading {
  color: #fff;
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 0.5rem;
  position: relative;
  display: inline-block;
}

.desc-heading::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 40px;
  height: 2px;
  background-color: var(--color-secondary);
  border-radius: 2px;
}

.desc-paragraph {
  color: var(--color-text-muted);
}

.desc-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.desc-list-item {
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
}

.bullet-point {
  flex-shrink: 0;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--color-secondary);
  margin-top: 0.45rem; /* Ajustado para estar más centrado con el texto de 1.1rem */
  box-shadow: 0 0 8px rgba(139, 92, 246, 0.6);
}

/* El formato en negrita que le daremos a las listas dinámicamente */
:deep(.list-highlight) {
  color: #fff;
  font-weight: 500;
}

/* Resaltado morado del título dentro de los párrafos */
:deep(.title-highlight) {
  color: var(--color-secondary);
  font-weight: 600;
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

/* --- Theme Client (Morado en lugar de Dorado) --- */
.theme-client .project-title {
  background: linear-gradient(to right, #a78bfa, var(--color-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.theme-client .tag {
  background-color: rgba(139, 92, 246, 0.1);
  color: var(--color-secondary);
  border-color: rgba(139, 92, 246, 0.2);
}
</style>
