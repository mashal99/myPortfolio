"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import AboutImage from "../../images/aboutImage.png";
import UniversityPopup from "./UniversityPopup";


const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>MySQL</li>
        <li>JavaScript,C/C++</li>
        <li>Java</li>
        <li>JavaScript</li>
        <li>React</li>
        <li> Python(NumPy, Pandas,TensorFlow, PyTorch, Matplotlib, SciPy)</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li onClick={() => setActiveUniversity("Rutgers University")}>Rutgers University - B.S in Computer Science </li>
        <li onClick={() => setActiveUniversity("Union County College")}>Union County College - A.S in Computer Science </li>
        <li onClick={() => setActiveUniversity("Cambridge General Certificate of Secondary Education")}>Cambridge General Certificate of Secondary Education</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Certified PEGA System Architect </li>
        <li>CS50: Intro to Computer Science</li>
        <li>Certified Apple Technician</li>
        <li>Completed Jamf 100 Course and Exam</li>
        <li>BMC Certified Associate: Helix ITSM 19.x</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>Interpublic Group</li>
        <ul><li>Desktop Engineering Intern - (Jun 2023 - Now) </li></ul>
        <li>Apple, Inc.</li>
        <ul>
          <il>Technical Expert - (Aug 2022 – Sep 2023)</il>
        </ul>
        <li>New Jersey Courts</li>
        <ul>
          <li>Quality Testing Intern for System Architecture</li>
          <li> - (May 2022 – Sep 2022)</li>
        </ul>
        <li>Rutgers, The State University of New Jersey</li>
        <ul>
          <li>Technical Support Associate - (Sep 2021 – Sep 2022)</li>
        </ul>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [activeUniversity, setActiveUniversity] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  
  const handleTabChange = (id) => {
    setTab(id);
    // Close any open university popup when switching tabs
    setActiveUniversity(null);
    setIsPopupVisible(false);
  };

  const handleUniversityClick = (universityName) => {
    console.log("Selected University: ", universityName); // Debugging line
    setActiveUniversity(universityName);
  }

  const handlePopupVisibility = () => {
    setIsPopupVisible(!isPopupVisible)
  };

  const universitiesDetails = {

    "Rutgers University - B.S in Computer Science": {
      name: "Rutgers University",
      programs: [
        { title: "Bachelor of Science in Computer Science", graduationDate: "January 2024" },
        { title: "Dean's List", terms: "Spring 2022 - Spring 2024" },
        { title: "RU Egypitan Club Vice President", term: "Fall 2023" }
      ]
    },

    "Union County College - A.S in Computer Science": {
      name: "Union County College",
      programs: [
        { title: "Associates of Science in Computer Science", graduationDate: "May 2021" },
        { title: "American Honors student" },
        { title: "Phi Theta Kappa - Iota Xi President", term: "2020 - 2021" }
      ]
    },
    "Cambridge General Certificate of Secondary Education": {
      name: "Cambridge General Certificate of Secondary Education",
      programs: [
        { title: "Sohar International School)", graduationDate: "May 2018" },
        { title: "Founder of Musical Band (Six Strings)" },
        { title: "Top Overall Academic" }
      ]
    }
  };
  

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src={AboutImage} width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {tab === "education" ? (
              <ul className="list-disc pl-2">
                {Object.keys(universitiesDetails).map((universityName) => (
                  <li key={universityName} onClick={() => handleUniversityClick(universityName)}>
                    {universityName}
                  </li>
                ))}
              </ul>
            ) : (
              TAB_DATA.find((t) => t.id === tab).content
            )}
          </div>
        </div>
      </div>
      {activeUniversity && isPopupVisible && (
          <UniversityPopup universityDetails={universitiesDetails[activeUniversity]} closePopup={handlePopupVisibility} />
          )}
    </section>
  );
};

export default AboutSection;