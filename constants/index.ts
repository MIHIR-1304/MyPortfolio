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
    description: "Browse all specialized engineering, 3D CGI animations, systems, and robotics creations",
    accent: "from-purple-500 via-indigo-500 to-cyan-500",
    badgeColor: "border-purple-500/50 text-purple-300 bg-purple-500/10",
    iconName: "layer",
    previews: [
      "/projects/project-1-new.png",
      "/projects/project-4.png",
      "/projects/project-13.png",
      "/projects/project-7.png",
    ],
    subcategories: [],
  },
  {
    id: "product-design",
    name: "Product Design",
    label: "Product Design",
    description: "Modern, high-fidelity 3D product animations and interactive commercial assets",
    accent: "from-orange-500 via-amber-500 to-red-500",
    badgeColor: "border-orange-500/50 text-orange-300 bg-orange-500/10",
    iconName: "cube",
    previews: [
      "/projects/project-4.png",
      "/projects/project-5.png",
      "/projects/project-8.png",
      "/projects/project-12.png",
    ],
    subcategories: [
      { id: "all-product", label: "All Products" },
      { id: "commercial-showcase", label: "📱 Commercial Showcase" },
      { id: "fluid-cgi", label: "💧 Fluid & CGI" },
      { id: "tech-hardware", label: "🎧 Tech & Audio" },
      { id: "luxury-ad", label: "👓 Luxury Goods" },
    ],
  },
  {
    id: "web-dev",
    name: "Web Development",
    label: "Web Development",
    description: "Responsive 3D websites, autonomous robotics interfaces, real-time tracking & React apps",
    accent: "from-cyan-500 via-blue-500 to-purple-500",
    badgeColor: "border-cyan-500/50 text-cyan-300 bg-cyan-500/10",
    iconName: "code",
    previews: [
      "/projects/project-1-new.png",
      "/projects/project-2.jpg",
      "/projects/project-3.png",
    ],
    subcategories: [
      { id: "all-web", label: "All Web & AI" },
      { id: "industrial-ai", label: "🏭 Industrial AI & Navigation" },
      { id: "autonomous-robotics", label: "🤖 Autonomous Robotics" },
      { id: "interactive-3d", label: "🌐 Interactive 3D Web" },
    ],
  },
  {
    id: "interior-design",
    name: "Interior Design",
    label: "Interior & 3D Environments",
    description: "Photorealistic architectural visualizations, lighting mockups, room models & cinematic scenes",
    accent: "from-emerald-500 via-teal-500 to-cyan-500",
    badgeColor: "border-emerald-500/50 text-emerald-300 bg-emerald-500/10",
    iconName: "home",
    previews: [
      "/projects/project-7.png",
      "/projects/project-9.png",
      "/projects/project-6.png",
      "/projects/project-10.png",
    ],
    subcategories: [
      { id: "all-interior", label: "All Environments" },
      { id: "cyberpunk", label: "🌆 Cyberpunk Night City" },
      { id: "cinematic-vfx", label: "🚄 Cinematic Motion" },
      { id: "stylized-3d", label: "⛩️ Stylized & Anime" },
      { id: "moody-fog", label: "🌫️ Atmospheric Scenes" },
    ],
  },
  {
    id: "game-assets",
    name: "Game Assets",
    label: "Game Assets",
    description: "Low-poly and high-poly 3D models, GLTF assets, PBR textures, and interactive props",
    accent: "from-purple-500 via-pink-500 to-indigo-500",
    badgeColor: "border-purple-500/50 text-purple-300 bg-purple-500/10",
    iconName: "game",
    previews: [
      "/projects/project-13.png",
      "/projects/project-14.png",
      "/projects/project-15.png",
    ],
    subcategories: [
      { id: "all-game", label: "All Assets" },
      { id: "interactive-props", label: "🎲 Interactive Props" },
      { id: "pbr-models", label: "⚡ Sci-Fi PBR Models" },
      { id: "anatomy-sculpts", label: "🦴 Anatomical Sculpting" },
    ],
  },
  {
    id: "java",
    name: "Java Projects",
    label: "Java Projects",
    description: "Robotics control interfaces, multi-threaded server-client systems, and logic layers",
    accent: "from-amber-500 via-red-500 to-orange-500",
    badgeColor: "border-amber-500/50 text-amber-300 bg-amber-500/10",
    iconName: "java",
    previews: [
      "/projects/java-banking.svg",
      "/projects/java-chat.svg",
      "/projects/java-inventory.svg",
    ],
    subcategories: [
      { id: "all-java", label: "All Java" },
      { id: "core-systems", label: "🏦 Banking & Transactions" },
      { id: "networking", label: "⚡ Concurrency & Sockets" },
      { id: "supply-chain", label: "📦 Inventory Management" },
    ],
  },
  {
    id: "backend",
    name: "Backend Projects",
    label: "Backend & Cloud",
    description: "Scalable REST APIs, spreadsheet data automation pipelines, and real-time WebSockets",
    accent: "from-teal-500 via-emerald-500 to-cyan-500",
    badgeColor: "border-teal-500/50 text-teal-300 bg-teal-500/10",
    iconName: "server",
    previews: [
      "/projects/Advance_excel.png",
      "/projects/backend-api.svg",
      "/projects/backend-realtime.svg",
    ],
    subcategories: [
      { id: "all-backend", label: "All Backend" },
      { id: "automation-engine", label: "📑 Spreadsheet Automation" },
      { id: "rest-api", label: "⚙️ REST APIs & Auth" },
      { id: "realtime-socket", label: "📡 WebSockets & Telemetry" },
    ],
  },
  {
    id: "sql",
    name: "SQL Projects",
    label: "SQL & Databases",
    description: "3NF relational schemas, stored procedures, cascading triggers & query tuning",
    accent: "from-blue-500 via-cyan-500 to-teal-500",
    badgeColor: "border-blue-500/50 text-blue-300 bg-blue-500/10",
    iconName: "database",
    previews: [
      "/projects/sql-hospital.svg",
      "/projects/sql-ecommerce.svg",
      "/projects/sql-inventory.svg",
    ],
    subcategories: [
      { id: "all-sql", label: "All SQL" },
      { id: "relational-schema", label: "🏥 Hospital DBMS (3NF)" },
      { id: "analytics-tuning", label: "📊 E-Commerce Analytics" },
      { id: "reporting-views", label: "📈 Materialized Views & Auditing" },
    ],
  },
  {
    id: "graphic-design",
    name: "Graphic Design",
    label: "Graphic Design",
    description: "Futuristic space branding, cyberpunk game UI / HUD layouts, and digital posters",
    accent: "from-pink-500 via-fuchsia-500 to-purple-500",
    badgeColor: "border-pink-500/50 text-pink-300 bg-pink-500/10",
    iconName: "palette",
    previews: [
      "/projects/graphic-brand.svg",
      "/projects/graphic-hud.svg",
      "/projects/graphic-poster.svg",
    ],
    subcategories: [
      { id: "all-graphics", label: "All Graphics" },
      { id: "brand-identity", label: "🎨 Space Brand Identity" },
      { id: "game-hud", label: "🛸 Sci-Fi UI / HUD Concepts" },
      { id: "promos", label: "✨ 3D Motion Graphics Posters" },
    ],
  },
] as const;

