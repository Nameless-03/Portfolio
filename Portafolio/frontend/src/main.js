import { createApp } from 'vue'
import './assets/styles/main.css'
import App from './App.vue'
import router from './router'
import { playClickSound } from './utils/audio'

const app = createApp(App)

app.use(router)

app.mount('#app')

// Efecto de sonido global estilo PS3 para los botones
document.addEventListener('click', (e) => {
  const target = e.target.closest('button, .btn, a');
  if (target) {
    playClickSound();
  }
});
