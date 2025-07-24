import React from "react";
// Import icons for specified skills
import { FaCss3, FaHtml5, FaJs, FaReact, FaBriefcase } from "react-icons/fa"; // Added FaBriefcase for experience
import { SiMongodb, SiMysql, SiCplusplus } from "react-icons/si"; // Added SiMysql, SiCplusplus

const Skill = () => {
  return (
    <div id="Skill" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Skills And Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        {/* Skills Section */}
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          {/* HTML */}
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          {/* CSS */}
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          {/* JavaScript */}
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          {/* React */}
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          {/* C++ */}
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiCplusplus color="#00599C" size={50} />
          </span>
          {/* MySQL */}
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMysql color="#4479A1" size={50} />
          </span>
          {/* MongoDB */}
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>
        </div>

        {/* Experience Section - Updated with actual internship details from resume */}
        <div className="md:w-3/5 lg:w-2/5 md:p-12 py-10"> {/* Adjusted width here */}
          <div className="flex gap-6 md:gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-6 md:p-8 items-start"> {/* Increased padding */}
            <FaBriefcase color="#A0A0A0" size={50} />
            <span className="text-white">
              <h2 className="text-lg md:text-xl leading-tight font-bold">Full-Stack Development Intern </h2> {/* Increased text size */}
              <p className="text-sm md:text-base leading-tight font-thin"> {/* Adjusted text size */}
                Edunet Foundation, Under AICTE <br />
                Dec 2023 - Apr 2024
              </p>
              <ul className="text-sm md:text-base p-2 list-disc pl-5"> {/* Adjusted text size */}
                <li>Developed a full-stack web application for restaurant table bookings using the MERN stack. </li>
                <li>Enabled users to enter details like name, email, phone number, booking date, time, and number of guests. </li>
                <li>Ensured booking data validation and secure storage in a MongoDB database. </li>
                <li>Utilized React.js, Express.js, MongoDB, and Node.js for development. </li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;