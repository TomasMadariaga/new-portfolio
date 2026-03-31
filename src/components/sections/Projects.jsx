import { Project } from "../ui/Project";
import { projects } from "../../data/project";

export const Projects = () => {

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-bg">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="flex items-center justify-end gap-3 mb-2">
            <h2 className="text-3xl sm:text-4xl font-name text-text-h">
              Projects
            </h2>
            <span className="text-5xl font-bold text-accent/20 font-name">
              02
            </span>
          </div>
          <p className="text-text text-right">What I built. What I learned.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Project key={project.id} project={project}/>
          ))}
        </div>
      </div>
    </section>
  );
};
