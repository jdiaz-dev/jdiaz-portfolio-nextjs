"use client";

import Image from "next/image";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
}

const styles = {
  projects: {
    height: "auto",
    fontSize: "120%",
  },
  project: {
    width: "100%",
    minHeight: "60vh",
    display: "flex",
    marginBottom: "6%",
  },
  projectReverse: {
    flexDirection: "row-reverse" as const,
  },
  imageContainer: {
    flexBasis: "60%",
  },
  image: {
    width: "100%",
    minHeight: "55vh",
    height: "auto",
  },
  descriptionProject: {
    textAlign: "right" as const,
    flexBasis: "40%",
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "space-evenly" as const,
  },
  descriptionProjectLeft: {
    textAlign: "left" as const,
  },
  projectTitle: {
    fontFamily: "Rajdhani-Bold",
  },
  descriptionDetail: {
    width: "100%",
    padding: "5%",
    paddingLeft: "15%",
    backgroundColor: "#112240",
    marginLeft: "-20%",
    position: "relative" as const,
    zIndex: 1,
  },
  descriptionDetailRight: {
    paddingLeft: "5%",
    paddingRight: "15%",
    marginLeft: "0",
    marginRight: "-20%",
  },
  techUsed: {
    display: "flex",
    flexDirection: "row" as const,
    listStyle: "none" as const,
    justifyContent: "flex-end" as const,
  },
  techUsedLeft: {
    justifyContent: "flex-start" as const,
  },
  externalLinks: {
    display: "flex",
    justifyContent: "flex-end" as const,
    listStyle: "none" as const,
  },
  externalLinksLeft: {
    justifyContent: "flex-start" as const,
  },
  link: {
    color: "rgb(212, 202, 202)",
  },
} as const;

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
      technologies: ["Angular"],
      link: "https://brave-jepsen-d793ab.netlify.app/",
    },
  ];

  return (
    <>
      <section className="portfolio" style={styles.projects}>
        <div className="box-title">
          <h3 style={{ fontFamily: "Rajdhani-Bold" }}>Portafolio</h3>
          <div></div>
        </div>

        <div className="container-projects">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`project ${isEven ? "project-even" : "project-odd"}`}
                style={{
                  ...styles.project,
                  ...(isEven ? {} : styles.projectReverse),
                }}
              >
                <div style={styles.imageContainer}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    style={styles.image}
                  />
                </div>
                <div
                  style={{
                    ...styles.descriptionProject,
                    ...(isEven ? {} : styles.descriptionProjectLeft),
                  }}
                >
                  <h3 style={styles.projectTitle}>{project.title}</h3>
                  <div
                    style={{
                      ...styles.descriptionDetail,
                      ...(isEven ? {} : styles.descriptionDetailRight),
                    }}
                  >
                    {project.description}
                  </div>
                  <ul
                    style={{
                      ...styles.techUsed,
                      ...(isEven ? {} : styles.techUsedLeft),
                    }}
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <li
                        style={{
                          flexBasis: "20%",
                          textAlign: "center",
                        }}
                        key={techIndex}
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul
                    style={{
                      ...styles.externalLinks,
                      ...(isEven ? {} : styles.externalLinksLeft),
                    }}
                  >
                    <li style={{ margin: "10px" }}>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i
                          className="fas fa-external-link-alt"
                          style={styles.link}
                        ></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
