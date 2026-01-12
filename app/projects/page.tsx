import Projects from "@/views/projects";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects - Md Shadik",  
}

const ProjectsPage = () => {
  return <Projects />;
};

export default ProjectsPage;