export const PROJECTS = [
  // Web Development & AI Robotics
  {
    title: "TataNav: 3D Locator and Navigator Interface",
    description:
      "Developed 3D plant navigation system with real-time employee tracking. Automated pathfinding and visualization using Python–Blender integration. Delivered multi-platform interactive web interface.",
    image: "/projects/project-1-new.png",
    video: "/videos/tatanav.mp4",
    link: "https://github.com/MIHIR-1304/TataNav-3D-Locator-and-Navigator-Interface-Tata-Power-",
    category: "Web Development",
    subcategory: "Industrial AI & Navigation",
    tags: ["Python", "Blender", "Pathfinding", "Web Interface", "Tkinter"],
  },
  {
    title: "NOBoT – AI Integrated Spider Quadrobot",
    description:
      "Built AI-driven quadrobot for hazardous terrain navigation and rescue scenarios. Implemented real-time edge AI object detection and sensor fusion system. Enabled live control, video, and telemetry monitoring using Python, Raspberry Pi, Arduino.",
    image: "/projects/project-2.jpg",
    link: "https://github.com/MIHIR-1304",
    category: "Web Development",
    subcategory: "Autonomous Robotics",
    tags: ["Python", "Raspberry Pi 5", "Arduino", "OpenCV", "YOLO"],
  },
  {
    title: "3D Interactive Portfolio Website",
    description:
      "Designed a fully responsive 3D portfolio website showcasing projects and models. Integrated interactive 3D animations using Spline 3D and Three.js. Implemented smooth transitions and modern glassmorphism UI.",
    image: "/projects/project-3.png",
    link: "https://mihir-1304.github.io/3d-Portfolio/Website",
    category: "Web Development",
    subcategory: "Interactive 3D Web",
    tags: ["Next.js", "Three.js", "Spline 3D", "Tailwind CSS", "Framer Motion"],
  },

  // Product Design: 3D Commercial Animations
  {
    title: "Iphone 12 Product Animation",
    description:
      "A 3D product animation of the iPhone 12 made in Blender, focusing on realistic materials, dynamic lighting, and smooth motion to create a modern tech-style showcase.",
    image: "/projects/project-4.png",
    video: "/videos/iphone-12-product-animation.mp4",
    link: "https://github.com/MIHIR-1304",
    category: "Product Design",
    subcategory: "Commercial Showcase",
    tags: ["Blender", "Product Animation", "Hard Surface", "Lighting", "Cycles"],
  },
  {
    title: "Nivea Commercial Animation",
    description:
      "A 3D product animation of the Nivea product made in Blender, focusing on realistic materials, dynamic lighting, and smooth motion to create a modern tech-style showcase.",
    image: "/projects/project-5.png",
    video: "/videos/Nivea.mp4",
    link: "https://github.com/MIHIR-1304",
    category: "Product Design",
    subcategory: "Fluid & CGI",
    tags: ["Blender", "Fluid Simulation", "Motion Design", "Commercial", "Shading"],
  },
  {
    title: "Airpods Pro Animation",
    description:
      "A 3D AirPods animation made in Blender, focusing on realistic materials, dynamic lighting, and smooth motion to create a modern tech-style showcase.",
    image: "/projects/project-8.png",
    video: "/videos/Airpods.mp4",
    link: "https://github.com/MIHIR-1304",
    category: "Product Design",
    subcategory: "Tech & Audio",
    tags: ["Blender", "Exploded View", "Materials", "Commercial", "Lighting"],
  },
  {
    title: "Spectacles Ad",
    description:
      "A 3D spectacles ad made in Blender, focusing on realistic materials, dynamic lighting, and smooth motion to create a modern tech-style showcase.",
    image: "/projects/project-12.png",
    video: "/videos/Specs.mp4",
    link: "https://github.com/MIHIR-1304",
    category: "Product Design",
    subcategory: "Luxury Goods",
    tags: ["Blender", "Optics Refraction", "Motion Design", "Lighting", "Glass Shader"],
  },

  // Interior Design & 3D Environments
  {
    title: "Cinematic Night City Scene",
    description:
      "A 3D cinematic night city scene made in Blender, focusing on realistic materials, dynamic lighting, and smooth motion to create a modern tech-style showcase.",
    image: "/projects/project-7.png",
    video: "/videos/Cinematic.mp4",
    link: "https://github.com/MIHIR-1304",
    category: "Interior Design",
    subcategory: "Cyberpunk Night City",
    tags: ["Blender", "Cyberpunk", "Lighting", "Environment", "Volumetrics"],
  },
  {
    title: "Bullet Train Cinematic Animation",
    description:
      "A 3D bullet train cinematic animation made in Blender, focusing on realistic materials, dynamic lighting, and smooth motion to create a modern tech-style showcase.",
    image: "/projects/project-9.png",
    video: "/videos/Bullet.mp4",
    link: "https://github.com/MIHIR-1304",
    category: "Interior Design",
    subcategory: "Cinematic Motion",
    tags: ["Blender", "Motion Blur", "Cinematic", "Environment", "Camera Rig"],
  },
  {
    title: "Anime Aesthetic Scene",
    description:
      "A 3D anime scene made in Blender, focusing on realistic materials, dynamic lighting, and smooth motion to create a modern tech-style showcase.",
    image: "/projects/project-6.png",
    video: "/videos/Anime.mp4",
    link: "https://github.com/MIHIR-1304",
    category: "Interior Design",
    subcategory: "Stylized & Anime",
    tags: ["Blender", "Cel Shading", "Stylized 3D", "Interior & Lighting"],
  },
  {
    title: "Horror Cinematic",
    description:
      "A 3D horror cinematic animation made in Blender, focusing on realistic materials, dynamic lighting, and smooth motion to create a modern tech-style showcase.",
    image: "/projects/project-10.png",
    video: "/videos/Horror.mp4",
    link: "https://github.com/MIHIR-1304",
    category: "Interior Design",
    subcategory: "Atmospheric Scenes",
    tags: ["Blender", "Atmospheric", "Volumetrics", "Environment"],
  },
  {
    title: "Night Soul Cinematic Scene",
    description:
      "A 3D night soul cinematic scene made in Blender, focusing on realistic materials, dynamic lighting, and smooth motion to create a modern tech-style showcase.",
    image: "/projects/project-11.png",
    video: "/videos/soul.mp4",
    link: "https://github.com/MIHIR-1304",
    category: "Interior Design",
    subcategory: "Atmospheric Scenes",
    tags: ["Blender", "VFX Particles", "Lighting", "Environment"],
  },

  // Game Assets: 3D Models & Interactive GLTF
  {
    title: "Interactive Rubix Cube",
    description:
      "A 3D interactive rubix cube made in Blender, focusing on realistic materials, dynamic lighting, and smooth motion to create a modern tech-style showcase.",
    image: "/projects/project-13.png",
    model: "/models/rubix.glb",
    link: "https://github.com/MIHIR-1304",
    category: "Game Assets",
    subcategory: "Interactive Props",
    tags: ["Blender", "Interactive 3D", "Game Asset", "GLTF", "Three.js"],
  },
  {
    title: "Sci-Fi Pokeball",
    description:
      "A 3D pokeball model made in Blender, focusing on realistic materials, dynamic lighting, and smooth motion to create a modern tech-style showcase.",
    image: "/projects/project-14.png",
    model: "/models/pokeball.glb",
    link: "https://github.com/MIHIR-1304",
    category: "Game Assets",
    subcategory: "Sci-Fi PBR Models",
    tags: ["Blender", "3D Model", "PBR Texture", "GLTF", "Realtime Asset"],
  },
  {
    title: "Skeleton Hand Anatomy",
    description:
      "A 3D skeleton hand anatomy model made in Blender, focusing on realistic materials, dynamic lighting, and smooth motion to create a modern tech-style showcase.",
    image: "/projects/project-15.png",
    model: "/models/skeleton.glb",
    link: "https://github.com/MIHIR-1304",
    category: "Game Assets",
    subcategory: "Anatomical Sculpting",
    tags: ["Blender", "Sculpting", "Anatomy", "GLTF", "Subdivision"],
  },

  // Java Projects
  {
    title: "Smart Banking & Transaction Management System",
    description:
      "Enterprise-grade Java desktop banking software with ACID transaction ledger, multi-user authentication, OOP design patterns, and MySQL JDBC persistence.",
    image: "/projects/java-banking.svg",
    link: "https://github.com/MIHIR-1304",
    category: "Java Projects",
    subcategory: "Banking & Transactions",
    tags: ["Java", "Swing / JavaFX", "OOP Architecture", "JDBC", "MySQL ACID"],
  },
  {
    title: "High-Concurrency Multi-threaded Chat Server",
    description:
      "High-performance networked communication system using Java Sockets, thread pooling, custom packet serialization, and multi-client broadcast synchronization.",
    image: "/projects/java-chat.svg",
    link: "https://github.com/MIHIR-1304",
    category: "Java Projects",
    subcategory: "Concurrency & Sockets",
    tags: ["Java", "Multithreading", "Socket Programming", "TCP/IP Protocol"],
  },
  {
    title: "Enterprise Inventory & Supply Chain Controller",
    description:
      "Modular inventory tracking system with dynamic reporting, stock alert triggers, barcode scanner integration, and automated invoice PDF generation.",
    image: "/projects/java-inventory.svg",
    link: "https://github.com/MIHIR-1304",
    category: "Java Projects",
    subcategory: "Inventory Management",
    tags: ["Java", "MVC Pattern", "Hibernate", "JDBC", "Report Engine"],
  },

  // SQL Projects
  {
    title: "Comprehensive Hospital DBMS & Analytics Schema",
    description:
      "Production-ready relational database architecture normalized to 3NF, featuring stored procedures, cascading triggers, role security, and index optimization.",
    image: "/projects/sql-hospital.svg",
    link: "https://github.com/MIHIR-1304",
    category: "SQL Projects",
    subcategory: "Hospital DBMS (3NF)",
    tags: ["SQL", "MySQL", "3NF Normalization", "Stored Procedures", "Triggers"],
  },
  {
    title: "E-Commerce High-Volume Data Analytics Engine",
    description:
      "Advanced analytical SQL queries utilizing window functions, subquery partitioning, composite indexing, and execution plan optimization for high transaction volume.",
    image: "/projects/sql-ecommerce.svg",
    link: "https://github.com/MIHIR-1304",
    category: "SQL Projects",
    subcategory: "E-Commerce Analytics",
    tags: ["SQL", "Query Optimization", "Window Functions", "Analytics", "PostgreSQL"],
  },
  {
    title: "Automated Inventory & Sales Reporting Database",
    description:
      "Relational database schema with materialized views, audit trails, periodic aggregation routines, and automated business KPI generation.",
    image: "/projects/sql-inventory.svg",
    link: "https://github.com/MIHIR-1304",
    category: "SQL Projects",
    subcategory: "Materialized Views & Auditing",
    tags: ["SQL", "Relational Schema", "Materialized Views", "Audit Logs", "MySQL"],
  },

  // Backend Projects
  {
    title: "Advanced Excel Data Processing & Automation Engine",
    description:
      "High-throughput data manipulation and formula execution engine for complex spreadsheets, streamlining automated data validation and report exports.",
    image: "/projects/Advance_excel.png",
    link: "https://github.com/MIHIR-1304/Advanced_Excel_Editor",
    category: "Backend Projects",
    subcategory: "Spreadsheet Automation",
    tags: ["Python", "Node.js", "Data Automation", "Spreadsheet Engine", "Algorithms"],
  },
  {
    title: "Scalable RESTful Microservices API Engine",
    description:
      "Robust backend API service engineered with Node.js and Express, implementing JWT auth, RBAC permissions, rate-limiting, and comprehensive Swagger documentation.",
    image: "/projects/backend-api.svg",
    link: "https://github.com/MIHIR-1304",
    category: "Backend Projects",
    subcategory: "REST APIs & Auth",
    tags: ["Node.js", "Express.js", "JWT Auth", "REST API", "MongoDB"],
  },
  {
    title: "Real-Time WebSocket Notification & Telemetry Hub",
    description:
      "Low-latency bidirectional messaging hub built on Node.js and Socket.io with pub/sub clustering for live status streams and instant alerts.",
    image: "/projects/backend-realtime.svg",
    link: "https://github.com/MIHIR-1304",
    category: "Backend Projects",
    subcategory: "WebSockets & Telemetry",
    tags: ["Node.js", "WebSockets", "Socket.io", "Redis", "Event Streams"],
  },

  // Graphic Design
  {
    title: "Futuristic Space & Brand Identity Suite",
    description:
      "Complete brand design system featuring futuristic vector logos, bespoke typography guides, and dark-space visual design elements crafted in Photoshop & Canva.",
    image: "/projects/graphic-brand.svg",
    link: "https://mihir-1304.github.io/3d-Portfolio/Website",
    category: "Graphic Design",
    subcategory: "Space Brand Identity",
    tags: ["Photoshop", "Canva", "Brand Identity", "Vector Design"],
  },
  {
    title: "Sci-Fi Game UI / HUD Concept System",
    description:
      "Interactive cyberpunk HUD layout, tactical minimap designs, energy bar gauges, and modular game interface assets created for immersive 3D titles.",
    image: "/projects/graphic-hud.svg",
    link: "https://mihir-1304.github.io/3d-Portfolio/Website",
    category: "Graphic Design",
    subcategory: "Sci-Fi UI / HUD Concepts",
    tags: ["UI/UX", "Photoshop", "Game HUD", "Concept Art"],
  },
  {
    title: "3D Motion Graphics & Digital Promotional Posters",
    description:
      "Creative advertising posters and digital social media campaigns combining 3D product renders, dynamic typography, and high-impact color grading.",
    image: "/projects/graphic-poster.svg",
    link: "https://mihir-1304.github.io/3d-Portfolio/Website",
    category: "Graphic Design",
    subcategory: "3D Motion Graphics Posters",
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
