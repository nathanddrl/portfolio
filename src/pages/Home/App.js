import "../../App.css";
import TopMenu from "../../components/Menu/TopMenu";
import { useState, useEffect } from "react";
import Loader from "../../components/Loader";
import WelcomeSection from "../../components/Home/WelcomeSection";
import AboutSection from "../../components/Home/AboutSection";
import SkillsSection from "../../components/Home/SkillsSection";
import ProjectsSection from "../../components/Home/ProjectsSection";
import ContactSection from "../../components/Home/ContactSection";
import { Footer } from "../../components/Footer";


function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Fonction pour gérer l'événement 'load'
    const handleLoad = () => {
      setIsLoading(false);
    };
    // Ajoutez l'écouteur d'événements 'load' à la fenêtre
    window.addEventListener("load", handleLoad);
    // Supprimez l'écouteur d'événements lors du nettoyage de l'effet
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <div className="App font-sans">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-full">
          <header className="App-header">
            <TopMenu />
          </header>
          <main>
            <section id="home" className="w-full flex justify-center items-center bg-primary-100">
              <WelcomeSection />
            </section>
            <section id="about" className="w-full flex bg-neutral-100">
              <AboutSection />
            </section>
            <section id="skills" className="w-full flex ">
              <SkillsSection />
            </section>
            <section id="projects" className="w-full flex">
              <ProjectsSection />
            </section>
            <section id="contact" className="w-full flex bg-neutral-100">
              <ContactSection />
            </section>
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      )}
    </div>
  );
}

export default App;
