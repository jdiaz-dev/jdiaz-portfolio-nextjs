"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Project } from "../app/[locale]/project-detail/[id]/project.types";

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
    minHeight: "60vh",
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
  const t = useTranslations();
  const locale = useLocale();
  const projects: Project[] = t.raw("portfolio.projects");

  return (
    <>
      <section className="portfolio" style={styles.projects}>
        <div className="box-title">
          <h3 style={{ fontFamily: "Rajdhani-Bold" }}>
            {t("portfolio.title")}
          </h3>
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
                    {project.overview}
                    <div
                      style={{
                        marginTop: "20px",
                        textAlign: isEven ? "right" : "left",
                      }}
                    >
                      <Link
                        href={`${locale}/project-detail/${project.id}`}
                        style={{
                          display: "inline-block",
                          padding: "10px 20px",
                          backgroundColor: "#64ffda",
                          color: "#0a192f",
                          textDecoration: "none",
                          borderRadius: "4px",
                          fontWeight: "bold",
                        }}
                      >
                        {t("portfolio.readMoreButton")}
                      </Link>
                    </div>
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
