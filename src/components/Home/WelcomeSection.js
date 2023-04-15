import React, { useState } from "react";

export const WelcomeSection = () => {
  const [showTips, setShowTips] = useState(false);
  const [isMobile, setIsMobile] = React.useState((fn) => {
    if (window.innerWidth < 768) {
      return true;
    } else {
      return false;
    }
  });
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isMobile) {
    return (
      <div>
        <div className="w-full py-16 bg-primary-100 flex items-center justify-center">
          <div className="text-center relative">
            <h1
              className="text-4xl md:text-6xl lg:text-7xl text-primary-900 mb-4 font-title font-semibold"
              id="name"
              onMouseOver={() => setShowTips(true)}
              onMouseOut={() => setShowTips(false)}
            >
              Nathan Dudreuil
            </h1>
            {showTips && (
              <p
                className="absolute top-0 right-10 rotate-12 text-xs md:text-base text-neutral-500 mb-4"
                id="name_tips"
              >
                (et pas <bold>Dubreuil</bold>, c'est important <br /> on se
                trompe souvent)
              </p>
            )}
            <h2 className="text-2xl md:text-4xl text-accent-500 font-semibold mb-6">
              Développeur Web
            </h2>
            <p className="text-lg md:text-xl text-primary-900 mb-8 font-sans">
              Développeur web passionné et expérimenté, spécialisé dans la
              création de solutions web performantes et élégantes.
            </p>
            <a
              href="#projets"
              className="contained-button bg-primary-500 hover:bg-primary-400 font-semibold py-2 px-8 rounded-md hover:bg-secondary transition-colors duration-300"
            >
              Découvrez mes projets
            </a>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full h-screen bg-primary-100 flex items-center justify-center">
        <div className="text-center relative">
          <h1
            className="text-4xl md:text-6xl lg:text-7xl text-primary-900 mb-4 font-title font-semibold"
            id="name"
            onMouseOver={() => setShowTips(true)}
            onMouseOut={() => setShowTips(false)}
          >
            Nathan Dudreuil
          </h1>
          {showTips && (
            <p
              className="absolute top-0 right-10 rotate-12 text-xs md:text-base text-neutral-500 mb-4"
              id="name_tips"
            >
              (et pas <bold>Dubreuil</bold>, c'est important <br /> on se trompe
              souvent)
            </p>
          )}
          <h2 className="text-2xl md:text-4xl text-accent-500 font-semibold mb-6">
            Développeur Web
          </h2>
          <p className="text-lg md:text-xl text-primary-900 mb-8 font-sans">
            Développeur web passionné et expérimenté, spécialisé dans la
            création de solutions web performantes et élégantes.
          </p>
          <a
            href="#projets"
            className="contained-button bg-primary-500 hover:bg-primary-400 font-semibold py-2 px-8 rounded-md hover:bg-secondary transition-colors duration-300"
          >
            Découvrez mes projets
          </a>
        </div>
      </div>
    );
  }
};

export default WelcomeSection;
