import React from "react";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import "../../styles/index.css";
import "../../styles/menuMobile.css";
import { HashLink } from "react-router-hash-link";

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
    // TODO combiner lien page + anchor
    <header>
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
                      <HashLink smooth to="/">Accueil</HashLink>
                    </li>
                    <li>
                      <HashLink smooth to="/#about">À propos</HashLink>
                    </li>
                    <li>
                      <HashLink smooth to="/#skills">Compétences</HashLink>
                    </li>
                    <li>
                      <HashLink smooth to="/#projects">Projets</HashLink>
                    </li>
                    <li>
                      <HashLink smooth to="/#contact">Contact</HashLink>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/nathan-dudreuil-195833227/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <AiOutlineLinkedin />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/nathanddrl"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <AiFillGithub />
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
                <HashLink smooth to="/">Accueil</HashLink>
              </li>
              <li className="mr-4 menu-item-animation px-2">
                <HashLink smooth to="/#about">À propos</HashLink>
              </li>
              <li className="mr-4 menu-item-animation px-2">
                <HashLink smooth to="/#skills">Compétences</HashLink>
              </li>
              <li className="mr-4 menu-item-animation px-2">
                <HashLink smooth to="/#projects">Projets</HashLink>
              </li>
              <li className="mr-4 menu-item-animation px-2">
                <HashLink smooth to="/#contact">Contact</HashLink>
              </li>
              <li className="mr-4 menu-item-animation px-2">
                <a
                  href="https://www.linkedin.com/in/nathan-dudreuil-195833227/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineLinkedin />
                </a>
              </li>
              <li className="mr-4 menu-item-animation px-2">
                <a href="https://github.com/nathanddrl" target="_blank" rel="noreferrer">
                  <AiFillGithub />
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default TopMenu;
