import { FaYoutube, FaFacebook, FaJava, FaVideo } from "react-icons/fa";
import {
  SiBlender,
  SiCplusplus,
  SiPython,
  SiUnrealengine,
  SiAdobephotoshop,
  SiAdobeaftereffects,
  SiNotion,
  SiCanva,
  SiCinema4D,
  SiExpress,
  SiMysql,
  SiFramer,
  SiGodotengine,
  SiMicrosoftpowerpoint,
  SiMicrosoft,
  SiMicrosoftexcel,
  SiVercel,
  SiCloudflare,
  SiTailwindcss
} from "react-icons/si";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { video } from "framer-motion/client";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Blender 3D",
    icon: SiBlender,
    color: "#F5792A",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Unreal Engine",
    icon: SiUnrealengine,
    color: "#FFFFFF",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Java",
    image: "java.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Unity 3D",
    image: "unity.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Python",
    icon: SiPython,
    color: "#3776AB",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
] as const;

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://www.instagram.com/blender_buddy_13?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/mihir-mahato-btech",
  },
  {
    name: "Github",
    icon: RxGithubLogo,
    link: "https://github.com/MIHIR-1304",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "C++",
    image: "cplusplus.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "C",
    image: "c.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Davinci Resolve",
    image: "davinchi.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Adobe After Effects",
    icon: SiAdobeaftereffects,
    color: "#5e08f4ff",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Maya",
    image: "maya.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Adobe Photoshop",
    icon: SiAdobephotoshop,
    color: "#31A8FF",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Canva",
    icon: SiCanva,
    color: "#14e0ebff",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MySQL",
    icon: SiMysql,
    color: "#3776AB",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer",
    icon: SiFramer,
    color: "#FFFFFF",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Godot",
    icon: SiGodotengine,
    color: "#478CBF",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Microsoft Powerpoint",
    icon: SiMicrosoftpowerpoint,
    color: "#f05c0dff",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "Microsoft Excel",
    icon: SiMicrosoftexcel,
    color: "#217346ff",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Git",
    image: "git.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "github",
    icon: RxGithubLogo,
    color: "#FFFFFF",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Vercel",
    icon: SiVercel,
    color: "#FFFFFF",
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "Cloudflare",
    icon: SiCloudflare,
    color: "#FFFFFF",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Notion",
    icon: SiNotion,
    color: "#FFFFFF",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#00C4CC",
    width: 70,
    height: 70,
  },

  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Cinema 4D",
    icon: SiCinema4D,
    color: "#02175D",
    width: 60,
    height: 60,
  },
] as const;

