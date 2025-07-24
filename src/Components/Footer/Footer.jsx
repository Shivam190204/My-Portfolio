import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { MdLocalPhone } from "react-icons/md"; // Import phone icon

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl">
        <li className="flex gap-1 items-center">
          <MdLocalPhone size={20} /> {/* Phone icon */}
          <a href="tel:+919876543210" className="hover:underline"> {/* Use tel: for phone numbers */}
            +91 9370457164 
          </a>
        </li>
        <li className="flex gap-1 items-center">
          <MdOutlineEmail size={20} />
          <a href="mailto:shivamasonawane2468@gmail.com" className="hover:underline">
            shivamasonawane2468@gmail.com
          </a>
        </li>
        <li className="flex gap-1 items-center">
          <CiLinkedin />
          <a href="https://www.linkedin.com/in/shivam-sonawane-450630291" target="_blank" rel="noopener noreferrer" className="hover:underline">
            https://www.linkedin.com/in/shivam-sonawane-450630291
          </a>
        </li>
        <li className="flex gap-1 items-center">
          <FaGithub />
          <a href="https://github.com/Shivam190204" target="_blank" rel="noopener noreferrer" className="hover:underline">
            https://github.com/Shivam190204
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;