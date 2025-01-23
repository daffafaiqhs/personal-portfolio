import { BackgroundBox } from "../BackgroundBox";
import { Ruangguru } from "../../assets/logo";
import ruangguruCert from "../../assets/certificate/Ruangguru_Cert.jpg";
import Pemrograman_Backend_Web_dengan_Golang from "../../assets/certificate/Pemrograman_Backend_Web_dengan_Golang.jpg";
import { FiArrowUpRight } from "react-icons/fi";
import { MdZoomOutMap } from "react-icons/md";
import { motion } from "motion/react";

import { PhotoProvider, PhotoView } from "react-photo-view";

import { useState, useCallback } from "react";

const certificates = [
  ruangguruCert,
  Pemrograman_Backend_Web_dengan_Golang,
  Pemrograman_Backend_Web_dengan_Golang,
  Pemrograman_Backend_Web_dengan_Golang,
  Pemrograman_Backend_Web_dengan_Golang,
  ruangguruCert,
  Pemrograman_Backend_Web_dengan_Golang,
  Pemrograman_Backend_Web_dengan_Golang,
  Pemrograman_Backend_Web_dengan_Golang,
  Pemrograman_Backend_Web_dengan_Golang,
  ruangguruCert,
  Pemrograman_Backend_Web_dengan_Golang,
  Pemrograman_Backend_Web_dengan_Golang,
  Pemrograman_Backend_Web_dengan_Golang,
  Pemrograman_Backend_Web_dengan_Golang,
];

export function Experiences() {
  const educationalExperience = [
    {
      organization: "PT. Ruang Raya Indonesia (Ruangguru)",
      organizationLogo: <Ruangguru />,
      duration: "9 Sep 2024 - 31 Dec 2024",
      programName:
        "Fullstack Golang & Ai: Dari Prinsip Dasar Hingga Aplikasi Praktis",
      skillsAcquired: [
        "Develop professional skills in communication, presentation, creative thinking, and strategic problem-solving.",
        "Use terminal, Visual Studio Code, and Git for efficient project management and collaboration.",
        "Build web applications with HTML, CSS, Tailwind, and Node.js, focusing on RESTful APIs and asynchronous programming.",
        "Create Single Page Applications using ReactJS, mastering components, state, and deployment.",
        "Develop backend systems with Golang, including data structures, algorithms, unit testing, and concurrency.",
        "Design and manage relational databases while also learning about NoSQL database.",
        "Understand Machine Learning fundamentals and integrate AI technologies into applications.",
      ],
    },
    {
      organization: "PT. Ruang Raya Indonesia (Ruangguru)",
      organizationLogo: <Ruangguru />,
      duration: "9 Sep 2024 - 31 Dec 2024",
      programName:
        "Fullstack Golang & Ai: Dari Prinsip Dasar Hingga Aplikasi Praktis",
      skillsAcquired: [
        "Develop professional skills in communication, presentation, creative thinking, and strategic problem-solving.",
        "Use terminal, Visual Studio Code, and Git for efficient project management and collaboration.",
        "Build web applications with HTML, CSS, Tailwind, and Node.js, focusing on RESTful APIs and asynchronous programming.",
        "Create Single Page Applications using ReactJS, mastering components, state, and deployment.",
        "Develop backend systems with Golang, including data structures, algorithms, unit testing, and concurrency.",
        "Design and manage relational databases while also learning about NoSQL database.",
        "Understand Machine Learning fundamentals and integrate AI technologies into applications.",
      ],
    },
  ];

  const [state, setState] = useState("educations");

  const changeState = (newState) => {
    if (state != newState) {
      setState(newState);
    }
  };

  return (
    <BackgroundBox className="flex flex-col gap-4 p-6 lg:h-[690px] lg:gap-6">
      <div>
        <h1 className="mb-2 text-xl font-bold lg:text-2xl">My Experiences!</h1>
        <p className="text-sm font-light md:text-base xl:text-lg">
          Featuring my education, certifications, and practical experiences!
        </p>
      </div>
      <select
        className="w-full rounded-md border border-gray-400 py-2 text-sm font-light lg:hidden"
        onChange={(e) => changeState(e.target.value)}
      >
        <option value="educations">Education & Practical Experience</option>
        <option value="certifications">Certifications</option>
      </select>
      <div className="flex flex-grow gap-4 lg:overflow-hidden">
        <div className="hidden lg:block lg:text-sm xl:text-base">
          <div
            className={`${state === "educations" && "border-brand-yellow text-brand-orange"} mb-2 cursor-pointer text-nowrap rounded-lg border px-4 py-2`}
            onClick={() => changeState("educations")}
          >
            <p>Education & Practical Experience</p>
          </div>
          <div
            className={`${state === "certifications" && "border-brand-yellow text-brand-orange"} cursor-pointer rounded-lg border px-4 py-2`}
            onClick={() => changeState("certifications")}
          >
            <p>Certifications</p>
          </div>
        </div>
        <div className="hidden h-full w-3 border-r border-gray-300 lg:block" />
        <div
          className={`flex w-full flex-col gap-10 pt-4 lg:h-full lg:overflow-y-auto lg:pt-0`}
        >
          {state === "educations" ? (
            educationalExperience.map((value, index) => (
              <EducationalItem key={index} education={value} />
            ))
          ) : (
            <div className="grid grid-cols-1 place-items-center gap-5 md:grid-cols-3 xl:grid-cols-4">
              <PhotoProvider>
                {certificates.map((item, index) => (
                  <CertificationsItem key={index} src={item} />
                ))}
              </PhotoProvider>
            </div>
          )}
        </div>
      </div>
    </BackgroundBox>
  );
}

function EducationalItem(props) {
  const { education } = props;
  return (
    <div className="flex flex-col gap-4">
      <div className="md:flex md:justify-between">
        <div className="flex flex-col items-center gap-4 md:flex-row md:items-start">
          <div className="flex size-20 flex-shrink-0 items-center justify-center rounded-full border border-gray-300 p-2 md:size-14">
            {education.organizationLogo}
          </div>
          <div className="text-center md:text-start">
            <p className="mb-2 md:mb-1 xl:text-lg">{education.organization}</p>
            <p className="mb-4 text-sm font-light lg:mb-0 xl:text-lg">
              {education.programName}
            </p>
          </div>
        </div>
        <p className="text-nowrap text-center text-sm font-light xl:text-base">
          {education.duration}
        </p>
      </div>
      <hr className="rounded border border-brand-yellow" />
      <p className="font-light xl:text-lg">My learning focus includes:</p>
      <li className="flex list-none flex-col gap-2 font-light">
        {education.skillsAcquired.map((skill, index) => {
          return (
            <ul key={index} className="flex gap-4">
              <FiArrowUpRight className="mt-1 flex-shrink-0" />
              <p className="xl:text-lg">{skill}</p>
            </ul>
          );
        })}
      </li>
    </div>
  );
}

function CertificationsItem(props) {
  const { src } = props;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <PhotoView src={src}>
      <motion.div
        className="relative h-fit w-fit cursor-pointer"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <motion.div
          className="absolute h-full w-full"
          animate={{
            backgroundColor: isHovered
              ? "rgba(0, 0, 0, 0.6)"
              : "rgba(0, 0, 0, 0)",
          }}
        />
        <motion.div
          className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center gap-2 text-center text-3xl text-white"
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
        >
          <MdZoomOutMap />
          <p className="text-base">View Certificate</p>
        </motion.div>
        <img src={src} width="240" className="w-full" alt="" />
      </motion.div>
    </PhotoView>
  );
}
