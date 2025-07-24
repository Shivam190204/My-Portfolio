import React from "react";

// Updated ProjectCard to accept image, demoLink, and sourceCodeLink props
const ProjectCard = ({ title, main, image, demoLink, sourceCodeLink }) => {
  return (
    <div className="p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
      {/* Project Image */}
      {image && ( // Conditionally render image if the prop is provided
        <img
          src={image}
          alt={`${title} screenshot`}
          className="w-full h-48 object-cover rounded-md mb-4" // Added styling for the image
        />
      )}

      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>

      <div className="mt-auto p-2 md:p-4 flex gap-2 md:gap-4 justify-center"> {/* mt-auto pushes buttons to the bottom */}
        {demoLink && ( // Conditionally render Demo button if link is provided
          <a
            href={demoLink}
            target="_blank" // Opens in a new tab
            rel="noopener noreferrer" // Security best practice
            className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
          >
            Demo
          </a>
        )}
        {sourceCodeLink && ( // Conditionally render Source Code button if link is provided
          <a
            href={sourceCodeLink}
            target="_blank" // Opens in a new tab
            rel="noopener noreferrer" // Security best practice
            className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
          >
            Source Code
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;