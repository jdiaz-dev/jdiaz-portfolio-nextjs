// types/project.types.ts

export interface Metric {
  number: string;
  label: string;
}

export interface TechComponent {
  title: string;
  description: string;
}

export interface Achievement {
  title: string;
  description: string;
}

export interface Challenge {
  title: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tags: string[];
  metrics: Metric[];
  overview: string;
  challengeIntro: string;
  challengePoints: string[];
  architectureDescription: string;
  architecturePoints: string[];
  components: TechComponent[];
  techStack: string;
  achievements: Achievement[];
  challenges: Challenge[];
  businessImpact: string[];
  industry: string;
  scale: string;
  role: string;
  duration: string;
}