export const PROJECT_CATEGORIES = [
  {
    id: "all",
    name: "All",
    label: "All Projects",
    description: "Browse all software, 3D animations, databases, and robotics creations",
    accent: "from-purple-500 to-cyan-500",
    badgeColor: "border-purple-500/50 text-purple-300 bg-purple-500/10",
    subcategories: [],
  },
  {
    id: "blender",
    name: "Blender 3D",
    label: "Blender 3D",
    description: "3D environments, game assets, and cinematic product animations",
    accent: "from-orange-500 to-amber-400",
    badgeColor: "border-orange-500/50 text-orange-300 bg-orange-500/10",
    subcategories: [
      { id: "all-blender", label: "All Blender (12)" },
      { id: "game-assets", label: "🎮 Game Assets & 3D Models (3)" },
      { id: "3d-environment", label: "🏞️ 3D Environments & Scenes (5)" },
      { id: "product-animation", label: "📱 Product Animations & Ads (4)" },
    ],
  },
  {
    id: "java",
    name: "Java Projects",
    label: "Java Projects",
    description: "Core Java desktop systems, multithreading, and OOP architectures",
    accent: "from-red-500 to-amber-400",
    badgeColor: "border-red-500/50 text-red-300 bg-red-500/10",
    subcategories: [
      { id: "all-java", label: "All Java (3)" },
      { id: "desktop-core", label: "🖥️ Desktop & Core Java" },
      { id: "networking", label: "⚡ Network & Concurrency" },
      { id: "management", label: "📦 Management Systems" },
    ],
  },
  {
    id: "sql",
    name: "SQL Projects",
    label: "SQL & Databases",
    description: "Normalized relational schemas, query tuning, indexing & data analytics",
    accent: "from-blue-500 to-cyan-400",
    badgeColor: "border-blue-500/50 text-blue-300 bg-blue-500/10",
    subcategories: [
      { id: "all-sql", label: "All SQL (3)" },
      { id: "dbms", label: "🗄️ Database Architecture" },
      { id: "analytics", label: "📊 Query Optimization & Analytics" },
      { id: "warehousing", label: "📈 Reporting & Warehousing" },
    ],
  },
  {
    id: "backend",
    name: "Backend Projects",
    label: "Backend & APIs",
    description: "Scalable REST APIs, real-time WebSockets, auth, and automated data pipelines",
    accent: "from-emerald-500 to-teal-400",
    badgeColor: "border-emerald-500/50 text-emerald-300 bg-emerald-500/10",
    subcategories: [
      { id: "all-backend", label: "All Backend (3)" },
      { id: "rest-apis", label: "⚙️ REST APIs & Microservices" },
      { id: "automation", label: "📑 Automation & Tools" },
      { id: "realtime", label: "📡 Real-time Systems" },
    ],
  },
  {
    id: "graphic-design",
    name: "Graphic Design",
    label: "Graphic Design",
    description: "Futuristic space branding, cyberpunk game UI / HUD, and digital posters",
    accent: "from-pink-500 to-purple-500",
    badgeColor: "border-pink-500/50 text-pink-300 bg-pink-500/10",
    subcategories: [
      { id: "all-graphics", label: "All Designs (3)" },
      { id: "brand-identity", label: "🎨 Brand Identity & Logos" },
      { id: "ui-hud", label: "🛸 Sci-Fi UI & HUD Concepts" },
      { id: "promos", label: "✨ Marketing & Posters" },
    ],
  },
  {
    id: "ai-robotics",
    name: "AI & Robotics",
    label: "AI, Robotics & Web",
    description: "Autonomous quadrobot, 3D plant tracking interface, and interactive web apps",
    accent: "from-cyan-500 to-blue-500",
    badgeColor: "border-cyan-500/50 text-cyan-300 bg-cyan-500/10",
    subcategories: [
      { id: "all-robotics", label: "All AI & Systems (3)" },
      { id: "robotics-ai", label: "🤖 Robotics & Edge AI" },
      { id: "interactive-3d", label: "🌐 Interactive 3D Web" },
    ],
  },
] as const;

