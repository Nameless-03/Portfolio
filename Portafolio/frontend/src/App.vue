<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import AppFooter from './components/AppFooter.vue'

// Referencias para el cursor
const cursorRef = ref(null);
const isHoveringElement = ref(false);
const isHoveringNav = ref(false); // Para el ojo morado

// Posición actual y objetivo
const currentPurple = { x: 50, y: 50 };
const targetPurple = { x: 50, y: 50 };

let animationFrameId;
let idleTimer = null;

// Función de interpolación lineal (Lerp) para movimiento suave
const lerp = (start, end, factor) => start + (end - start) * factor;

const updatePositions = () => {
  currentPurple.x = lerp(currentPurple.x, targetPurple.x, 0.05);
  currentPurple.y = lerp(currentPurple.y, targetPurple.y, 0.05);

  document.documentElement.style.setProperty('--purple-x', `${currentPurple.x}%`);
  document.documentElement.style.setProperty('--purple-y', `${currentPurple.y}%`);

  animationFrameId = requestAnimationFrame(updatePositions);
};

const resetToCenterIfMobile = () => {
  if (window.matchMedia('(max-width: 768px)').matches || window.matchMedia('(hover: none)').matches) {
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => {
      targetPurple.x = 50;
      targetPurple.y = 50;
    }, 2000);
  }
};

const handleMouseMove = (e) => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  targetPurple.x = (e.clientX / width) * 100;
  targetPurple.y = (e.clientY / height) * 100;

  if (cursorRef.value) {
    cursorRef.value.style.left = `${e.clientX}px`;
    cursorRef.value.style.top = `${e.clientY}px`;
  }
  
  resetToCenterIfMobile();
};

const handleTouchMove = (e) => {
  if (e.touches.length > 0) {
    const touch = e.touches[0];
    const width = window.innerWidth;
    const height = window.innerHeight;
    targetPurple.x = (touch.clientX / width) * 100;
    targetPurple.y = (touch.clientY / height) * 100;
    resetToCenterIfMobile();
  }
};

const checkHover = (e) => {
  const interactive = e.target.closest('a, button, .btn, .hero__name, input, textarea');
  isHoveringElement.value = !!interactive;
  
  const navLink = e.target.closest('.tab-nav__link');
  isHoveringNav.value = !!navLink;
};

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('touchmove', handleTouchMove, { passive: true });
  window.addEventListener('touchstart', handleTouchMove, { passive: true });
  window.addEventListener('mouseover', checkHover);
  updatePositions();
});

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove);
  window.removeEventListener('touchmove', handleTouchMove);
  window.removeEventListener('touchstart', handleTouchMove);
  window.removeEventListener('mouseover', checkHover);
  cancelAnimationFrame(animationFrameId);
  clearTimeout(idleTimer);
});
</script>

<template>
  <div class="app">
    <!-- Cursor Personalizado -->
    <div ref="cursorRef" class="custom-cursor" :class="{ 'is-hovering': isHoveringElement, 'is-nav-hover': isHoveringNav }">
      <div class="cursor-wrapper">
        <div class="cursor-shape">
          <div class="cursor-pupil"></div>
        </div>
      </div>
    </div>

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
