import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: FaGithub,
      href: "https://github.com/TomasMadariaga",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/tomas-madariaga/",
    },
    {
      name: "Email",
      icon: FaEnvelope,
      href: "mailto:tomasmadariaga360@gmail.com",
    },
  ];

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border bg-bg">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <a
            href="#home"
            className="text-text-h font-name text-lg hover:text-accent transition"
          >
            Tomás Madariaga
          </a>

          <div className="flex gap-5">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text hover:text-accent transition-all hover:-translate-y-0.5"
                  aria-label={social.name}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          <p className="text-text text-xs">
            © {currentYear} Built with React, Tailwind & ☕
          </p>
        </div>
      </div>
    </footer>
  );
};