export const PROJECTS = [
  // AI & Robotics
  {
    title: "TataNav: 3D Locator and Navigator Interface",
    description:
      "Developed 3D plant navigation system with real-time employee tracking. Automated pathfinding and visualization using Python–Blender integration. Delivered multi-platform interactive web interface.",
    image: "/projects/project-1-new.png",
    video: "/videos/tatanav.mp4",
    link: "https://github.com/MIHIR-1304/TataNav-3D-Locator-and-Navigator-Interface-Tata-Power-",
    category: "AI & Robotics",
    subcategory: "Robotics & Edge AI",
    tags: ["Python", "Blender", "Pathfinding", "Web Interface"],
  },
  {
    title: "NOBoT – AI Integrated Spider Quadrobot",
    description:
      "Built AI-driven quadrobot for hazardous terrain navigation and rescue scenarios. Implemented real-time edge AI object detection and sensor fusion system. Enabled live control, video, and telemetry monitoring using Python, Raspberry Pi, Arduino.",
    image: "/projects/project-2.jpg",
    link: "https://mihir-1304.github.io/3d-Portfolio/Website",
    category: "AI & Robotics",
    subcategory: "Robotics & Edge AI",
    tags: ["Python", "Raspberry Pi", "Arduino", "OpenCV", "YOLO"],
  },
  {
    title: "3D Portfolio Website",
    description:
      "Designed a fully responsive 3D portfolio website showcasing projects and models. Integrated interactive 3D animations using Spline 3D. Implemented smooth transitions and dynamic UI with HTML, CSS, and JavaScript.",
    image: "/projects/project-3.png",
    link: "https://mihir-1304.github.io/3d-Portfolio/Website",
    category: "AI & Robotics",
    subcategory: "Interactive 3D Web",
    tags: ["Next.js", "Three.js", "Spline 3D", "Tailwind CSS"],
  },

  // Blender 3D: Product Animations
  {
    title: "Iphone 12 product animation",
    description:
      "A 3D product animation of the iPhone 12 made in Blender, focusing on realistic materials, dynamic lighting, and smooth motion to create a modern tech-style showcase.",
    image: "/projects/project-4.png",
    video: "/videos/iphone-12-product-animation.mp4",
    link: "https://github.com/mihir-1304",
    category: "Blender 3D",
    subcategory: "Product Animations & Ads",
    tags: ["Blender", "Product Animation", "Hard Surface", "Lighting"],
  },
  {
    title: "Nivia Product animation",
    description:
      "A 3D product animation of the Nivia product made in Blender, focusing on realistic materials, dynamic lighting, and smooth motion to create a modern tech-style showcase.",
    image: "/projects/project-5.png",
    video: "/videos/Nivea.mp4",
    link: "https://github.com/mihir-1304",
    category: "Blender 3D",
    subcategory: "Product Animations & Ads",
    tags: ["Blender", "Fluid Simulation", "Motion Design", "Commercial"],
  },
  {
    title: "Airpods Animation",
    description:
      "A 3D airpods animation made in Blender, focusing on realistic materials, dynamic lighting, and smooth motion to create a modern tech-style showcase.",
    image: "/projects/project-8.png",
    video: "/videos/Airpods.mp4",
    link: "https://github.com/mihir-1304",
    category: "Blender 3D",
    subcategory: "Product Animations & Ads",
    tags: ["Blender", "Exploded View", "Materials", "Commercial"],
  },
  {
    title: "Spectacles Ad",
    description:
      "A 3D spectacles ad made in Blender, focusing on realistic materials, dynamic lighting, and smooth motion to create a modern tech-style showcase.",
    image: "/projects/project-12.png",
    video: "/videos/Specs.mp4",
    link: "https://github.com/mihir-1304",
    category: "Blender 3D",
    subcategory: "Product Animations & Ads",
    tags: ["Blender", "Optics Refraction", "Motion Design", "Lighting"],
  },

  // Blender 3D: 3D Environments & Scenes
  {
    title: "Anime scene",
    description:
      "A 3D anime scene made in Blender, focusing on realistic materials, dynamic lighting, and smooth motion to create a modern tech-style showcase.",
    image: "/projects/project-6.png",
    video: "/videos/Anime.mp4",
    link: "https://github.com/mihir-1304",
    category: "Blender 3D",
    subcategory: "3D Environments & Scenes",
    tags: ["Blender", "Cel Shading", "Stylized 3D", "Environment"],
  },
  {
    title: "Cinematic Night City Scene",
    description:
      "A 3D cinematic night city scene made in Blender, focusing on realistic materials, dynamic lighting, and smooth motion to create a modern tech-style showcase.",
    image: "/projects/project-7.png",
    video: "/videos/Cinematic.mp4",
    link: "https://github.com/mihir-1304",
    category: "Blender 3D",
    subcategory: "3D Environments & Scenes",
    tags: ["Blender", "Cyberpunk", "Lighting", "Environment"],
  },
  {
    title: "Bullet Train Cinematic Animation",
    description:
      "A 3D bullet train cinematic animation made in Blender, focusing on realistic materials, dynamic lighting, and smooth motion to create a modern tech-style showcase.",
    image: "/projects/project-9.png",
    video: "/videos/Bullet.mp4",
    link: "https://github.com/mihir-1304",
    category: "Blender 3D",
    subcategory: "3D Environments & Scenes",
    tags: ["Blender", "Motion Blur", "Cinematic", "Environment"],
  },
  {
    title: "Horror Cinematic",
    description:
      "A 3D horror cinematic animation made in Blender, focusing on realistic materials, dynamic lighting, and smooth motion to create a modern tech-style showcase.",
    image: "/projects/project-10.png",
    video: "/videos/Horror.mp4",
    link: "https://github.com/mihir-1304",
    category: "Blender 3D",
    subcategory: "3D Environments & Scenes",
    tags: ["Blender", "Atmospheric", "Volumetrics", "Environment"],
  },
  {
    title: "Night Soul Cinematic Scene",
    description:
      "A 3D night soul cinematic scene made in Blender, focusing on realistic materials, dynamic lighting, and smooth motion to create a modern tech-style showcase.",
    image: "/projects/project-11.png",
    video: "/videos/soul.mp4",
    link: "https://github.com/mihir-1304",
    category: "Blender 3D",
    subcategory: "3D Environments & Scenes",
    tags: ["Blender", "VFX Particles", "Lighting", "Environment"],
  },

  // Blender 3D: Game Assets & 3D Models
  {
    title: "Rubix Cube",
    description:
      "A 3D interactive rubix cube made in Blender, focusing on realistic materials, dynamic lighting, and smooth motion to create a modern tech-style showcase.",
    image: "/projects/project-13.png",
    model: "/models/rubix.glb",
    link: "https://github.com/mihir-1304",
    category: "Blender 3D",
    subcategory: "Game Assets & 3D Models",
    tags: ["Blender", "Interactive 3D", "Game Asset", "GLTF"],
  },
  {
    title: "Pokeball",
    description:
      "A 3D pokeball model made in Blender, focusing on realistic materials, dynamic lighting, and smooth motion to create a modern tech-style showcase.",
    image: "/projects/project-14.png",
    model: "/models/pokeball.glb",
    link: "https://github.com/mihir-1304",
    category: "Blender 3D",
    subcategory: "Game Assets & 3D Models",
    tags: ["Blender", "3D Model", "PBR Texture", "GLTF"],
  },
  {
    title: "Skeleton hand",
    description:
      "A 3D skeleton hand anatomy model made in Blender, focusing on realistic materials, dynamic lighting, and smooth motion to create a modern tech-style showcase.",
    image: "/projects/project-15.png",
    model: "/models/skeleton.glb",
    link: "https://github.com/mihir-1304",
    category: "Blender 3D",
    subcategory: "Game Assets & 3D Models",
    tags: ["Blender", "Sculpting", "Anatomy", "GLTF"],
  },

  // Java Projects
  {
    title: "Smart Banking & Transaction Management System",
    description:
      "Enterprise-grade Java desktop banking software with ACID transaction ledger, multi-user authentication, OOP design patterns, and MySQL JDBC persistence.",
    image: "/projects/java-banking.svg",
    link: "https://github.com/mihir-1304",
    category: "Java Projects",
    subcategory: "Desktop & Core Java",
    tags: ["Java", "Swing / JavaFX", "OOP", "JDBC", "MySQL"],
  },
  {
    title: "High-Concurrency Multi-threaded Chat Server",
    description:
      "High-performance networked communication system using Java Sockets, thread pooling, custom packet serialization, and multi-client broadcast synchronization.",
    image: "/projects/java-chat.svg",
    link: "https://github.com/mihir-1304",
    category: "Java Projects",
    subcategory: "Network & Concurrency",
    tags: ["Java", "Multithreading", "Socket Programming", "TCP/IP"],
  },
  {
    title: "Enterprise Inventory & Supply Chain Controller",
    description:
      "Modular inventory tracking system with dynamic reporting, stock alert triggers, barcode scanner integration, and automated invoice PDF generation.",
    image: "/projects/java-inventory.svg",
    link: "https://github.com/mihir-1304",
    category: "Java Projects",
    subcategory: "Management Systems",
    tags: ["Java", "MVC Pattern", "Hibernate", "JDBC", "SQL"],
  },

  // SQL Projects
  {
    title: "Comprehensive Hospital DBMS & Analytics Schema",
    description:
      "Production-ready relational database architecture normalized to 3NF, featuring stored procedures, cascading triggers, role security, and index optimization.",
    image: "/projects/sql-hospital.svg",
    link: "https://github.com/mihir-1304",
    category: "SQL Projects",
    subcategory: "Database Architecture",
    tags: ["SQL", "MySQL", "Normalization", "Stored Procedures", "Triggers"],
  },
  {
    title: "E-Commerce High-Volume Data Analytics Engine",
    description:
      "Advanced analytical SQL queries utilizing window functions, subquery partitioning, composite indexing, and execution plan optimization for high transaction volume.",
    image: "/projects/sql-ecommerce.svg",
    link: "https://github.com/mihir-1304",
    category: "SQL Projects",
    subcategory: "Query Optimization & Analytics",
    tags: ["SQL", "Query Optimization", "Window Functions", "Analytics", "PostgreSQL"],
  },
  {
    title: "Automated Inventory & Sales Reporting Database",
    description:
      "Relational database schema with materialized views, audit trails, periodic aggregation routines, and automated business KPI generation.",
    image: "/projects/sql-inventory.svg",
    link: "https://github.com/mihir-1304",
    category: "SQL Projects",
    subcategory: "Reporting & Warehousing",
    tags: ["SQL", "Relational Schema", "Views", "Audit Logs", "MySQL"],
  },

  // Backend Projects
  {
    title: "Scalable RESTful Microservices API Engine",
    description:
      "Robust backend API service engineered with Node.js and Express, implementing JWT auth, RBAC permissions, rate-limiting, and comprehensive Swagger documentation.",
    image: "/projects/backend-api.svg",
    link: "https://github.com/mihir-1304",
    category: "Backend Projects",
    subcategory: "REST APIs & Microservices",
    tags: ["Node.js", "Express.js", "JWT", "REST API", "MongoDB"],
  },
  {
    title: "Advanced Excel Data Processing & Automation Engine",
    description:
      "High-throughput data manipulation and formula execution engine for complex spreadsheets, streamlining automated data validation and report exports.",
    image: "/projects/Advance_excel.png",
    link: "https://github.com/MIHIR-1304/Advanced_Excel_Editor",
    category: "Backend Projects",
    subcategory: "Automation & Tools",
    tags: ["Python", "Node.js", "Data Automation", "Algorithms"],
  },
  {
    title: "Real-Time WebSocket Notification & Telemetry Hub",
    description:
      "Low-latency bidirectional messaging hub built on Node.js and Socket.io with pub/sub clustering for live status streams and instant alerts.",
    image: "/projects/backend-realtime.svg",
    link: "https://github.com/mihir-1304",
    category: "Backend Projects",
    subcategory: "Real-time Systems",
    tags: ["Node.js", "WebSockets", "Socket.io", "Redis", "Event-Driven"],
  },

  // Graphic Design
  {
    title: "Futuristic Space & Brand Identity Suite",
    description:
      "Complete brand design system featuring futuristic vector logos, bespoke typography guides, and dark-space visual design elements crafted in Photoshop & Canva.",
    image: "/projects/graphic-brand.svg",
    link: "https://mihir-1304.github.io/3d-Portfolio/Website",
    category: "Graphic Design",
    subcategory: "Brand Identity & Logos",
    tags: ["Photoshop", "Canva", "Brand Identity", "Vector Design"],
  },
  {
    title: "Sci-Fi Game UI / HUD Concept System",
    description:
      "Interactive cyberpunk HUD layout, tactical minimap designs, energy bar gauges, and modular game interface assets created for immersive 3D titles.",
    image: "/projects/graphic-hud.svg",
    link: "https://mihir-1304.github.io/3d-Portfolio/Website",
    category: "Graphic Design",
    subcategory: "Sci-Fi UI & HUD Concepts",
    tags: ["UI/UX", "Photoshop", "Game HUD", "Concept Art"],
  },
  {
    title: "3D Motion Graphics & Digital Promotional Posters",
    description:
      "Creative advertising posters and digital social media campaigns combining 3D product renders, dynamic typography, and high-impact color grading.",
    image: "/projects/graphic-poster.svg",
    link: "https://mihir-1304.github.io/3d-Portfolio/Website",
    category: "Graphic Design",
    subcategory: "Marketing & Posters",
    tags: ["Photoshop", "After Effects", "Motion Design", "Visual Arts"],
  },
] as const;

