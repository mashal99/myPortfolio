"use client";
import React, { useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import AboutImage from "../../images/aboutImage.png";
import UniversityPopup from "./UniversityPopup";

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [activeUniversity, setActiveUniversity] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const universitiesDetails = {
    "New Jersey Institute of Technology - M.S. in Computer Science": {
      name: "New Jersey Institute of Technology",
      programs: [
        { title: "Master of Science in Computer Science", graduationDate: "May 2025" },
        { title: "Graduate coursework in Data Engineering, Distributed Systems, and Software Engineering" },
      ],
    },
    "Rutgers University - B.S. in Computer Science": {
      name: "Rutgers University",
      programs: [
        { title: "Bachelor of Science in Computer Science", graduationDate: "January 2024" },
        { title: "Dean's List", terms: "Spring 2022 – Spring 2024" },
        { title: "RU Egyptian Club Vice President", term: "Fall 2023" },
      ],
    },
    "Union County College - A.S. in Computer Science": {
      name: "Union County College",
      programs: [
        { title: "Associate of Science in Computer Science", graduationDate: "May 2021" },
        { title: "American Honors student" },
        { title: "Phi Theta Kappa - Iota Xi President", term: "2020 – 2021" },
      ],
    },
    "Cambridge General Certificate of Secondary Education": {
      name: "Cambridge General Certificate of Secondary Education",
      programs: [
        { title: "Sohar International School", graduationDate: "May 2018" },
        { title: "Founder of Musical Band (Six Strings)" },
        { title: "Top Overall Academic" },
      ],
    },
  };

  const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="list-disc pl-2 space-y-1">
          <li>Python (Pandas, NumPy)</li>
          <li>SQL (PostgreSQL, MySQL, Snowflake)</li>
          <li>ETL / Data Pipelines</li>
          <li>AWS (S3, Lambda)</li>
          <li>Qlik, BI & Reporting Automation</li>
          <li>Docker, Git, GitHub Actions (CI/CD)</li>
          <li>Linux, Bash, PowerShell</li>
          <li>REST APIs, JSON, CSV</li>
        </ul>
      ),
    },
    {
      title: "Certifications",
      id: "certifications",
      content: (
        <ul className="list-disc pl-2 space-y-1">
          <li>Certified PEGA System Architect</li>
          <li>CS50: Introduction to Computer Science (HarvardX)</li>
          <li>Certified Apple Technician</li>
          <li>Jamf 100 Course and Exam</li>
          <li>BMC Certified Associate: Helix ITSM 19.x</li>
        </ul>
      ),
    },
    {
      title: "Experience",
      id: "experience",
      content: (
        <ul className="list-disc pl-2 space-y-2">
          <li>
            <span className="font-semibold">Ready Capital</span>
            <ul className="list-disc pl-5">
              <li>Data & Automation Engineer (Senior System Analyst) — May 2024 – Present</li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">EisnerAmper</span>
            <ul className="list-disc pl-5">
              <li>Application Support Specialist (Technology) — Feb 2024 – May 2024</li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">Interpublic Group (IPG)</span>
            <ul className="list-disc pl-5">
              <li>Desktop Support / Engineering Intern — Jun 2023 – Feb 2024</li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">Apple, Inc.</span>
            <ul className="list-disc pl-5">
              <li>Technical Expert — Jun 2023 – Sep 2023</li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">New Jersey Courts</span>
            <ul className="list-disc pl-5">
              <li>Application Developer Intern — May 2022 – Jun 2023</li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">Rutgers University</span>
            <ul className="list-disc pl-5">
              <li>Technical Support Associate — Sep 2021 – Sep 2022</li>
            </ul>
          </li>
        </ul>
      ),
    },
  ];

  const handleTabChange = (id) => {
    setTab(id);
    setActiveUniversity(null);
    setIsPopupVisible(false);
  };

  const handleUniversityClick = (universityKey) => {
    setActiveUniversity(universityKey);
    setIsPopupVisible(true);
  };

  const handlePopupVisibility = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const currentTab = TAB_DATA.find((t) => t.id === tab);

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src={AboutImage}
          width={500}
          height={500}
          alt="Portrait of Ahmed Mashaal"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I’m a Data & Automation Engineer in financial services, focused on building reliable data pipelines
            and backend systems that replace manual work with scalable, automated workflows. I work with Python,
            SQL, Snowflake, Qlik, and AWS to move data between systems, automate reporting, and support finance
            and analytics teams. I recently completed my M.S. in Computer Science at NJIT and I’m passionate about
            designing modern data platforms, improving reliability, and collaborating with teams to ship real,
            production-ready solutions.
          </p>
          <div className="flex flex-row justify-start mt-8 flex-wrap gap-2">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience
            </TabButton>
          </div>
          <div className="mt-8">
            {tab === "education" ? (
              <ul className="list-disc pl-2 space-y-1">
                {Object.keys(universitiesDetails).map((universityName) => (
                  <li
                    key={universityName}
                    onClick={() => handleUniversityClick(universityName)}
                    className="cursor-pointer hover:text-cyan-400"
                  >
                    {universityName}
                  </li>
                ))}
              </ul>
            ) : (
              currentTab && currentTab.content
            )}
          </div>
        </div>
      </div>
      {activeUniversity && isPopupVisible && (
        <UniversityPopup
          universityDetails={universitiesDetails[activeUniversity]}
          closePopup={handlePopupVisibility}
        />
      )}
    </section>
  );
};

export default AboutSection;
