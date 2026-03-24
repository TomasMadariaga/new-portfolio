import { useEffect, useRef } from "react";

export const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const { width, height } = containerRef.current.getBoundingClientRect();
      const x = (clientX / width - 0.5) * 10;
      const y = (clientY / height - 0.5) * 10;
      containerRef.current.style.setProperty("--mouse-x", `${x}px`);
      containerRef.current.style.setProperty("--mouse-y", `${y}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 relative overflow-hidden text-text"
      ref={containerRef}
    >
      <div className="max-w-5xl mx-auto w-full">
        <div className="max-w-2xl ml-8 md:ml-12 lg:ml-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-border bg-accent-bg rounded-full mb-5">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
            <span className="text-xs font-medium text-accent uppercase">
              Available for work
            </span>
          </div>

          <h1 className="font-name text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-6 md:mb-3 relative">
            <span className="text-text-h relative z-10">Tomás Madariaga</span>
            <span className="absolute inset-0 text-accent opacity-30 -translate-x-0.75 -translate-y-0.75 select-none">
              Tomás Madariaga
            </span>
          </h1>

          <div className="mb-8">
            <p className="text-xl sm:text-2xl font-light text-text">
              <span className="font-medium text-text-h">
                Software Developer
              </span>
            </p>
            <p className="text-base text-text mt-1 italic">
              Full Stack · React · Node · TypeScript
            </p>
          </div>

          <p className="text-sm sm:text-base text-text max-w-lg mb-8 leading-relaxed">
            I build software like I'm building it for myself: clean,
            maintainable, and actually solving the problem.
          </p>

          <div className="relative z-10">
            <a
              href="/Tomas Madariaga CV.pdf"
              download
              className="cursor-pointer inline-flex items-center gap-2 border border-accent text-accent px-5 py-2.5 rounded-lg hover:bg-accent hover:text-bg transition-all duration-200 font-medium text-sm"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
