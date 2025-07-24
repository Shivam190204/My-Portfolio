import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5 justify-center"> {/* Added justify-center for better layout */}

        {/* Project 1: Restaurant Reservation System (MERN Stack) */}
        <ProjectCard
          title="RESTAURANT RESERVATION SYSTEM"
          main="Developed a full-stack web application for restaurant table bookings using the MERN stack. Allows users to enter details such as name, email, phone number, booking date, time, and number of guests. Booking data is validated and securely stored in a MongoDB database."
          image="src/assets/restaurant-reservation-system.jpg" // REPLACE with your actual image path
          demoLink="https://restaurant-frontend-jze0.onrender.com/" // REPLACE with your actual live demo link
          sourceCodeLink="https://github.com/Shivam190204/Restraunt-Booking-System" // REPLACE with your actual GitHub repo link
        />

        {/* Project 2: Heart Disease Detection System Using ML */}
        <ProjectCard
          title="HEART DISEASE DETECTION SYSTEM USING ML"
          main="Built to analyse real-time patient data for early detection of heart disease. Contributed to the model training part. Designed to assist doctors in decision-making, not replace them, and provides a binary output (disease detected: Yes/No) based on medical input features."
          image="src/assets/heart.jpg" // REPLACE with your actual image path
           // REPLACE with your actual live demo link (if deployed)
          sourceCodeLink="https://github.com/Shivam190204/Heart-Disease-Prediction-System-Using-ML" // REPLACE with your actual GitHub repo link
        />

        {/* Project 3: EDUSITY */}
        <ProjectCard
          title="EDUSITY"
          main="Created a responsive and user-friendly college website to improve engagement and provide easy access to information."
          image="src/assets/college.avif" // REPLACE with your actual image path
          demoLink="https://educity-eamz.onrender.com/" // REPLACE with your actual live demo link
          sourceCodeLink="https://github.com/Shivam190204/Educity" // REPLACE with your actual GitHub repo link
        />

        {/* You can add more ProjectCard components for other projects here */}

      </div>
    </div>
  );
};

export default Projects;
