// components/ProjectDetail.tsx
import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Project } from "./project.types";
import styles from "./ProjectDetail.module.css";

interface ProjectDetailProps {
  project: Project;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  return (
    <div className={styles.container}>
      {/* Main Content */}
      <div className={styles.content}>
        {/* Hero Section */}
        <div className={styles.hero}>
          <h1 className={styles.heroTitle}>{project.title}</h1>
          <p className={styles.heroSubtitle}>{project.overview}</p>

          {/* Project Info */}
          <div className={styles.projectInfo}>
            <div className={styles.projectInfoItem}>
              <span className={styles.projectInfoLabel}>Empresa:</span>
              <p>{project.company}</p>
            </div>
            <div className={styles.projectInfoItem}>
              <span className={styles.projectInfoLabel}>Industria:</span>
              <p>{project.industry}</p>
            </div>
            <div className={styles.projectInfoItem}>
              <span className={styles.projectInfoLabel}>Escala:</span>
              <p>{project.scale}</p>
            </div>
          </div>
        </div>

        {/* Metrics */}
        <h2 className={styles.sectionTitle}>Métricas del Negocio</h2>

        <div className={styles.metricsGrid}>
          {project.metrics.map((metric, index) => (
            <div key={index} className={styles.metricCard}>
              <span className={styles.metricNumber}>{metric.number}</span>
              <span className={styles.metricLabel}>{metric.label}</span>
            </div>
          ))}
        </div>

        {/* Solución Implementada */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Solución Implementada</h2>

          <h3 className={styles.subsectionTitle}>Arquitectura</h3>
          <p>{project.architectureDescription}</p>
          <ul className={styles.list}>
            {project.architecturePoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>

          <h3 className={styles.subsectionTitle}>Componentes Principales</h3>
          <div className={styles.componentsGrid}>
            {project.components.map((component, index) => (
              <div key={index} className={styles.componentCard}>
                <strong className={styles.componentTitle}>
                  {component.title}
                </strong>
                <p className={styles.componentDescription}>
                  {component.description}
                </p>
              </div>
            ))}
          </div>

          <h3 className={styles.subsectionTitle}>Tecnologías Utilizadas</h3>
          <div className={styles.codeBlock}>
            <pre>{project.techStack}</pre>
          </div>
        </section>

        {/* Impacto en el Negocio */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Impacto en el Negocio</h2>
          <ul className={styles.list}>
            {project.businessImpact.map((impact, index) => {
              const [title, description] = impact.includes(":")
                ? impact.split(":").map((s) => s.trim())
                : ["", impact];

              return (
                <li key={index}>
                  {title && <strong>{title}:</strong>} {description || impact}
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ProjectDetail;
