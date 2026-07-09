<script setup>
import { projects } from '../../data/projects'
</script>

<template>
  <section id="proyectos" class="section">
    <div class="container">
      <h2 class="section__title">Proyectos</h2>
      <div class="projects__grid">
        <article v-for="project in projects" :key="project.id" class="card project-card">
          <h3 class="card__title">{{ project.title }}</h3>
          
          <div class="project-tags">
            <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
          
          <p class="card__description project-desc">{{ project.shortDescription }}</p>
          
          <div class="project-actions">
            <router-link :to="`/project/${project.id}`" class="btn btn--primary">
              Ver detalles
            </router-link>
            
            <a v-if="project.github" :href="project.github" target="_blank" rel="noopener" class="btn btn--outline github-btn">
              <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M12.545.5c-6.356 0-11.478 5.188-11.478 11.545 0 5.098 3.322 9.42 7.94 10.947.574.106.786-.25.786-.554 0-.273-.01-1.18-.016-2.146-3.193.694-3.866-1.353-3.866-1.353-.522-1.326-1.275-1.68-1.275-1.68-1.04-.712.079-.697.079-.697 1.15.08 1.756 1.18 1.756 1.18 1.022 1.753 2.68 1.246 3.332.953.104-.74.4-1.246.726-1.533-2.548-.29-5.225-1.274-5.225-5.666 0-1.25.446-2.274 1.178-3.076-.118-.29-.512-1.455.112-3.033 0 0 .963-.308 3.15 1.173a10.96 10.96 0 0 1 2.868-.386c.973.005 1.953.13 2.87.387 2.186-1.482 3.148-1.173 3.148-1.173.626 1.578.232 2.743.114 3.033.734.802 1.176 1.826 1.176 3.076 0 4.403-2.682 5.373-5.238 5.657.41.354.778 1.053.778 2.124 0 1.533-.014 2.766-.014 3.14 0 .307.21.666.793.553C20.18 21.46 23.5 17.142 23.5 12.045 23.5 5.688 18.334.5 11.978.5"></path>
              </svg>
              GitHub
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--spacing-lg);
}

.project-card {
  display: flex;
  flex-direction: column;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: var(--spacing-sm);
}

.tag {
  background-color: rgba(251, 191, 36, 0.1);
  color: var(--color-primary);
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
  border: 1px solid rgba(251, 191, 36, 0.2);
}

.project-desc {
  flex-grow: 1;
  margin-bottom: var(--spacing-md);
}

.project-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: auto;
}

.btn {
  flex: 1;
  text-align: center;
  justify-content: center;
}

.github-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}
</style>
