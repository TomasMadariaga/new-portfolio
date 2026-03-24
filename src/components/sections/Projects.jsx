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
            // <div
            //   key={project.id}
            //   className="group border border-border rounded-xl p-6 hover:border-accent/50 transition-all duration-300 hover:-translate-y-1"
            // >
            //   <div className="w-full h-40 bg-accent-bg rounded-lg mb-4 flex items-center justify-center border border-border group-hover:border-accent/30 transition-colors">
            //     <span className="text-text text-sm">Screenshot</span>
            //   </div>

            //   <h3 className="text-xl font-semibold text-text-h mb-2">
            //     {project.title}
            //   </h3>

            //   <p className="text-text text-sm mb-4 leading-relaxed">
            //     {project.description}
            //   </p>

            //   <div className="flex flex-wrap gap-2 mb-4">
            //     {project.tech.map((tech) => (
            //       <span
            //         key={tech}
            //         className="text-xs px-2 py-1 rounded-full bg-accent-bg text-accent border border-accent/20"
            //       >
            //         {tech}
            //       </span>
            //     ))}
            //   </div>

            //   <div className="flex gap-4">
            //     <a
            //       href={project.link}
            //       target="_blank"
            //       rel="noopener noreferrer"
            //       className="text-sm text-accent hover:opacity-80 transition flex items-center gap-1"
            //     >
            //       Live Demo →
            //     </a>
            //     <a
            //       href={project.github}
            //       target="_blank"
            //       rel="noopener noreferrer"
            //       className="text-sm text-text hover:text-accent transition flex items-center gap-1"
            //     >
            //       GitHub
            //     </a>
            //   </div>
            // </div>
          ))}
        </div>
      </div>
    </section>
  );
};
