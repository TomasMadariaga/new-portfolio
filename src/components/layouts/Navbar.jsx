import { useState, useEffect } from "react";

const Navbar = () => {
  const [navbarBlur, setNavbarBlur] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      setNavbarBlur(window.scrollY >= 20);
    };

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 72;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      window.history.pushState({}, "", `#${sectionId}`);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 mx-auto py-5 px-[5vw] transition-all duration-300 ${
          navbarBlur
            ? "bg-bg/80 dark:bg-[#16171d]/80 backdrop-blur-lg shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => handleScroll(e, "home")}
            className="cursor-pointer transition duration-200 text-xl tracking-tight font-name hover:opacity-80 text-text-h"
          >
            Tomás
          </a>
          <ul className="hidden md:flex justify-around gap-8 items-center list-none font-medium text-sm uppercase tracking-wider">
            {["about", "projects", "skills", "contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  onClick={(e) => handleScroll(e, item)}
                  className="cursor-pointer transition duration-200 hover:text-accent text-text"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={toggleMobileMenu}
            className={`md:hidden flex flex-col justify-center p-2 items-center w-10 h-10 rounded-lg transition-colors duration-200 z-50 ${
              navbarBlur
                ? "border shadow-lg backdrop-blur-lg hover:bg-accent-bg"
                : "hover:bg-accent-bg"
            }`}
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-current rounded-full transition-all duration-300 ${
                mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-current rounded-full my-1.5 transition-all duration-300 ${
                mobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-current rounded-full transition-all duration-300 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>
        <div
          className={`absolute top-full left-0 right-0 md:hidden z-40 px-[5vw] transition-all duration-300 ${
            mobileMenuOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible pointer-events-none"
          }`}
        >
          <div className="mx-auto max-w-300">
            <ul className="rounded-xl p-2 flex flex-col gap-1 list-none backdrop-blur-xl border shadow-lg bg-bg/80 dark:bg-[#16171d]/80">
              {["About", "Projects", "Skills", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => {
                      handleScroll(e, item.toLowerCase());
                      setMobileMenuOpen(false);
                    }}
                    className="block px-4 py-3 rounded-lg text-text hover:text-accent hover:bg-accent-bg transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;