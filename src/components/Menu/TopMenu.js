import React from "react";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import "../../styles/index.css";
import "../../styles/menuMobile.css";

export const TopMenu = () => {
  const [isMobile, setIsMobile] = React.useState((fn) => {
    if (window.innerWidth < 768) {
      return true;
    } else {
      return false;
    }
  });

  // const [isMenuOpen, setIsMenuOpen] = React.useState(false);

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

  return (
    <div>
      {isMobile ? (
        <div class="phone">
          <div class="content">
            <nav role="navigation">
              <div id="menuToggle">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                <ul id="menu">
                  <li>
                    <a href="#home">Accueil</a>
                  </li>
                  <li>
                    <a href="#about">À propos</a>
                  </li>
                  <li>
                    <a href="#skills">Compétences</a>
                  </li>
                  <li>
                    <a href="#projects">Projets</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/nathan-dudreuil-195833227/" target="_blank" rel="noreferrer">
                      <AiOutlineLinkedin className="text-2xl" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/nathanddrl" target="_blanc" rel="noreferrer">
                      <AiFillGithub className="text-2xl" />
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      ) : (
        <div className="w-full flex justify-center items-center h-16 bg-primary-100 text-primary-900">
          <ul className="w-5/6 flex justify-around items-center weight-600">
            <li className="mr-4 menu-item-animation px-2">
              <a href="#home" className="">
                Accueil
              </a>
            </li>
            <li className="mr-4 menu-item-animation px-2">
              <a href="#about" className="">
                À propos
              </a>
            </li>
            <li className="mr-4 menu-item-animation px-2">
              <a href="#skills" className="">
                Compétences
              </a>
            </li>
            <li className="mr-4 menu-item-animation px-2">
              <a href="#projects" className="">
                Projets
              </a>
            </li>
            <li className="mr-4 menu-item-animation px-2">
              <a href="#contact" className="">
                Contact
              </a>
            </li>
            <li className="mr-4 menu-item-animation px-2">
              <a
                href="https://www.linkedin.com/in/nathan-dudreuil-195833227/"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineLinkedin className="text-2xl" />
              </a>
            </li>
            <li className="mr-4 menu-item-animation px-2">
              <a
                href="https://github.com/nathanddrl"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub className="text-2xl" />
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default TopMenu;
