// types/project.types.ts

export interface Metric {
  number: string;
  label: string;
}

export interface TechComponent {
  title: string;
  description: string;
}

export interface Project {
  id: string;
  image: string;
  title: string;
  metrics: Metric[];
  overview: string;
  technologies: string[];
  architectureDescription: string;
  architecturePoints: string[];
  components: TechComponent[];
  techStack: string;
  businessImpact: string[];
  company: string;
  industry: string;
  scale: string;
}
