export const projects = [
  {
    id: 'peatoon',
    title: 'Peatoon',
    shortDescription: 'Videojuego de gestión y simulación de una peatonal urbana desarrollado con Godot Engine.',
    fullDescription: `
Peatoon es un videojuego de gestión y simulación desarrollado en equipo con Godot Engine. Dentro del proyecto participé en la concepción de la idea principal, el diseño de las mecánicas de juego, el desarrollo de gran parte de la lógica del sistema y el diseño de la interfaz de usuario, mientras que otros integrantes del equipo se encargaron de áreas como el apartado artístico.

El objetivo del juego es poner al jugador en el rol de administrador de una peatonal urbana, donde deberá construir comercios, gestionar recursos y tomar decisiones estratégicas para hacer crecer la misma, manteniendo un equilibrio entre la rentabilidad y la satisfacción de los ciudadanos.

Más que un simulador de construcción, el desafío del proyecto fue diseñar sistemas capaces de interactuar entre sí, logrando que cada decisión del jugador impacte directamente en la economía, la reputación y el comportamiento dinámico de la ciudad.

Características principales

* Sistema de gestión económica. El jugador administra ingresos, gastos, alquileres, mejoras y expansiones, debiendo mantener un equilibrio financiero para evitar la quiebra mientras continúa haciendo crecer la peatonal.
* Simulación dinámica. Los peatones reaccionan a distintos factores del entorno, como la reputación del lugar, las estaciones del año, el clima y las tendencias del mercado, generando una experiencia diferente en cada partida.
* Eventos y toma de decisiones. El juego incorpora temporadas, cambios climáticos, misiones y eventos aleatorios que modifican el comportamiento de los comercios y obligan al jugador a adaptar constantemente su estrategia.
* Progresión del jugador. A medida que se obtienen experiencia y reputación, se desbloquean nuevos edificios, mecánicas y expansiones del mapa, incentivando el crecimiento continuo de la ciudad.
* Interfaz pensada para la gestión. El proyecto incorpora paneles informativos, tutorial interactivo, controles de simulación, indicadores visuales y notificaciones que permiten administrar grandes cantidades de información de manera clara e intuitiva.
* Experiencia rejugable. Gracias a la combinación de eventos aleatorios, tendencias comerciales, ciclos estacionales y decisiones del jugador, cada partida evoluciona de manera distinta, fomentando la experimentación y la planificación estratégica.

Valor aportado

Este proyecto refleja mi capacidad para transformar una idea en un sistema de juego completo, participando desde el diseño conceptual hasta la implementación de gran parte de su lógica. El desarrollo requirió diseñar mecánicas que interactúan entre sí de manera coherente, equilibrar sistemas económicos y de progresión, y construir una interfaz que permitiera al jugador gestionar gran cantidad de información de forma clara e intuitiva.

Además de reforzar mis conocimientos en desarrollo con Godot, el proyecto me permitió adquirir experiencia en trabajo colaborativo, planificación de funcionalidades y diseño de experiencias centradas en el jugador.
    `,
    tags: ['Godot Engine', 'Game Design'],
    github: null, // Repositorio privado
    images: [
      '/img/proyectos/PeatoonDia.png',
      '/img/proyectos/PeatoonNoche.png',
      '/img/proyectos/PeatoonUI.png'
    ]
  },
  {
    id: 'php-app',
    title: 'Asesorías y Videollamadas',
    shortDescription: 'Plataforma web para gestionar reservas y videollamadas, desarrollada con Laravel y Vue 3.',
    fullDescription: `
Esta plataforma web fue desarrollada en equipo como parte de mi formación en la UTEC, participando activamente tanto en el desarrollo del frontend como del backend, con una mayor dedicación al diseño e implementación de la interfaz de usuario.

El objetivo del proyecto fue digitalizar por completo el proceso de gestión de asesorías profesionales, permitiendo administrar reservas, agendas, pagos y videollamadas desde una única plataforma, simplificando tanto el trabajo de los profesionales como la experiencia de sus clientes.

Características principales

* Gestión completa de usuarios y perfiles. La plataforma cuenta con diferentes tipos de usuarios (administradores, profesionales y clientes), cada uno con funcionalidades y permisos adaptados a su rol.
* Sistema inteligente de reservas. Los profesionales pueden configurar sus horarios de atención y registrar excepciones como vacaciones o días libres. El sistema calcula automáticamente la disponibilidad en tiempo real, evitando conflictos entre reservas y garantizando que solo se ofrezcan horarios realmente disponibles.
* Videollamadas integradas. Cada reserva genera una sala privada y segura para realizar la sesión de forma virtual, permitiendo que únicamente el profesional y el cliente involucrados puedan acceder.
* Gestión de servicios y paquetes. Los clientes pueden contratar sesiones individuales o adquirir paquetes de asesorías, mientras que la plataforma administra el estado de los pagos antes de habilitar cada encuentro.
* Notificaciones automáticas. El sistema informa a los usuarios sobre confirmaciones, cambios de estado y recordatorios de sus sesiones, mejorando la organización y la comunicación.
* Procesamiento optimizado. Las tareas de mayor carga, como el envío de correos electrónicos, se ejecutan en segundo plano para mantener tiempos de respuesta rápidos y una experiencia de uso fluida.
* Sistema de calificaciones. Al finalizar cada asesoría, los clientes pueden valorar el servicio recibido, promoviendo la transparencia y la mejora continua dentro de la plataforma.
* Arquitectura preparada para crecer. La aplicación fue diseñada siguiendo buenas prácticas de ingeniería de software, facilitando su mantenimiento, incorporación de nuevas funcionalidades y escalabilidad.

Valor aportado

Este proyecto refleja mi experiencia en el desarrollo de aplicaciones web de negocio con procesos complejos, donde fue necesario integrar múltiples servicios, automatizar flujos de trabajo y construir una solución capaz de resolver necesidades reales de gestión. Además del desarrollo técnico, el enfoque estuvo puesto en crear una plataforma intuitiva, segura y preparada para evolucionar conforme crezcan las necesidades de sus usuarios.
    `,
    tags: ['Laravel', 'Vue 3', 'PostgreSQL', 'LiveKit'],
    github: 'https://github.com/Nameless-03/PHP_APP',
    images: [
      '/img/proyectos/videollamada-1.jpg',
      '/img/proyectos/videollamada-2.jpg'
    ]
  },
  {
    id: 'proyecto-ria',
    title: 'LittleBox Games',
    shortDescription: 'Plataforma web interactiva (SPA) para la exploración y descubrimiento de videojuegos.',
    fullDescription: `
LittleBox Games es una plataforma web interactiva para la exploración y descubrimiento de videojuegos, desarrollada como una aplicación de una sola página (SPA). El proyecto nació con el objetivo de ofrecer una experiencia rápida, intuitiva y confiable, incluso frente a problemas comunes como la caída de servicios externos o la pérdida de conexión a Internet.

Más allá de presentar un catálogo de videojuegos, el desafío consistió en desarrollar una aplicación capaz de adaptarse a distintos escenarios sin comprometer la experiencia del usuario.

Características principales
* Experiencia continua y funcionamiento sin conexión. La aplicación utiliza múltiples fuentes de información y un sistema de almacenamiento local para mantener el contenido disponible incluso cuando un servicio externo deja de responder o el usuario pierde la conexión a Internet.
* Catálogo optimizado para grandes volúmenes de contenido. Los videojuegos se cargan progresivamente a medida que el usuario navega, reduciendo los tiempos de espera y ofreciendo una experiencia fluida sin sobrecargar el navegador.
* Contenido dinámico y descubrimiento de nuevos juegos. Las secciones de recomendaciones se actualizan automáticamente en cada visita, mostrando diferentes videojuegos y haciendo que la experiencia sea siempre distinta para el usuario.
* Experiencia personalizada. Los usuarios pueden guardar favoritos, gestionar un carrito, aplicar filtros y conservar sus preferencias entre distintas sesiones, permitiendo que la plataforma se adapte a cada persona.
* Interfaz moderna y adaptable. Toda la interfaz fue desarrollada desde cero e incorpora soporte para modo claro y modo oscuro, con un cambio instantáneo entre ambos.
* Estadísticas personalizadas. A partir de los videojuegos favoritos, la plataforma analiza las preferencias del usuario y genera gráficos interactivos que permiten visualizar sus géneros favoritos de forma clara e intuitiva.

Valor aportado

Este proyecto demuestra mi capacidad para desarrollar aplicaciones web modernas enfocadas en la experiencia del usuario, priorizando el rendimiento, la disponibilidad y la capacidad de adaptarse a distintos escenarios de uso. Más allá del diseño de la interfaz, el objetivo fue resolver problemas reales como la tolerancia a fallos, la optimización de carga y la personalización del contenido.
    `,
    tags: ['Vue 3', 'Pinia', 'CSS3'],
    github: 'https://github.com/Nameless-03/Proyecto_RIA',
    images: [
      '/img/proyectos/LittleBoxInicio.png',
      '/img/proyectos/LittleBoxCatalogo.png',
      '/img/proyectos/LittleBoxFavoritos.png'
    ]
  },
  {
    id: 'chat-empresarial',
    title: 'Chat Empresarial',
    shortDescription: 'Plataforma de comunicación orientada a empresas.',
    fullDescription: `
Este proyecto es una aplicación de chat diseñada para entornos corporativos. Próximamente se agregará más información sobre las características, el diseño del sistema y el valor aportado.
    `,
    tags: ['Java', 'Vue', 'PostgreSQL', 'CSS3', 'JavaScript', 'WebSockets'],
    github: null,
    images: []
  },
  {
    id: 'sociedad-fomento',
    title: 'Sociedad de Fomento',
    theme: 'client',
    shortDescription: 'Página web institucional desarrollada para la sociedad de fomento de colonia suiza.',
    fullDescription: `
Desarrollo de un sitio web institucional para la Sociedad de Fomento Rural de Colonia Suiza, una institución uruguaya con más de 110 años de trayectoria dedicada al apoyo y desarrollo del sector agropecuario. El proyecto tuvo como objetivo modernizar su presencia digital, facilitando el acceso a la información y fortaleciendo la comunicación con socios, productores y clientes.

Características principales

* Renovación de la identidad digital. Se desarrolló una interfaz moderna y accesible que refleja la trayectoria y los valores de la institución, manteniendo una navegación clara para todo tipo de usuarios.
* Organización eficiente del contenido. Se estructuró la información institucional, los servicios, la historia, el equipo de trabajo y los distintos canales de contacto para facilitar el acceso a la información más relevante.
* Diseño adaptable. El sitio fue desarrollado con un enfoque responsive, garantizando una experiencia consistente tanto en computadoras como en dispositivos móviles.
* Comunicación más cercana con los usuarios. Se incorporaron formularios de contacto, integración con WhatsApp, mapas interactivos y enlaces a redes sociales, facilitando el vínculo entre la institución y la comunidad.

Valor aportado

Este proyecto refleja mi capacidad para desarrollar soluciones web orientadas a organizaciones reales, comprendiendo sus necesidades y transformándolas en una plataforma moderna, funcional y fácil de administrar. Más allá del desarrollo técnico, el enfoque estuvo puesto en crear una presencia digital que transmitiera la identidad de la institución y mejorara la comunicación con su comunidad.
    `,
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    github: null,
    website: 'https://www.fomentocoloniasuiza.com.uy/',
    images: []
  },
  {
    id: 'glow-pong',
    title: 'Glow Pong',
    shortDescription: 'Una versión mejorada del clásico Pong con modificaciones visuales y jugables.',
    fullDescription: `
Glow Pong es una recreación del clásico juego arcade con modificaciones propias. Próximamente se agregará más información sobre las mecánicas introducidas y el proceso de desarrollo.
    `,
    tags: ['Próximamente', 'Videojuego'],
    github: null,
    images: []
  }
];
