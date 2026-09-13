export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

export const experiences: ExperienceItem[] = [
  {
    role: "Software Developer",
    company: "SuperLink IT Services",
    location: "Bengaluru",
    period: "Dec 2024 — Present",
    description: [
      "Develop and maintain real-world web application features.",
      "Build backend modules and REST APIs.",
      "Integrate frontend applications with backend services.",
      "Work with business management and CRM-based platforms.",
      "Implement database-driven modules.",
      "Debug application issues and improve existing features.",
      "Participate in real project and client requirements.",
      "Collaborate on scalable business software solutions.",
    ],
    technologies: [
      "Node.js",
      "Express",
      "React",
      "TypeScript",
      "PostgreSQL",
      "REST APIs",
    ],
  },
];
