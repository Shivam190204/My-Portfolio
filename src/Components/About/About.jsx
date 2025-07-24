import React from "react";
import AboutImg from "../../assets/portfolio1.jpg";
// IoArrowForward is not used in this specific snippet, so it's kept for context but not directly leveraged here.
// import { IoArrowForward } from "react-icons/io5"; 

const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About Me</h2>
        {/* Container for image and text, with spacing */}
        <div className="md:flex flex-wrap flex-col md:flex-row items-center mt-6 md:mt-10">
          <img
            className="md:h-80 border-4 border-blue-500 rounded-lg shadow-lg mb-6 md:mb-0 md:mr-10" // Added border, rounded corners, shadow, and margin for spacing
            src={AboutImg}
            alt="About img"
          />

          {/* Text content area */}
          <div className="flex-1 min-w-[300px] max-w-xl"> {/* Allows text block to grow, sets min/max width */}
            <p className="text-sm md:text-md leading-tight">
              Hello! I'm Shivam Anil Sonawane , a recent Computer Engineering graduate from MVP'S KBT College of Engineering, Nashik.My academic journey, culminating in a CGPA of 7.0/10.0 , has instilled in me a strong belief in 'learning by doing'—a philosophy that drives my approach to every new challenge.

              I'm eager to apply my skills and continue growing professionally in the tech world.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;