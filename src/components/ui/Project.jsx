export const Project = ({ project }) => {
  return (
    <div
      key={project.id}
      className="group border border-border rounded-xl p-6 hover:border-accent/50 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="w-full h-40 bg-accent-bg rounded-lg mb-4 flex items-center justify-center border border-border group-hover:border-accent/30 transition-colors">
        <img src={project.image} alt={`${project.title} image`} className="rounded-lg"/>
        {/* <span className="text-text text-sm">Screenshot</span> */}
      </div>

      <h3 className="text-xl font-semibold text-text-h mb-2">
        {project.title}
      </h3>

      <p className="text-text text-sm mb-4 leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="text-xs px-2 py-1 rounded-full bg-accent-bg text-accent border border-accent/20"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-accent hover:opacity-80 transition flex items-center gap-1"
        >
          Live Demo →
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-text hover:text-accent transition flex items-center gap-1"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};
