// components/ProjectDetail.tsx
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Project } from './project.types';
import styles from './ProjectDetail.module.css';

interface ProjectDetailProps {
  project: Project;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  return (
    <>
      <Head>
        <title>{project.title} | Portfolio</title>
        <meta name="description" content={project.subtitle} />
      </Head>

      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <nav className={styles.nav}>
            <Link href="/" className={styles.logo}>
              Jonathan Díaz
            </Link>
            <ul className={styles.navList}>
              <li>
                <Link href="/#inicio" className={styles.navLink}>
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/#portfolio" className={styles.navLink}>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/#contacto" className={styles.navLink}>
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* Main Content */}
        <div className={styles.content}>
          {/* Hero Section */}
          <div className={styles.hero}>
            <h1 className={styles.heroTitle}>{project.title}</h1>
            <p className={styles.heroSubtitle}>{project.subtitle}</p>
            
            {/* Project Info */}
            <div className={styles.projectInfo}>
              <div className={styles.projectInfoItem}>
                <span className={styles.projectInfoLabel}>Industria:</span>
                <p>{project.industry}</p>
              </div>
              <div className={styles.projectInfoItem}>
                <span className={styles.projectInfoLabel}>Escala:</span>
                <p>{project.scale}</p>
              </div>
              <div className={styles.projectInfoItem}>
                <span className={styles.projectInfoLabel}>Rol:</span>
                <p>{project.role}</p>
              </div>
              <div className={styles.projectInfoItem}>
                <span className={styles.projectInfoLabel}>Duración:</span>
                <p>{project.duration}</p>
              </div>
            </div>

            {/* Tech Tags */}
            <div className={styles.techBadges}>
              {project.tags.map((tech) => (
                <span key={tech} className={styles.badge}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Metrics */}
          <div className={styles.metricsGrid}>
            {project.metrics.map((metric, index) => (
              <div key={index} className={styles.metricCard}>
                <span className={styles.metricNumber}>{metric.number}</span>
                <span className={styles.metricLabel}>{metric.label}</span>
              </div>
            ))}
          </div>

          {/* Descripción General */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Descripción General</h2>
            <p>{project.overview}</p>
          </section>

          {/* El Desafío */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>El Desafío</h2>
            <p>{project.challengeIntro}</p>
            <ul className={styles.list}>
              {project.challengePoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </section>

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
                  <strong className={styles.componentTitle}>{component.title}</strong>
                  <p className={styles.componentDescription}>{component.description}</p>
                </div>
              ))}
            </div>

            <h3 className={styles.subsectionTitle}>Tecnologías Utilizadas</h3>
            <div className={styles.codeBlock}>
              <pre>{project.techStack}</pre>
            </div>
          </section>

          {/* Logros y Resultados */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Logros y Resultados</h2>
            {project.achievements.map((achievement, index) => (
              <div key={index} className={styles.achievementItem}>
                <h3 className={styles.achievementTitle}>✅ {achievement.title}</h3>
                <p>{achievement.description}</p>
              </div>
            ))}
          </section>

          {/* Desafíos Técnicos Superados */}
          {project.challenges.length > 0 && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Desafíos Técnicos Superados</h2>
              {project.challenges.map((challenge, index) => (
                <div key={index} className={styles.achievementItem}>
                  <h3 className={styles.achievementTitle}>
                    {index + 1}. {challenge.title}
                  </h3>
                  <p>{challenge.description}</p>
                </div>
              ))}
            </section>
          )}

          {/* Impacto en el Negocio */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Impacto en el Negocio</h2>
            <ul className={styles.list}>
              {project.businessImpact.map((impact, index) => {
                const [title, description] = impact.includes(':') 
                  ? impact.split(':').map(s => s.trim())
                  : ['', impact];
                
                return (
                  <li key={index}>
                    {title && <strong>{title}:</strong>} {description || impact}
                  </li>
                );
              })}
            </ul>
          </section>

          {/* CTA Section */}
          <section className={styles.ctaSection}>
            <h2 className={styles.ctaTitle}>¿Interesado en mi trabajo?</h2>
            <p className={styles.ctaDescription}>
              Estoy disponible para proyectos freelance en desarrollo backend, arquitectura cloud y microservicios.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/#contacto" className={styles.ctaButton}>
                Contáctame
              </Link>
              <Link href="/#portfolio" className={styles.ctaButton}>
                Ver más proyectos
              </Link>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className={styles.footer}>
          <p>&copy; 2026 Jonathan Alejandro Díaz Mollocondo | jonathan.a.diaz.m@gmail.com</p>
        </footer>
      </div>
    </>
  );
};

export default ProjectDetail;