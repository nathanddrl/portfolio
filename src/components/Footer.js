import React from 'react';

export const Footer = () => {
  return (
    <div className="w-full py-8 flex flex-col justify-around items-center bg-neutral-800 text-neutral-100">
      <div className="text-center mb-4">
        <h2 className="text-lg font-bold">Dudreuil Nathan</h2>
        <p className="text-sm">Développeur Web</p>
      </div>
      <div className="flex justify-center space-x-4 mb-4">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github text-xl hover:text-accent transition-colors duration-300"></i>
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin text-xl hover:text-accent transition-colors duration-300"></i>
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter text-xl hover:text-accent transition-colors duration-300"></i>
        </a>
      </div>
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Nathan Dudreuil. Tous droits réservés.
      </p>
    </div>
  );
};

export default Footer;