export const EXPERIENCES = [
  {
    role: "3D Generalist Intern",
    company: "Tata Power",
    duration: "June 2025 - July 2025",
    project: "TataNav: 3D Locator and Navigator Interface",
    description: "Developed 3D plant navigation system with real-time employee tracking. Automated pathfinding and visualization using Python–Blender integration. Delivered multi-platform interactive web interface.",
    certificate: "/projects/tata_Power.jpg",
    projectImage: "/projects/project-1-new.png",
    projectVideo: "/videos/tatanav.mp4",
    projectLink: "https://github.com/MIHIR-1304/TataNav-3D-Locator-and-Navigator-Interface-Tata-Power-",
  },
  {
    role: "Robotics/AI Intern",
    company: "Tech Robotics",
    duration: "Jan 2023 - May 2023",
    project: "NOBoT– AI Integrated Spider Quadrobot",
    description: "Built AI-driven quadrobot for hazardous terrain navigation and rescue scenarios. Implemented real-time edge AI object detection and sensor fusion system. Enabled live control, video, and telemetry monitoring using Python, Raspberry Pi, Arduino.",
    certificate: "/projects/tata_prashikhsan.png",
    projectImage: "/projects/project-2.jpg",
    projectLink: "https://mihir-1304.github.io/3d-Portfolio/Website",
  },
  {
    role: "Project Intern",
    company: "Tata Prashikshan",
    duration: "August 2025 - Sep 2025",
    project: "Advanced Excel Editor",
    description: "Developed an advanced Excel editor with enhanced data manipulation capabilities. Implemented custom formulas, data validation, and automation scripts to streamline workflows. Delivered a user-friendly interface for complex data management tasks.",
    certificate: "/projects/tata_prashikhsan.png",
    projectImage: "/projects/Advance_excel.png",
    projectLink: "https://github.com/MIHIR-1304/Advanced_Excel_Editor",
  }
] as const;

