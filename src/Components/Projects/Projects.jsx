import React from "react";
import ProjectCard from "./ProjectCard";

// Corrected paths (going two levels up)
import restaurantImg from "../../assets/restaurant-reservation-system.jpg";
import heartImg from "../../assets/heart.jpg";
import collegeImg from "../../assets/college.avif";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5 justify-center">

        <ProjectCard
          title="RESTAURANT RESERVATION SYSTEM"
          main="Developed a full-stack web application for restaurant table bookings using the MERN stack. Allows users to enter details such as name, email, phone number, booking date, time, and number of guests. Booking data is validated and securely stored in a MongoDB database."
          image={restaurantImg}
          demoLink="https://restaurant-frontend-jze0.onrender.com/"
          sourceCodeLink="https://github.com/Shivam190204/Restraunt-Booking-System"
        />

        <ProjectCard
          title="HEART DISEASE DETECTION SYSTEM USING ML"
          main="Built to analyse real-time patient data for early detection of heart disease. Contributed to the model training part. Designed to assist doctors in decision-making, not replace them, and provides a binary output (disease detected: Yes/No) based on medical input features."
          image={heartImg}
          sourceCodeLink="https://github.com/Shivam190204/Heart-Disease-Prediction-System-Using-ML"
        />

        <ProjectCard
          title="EDUSITY"
          main="Created a responsive and user-friendly college website to improve engagement and provide easy access to information."
          image={collegeImg}
          demoLink="https://educity-eamz.onrender.com/"
          sourceCodeLink="https://github.com/Shivam190204/Educity"
        />

      </div>
    </div>
  );
};

export default Projects;
