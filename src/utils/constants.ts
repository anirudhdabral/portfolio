import { Mail } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import type { TExperience, THero, TProject, TSkill } from "./types";

export const projects: TProject[] = [
  {
    id: 1,
    name: "ITSM Tool",
    description:
      "An advanced IT Service Management (ITSM) platform that unifies ServiceNow, Jira, and a proprietary ITSM into a single frontend interface with SLA tracking, resulting in a 30% reduction in IT ticket resolution time.",
    image: "/itsm.png",
    technologies: [
      "React",
      "Node",
      "Redis",
      "PostgreSQL",
      "OpenAI",
      "Material UI",
    ],
    clientProject: true,
  },
  {
    id: 2,
    name: "Governance Portal",
    description:
      "An unified portal to manage employee visits and track key client metrics, including SLAs, SOPs, and incident reports.",
    image: "/gp.png",
    technologies: ["React", "Node", "MySQL"],
    clientProject: true,
  },
  {
    id: 3,
    name: "Cloud Monitoring Application",
    description:
      "Developed a full-stack application that consolidates data insights from multiple cloud services into a centralized, user-friendly platform.",
    image: "/cloud.png",
    technologies: ["React", "Node", "MongoDB", "Tailwind"],
    clientProject: true,
  },
  {
    id: 3,
    name: "TaskStream",
    description: "A local storage kanban board to manage perssonal tasks.",
    image: "/kanban.png",
    link: "https://kanban-app-anirudhdabral.web.app/",
    technologies: ["React", "Tailwind"],
  },
];

export const experiences: TExperience[] = [
  {
    id: 1,
    company: "Nagarro",
    position: "Senior Engineer",
    startDate: "Aug 2022",
    endDate: "Present",
    description:
      "Developed user-centric UI components using React while optimizing backend APIs and database queries to enhance overall system performance. Implemented secure JWT-based authentication mechanisms and contributed to the development of Generative AI tools. Worked within Agile teams, actively participating in code reviews to maintain high code quality and best practices. Deployed applications using Docker containers and cloud infrastructure to ensure scalability, reliability, and efficient production environments.",
  },
];

export const skillCategories: string[] = [
  "Frontend",
  "Backend",
  "Languages",
  "Database",
  "Others",
];

export const skills: TSkill[] = [
  {
    id: 1,
    name: "React",
    icon: "SiReact",
    category: "Frontend",
  },
  { id: 2, name: "Next.js", icon: "SiNextdotjs", category: "Frontend" },
  {
    id: 3,
    name: "Node.js",
    icon: "SiNodedotjs",
    category: "Backend",
  },
  { id: 4, name: "JavaScript", icon: "SiJavascript", category: "Languages" },
  { id: 5, name: "TypeScript", icon: "SiTypescript", category: "Languages" },
  {
    id: 6,
    name: "Tailwind CSS",
    icon: "SiTailwindcss",
    category: "Frontend",
  },
  { id: 7, name: "Framer Motion", icon: "SiFramer", category: "Frontend" },
  { id: 10, name: "Express.js", icon: "SiExpress", category: "Backend" },
  { id: 11, name: "MongoDB", icon: "SiMongodb", category: "Database" },
  { id: 12, name: "PostgreSQL", icon: "SiPostgresql", category: "Database" },
  { id: 14, name: "MySQL", icon: "SiMysql", category: "Database" },
  { id: 15, name: "Redux", icon: "SiRedux", category: "Frontend" },
  { id: 16, name: "Redis", icon: "SiRedis", category: "Backend" },
  { id: 17, name: "Graphql", icon: "SiGraphql", category: "Backend" },
  { id: 8, name: "Git", icon: "SiGit", category: "Others" },
  { id: 9, name: "Figma", icon: "SiFigma", category: "Others" },
  { id: 18, name: "Docker", icon: "SiDocker", category: "Others" },
  { id: 19, name: "OpenAI", icon: "SiOpenai", category: "Others" },
];

export const hero: THero = {
  id: 1,
  name: "Anirudh Dabral",
  role: "Full Stack Engineer",
  passion: "Building beautiful UIs",
  skills: ["React", "Node.js", "TypeScript"],
  description:
    "I'm a full-stack engineer specializing in building exceptional, high-quality websites and applications with a focus on polished user experiences.",
  socials: [
    {
      id: 1,
      name: "GitHub",
      icon: SiGithub,
      url: "https://github.com/anirudhdabral",
    },
    {
      id: 2,
      name: "LinkedIn",
      icon: SiLinkedin,
      url: "https://linkedin.com/in/anirudhdabral",
    },
    {
      id: 3,
      name: "Mail",
      icon: Mail,
      url: "mailto:anirudhdabral49@gmail.com",
    },
  ],
  image: "/avatar.png",
};

export const resumeURL =
  "https://drive.google.com/file/d/10QvdJPP4Xr3T6yomV_06KvcjteCI6lRn/view?usp=sharing";
