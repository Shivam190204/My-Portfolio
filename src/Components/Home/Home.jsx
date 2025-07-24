import React from "react";
import avatarImg from "../../assets/avtar.jpg";
import { FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Import FaEnvelope for email icon
import TextChange from "../TextChange";


const Home = () => {
  return (
    <div className="text-white flex flex-col md:flex-row w-full justify-between items-center p-10 md:p-20"> {/* Adjusted flex direction for better mobile stacking */}
      <div className="md:w-2/4 md:pt-10 text-center md:text-left mb-8 md:mb-0"> {/* Centered text on mobile, added bottom margin */}
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter justify-center md:justify-start"> {/* Centered h1 on mobile */}
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight mt-2"> {/* Added margin-top for spacing */}
          Passionate Computer Engineering Graduate | MERN Stack Developer.
        </p>
        
        {/* Buttons Container */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start"> {/* Flex container for buttons, stack on mobile, row on larger screens */}
            {/* LinkedIn Button */}
            <a
                href="https://www.linkedin.com/in/shivam-sonawane-450630291" // REPLACE with your actual LinkedIn profile URL
                target="_blank" // Opens the link in a new tab
                rel="noopener noreferrer" // Security best practice for target="_blank"
                className="py-2 px-4 text-sm md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] flex items-center justify-center gap-2" // Removed fixed mt-5/10, adjusted padding
            >
                <FaLinkedin size={20} /> {/* LinkedIn icon, adjust size as needed */}
                Connect on LinkedIn
            </a>

            {/* Email Me Button */}
            <a
                href="mailto:shivamasonawane2468@gmail.com" // REPLACE with your actual email address
                className="py-2 px-4 text-sm md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] flex items-center justify-center gap-2" // Adjusted padding for consistency
            >
                <FaEnvelope size={20} /> {/* Email icon, adjust size as needed */}
                Email Me
            </a>
        </div>
      </div>
      
      {/* Avatar Image */}
      <div className="md:w-1/2 flex justify-center md:justify-end"> {/* Adjusted width and positioning for image */}
        <img className="w-full max-w-xs md:max-w-md rounded-full shadow-lg" src={avatarImg} alt="Avatar" /> {/* Added max-width and rounded-full for styling */}
      </div>
    </div>
  );
};

export default Home;