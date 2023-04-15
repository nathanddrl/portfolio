import React from "react";
import photo_de_moi from "../../assets/images/moi.png";
import "../../styles/index.css";

const AboutSection = () => {
  const [tipsShowing, setTipsShowing] = React.useState(false);

  return (
    <div className="bg-neutral-100 min-h-screen py-16 w-5/6 flex flex-col items-center mx-auto">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-primary font-semibold mb-8 font-title text-center">
          À propos de moi
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="w-2/3 relative">
            <img
              src={photo_de_moi}
              alt="Nathan Dudreuil"
              className="rounded-full h-full w-full mx-auto object-cover"
              id="photo_de_moi"
              onMouseOver={() => setTipsShowing(true)}
              onMouseOut={() => setTipsShowing(false)}
            />
            {tipsShowing && (
              <p
                className=" mt-6 absolute bottom-10 right-0 -rotate-45 translate-x-1/2 text-xs md:text-base text-neutral-500"
                id="smile_tips"
              >
                Parce que sourire c'est important :)
              </p>
            )}
          </div>
          <div>
            <p className="text-primary-800 text-lg mb-6">
              Hey, moi c'est <bold>Nathan Dudreuil</bold>, je suis un
              développeur web passionné avec déjà une année d'expérience dans la
              création de solutions web. J'ai travaillé avec diverses
              technologies et langages de programmation et Framework, tels que <span className="text-accent-500">
                PHP, Laravel, React, Node.js, HTML, CSS et JavaScript
              </span>
              .
            </p>
            <p className="text-primary-800 text-lg mb-6">
              J'ai un <span className="text-accent-500">
                DUT en Métier du Multimédia et de l'Internet
              </span> de l'IUT de Béziers. Mon objectif est de continuellement apprendre
              afin d'approfondir mes connaissances pour offrir les meilleurs
              produits et le meilleur service produit.
            </p>
            <p className="text-primary-800 text-lg mb-6">
              Dans mon temps libre, j'aime apprendre de nouvelles technologies
              et approfondir mes compétences en programmation mais aussi en
              design, 3d et même vidéo. Je suis également passionné par la
              photographie et le sport comme le handball.
              <br />
              Je me forme également à l'utilisation des <span className="text-accent-500">outils d'intelligence artificielles</span> afin d'améliorer ma productivité.
            </p>
            <a
              href="#contact"
              className="contained-button bg-accent-500 hover:bg-accent-400 text-primary font-semibold py-2 px-8 rounded-md hover:bg-primary hover:text-neutral-100 transition-colors duration-300"
            >
              Contactez-moi
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
