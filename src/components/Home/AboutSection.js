import React from 'react';

const AboutSection = () => {
  return (
    <div className="bg-neutral-100 py-16 w-5/6 flex flex-col items-center mx-auto">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-primary font-bold mb-8">
          À propos de moi
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p>image</p>
          </div>
          <div>
            <p className="text-primary-800 text-lg mb-6">
              Hey, moi c'est <bold>Nathan Dudreuil</bold>, je suis un développeur web passionné avec 2 années d'expérience dans la création de solutions web. J'ai travaillé avec diverses technologies et langages de programmation et Framework, tels que <span className='text-accent-500'>PHP, Laravel, React, Node.js, HTML, CSS et JavaScript</span>.
            </p>
            <p className="text-primary-800 text-lg mb-6">
              J'ai un <span className='text-accent-500'>DUT en Métier du Multimédia et de l'Internet</span> de l'IUT de Béziers. Mon objectif est de continuellement apprendre afin d'approfondir mes connaissances pour offrir les meilleurs produits et le meilleur service produit.
            </p>
            <p className="text-primary-800 text-lg mb-6">
              Dans mon temps libre, j'aime apprendre de nouvelles technologies et approfondir mes compétences en programmation mais aussi en design, 3d et même vidéo. Je suis également passionné par la photographie le sport comme le handball.
              <br />Je me forme également à l'utilisation des <span className='text-accent-500'>outils d'intelligence artificielles</span> afin d'améliorer ma productivité.
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
