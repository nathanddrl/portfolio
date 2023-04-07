import React from 'react';
import '../../styles/index.css'

const ContactSection = () => {
  return (
    <div className="bg-neutral-100 py-16 w-4/5 mx-auto">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-primary font-bold mb-8">
          Contactez-moi
        </h2>
        <p className="text-neutral-800 text-lg mb-6">
          Si vous avez des questions, des propositions de projets ou si vous souhaitez simplement me contacter, n'hésitez pas à remplir le formulaire ci-dessous ou à me contacter via les réseaux sociaux.
        </p>
        <form>
          <div className="input-container">
            <input
              className="input-field"
              type="text"
              id="name"
              placeholder=" "
              required
            />
            <label className="input-label" htmlFor="name">
              Nom
            </label>
          </div>
          <div className="input-container">
            <input
              className="input-field"
              type="email"
              id="email"
              placeholder=" "
              required
            />
            <label className="input-label" htmlFor="email">
              Email
            </label>
          </div>
          <div className="input-container">
            <textarea
              className="input-field"
              id="message"
              placeholder=" "
              rows="6"
              required
            ></textarea>
            <label className="input-label" htmlFor="message">
              Message
            </label>
          </div>
          <button
            type="submit"
            className="bg-accent text-primary font-semibold py-2 px-8 rounded-md hover:bg-primary hover:text-neutral-100 transition-colors duration-300"
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
