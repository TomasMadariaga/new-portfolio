import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaAws,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiNestjs,
  SiNextdotjs,
  SiTypescript,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiStrapi,
  SiPrisma,
  SiTypeorm
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";

export const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React", icon: FaReact},
        { name: "Next.js", icon: SiNextdotjs},
        { name: "TypeScript", icon: SiTypescript},
        { name: "Tailwind", icon: RiTailwindCssFill},
      ],
    },
    {
      category: "Backend & CMS",
      skills: [
        { name: "Node.js", icon: FaNodeJs},
        { name: "Express", icon: SiExpress},
        { name: "NestJS", icon: SiNestjs},
        {name: "Strapi", icon: SiStrapi}
      ],
    },
    {
      category: "Databases & ORMs",
      skills: [
        { name: "PostgreSQL", icon: SiPostgresql},
        { name: "MySQL", icon: GrMysql},
        {name: "Prisma", icon: SiPrisma},
        {name: "TypeORM", icon: SiTypeorm}
      ],
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", icon: FaGitAlt},
        { name: "Docker", icon: SiDocker},
        { name: "AWS", icon: FaAws},
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="flex items-center justify-start gap-3 mb-2">
            <span className="text-5xl font-bold text-accent/20 font-name">
              03
            </span>
            <h2 className="text-3xl sm:text-4xl font-name text-text-h">
              Skills
            </h2>
          </div>
          <p className="text-text max-w-2xl">
            Technologies I work with regularly. It's not a closed list, but rather what I use to solve problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="border border-border rounded-xl p-6 bg-accent-bg/20 hover:border-accent/30 transition-all duration-300"
            >
              <h3 className="text-xl font-name text-text-h mb-6 pb-2 border-b border-border">
                {category.category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                {category.skills.map((skill, skillIdx) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skillIdx}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent-bg transition-all group"
                    >
                      {Icon && (
                        <div className="text-2xl text-accent group-hover:scale-110 transition-transform">
                          <Icon />
                        </div>
                      )}
                      <div className="flex-1">
                        <div className="text-text-h font-medium text-sm">
                          {skill.name}
                        </div>
                        
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};