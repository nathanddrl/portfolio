import React from 'react';

const SkillsSection = () => {
  return (
    <div className="py-16 w-full text-center bg-primary-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-primary font-bold mb-8">
          Mes compétences
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl text-accent font-semibold mb-4">
              Soft Skills
            </h3>
            <ul className="list-disc list-inside text-neutral-800 text-lg">
              <li>Communication</li>
              <li>Esprit d'équipe</li>
              <li>Adaptabilité</li>
              <li>Résolution de problèmes</li>
              <li>Créativité</li>
              <li>Curiosité</li>
            </ul>
          </div>

          {/* Hard Skills */}
          <div>
            <h3 className="text-2xl text-accent font-semibold mb-4">
              Hard Skills
            </h3>
            <ul className="list-disc list-inside text-neutral-800 text-lg flex flex-col align-center justify-center">
              <li>HTML, CSS, JavaScript</li>
              <li>PHP, Laravel, MySql</li>
              <li>React, React Native, Node.js</li>
              <li>Clean code et bonne pratiques</li>
              <li>Git, GitLab, GitHub</li>
              <li>Responsive Design</li>
            </ul>
          </div>

        </div>
        <p className='text-neutral-800 text-lg mt-8'>Et bien d'autres...</p>
      </div>
    </div>
  );
};

export default SkillsSection;
