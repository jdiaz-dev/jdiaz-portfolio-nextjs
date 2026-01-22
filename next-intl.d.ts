import "i18next";
import { Project } from "./src/app/project-detail/[id]/project.types";

declare global {
  interface CustomTypeOptions {
    resources: {
      translation: {
        projects: Project;
      };
    };
  }
}
