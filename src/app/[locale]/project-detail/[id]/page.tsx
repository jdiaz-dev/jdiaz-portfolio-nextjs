// app/project-detail/[id]/page.tsx
import { notFound } from "next/navigation";
import ProjectDetail from "./ProjectDetail";
import { projectsSpanishData } from "../../../../data/ProjectData.es";
import { Project } from "./project.types";

interface ProjectPageProps {
  params: Promise<{
    id: string;
    locale: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id, locale } = await params;
  const importedData: any = (await import(`../../../../../i18n/${locale}.ts`))
    .default;
  const projectData: Project[] = importedData.portfolio.projects;
  const project = projectData.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}

export async function generateStaticParams() {
  return projectsSpanishData.map((project) => ({
    id: project.id,
  }));
}
