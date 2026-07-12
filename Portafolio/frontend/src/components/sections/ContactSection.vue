<template>
  <section id="contacto" class="section">
    <div class="container">
      <h2 class="section__title">Contacto</h2>
      <div class="contact-card">
        <p class="contact-card__text">
          ¿Interesado en trabajar juntos? ¡Escríbeme por WhatsApp o envíame un correo!
        </p>
        <div class="contact__buttons">
          <a href="https://wa.me/59899777007?text=Hola!%20Estoy%20interesado%20en%20realizar%20un%20trabajo%20contigo" target="_blank" rel="noopener noreferrer" class="contact__btn contact__btn--wpp">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            WhatsApp
          </a>
          <a href="mailto:feli.bernardi06@gmail.com" class="contact__btn contact__btn--email">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            Gmail
          </a>
        </div>
        
        <div class="contact__social">
          <h3 class="contact__social-title">Conocer más acerca de mí</h3>
          <div class="contact__social-links">
            <a href="https://github.com/Nameless-03" target="_blank" rel="noopener noreferrer" class="contact__social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              GitHub
            </a>
            <a href="https://www.instagram.com/feli.bernardi?igsh=MXRjeW4zZndzdXN4Zw==" target="_blank" rel="noopener noreferrer" class="contact__social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              Instagram
            </a>
            <a href="https://www.linkedin.com/in/felipe-bernardi-906ab9383/" target="_blank" rel="noopener noreferrer" class="contact__social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-card {
  background-color: var(--color-surface);
  border-radius: 16px;
  padding: 3rem 2rem;
  text-align: center;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.05);
  max-width: 800px;
  margin: 0 auto;
}

.contact-card__text {
  font-size: 1.1rem;
  color: var(--color-text-muted);
  margin-bottom: 2rem;
}

.contact__buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 3rem;
}

.contact__btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  transition: transform 0.2s, box-shadow 0.2s, background-color 0.2s;
  color: #fff;
}

.contact__btn:hover {
  transform: translateY(-2px);
}

.contact__btn--wpp {
  background-color: #25D366;
}
.contact__btn--wpp:hover {
  background-color: #128C7E;
  box-shadow: 0 8px 20px rgba(37, 211, 102, 0.2);
}

.contact__btn--email {
  background-color: var(--color-primary);
  color: var(--color-background);
}
.contact__btn--email:hover {
  background-color: var(--color-secondary);
  color: #fff;
  box-shadow: 0 8px 20px rgba(139, 92, 246, 0.2);
}

.contact__social {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 2rem;
}

.contact__social-title {
  font-size: 1.25rem;
  color: var(--color-text-main);
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.contact__social-links {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
}

.contact__social-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-text-muted);
  transition: color 0.2s, transform 0.2s;
}

.contact__social-link:hover {
  color: var(--color-primary);
  transform: translateY(-3px);
}
</style>
