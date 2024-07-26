import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNode,
  faPython,
  faJava,
  faDocker,
  faAws,
  faWordpressSimple,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowsSplitUpAndLeft,
  faBrain,
  faBusinessTime,
  faCube,
  faDatabase,
  faDesktop,
  faFile,
  faFolder,
  faInfinity,
  faLanguage,
  faMessage,
  faServer,
  faShield,
  faTools,
} from "@fortawesome/free-solid-svg-icons";

export const skillsData = [
  {
    category: "Frontend",
    icon: faDesktop,
    skills: [
      { name: "HTML", level: 85, icon: faHtml5 },
      { name: "CSS", level: 70, icon: faCss3Alt },
      { name: "JavaScript", level: 60, icon: faJs },
      { name: "React", level: 60, icon: faReact },
      { name: "Bootstrap", level: 30, icon: faCss3Alt },
      { name: "WordPress", level: 30, icon: faWordpressSimple },
    ],
  },
  {
    category: "Backend",
    icon: faServer,
    skills: [
      { name: "Node.js", level: 50, icon: faNode },
      { name: "Django", level: 60, icon: faPython },
      { name: "Python", level: 70, icon: faPython },
      { name: "Java", level: 30, icon: faJava },
      { name: "PostgreSQL", level: 35, icon: faDatabase },
    ],
  },
  {
    category: "DevOps",
    icon: faInfinity,
    skills: [
      { name: "Docker", level: 30, icon: faDocker },
      { name: "Kubernetes", level: 20, icon: faDocker },
      { name: "AWS", level: 30, icon: faAws },
      { name: "BigID", level: 45, icon: faShield },
    ],
  },
  {
    category: "Tools",
    icon: faTools,
    skills: [
      { name: "VS Code", level: 85, icon: faReact },
      { name: "Github", level: 70, icon: faGithub },
      { name: "Office365", level: 85, icon: faFile },
      { name: "ChatGPT", level: 80, icon: faMessage },
      { name: "Notion", level: 90, icon: faCube },
    ],
  },
  {
    category: "Languages",
    icon: faLanguage,
    skills: [
      { name: "Japanese", level: 90, icon: faLanguage },
      { name: "Portuguese", level: 80, icon: faLanguage },
      { name: "English", level: 50, icon: faLanguage },
    ],
  },
  {
    category: "Soft Skills",
    icon: faBrain,
    skills: [
      { name: "Time management", level: 80, icon: faBusinessTime },
      { name: "Organization", level: 90, icon: faFolder },
      { name: "Flexibility", level: 85, icon: faArrowsSplitUpAndLeft },
    ],
  },
];
