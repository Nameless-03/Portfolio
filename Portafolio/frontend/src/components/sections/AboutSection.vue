<template>
  <section id="sobre-mi" class="section about">
    <div class="container">
      <h2 class="section__title">Sobre Mí</h2>
      <div class="about-card">
        <p class="about-card__text">
          Ingresé en 2024 a la carrera de Tecnólogo en Informática en la UTEC de San José, Uruguay, y actualmente he completado el 93 % de los créditos del plan de estudios. A lo largo de mi formación he desarrollado una sólida base técnica y un interés constante por el desarrollo de soluciones que combinen funcionalidad, diseño y una buena experiencia de usuario.
        </p>
        <p class="about-card__text">
          Me apasiona crear y diseñar, transformando ideas en productos que sean tanto útiles como visualmente atractivos. En cada proyecto busco cuidar los detalles, ya que considero que son los que marcan la diferencia en el resultado final. Me caracterizo por ser una persona meticulosa, creativa y comprometida con la calidad, enfocada en desarrollar soluciones únicas que representen fielmente las necesidades y la identidad de cada proyecto.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-card {
  background-color: var(--color-surface);
  border-radius: 16px;
  padding: 3rem 4rem;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.05);
  max-width: 900px;
  margin: 0 auto;
}

.about-card__text {
  font-size: 1.15rem;
  color: var(--color-text-muted);
  line-height: 1.8;
  margin-bottom: 1.5rem;
  text-align: justify;
}

.about-card__text:last-child {
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .about-card {
    padding: 2rem;
  }
  .about-card__text {
    text-align: left;
  }
}
</style>
