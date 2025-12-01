"use client";
import React, { useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import AboutImage from "../../images/aboutImage.png";
import UniversityPopup from "./UniversityPopup";
import ExperiencePopup from "./ExperiencePopup";

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [activeUniversity, setActiveUniversity] = useState(null);
  const [isUniversityPopupVisible, setIsUniversityPopupVisible] = useState(false);

  const [activeJob, setActiveJob] = useState(null);
  const [isExpPopupVisible, setIsExpPopupVisible] = useState(false);

  // ------------ EDUCATION DETAILS (for university popup) ------------
  const universitiesDetails = {
    "New Jersey Institute of Technology - M.S. in Computer Science": {
      name: "New Jersey Institute of Technology",
      programs: [
        {
          title: "Master of Science in Computer Science",
          graduationDate: "May 2025",
        },
        {
          title:
            "Graduate coursework in Data Engineering, Distributed Systems, and Software Engineering",
        },
      ],
    },
    "Rutgers University - B.S. in Computer Science": {
      name: "Rutgers University",
      programs: [
        {
          title: "Bachelor of Science in Computer Science",
          graduationDate: "January 2024",
        },
        { title: "Dean's List", terms: "Spring 2022 – Spring 2024" },
        { title: "RU Egyptian Club Vice President", term: "Fall 2023" },
      ],
    },
    "Union County College - A.S. in Computer Science": {
      name: "Union County College",
      programs: [
        {
          title: "Associate of Science in Computer Science",
          graduationDate: "May 2021",
        },
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

  // ------------ EXPERIENCE DETAILS (for experience popup) ------------
  const experienceDetails = [
    {
      company: "Ready Capital",
      role: "Data & Automation Engineer (Senior System Analyst)",
      period: "May 2024 – Present",
      location: "Basking Ridge, NJ",
      description: [
        "Build and maintain Python- and SQL-based ETL pipelines moving financial data between Snowflake, Qlik, AWS S3, and internal systems.",
        "Design and deploy serverless automation jobs using AWS Lambda and Azure Functions to extract, clean, and load data from APIs, SFTP, and banking portals.",
        "Use job schedulers and CI/CD (GitHub Actions, Control-M) to orchestrate and monitor production data workflows for reporting and analytics.",
        "Develop Python web scrapers and bots to collect data from banking and third-party portals, eliminating manual download processes.",
      ],
    },
    {
      company: "EisnerAmper",
      role: "Application Support Specialist (Technology)",
      period: "Feb 2024 – May 2024",
      location: "Iselin, NJ",
      description: [
        "Supported enterprise financial applications and automated data flows and report delivery.",
        "Assisted with SQL queries, ETL processes, and data validation between core systems and reporting platforms.",
        "Collaborated with development teams to troubleshoot and improve Python-based automation scripts.",
      ],
    },
    {
      company: "Interpublic Group (IPG)",
      role: "Desktop Support / Engineering Intern",
      period: "Jun 2023 – Feb 2024",
      location: "New York, NY",
      description: [
        "Provided technical support across Windows and macOS environments for office staff.",
        "Assisted with deployment automation and scripting for engineering and IT teams.",
        "Documented recurring issues and contributed to improving monitoring and reliability.",
      ],
    },
    {
      company: "Apple, Inc.",
      role: "Technical Expert (Part-time)",
      period: "Jun 2023 – Sep 2023",
      location: "Bridgewater, NJ",
      description: [
        "Diagnosed and repaired Apple devices while communicating technical issues clearly to non-technical customers.",
        "Worked in a fast-paced, ticket-driven environment, balancing speed and quality of service.",
      ],
    },
    {
      company: "New Jersey Courts",
      role: "Application Developer Intern",
      period: "May 2022 – Jun 2023",
      location: "Trenton, NJ",
      description: [
        "Developed internal tools and automations to support case data management and reporting.",
        "Wrote and optimized SQL queries and stored procedures to improve performance and data access.",
        "Participated in debugging, testing, and documentation across the SDLC.",
      ],
    },
    {
      company: "Rutgers University",
      role: "Technical Support Associate",
      period: "Sep 2021 – Sep 2022",
      location: "Piscataway, NJ",
      description: [
        "Provided in-person and remote support for hardware, software, and network issues.",
        "Installed and configured workstations and software for faculty and staff.",
      ],
    },
  ];

  // ------------ TAB DATA (skills, certs, experience) ------------
  const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="list-disc pl-2 space-y-1">
          <li>Python (Pandas, NumPy)</li>
          <li>SQL (PostgreSQL, MySQL, Snowflake)</li>
          <li>ETL / Data Pipelines & Automation</li>
          <li>AWS (S3, Lambda), Azure Functions</li>
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
        <ul className="list-disc pl-2 space-y-2 text-[#ADB7BE]">
          {experienceDetails.map((job, index) => (
            <li
              key={index}
              className="cursor-pointer hover:text-white transition-colors group"
              onClick={() => {
                setActiveJob(job);
                setIsExpPopupVisible(true);
              }}
            >
              <span className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                {job.company}
              </span>
              <ul className="list-disc pl-5 mt-1">
                <li>
                  {job.role} — {job.period}
                </li>
              </ul>
            </li>
          ))}
        </ul>
      ),
    },
  ];

  // ------------ HANDLERS ------------
  const handleTabChange = (id) => {
    setTab(id);
    // Close any open popups when switching tabs
    setActiveUniversity(null);
    setIsUniversityPopupVisible(false);
    setActiveJob(null);
    setIsExpPopupVisible(false);
  };

  const handleUniversityClick = (universityName) => {
    setActiveUniversity(universityName);
    setIsUniversityPopupVisible(true);
  };

  const handleUniversityPopupVisibility = () => {
    setIsUniversityPopupVisible(!isUniversityPopupVisible);
  };

  const handleExperiencePopupClose = () => {
    setIsExpPopupVisible(false);
    setActiveJob(null);
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
          className="rounded-2xl object-cover"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I’m a Data & Automation Engineer in financial services, focused on
            building reliable data pipelines and backend systems that replace
            manual work with scalable, automated workflows. I work with Python,
            SQL, Snowflake, Qlik, and AWS to move data between systems,
            automate reporting, and support finance and analytics teams. I
            recently completed my M.S. in Computer Science at NJIT and I’m
            passionate about designing modern data platforms, improving
            reliability, and collaborating with teams to ship production-ready
            solutions.
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

      {activeUniversity && isUniversityPopupVisible && (
        <UniversityPopup
          universityDetails={universitiesDetails[activeUniversity]}
          closePopup={handleUniversityPopupVisibility}
        />
      )}

      {activeJob && isExpPopupVisible && (
        <ExperiencePopup
          jobDetails={activeJob}
          onClose={handleExperiencePopupClose}
        />
      )}
    </section>
  );
};

export default AboutSection;