export const EDUCATION = [
  {
    degree: "B.Tech in Computer Science Engineering",
    institution: "Chaibasa Engineering College (Jharkhand University of Technology)",
    duration: "2022 - Present (Current Semester: 5th)",
    score: "CGPA: 8.4",
    description: "Focusing on artificial intelligence, full-stack web development, and 3D programming logic. Active participant in coding clubs and robotic events.",
  },
  {
    degree: "Intermediate (12th Grade)",
    institution: "Central Karimia +2 High School, Sakchi",
    duration: "2019 - 2021",
    score: "Percentage: 72.8%",
    description: "Studied Physics, Chemistry, and Mathematics (PCM). Developed a strong foundation in logical reasoning and analytical problem-solving.",
  },
  {
    degree: "Matriculation (10th Grade)",
    institution: "High School Dhatkidih",
    duration: "2018 - 2019",
    score: "Percentage: 83.6%",
    description: "Completed secondary education with distinction. Volunteered in science fairs, Interschool GK & Mathematics Olympiads.",
  }
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/mihir-1304",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.com/channels/igris_the_bloodred_13",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://www.instagram.com/blender_buddy_13?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/mihir-mahato-btech",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "My 3D Portfolio",
        icon: null,
        link: "https://mihir-1304.github.io/3d-Portfolio/Website",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:mihirmahato1304@gmail.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Experience",
    link: "#experience",
  },
  {
    title: "Education",
    link: "#education",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/mihir-1304",
};
