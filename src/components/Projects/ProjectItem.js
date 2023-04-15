import React from "react";

const ProjectItem = ({ title, description, image, technos, link }) => {
  
    const handleProjectClick = (link) => {
        window.open(link, "_blank");
    }

  
    return (
    <>
      <div className="shadow-md rounded-lg overflow-hidden w-full md:w-3/4 lg:w-2/3 mx-auto my-4 bg-neutral-100 text-primary-900 hover:shadow-xl transition duration-300 ease-in-out hover:cursor-pointer
      " key={title} onClick={() => handleProjectClick(link)}>
        <div className="flex md:flex-row flex-col align-center text-left">
          <div className="relative md:w-1/3">
            <div className="p-0 md:p-4 rounded-lg h-full w-full">
              <img
                src={image}
                alt={title}
                className="h-full w-full object-cover rounded-lg md:rounded-none md:rounded-l-lg"
              />
            </div>
          </div>
          <div className="w-2/3 p-4">
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-700">{description}</p>
            <div className="flex justify-between items-center mt-4 flex-wrap">
                <div className="flex flex-wrap gap-2">
                    {technos.map((techno, index) => (
                        <div key={index} className="bg-accent-200 text-primary-900 px-2 py-1 rounded-lg mr-2">{techno}</div>
                    ))}
                    </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectItem;
