import React from "react";
import ProjectItem from "../components/Projects/ProjectItem";

const ProjectsPage = () => {
  return (
    <>
      <div className="w-full py-16 min-h-screen flex flex-col justify-between items-center bg-primary-100">
        <div className="w-5/6 flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl font-title font-semibold">
            Mes réalisation et projets
          </h1>
          <div className="w-5/6 flex justify-center items-center align-center text-center">
            <p className="text-lg text-justify text-primary-900 mt-8">
              Vous allez pouvoir découvrir ici les différents projets que j'ai
              réalisé ou auquels j'ai participé.
            </p>
          </div>
          <div
            id="projects_list"
            className="w-full flex flex-col justify-around items-center text-center"
          >
            <ProjectItem
              title="RTT"
              technos={["Node.js", "JavaScript", "webapp"]}
              description="Projet débuté en cours puis terminé en autonomie de chat en temps réel. Connectez vous en même temps que vos amis dans le même salon et discutez ensemble naturellement sans même avoir à envoyer de message."
              image="https://cdn.discordapp.com/attachments/1040209563409977354/1096836892328210462/NathanD_ui_design_of_an_application_of_real_time_text_chatting__b0f0a0f7-9fb1-4d63-96b8-91a9d24ce04f.png"
              link="http://rtt.nathan-dudreuil.com"
            />
            <ProjectItem
              title="Mate"
              technos={["React Native", "Expo", "Appli Mobile", "Conception", "Gestion de projet"]}
              description="Mate est une application mobile crée de A à Z. De l'idée jusqu'à la réalisation en groupe en passant par la conception. L'application permet de trouver des partenaires de sport en fonction de vos préférences."
              image="https://media.discordapp.net/attachments/1040209563409977354/1096909095665147995/NathanD_iphone_ui_design_for_a_sport_app_proposing_mutltiple_ac_9561cf1b-5e97-4ce2-9051-f8f37121994c.png?width=1052&height=701"
              link="https://github.com/nathanddrl/Mate"
            />
            <ProjectItem
              title="PhotoSaver"
              technos={["React Native", "Expo", "Appli Mobile", "Photo", "Projet de cours"]}
              description="Projet d'appli mobile pour l'apprentissage des bases de React Native. Permet de predre des photos, de les afficher et les voir sur une carte ainsi que de les partager."
              image="https://cdn.discordapp.com/attachments/1040209563409977354/1096915933802528788/NathanD_iphone_ui_design_for_a_photo_app_that_can_take_photo_an_1700fabb-115a-4071-990f-c3ebe472a37b.png"
              link="https://github.com/nathanddrl/PhotoSaverShare"
            />
            <ProjectItem
              title="Mayadventure"
              technos={["Javascript", "Projet de cours", "Jeu vidéo", "Phaser"]}
              description="Jeu vidéo réalisé lors d'un projet à l'iut de Béziers. Il s'agit d'un jeu vidéo de plateforme en 2D en utilisant la librairie Phaser. 100% fait à la main en temps limité."
              image="https://cdn.discordapp.com/attachments/1040209563409977354/1096919771250954383/image.png"
              link="http://mayadventure.nathan-dudreuil.com"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
