import {
  HtmlIcon,
  CssIcon,
  JsIcon,
  ReactIcon,
  NextIcon,
  ReduxIcon,
  MuiIcon,
  TsIcon,
  GitIcon,
} from "../assets/icons";

export const devSkills = {
  htmlSkill: {
    id: 0,
    name: "HTML",
    icon: HtmlIcon,
    color: "error",
  },
  cssSkill: {
    id: 1,
    name: "CSS",
    icon: CssIcon,
    color: "info",
  },
  jsSkill: {
    id: 2,
    name: "JavaScript",
    icon: JsIcon,
    color: "warning",
  },
  reactSkill: {
    id: 3,
    name: "React",
    icon: ReactIcon,
    color: "blue",
  },
  gitSkill: {
    id: 4,
    name: "Git",
    icon: GitIcon,
    color: "brown",
  },
  nextSkill: {
    id: 5,
    name: "NextJS",
    icon: NextIcon,
    color: "lightPink",
  },
  reduxSkill: {
    id: 6,
    name: "Redux",
    icon: ReduxIcon,
    color: "lilac",
  },
  typescriptSkill: {
    id: 7,
    name: "TypeScript",
    icon: TsIcon,
    color: "yellow",
  },
  materialuiSkill: {
    id: 8,
    name: "MatreialUI",
    icon: MuiIcon,
    color: "success",
  },
};

export interface Skill {
  name: string;
  level: number;
  category: "Frontend" | "Backend" | "Tools" | "Concepts";
  description?: string;
}

export const skillsData: Skill[] = [
  // Frontend Technologies
  {
    name: "React",
    level: 90,
    category: "Frontend",
    description:
      "Building complex UIs with hooks, context, and modern patterns",
  },
  {
    name: "TypeScript",
    level: 85,
    category: "Frontend",
    description: "Type-safe development with advanced patterns",
  },
  {
    name: "Next.js",
    level: 80,
    category: "Frontend",
    description: "Server-side rendering and static site generation",
  },
  {
    name: "JavaScript (ES6+)",
    level: 90,
    category: "Frontend",
    description: "Modern JavaScript features and best practices",
  },
  {
    name: "HTML5 & CSS3",
    level: 95,
    category: "Frontend",
    description: "Semantic markup and modern CSS features",
  },
  {
    name: "Sass/SCSS",
    level: 85,
    category: "Frontend",
    description: "Advanced CSS preprocessing and organization",
  },
  {
    name: "Material-UI",
    level: 90,
    category: "Frontend",
    description: "Component-based UI development",
  },
  {
    name: "Tailwind CSS",
    level: 80,
    category: "Frontend",
    description: "Utility-first CSS framework",
  },

  // State Management & Tools
  {
    name: "Redux Toolkit",
    level: 85,
    category: "Tools",
    description: "Complex state management patterns",
  },
  {
    name: "Zustand",
    level: 80,
    category: "Tools",
    description: "Lightweight state management",
  },
  {
    name: "React Query",
    level: 75,
    category: "Tools",
    description: "Server state management and caching",
  },
  {
    name: "Git & GitHub",
    level: 90,
    category: "Tools",
    description: "Version control and collaboration workflows",
  },
  {
    name: "Webpack",
    level: 70,
    category: "Tools",
    description: "Module bundling and optimization",
  },
  {
    name: "Vite",
    level: 85,
    category: "Tools",
    description: "Fast build tool and development server",
  },

  // Development Concepts
  {
    name: "Responsive Design",
    level: 95,
    category: "Concepts",
    description: "Mobile-first and adaptive layouts",
  },
  {
    name: "Performance Optimization",
    level: 80,
    category: "Concepts",
    description: "Code splitting, lazy loading, and optimization",
  },
  {
    name: "Testing (Jest/Vitest)",
    level: 75,
    category: "Concepts",
    description: "Unit and integration testing",
  },
  {
    name: "REST APIs",
    level: 85,
    category: "Concepts",
    description: "API integration and data fetching",
  },
  {
    name: "Progressive Web Apps",
    level: 70,
    category: "Concepts",
    description: "Service workers and offline functionality",
  },
  {
    name: "Agile Development",
    level: 85,
    category: "Concepts",
    description: "Scrum methodology and team collaboration",
  },
];
