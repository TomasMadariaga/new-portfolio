import cruz_patagonia from "../../public/images/projects/cruz-patagonia.webp";
import password_generator from "../../public/images/projects/password-generator.webp"
import shortener from "../../public/images/projects/shortener.webp"
import ecommerce from "../../public/images/projects/ecommerce.webp"

export const projects = [
  {
    id: 1,
    title: "Shortener",
    description:
      "REST API for URL shortening with rate limiting, Redis caching, and redirect handling. Frontend built with React and Tailwind.",
    tech: ["React", "Tailwind", "Node.js", "Express", "Prisma", "MySQL"],
    link: "https://shortener-ar.vercel.app/",
    github: "https://github.com/TomasMadariaga/shortener_frontend",
    image: shortener,
  },
  {
    id: 2,
    title: "Password Generator",
    description:
      "React-based password generator with real-time strength indicator. Features user accounts, saved passwords vault, and copy-to-clipboard functionality. Backend with NestJS and MySQL.",
    tech: ["React", "Tailwind", "NestJS", "TypeORM", "MySQL"],
    link: "https://password-generator-ar.vercel.app/",
    github: "https://github.com/TomasMadariaga/password_frontend",
    image: password_generator,
  },
  {
    id: 3,
    title: "Cruz Patagonia",
    description:
      "Two-sided marketplace connecting clients with construction professionals (workers, painters, carpenters, architects, etc). Built with NestJS, React, and MySQL. Features role-based auth, booking system and reviews.",
    tech: ["React", "Tailwind", "NestJS", "TypeORM", "MySQL"],
    link: "#",
    github: "#",
    image: cruz_patagonia,
  },
  {
    id: 4,
    title: "Componentify",
    description:
      "PC component store built with Next.js, and Strapi. Features real-time stock management, category filtering, payment integration, and order tracking.",
    tech: ["Next.js", "Tailwind", "TypeScript", "Strapi", "PostgreSQL"],
    link: "https://ecommerce-tech-three.vercel.app/",
    github: "https://github.com/TomasMadariaga/ecommerce-tech-frontend",
    image: ecommerce,
  },
];
