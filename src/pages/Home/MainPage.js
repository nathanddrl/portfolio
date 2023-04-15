// MainPage.js
import React from "react";
import WelcomeSection from "../../components/Home/WelcomeSection";
import AboutSection from "../../components/Home/AboutSection";
import SkillsSection from "../../components/Home/SkillsSection";
import ProjectsSection from "../../components/Home/ProjectsSection";
import ContactSection from "../../components/Home/ContactSection";

const MainPage = () => {
  return (
    <>
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
    </>
  );
};

export default MainPage;
