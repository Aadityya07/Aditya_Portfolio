import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Achievements } from './components/Achievements';
import { ImageTransition } from './components/ImageTransition';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="relative w-full selection:bg-theme-accent selection:text-black">
      <div className="noise-bg"></div>
      <div className="vignette-overlay"></div>

      <Navbar />
      <ImageTransition />

      <main>
        <Hero />
        <Services />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
}

export default App;