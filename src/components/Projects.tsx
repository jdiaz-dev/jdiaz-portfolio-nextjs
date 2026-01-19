"use client";

import Image from "next/image";

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

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: "Conciliador de Pagos en Tiempo Real",
      description:
        "Sistema de conciliación de pagos serverless de alto rendimiento desarrollado para un importante banco argentino con más de 6 millones de usuarios activos. El sistema procesa transacciones en tiempo real, garantizando la reconciliación precisa de millones de operaciones mensuales.",
      image: "/images/fintech4.png",
      technologies: ["AWS", "Node.js", "OpenSearch"],
      link: "https://nutrition.athvio.com/landing",
    },
    {
      id: 2,
      title: "Gestor de Transacciones Para Pasarela de Pagos",
      description:
        "Sistema de manejo de transacciones distribuidas provenientes de dispositivos POS y links de pago desarrollado para una pasarela de pagos peruana. El sistema administra y procesa pagos de forma segura garantizando las operaciones de 5500 comercios afiliados.",
      image: "/images/fintech3.webp",
      technologies: ["Node.js", "MySQL", "MongoDB", "Docker"],
      link: "https://brave-jepsen-d793ab.netlify.app/",
    },
    {
      id: 3,
      title: "Plataforma de consulta de pagos de cuotas bancarias",
      description:
        "Sistema de consulta de pagos de cuotas bancarias desarrollado para una entidad financiera. El software permite a los usuarios bancarios consultar el estado de sus pagos de manera rápida y segura.",
      image: "/images/fintech2.jpg",
      technologies: ["Node.js", "Azure", "SQL Server"],
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
                  {/* <ul
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
                  </ul> */}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
