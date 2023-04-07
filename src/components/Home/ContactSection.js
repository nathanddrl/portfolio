import React from 'react';
import '../../styles/index.css'
import axios from 'axios';


const ContactSection = () => {

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      await axios.post('http://localhost:3001/send-email', {
        name: event.target.name.value,
        email: event.target.email.value,
        message: event.target.message.value,
      });
  
      // Réinitialisez les champs de formulaire et affichez un message de succès
    } catch (error) {
      console.error(error);
      // Affichez un message d'erreur
    }
  };


  return (
    <div className="bg-neutral-100 py-16 w-4/5 mx-auto">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-primary font-bold mb-8">
          Contactez-moi
        </h2>
        <p className="text-neutral-800 text-lg mb-6">
          Si vous avez des questions, des propositions de projets ou si vous souhaitez simplement me contacter, n'hésitez pas à remplir le formulaire ci-dessous ou à me contacter via les réseaux sociaux.
        </p>
        <form onSubmit={handleSubmit}>
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
            className="contained-button bg-accent-500 font-semibold hover:bg-accent-400"
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
