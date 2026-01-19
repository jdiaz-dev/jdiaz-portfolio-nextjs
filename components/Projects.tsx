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
  imageContainer: {
    flexBasis: "60%",
  },
  image: {
    width: "100%",
    minHeight: "55vh",
    height: "auto",
  },

  descriptionProject: {
    textAlign: "right",
    flexBasis: "40%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
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
  },
  techUsed: {
    display: "flex",
    flexDirection: "row",
    listStyle: "none",
    justifyContent: "flex-end",
  },
  externalLinks: {
    display: "flex",
    justifyContent: "flex-end",
    listStyle: "none",
  },
  link: {
    color: "rgb(212, 202, 202)",
    ":hover": {
      color: "rgb(56, 146, 182)",
    },
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
      <section style={styles.projects}>
        <div className="box-title">
          <h3 style={{ fontFamily: "Rajdhani-Bold" }}>Proyectos construidos</h3>
          <div></div>
        </div>

        <div className="container-projects">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project ${
                index % 2 === 0 ? "project-even" : "project-odd"
              }`}
              style={styles.project}
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
              <div style={styles.descriptionProject}>
                <h3 style={styles.projectTitle}>{project.title}</h3>
                <div style={styles.descriptionDetail}>
                  {project.description}
                </div>
                <ul style={styles.techUsed}>
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
                <ul style={styles.externalLinks}>
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
          ))}
        </div>
      </section>
    </>
  );
}
