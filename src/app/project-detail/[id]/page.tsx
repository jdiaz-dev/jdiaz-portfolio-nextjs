// app/project-detail/[id]/page.tsx
import { notFound } from "next/navigation";
import ProjectDetail from "./ProjectDetail";
import { projectsData } from "../../../data/ProjectData";
import { Project } from "./project.types";

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

// Remove getStaticProps completely!
// This is a Server Component - it fetches data directly
export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;

  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}

// Replace getStaticPaths with generateStaticParams
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}
