import React from "react";
import { Link } from "react-router-dom";


const ProjectsSection = () => {
  return (
    <div className="w-full py-16 flex flex-col justify-around items-center bg-accent-100">
      <div className="w-5/6 flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl font-title font-semibold">Mes réalisation et projets</h1>
        <div className="w-5/6 flex justify-center items-center align-center text-center">
          <p className="text-lg text-justify text-primary-900 mt-8">
          Depuis que j'ai commencé à développer j'ai eu l'occasion de réaliser et participer à la réalisation de plusieurs projets.
          Certain de ces projets sont des projets personnels, d'autres sont des projets réalisés dans le cadre de ma formation.
          Ces projets sont réalisés en utilisant des technologies différentes, mais toutes sont des technologies que j'ai pu apprendre et utiliser dans le cadre de ma formation scolaire ou personnel
          Ils m'ont également permis d'acquérir de l'expérience et d'apprendre à travailler en équipe.
          </p>
        </div>
        <Link to="/projects" className="contained-button bg-primary-500 text-4xl text-primary-900 mt-8 ">
        Voir mes projets
      </Link>
      </div>
    </div>
  );
};

export default ProjectsSection;
