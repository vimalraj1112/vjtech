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
    live: "https://vchatieapp.onrender.com/",
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
    live: "https://vjdoc.vercel.app/",
    flagship: true,
  },
  {
    id: "cafe-pos",
    title: "SuperLink CaféPOS",
    category: "Griglia Café · Restaurant POS & Inventory",
    description:
      "A complete point-of-sale and management system for cafés and restaurants — handling orders, table service, menu items, inventory and daily sales in one clean, fast interface.",
    image: "/images/superlink-pos.png",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "PostgreSQL"],
    features: [
      "Order & table management",
      "Menu & category builder",
      "Inventory tracking",
      "Sales & billing",
      "Live product catalog",
      "Fast, responsive UI",
    ],
    live: "https://pos-demo-pink.vercel.app/",
    flagship: true,
  },
  {
    id: "shreeyugan",
    title: "ShreeYugan",
    category: "Hardware, Electrical & Plumbing Store",
    description:
      "A modern retail showcase for a hardware, electrical, plumbing and painting materials store in Tirunelveli — presenting product categories and store services in a clean bilingual layout.",
    image: "/images/shreeyugan.png",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    features: [
      "Product category showcase",
      "Bilingual Tamil & English UI",
      "Service highlights",
      "Store branding",
      "Responsive layout",
    ],
    live: "https://shreeyugan.vercel.app/",
  },
  {
    id: "bakery",
    title: "Ayyangar's Bakery",
    category: "Homemade Cakes & Bakery Store",
    description:
      "A warm, inviting website for a hometown bakery serving the softest, most delicious homemade cakes — celebrating Nellai's sweetest celebrations with a cozy brand feel.",
    image: "/images/bakery.png",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    features: [
      "Menu & cake showcase",
      "Warm brand identity",
      "Story & values section",
      "Order-friendly layout",
      "Responsive design",
    ],
    live: "https://bakery-mu-drab.vercel.app/",
  },
  {
    id: "mathi-collections-pos",
    title: "Mathi Collections POS",
    category: "Textiles Retail · POS & Billing System",
    description:
      "A full-stack point-of-sale and billing system for a textiles store — handling bills, product variants, inventory, customers, GST, purchases, returns, expenses, loyalty rewards and printed invoices in one fast interface.",
    image: "/images/Textile-POS.png",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Recharts", "React Query", "Axios"],
    features: [
      "Instant billing & invoice printing (80mm thermal / A4)",
      "Product variants with barcode & stock tracking",
      "Inventory management & low-stock alerts",
      "Customer credit & loyalty points",
      "GST invoicing & tax handling",
      "Sales, profit & payment reports",
    ],
    live: "https://textiles-billing-pos.onrender.com/",
  },
];
