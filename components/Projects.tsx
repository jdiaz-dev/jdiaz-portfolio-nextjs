"use client";

import Image from "next/image";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Software para nutricionistas",
      description:
        "Software especializado para nutricionistas destinado a acelerar la creación de planes nutricionales de los pacientes. Permite también guardar y gestionar los pacientes, creación de recetas personalizadas, monitorear proceso del paciente, chat en tiempo real.",
      image: "/images/nutrition.png",
      technologies: ["Nest.js", "React.js", "MongoDB", "AWS"],
      link: "https://nutrition.athvio.com/landing",
    },
    {
      title: "Simulación de multiples votos electorales",
      description:
        "Una aplicación para hacer votaciones para las zonas y la cantidad de veces que uno desee, teniendo como resultado final las estadísticas de votación. En esta aplicación se puede retornar a la zona que votaste y continuar añadiendo votos. Esto fue posible al uso de tablas hash para cada zona.",
      image: "/images/political parties.png",
      technologies: ["HTML", "CSS", "Angular"],
      link: "https://brave-jepsen-d793ab.netlify.app/",
    },
  ];

  return (
    <>
      <section className="projects">
        <div className="box-title">
          <h3>Proyectos construidos</h3>
          <div></div>
        </div>

        <div className="container-projects">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project ${
                index % 2 === 0 ? "project-even" : "project-odd"
              }`}
            >
              <div className="image-project">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="description-project">
                <h3>{project.title}</h3>
                <div className="description-detail">{project.description}</div>
                <ul className="tech-used">
                  {project.technologies.map((tech, techIndex) => (
                    <li key={techIndex}>{tech}</li>
                  ))}
                </ul>
                <ul className="external-links">
                  <li>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
