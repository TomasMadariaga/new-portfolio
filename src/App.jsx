import { Footer } from "./components/layouts/Footer";
import Navbar from "./components/layouts/Navbar";
import { About } from "./components/sections/About";
import { Contact } from "./components/sections/Contact";
import { Hero } from "./components/sections/Hero";
import { Projects } from "./components/sections/Projects";
import { Skills } from "./components/sections/Skills";

function App() {
  return (
    <div className="scroll-smooth min-h-screen flex flex-col bg-bg">
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20px 20px, var(--color-accent) 1px, transparent 1px),
            radial-gradient(circle at 40px 40px, var(--color-accent) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px, 80px 80px",
          opacity: 0.15,
        }}
      />
      <Navbar />
      <Hero/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
