import { projectsEnglishData } from "@/src/data/ProjectData.en";

export default {
  header: {
    aboutMe: "About Me",
    portfolio: "Portfolio",
    contact: "Contact",
    supportedLanguages: {
      english: "English",
      spanish: "Spanish",
    },
  },
  hero: {
    greeting: "Hi, my name is",
    name: "Jonathan Díaz",
    profession: "Backend Software Engineer",
    description: "Specialist in secure, scalable and high-performance systems",
  },
  about: {
    aboutMe: "About Me",
    biography: `Backend software engineer specialized in Node.js with more than 5
          years of experience building high-performance systems for the
          financial sector. I have developed serverless solutions that process
          20 million requests per month and platforms that serve more than
          5 million users. Expert in microservices architectures, AWS cloud,
          and relational and non-relational databases. My focus is on creating
          scalable, secure, and maintainable systems that solve real business
          problems.`,
    recentTechnologies:
      "Here are the technologies I’ve been working with recently:",
    technologiesList: ["Nest.js", "MongoDB", "PostgreSQL", "Cloudflare", "AWS"],
  },
  portfolio: {
    title: "Project Portfolio",
    projects: projectsEnglishData,
    readMoreButton: "Read More",
    projectDetail: {
      company: "Company",
      industry: "Industry",
      scale: "Scale",
      bussinesMetricsTitle: "Business Metrics",
      implementedSolutionTitle: "Implemented Solution",
      architectureTitle: "Architecture",
      mainComponentsTitle: "Main Components",
      usedTechnologiesTitle: "Used Technologies",
      bussinesImpactTitle: "Business Impact",
    },
  },
  contact: {
    messageContactMe:
      "Do you have a project in mind? I’d be happy to hear from you.",
    emailText: "Email:",
  },
};
