// components/ProjectCard.tsx
import React from 'react';
import Link from 'next/link';
import { Project } from './project.types';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className={styles.card}>
      {/* Project Image Placeholder */}
      <div className={styles.imageContainer}>
        <div className={styles.imageOverlay}></div>
        <div className={styles.imageContent}>
          <h3 className={styles.imageTitle}>
            {project.title.split(' ').slice(0, 3).join(' ')}
          </h3>
          <p className={styles.imageIndustry}>{project.industry}</p>
        </div>
      </div>

      {/* Project Content */}
      <div className={styles.content}>
        <h3 className={styles.title}>{project.title}</h3>
        
        <p className={styles.subtitle}>{project.subtitle}</p>

        {/* Tech Tags */}
        <div className={styles.tags}>
          {project.tags.slice(0, 4).map((tech) => (
            <span key={tech} className={styles.tag}>
              {tech}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className={styles.moreTag}>
              +{project.tags.length - 4} más
            </span>
          )}
        </div>

        {/* Key Metrics */}
        <div className={styles.metricsGrid}>
          {project.metrics.slice(0, 2).map((metric, index) => (
            <div key={index} className={styles.metricItem}>
              <span className={styles.metricNumber}>{metric.number}</span>
              <span className={styles.metricLabel}>{metric.label}</span>
            </div>
          ))}
        </div>

        {/* View Details Button */}
        <Link href={`/projects/${project.id}`} className={styles.button}>
          Ver detalles →
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;