export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image?: string;
  technologies: string[];
  features: string[];
  github?: string;
  live?: string;
  flagship?: boolean;
}

export const projects: Project[] = [
  {
    id: "vchatie",
    title: "VChaTie",
    category: "Real-Time Communication Platform",
    description:
      "A modern WhatsApp-inspired real-time chat application built with Django, React, Django Channels, WebSockets and Redis.",
    image: "/images/vchatie-logo.png",
    technologies: [
      "Django",
      "Django REST Framework",
      "React",
      "WebSockets",
      "Django Channels",
      "Redis",
      "Cloudinary",
    ],
    features: [
      "Real-time messaging",
      "WebSocket communication",
      "Redis channel layer",
      "User authentication",
      "Media handling",
      "Responsive chat interface",
    ],
    flagship: true,
  },
  {
    id: "superlink-isp-crm",
    title: "SuperLink ISP CRM",
    category: "ISP Operations & Billing Platform",
    description:
      "An enterprise CRM for internet service providers — managing customers, feasibility, provisioning, billing, support tickets and day-to-day operational workflows in one place.",
    image: "/images/vj-doc.png",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "JWT",
    ],
    features: [
      "Customer management",
      "Lead & feasibility workflows",
      "Provisioning & billing",
      "Support ticket management",
      "Role-based access control",
      "Dashboards & audit logs",
    ],
    flagship: true,
  },
  {
    id: "vj-doc",
    title: "VJ_DOC",
    category: "All-in-One PDF Toolkit",
    description:
      "A premium iLovePDF-style web app for converting, merging, splitting, compressing, watermarking and signing PDF documents — with a fast drag-and-drop workflow and real in-browser processing.",
    image: "/images/superlink-crm.png",
    technologies: [
      "React",
      "TypeScript",
      "Express",
      "Node.js",
      "MongoDB",
      "Socket.IO",
    ],
    features: [
      "Image → PDF conversion",
      "PDF → image export",
      "Merge, split & reorder",
      "Compress & watermark",
      "Add page numbers & sign",
      "Real-time progress",
    ],
    flagship: true,
  },
];
