import { projectsSpanishData } from "@/src/data/ProjectData.es";

export default {
  header: {
    aboutMe: "Acerca de mí",
    portfolio: "Portafolio",
    contact: "Contacto",
  },
  hero: {
    greeting: "Hola, mi nombre es",
    name: "Jonathan Díaz",
    profession: "Ingeniero de Software Backend",
    description:
      "Especialista en sistemas seguros, escalables y de alto rendimiento",
  },
  about: {
    aboutMe: "Acerca de mi",
    biography: `Ingeniero de software backend especializado en Node.js con más de 5
          años de experiencia construyendo sistemas de alto rendimiento para el
          sector financiero. He desarrollado soluciones serverless que procesan
          20 millones de solicitudes mensuales y plataformas que sirven a más
          de 5 millones de usuarios. Experto en arquitecturas de
          microservicios, AWS cloud, y bases de datos Relacionales y No Relacionales. Mi enfoque se
          centra en crear sistemas escalables, seguros y mantenibles que
          resuelven problemas de negocio reales.`,
    recentTechnologies:
      "Aquí están las tecnologías con las que he estado trabajando recientemente:",
    technologiesList: ["Nest.js", "MongoDB", "PostgreSQL", "Cloudflare", "AWS"],
  },
  portfolio: {
    title: "Portafolio de Proyectos",
    projects: projectsSpanishData,
  },
  contact: {
    messageContactMe: "Tienes un proyecto en mente. Estaré encantado de oírte.",
    emailText: "Correo Electrónico:",
  },
};
