<script setup>
import { onMounted, onUnmounted } from 'vue'
import AppFooter from './components/AppFooter.vue'

// Posición actual
const currentPurple = { x: 50, y: 50 };

// Posición objetivo
const targetPurple = { x: 50, y: 50 };

let animationFrameId;

// Función de interpolación lineal (Lerp) para movimiento suave
const lerp = (start, end, factor) => start + (end - start) * factor;

const updatePositions = () => {
  // Acercar la posición actual al objetivo suavemente
  currentPurple.x = lerp(currentPurple.x, targetPurple.x, 0.05);
  currentPurple.y = lerp(currentPurple.y, targetPurple.y, 0.05);

  document.documentElement.style.setProperty('--purple-x', `${currentPurple.x}%`);
  document.documentElement.style.setProperty('--purple-y', `${currentPurple.y}%`);

  animationFrameId = requestAnimationFrame(updatePositions);
};

const handleMouseMove = (e) => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  
  targetPurple.x = (e.clientX / width) * 100;
  targetPurple.y = (e.clientY / height) * 100;
};

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove);
  updatePositions(); // Iniciar el loop de animación
});

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove);
  cancelAnimationFrame(animationFrameId);
});
</script>

<template>
  <div class="app">
    <div class="aurora-bg">
      <div class="aurora-blob aurora-blob-1"></div>
      <div class="aurora-blob aurora-blob-2"></div>
      <div class="aurora-blob aurora-blob-3"></div>
      <div class="aurora-blob aurora-blob-4"></div>
    </div>
    <main class="app__main">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <AppFooter />
  </div>
</template>
