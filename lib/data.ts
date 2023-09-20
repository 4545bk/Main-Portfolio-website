import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "addis ababa, Ethiopa",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Front-End Developer",
    location: "addis, FL",
    description:
      "I worked as a front-end developer for 3 months",
    icon: React.createElement(CgWorkAlt),
    date: "2023aug - 2023 sep",
  },
  {
    title: "Full-Stack Developer",
    location: "addis ababa, Ethiopa",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React | Node | Express | Javascript | mysql | Java and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 sep - present",
  },
] as const;

export const projectsData = [
  {
    title: "Amazon Clone",
    description:
      "clonning the amazon website with checkout system and login functionality ",
    tags: ["React", "Javascript", "Node", "bootstap", "mysql"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Registration System",
    description:
      "Handle form submission: Implement form submission logic in your component. Use state hooks (useState) to manage form data and handle user input changes. When the user submits the form, you can validate the input and send it to an API endpoint for registration.",
    tags: ["React", "Javascript", "Node", "bootstap", "mysql"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Netflix-clone",
    description:
      "Netflix clone including API fetching from the movie database,also it finds a trailer of that movie using npm modules ",
    tags: ["React", "bootstrap", "Node", "Tailwind"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "Networking",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "bootstrap",
  "mysql",
  "MongoDB",
  "Redux",
  "GraphQL",
  
  "Database mgmt",
  "Express",
  "PostgreSQL",
  "Python",
  
  "graphics",
] as const;
