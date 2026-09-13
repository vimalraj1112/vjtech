export interface SkillCategory {
  title: string;
  icon: string;
  skills: SkillItem[];
}

export interface SkillItem {
  name: string;
  description: string;
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "Layout",
    skills: [
      { name: "React", description: "Component-based UI development" },
      { name: "JavaScript", description: "Modern ES6+ programming" },
      { name: "TypeScript", description: "Type-safe development" },
      { name: "HTML", description: "Semantic markup" },
      { name: "CSS", description: "Responsive styling & Tailwind" },
    ],
  },
  {
    title: "Backend",
    icon: "Server",
    skills: [
      { name: "Python", description: "General-purpose backend" },
      { name: "Django", description: "Full-stack Python framework" },
      { name: "FastAPI", description: "High-performance APIs" },
      { name: "Node.js", description: "JavaScript runtime" },
      { name: "Express", description: "Minimal Node.js framework" },
    ],
  },
  {
    title: "Database",
    icon: "Database",
    skills: [
      { name: "PostgreSQL", description: "Advanced relational database" },
      { name: "MySQL", description: "Relational database management" },
      { name: "MongoDB", description: "NoSQL document database" },
      { name: "Redis", description: "In-memory data store & caching" },
    ],
  },
  {
    title: "Tools",
    icon: "Wrench",
    skills: [
      { name: "Git", description: "Version control" },
      { name: "GitHub", description: "Collaboration & CI/CD" },
      { name: "VS Code", description: "Code editor" },
      { name: "Postman", description: "API testing" },
      { name: "Vercel", description: "Deployment & hosting" },
    ],
  },
];
