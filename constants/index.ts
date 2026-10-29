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
    accent: "from-purple-500 via-indigo-500 to-cyan-500",
    badgeColor: "border-purple-500/50 text-purple-300 bg-purple-500/10",
    iconName: "layer",
    previews: [
      "/projects/war-of-web.svg",
      "/projects/maison-vendome.svg",
      "/projects/project-1-new.png",
      "/projects/project-4.png",
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
    description: "Responsive 3D websites, interactive web applications, autonomous robotics & React projects",
    accent: "from-cyan-500 via-blue-500 to-purple-500",
    badgeColor: "border-cyan-500/50 text-cyan-300 bg-cyan-500/10",
    iconName: "code",
    previews: [
      "/projects/war-of-web.svg",
      "/projects/project-3.png",
      "/projects/project-1-new.png",
      "/projects/project-2.jpg",
    ],
    subcategories: [
      { id: "all-web", label: "All Web & AI" },
      { id: "industrial-ai", label: "🏭 Industrial AI & Navigation" },
      { id: "space-web", label: "🚀 Space Exploration Web" },
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
      "/projects/number-intelligence.svg",
      "/projects/java-banking.svg",
      "/projects/java-chat.svg",
      "/projects/java-inventory.svg",
    ],
    subcategories: [
      { id: "all-java", label: "All Java" },
      { id: "core-systems", label: "🖥️ Desktop & Core Java" },
      { id: "networking", label: "⚡ Concurrency & Sockets" },
      { id: "supply-chain", label: "📦 Inventory Management" },
    ],
  },
  {
    id: "backend",
    name: "Backend Projects",
    label: "Backend & Full-Stack",
    description: "Scalable REST APIs, luxury e-commerce platforms, data automation pipelines, and WebSockets",
    accent: "from-teal-500 via-emerald-500 to-cyan-500",
    badgeColor: "border-teal-500/50 text-teal-300 bg-teal-500/10",
    iconName: "server",
    previews: [
      "/projects/maison-vendome.svg",
      "/projects/carrere-path.svg",
      "/projects/Advance_excel.png",
      "/projects/habit-tracker.svg",
    ],
    subcategories: [
      { id: "all-backend", label: "All Backend" },
      { id: "ecommerce-platform", label: "🛍️ Full-Stack E-Commerce" },
      { id: "career-tools", label: "🧭 Roadmap & Guidance" },
      { id: "automation-engine", label: "📑 Data Automation" },
      { id: "productivity", label: "📊 Productivity Dashboard" },
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
    title: "War of Web: Space Exploration Hub",
    shortDescription:
      "Futuristic space exploration hub showcasing planetary telemetry, celestial archives & galactic animations.",
    description:
      "Futuristic space exploration hub website showcasing celestial bodies, planetary telemetry, interactive galactic archives, dynamic visual effects, and modern responsive UI. Features interactive 3D elements and immersive cosmic themes.",
    image: "/projects/war-of-web.svg",
    liveLink: "https://war-of-web.vercel.app",
    github: "https://github.com/MIHIR-1304/War_Of_Web",
    link: "https://war-of-web.vercel.app",
    category: "Web Development",
    subcategory: "Space Exploration Web",
    tags: ["Next.js", "React", "Space UI", "Tailwind CSS", "Interactive"],
    highlights: [
      "Interactive celestial archives and planetary telemetry",
      "High-performance cosmic animations & particles",
      "Futuristic Sci-Fi HUD aesthetic and responsive layout",
      "Production deployment on Vercel Edge",
    ],
  },
  {
    title: "TataNav: 3D Locator and Navigator Interface",
    shortDescription:
      "Industrial 3D plant locator & navigation interface with real-time employee tracking at Tata Power.",
    description:
      "Developed an industrial 3D plant navigation system with real-time employee tracking. Automated pathfinding and spatial visualization using Python–Blender integration. Delivered a multi-platform interactive web interface deployed for operations at Tata Power.",
    image: "/projects/project-1-new.png",
    video: "/videos/tatanav.mp4",
    github: "https://github.com/MIHIR-1304/TataNav-3D-Locator-and-Navigator-Interface-Tata-Power-",
    link: "https://github.com/MIHIR-1304/TataNav-3D-Locator-and-Navigator-Interface-Tata-Power-",
    category: "Web Development",
    subcategory: "Industrial AI & Navigation",
    tags: ["Python", "Blender", "Pathfinding", "Web Interface", "Tata Power"],
    highlights: [
      "Real-time 3D plant spatial locator & employee tracking",
      "Python–Blender automated pathfinding algorithms",
      "Interactive industrial web interface",
      "Tata Power internship production deployment",
    ],
  },
  {
    title: "3D Interactive Portfolio Website (MyPortfolio)",
    shortDescription:
      "Interactive 3D space-themed developer portfolio built with Next.js 14, Three.js & Framer Motion.",
    description:
      "Designed a fully responsive 3D portfolio website showcasing engineering projects, interactive 3D model viewers, skills radar, and career milestones. Integrated interactive Three.js starfields, Spline 3D canvas, smooth Framer Motion transitions, and a modern domain-filtering architecture.",
    image: "/projects/project-3.png",
    liveLink: "https://my-portfolio-xi-self-23.vercel.app",
    github: "https://github.com/MIHIR-1304/MyPortfolio",
    link: "https://my-portfolio-xi-self-23.vercel.app",
    category: "Web Development",
    subcategory: "Interactive 3D Web",
    tags: ["Next.js 14", "Three.js", "Spline 3D", "Tailwind CSS", "TypeScript"],
    highlights: [
      "Three.js interactive starfield & particle background",
      "Hierarchical project card grid with glassmorphism UI",
      "Interactive 3D Model viewer supporting GLTF/GLB formats",
      "Vercel automated deployment and fast loading times",
    ],
  },
  {
    title: "NOBoT – AI Integrated Spider Quadrobot",
    shortDescription:
      "AI-driven quadrobot for hazardous terrain navigation and real-time edge AI object detection.",
    description:
      "Built an AI-driven quadrobot for hazardous terrain navigation and rescue scenarios. Implemented real-time edge AI object detection and sensor fusion system using Python, OpenCV, and YOLO. Enabled live wireless control, video streaming, and telemetry monitoring on Raspberry Pi & Arduino.",
    image: "/projects/project-2.jpg",
    github: "https://github.com/MIHIR-1304",
    link: "https://github.com/MIHIR-1304",
    category: "Web Development",
    subcategory: "Autonomous Robotics",
    tags: ["Python", "Raspberry Pi", "Arduino", "OpenCV", "YOLO"],
    highlights: [
      "Edge AI computer vision object detection with OpenCV and YOLO",
      "Inverse kinematics locomotion gait for spider quadruped chassis",
      "Dual-microcontroller sensor fusion architecture (Pi + Arduino)",
      "Live video stream and telemetry data telemetry",
    ],
  },

  // Backend & Full-Stack Projects
  {
    title: "Maison Vendôme: Luxury E-Commerce Platform",
    shortDescription:
      "Luxury Parisian multi-category e-commerce platform with Spring Boot microservices, React, PostgreSQL & Docker.",
    description:
      "Luxury multi-category e-commerce platform inspired by Parisian elegance, built with React, Java Spring Boot microservices, PostgreSQL, Docker, and NGINX. Features secure JWT authentication, role-based authorization, product discovery, cart, order management, and payment gateway integration.",
    image: "/projects/maison-vendome.svg",
    liveLink: "https://maison-vendome-ecommerce.vercel.app",
    github: "https://github.com/MIHIR-1304/maison-vendome-ecommerce",
    link: "https://maison-vendome-ecommerce.vercel.app",
    category: "Backend Projects",
    subcategory: "Full-Stack E-Commerce",
    tags: ["React", "Java Spring Boot", "PostgreSQL", "Docker", "Microservices", "JWT"],
    highlights: [
      "Java Spring Boot microservices backend architecture",
      "Normalized PostgreSQL database containerized with Docker",
      "Secure JWT authentication and role-based access control",
      "Responsive luxury UI with cart & order workflows",
    ],
  },
  {
    title: "Career Path Navigator",
    shortDescription:
      "Interactive career guidance roadmap helping learners track engineering milestones and tech specializations.",
    description:
      "Interactive roadmap and career guidance web platform designed to help students and developers plan domain mastery, explore engineering specializations (Fullstack, Backend, AI, 3D), track milestones, and visualize tech career trajectories.",
    image: "/projects/carrere-path.svg",
    liveLink: "https://carrere-path.vercel.app",
    github: "https://github.com/MIHIR-1304/carrere_path",
    link: "https://carrere-path.vercel.app",
    category: "Backend Projects",
    subcategory: "Roadmap & Guidance",
    tags: ["React", "TypeScript", "Career Guidance", "Vercel", "Web App"],
    highlights: [
      "Specialized tech roadmap visualization and skill trees",
      "Milestone tracking for engineering students & developers",
      "Vercel automated deployment and fast response time",
      "Modular components built with React & TypeScript",
    ],
  },
  {
    title: "Advanced Excel Editor & Data Automation",
    shortDescription:
      "Web-based spreadsheet editor with custom formulas, data validation & export to Excel.",
    description:
      "High-throughput web-based spreadsheet editor with enhanced data manipulation capabilities, custom formula evaluation, automated data validation, and instantaneous Excel (.xlsx) file generation and exports.",
    image: "/projects/Advance_excel.png",
    github: "https://github.com/MIHIR-1304/Advanced_Excel_Editor",
    link: "https://github.com/MIHIR-1304/Advanced_Excel_Editor",
    category: "Backend Projects",
    subcategory: "Data Automation",
    tags: ["Python", "Node.js", "Excel Automation", "Data Analysis"],
    highlights: [
      "Formula calculation engine and live tabular grid manipulation",
      "Instant export to styled, formatted .xlsx spreadsheets",
      "Data validation rules and column schema enforcement",
      "Streamlined corporate reporting automation workflows",
    ],
  },
  {
    title: "Habit Tracker & Productivity Dashboard",
    shortDescription:
      "Interactive routine and consistency monitor to build daily habits and track productivity streaks.",
    description:
      "Lightweight, intuitive habit tracking application built to monitor daily routines, maintain streaks, and boost personal productivity with interactive progress metrics, streak counters, and local storage data persistence.",
    image: "/projects/habit-tracker.svg",
    github: "https://github.com/MIHIR-1304/Habit_Tracker",
    link: "https://github.com/MIHIR-1304/Habit_Tracker",
    category: "Backend Projects",
    subcategory: "Productivity Dashboard",
    tags: ["JavaScript", "React", "Productivity", "UI/UX", "Streak Tracker"],
    highlights: [
      "Daily streak computation and visual habit rings",
      "Local storage data persistence for offline access",
      "Habit milestone checklists and completion analytics",
      "Lightweight interactive user interface",
    ],
  },
  {
    title: "Scalable RESTful Microservices API Engine",
    shortDescription:
      "Robust backend API service engineered with Node.js, Express, JWT auth, and Swagger documentation.",
    description:
      "Robust backend API service engineered with Node.js and Express, implementing JWT auth, RBAC permissions, rate-limiting, and comprehensive Swagger documentation for distributed service architectures.",
    image: "/projects/backend-api.svg",
    github: "https://github.com/MIHIR-1304",
    link: "https://github.com/MIHIR-1304",
    category: "Backend Projects",
    subcategory: "REST APIs & Auth",
    tags: ["Node.js", "Express.js", "JWT", "REST API", "MongoDB"],
    highlights: [
      "RESTful microservices design with Express.js",
      "JWT token validation & granular permissions middleware",
      "Rate-limiting and sanitization guards",
      "Swagger OpenAPI documentation",
    ],
  },
  {
    title: "Real-Time WebSocket Notification & Telemetry Hub",
    shortDescription:
      "Low-latency bidirectional messaging hub built on Node.js and Socket.io with pub/sub clustering.",
    description:
      "Low-latency bidirectional messaging hub built on Node.js and Socket.io with pub/sub clustering for live status streams, instant alerts, and collaborative real-time state synchronization.",
    image: "/projects/backend-realtime.svg",
    github: "https://github.com/MIHIR-1304",
    link: "https://github.com/MIHIR-1304",
    category: "Backend Projects",
    subcategory: "WebSockets & Telemetry",
    tags: ["Node.js", "WebSockets", "Socket.io", "Redis", "Event-Driven"],
    highlights: [
      "Real-time bidirectional event streaming with Socket.io",
      "Redis pub/sub message broker integration",
      "Low latency telemetry synchronization",
      "Fault-tolerant heartbeat and reconnection logic",
    ],
  },

  // Java Projects
  {
    title: "Number Intelligence Engine",
    shortDescription:
      "Menu-driven core Java computation engine for prime verification, sequences & numerical analysis.",
    description:
      "Menu-driven Java console application for algorithmic number analysis, prime verification, mathematical sequence computation (Fibonacci, Armstrong, Palindromes), and number theory evaluation with optimized complexity.",
    image: "/projects/number-intelligence.svg",
    github: "https://github.com/MIHIR-1304/number-intelligence-engine",
    link: "https://github.com/MIHIR-1304/number-intelligence-engine",
    category: "Java Projects",
    subcategory: "Desktop & Core Java",
    tags: ["Java", "Algorithms", "Core Java", "OOP", "Mathematics"],
    highlights: [
      "Optimized O(sqrt(N)) prime factorization algorithms",
      "Fibonacci, Armstrong, and Palindromic sequence evaluation",
      "Modular OOP architecture with clear class separation",
      "Interactive menu-driven console workflow",
    ],
  },
  {
    title: "Smart Banking & Transaction Management System",
    shortDescription:
      "Enterprise-grade Java desktop banking software with ACID transaction ledger and MySQL JDBC.",
    description:
      "Enterprise-grade Java desktop banking software with ACID transaction ledger, multi-user authentication, OOP design patterns, and MySQL JDBC persistence for financial accounting.",
    image: "/projects/java-banking.svg",
    github: "https://github.com/MIHIR-1304",
    link: "https://github.com/MIHIR-1304",
    category: "Java Projects",
    subcategory: "Desktop & Core Java",
    tags: ["Java", "Swing / JavaFX", "OOP", "JDBC", "MySQL"],
    highlights: [
      "ACID transaction ledger ensuring data consistency",
      "Multi-user role authentication and account management",
      "JDBC connectivity to MySQL database",
      "Clean MVC desktop architecture",
    ],
  },
  {
    title: "High-Concurrency Multi-threaded Chat Server",
    shortDescription:
      "Networked communication system using Java Sockets, thread pooling & packet serialization.",
    description:
      "High-performance networked communication system using Java Sockets, thread pooling, custom packet serialization, and multi-client broadcast synchronization for distributed messaging.",
    image: "/projects/java-chat.svg",
    github: "https://github.com/MIHIR-1304",
    link: "https://github.com/MIHIR-1304",
    category: "Java Projects",
    subcategory: "Network & Concurrency",
    tags: ["Java", "Multithreading", "Socket Programming", "TCP/IP"],
    highlights: [
      "TCP/IP socket network programming",
      "Thread pool executor managing concurrent client channels",
      "Broadcast messaging and room synchronization",
      "Custom byte packet serialization",
    ],
  },
  {
    title: "Enterprise Inventory & Supply Chain Controller",
    shortDescription:
      "Modular inventory tracking system with dynamic reporting & barcode integration.",
    description:
      "Modular inventory tracking system with dynamic reporting, stock alert triggers, barcode scanner integration, and automated invoice PDF generation.",
    image: "/projects/java-inventory.svg",
    github: "https://github.com/MIHIR-1304",
    link: "https://github.com/MIHIR-1304",
    category: "Java Projects",
    subcategory: "Inventory Management",
    tags: ["Java", "MVC Pattern", "Hibernate", "JDBC", "SQL"],
    highlights: [
      "Real-time stock level monitoring and re-order thresholds",
      "Automated invoice PDF generation engine",
      "Modular MVC design with JDBC persistence",
      "Multi-user role permissions for warehouse staff",
    ],
  },

  // Product Design: 3D Commercial Animations
  {
    title: "iPhone 12 Product Animation",
    shortDescription:
      "3D product animation of the iPhone 12 made in Blender with dynamic lighting and camera moves.",
    description:
      "A 3D product animation of the iPhone 12 made in Blender, focusing on realistic materials, dynamic lighting, and smooth motion to create a modern tech-style showcase.",
    image: "/projects/project-4.png",
    video: "/videos/iphone-12-product-animation.mp4",
    github: "https://github.com/MIHIR-1304/-blender-3D-creative-works",
    link: "https://github.com/MIHIR-1304/-blender-3D-creative-works",
    category: "Product Design",
    subcategory: "Commercial Showcase",
    tags: ["Blender", "Product Animation", "Hard Surface", "Lighting", "Cycles"],
    highlights: [
      "Photorealistic glass and brushed aluminum PBR materials",
      "Smooth camera orbits and dynamic depth-of-field focus pulls",
      "Cycles multi-pass rendering and compositing",
      "Commercial-grade tech advertisement presentation",
    ],
  },
  {
    title: "Nivea Commercial Animation",
    shortDescription:
      "Fluid simulation and cosmetic packaging animation rendered in Blender.",
    description:
      "A 3D product animation of the Nivea product made in Blender, focusing on realistic materials, dynamic lighting, and smooth motion to create a modern tech-style showcase.",
    image: "/projects/project-5.png",
    video: "/videos/Nivea.mp4",
    github: "https://github.com/MIHIR-1304/-blender-3D-creative-works",
    link: "https://github.com/MIHIR-1304/-blender-3D-creative-works",
    category: "Product Design",
    subcategory: "Fluid & CGI",
    tags: ["Blender", "Fluid Simulation", "Motion Design", "Commercial", "Shading"],
    highlights: [
      "Viscous fluid splash physics and collision domains",
      "Subsurface scattering skin lotion material shaders",
      "Studio 3-point lighting setup with soft bounce cards",
      "Color grading optimized for commercial broadcast",
    ],
  },
  {
    title: "AirPods Pro Animation",
    shortDescription:
      "Exploded view and magnetic case mechanical animation in Blender.",
    description:
      "A 3D AirPods animation made in Blender, focusing on realistic materials, dynamic lighting, and smooth motion to create a modern tech-style showcase.",
    image: "/projects/project-8.png",
    video: "/videos/Airpods.mp4",
    github: "https://github.com/MIHIR-1304/-blender-3D-creative-works",
    link: "https://github.com/MIHIR-1304/-blender-3D-creative-works",
    category: "Product Design",
    subcategory: "Tech & Audio",
    tags: ["Blender", "Exploded View", "Materials", "Commercial", "Lighting"],
    highlights: [
      "Precise mechanical exploded-view disassembly sequencing",
      "Glossy plastic and acoustic mesh micro-textures",
      "Magnetic latch snap and hinge animation rigs",
      "Apple aesthetic minimalist studio backdrop",
    ],
  },
  {
    title: "Spectacles Ad",
    shortDescription:
      "Luxury eyewear optical refraction and studio lighting showcase in Blender.",
    description:
      "A 3D spectacles ad made in Blender, focusing on realistic materials, dynamic lighting, and smooth motion to create a modern tech-style showcase.",
    image: "/projects/project-12.png",
    video: "/videos/Specs.mp4",
    github: "https://github.com/MIHIR-1304/-blender-3D-creative-works",
    link: "https://github.com/MIHIR-1304/-blender-3D-creative-works",
    category: "Product Design",
    subcategory: "Luxury Goods",
    tags: ["Blender", "Optics Refraction", "Motion Design", "Lighting", "Glass Shader"],
    highlights: [
      "Dielectric glass dispersion and caustic calculations",
      "Acetate frame tortoiseshell procedural texturing",
      "Macro lens close-ups on precision hinge mechanics",
      "Cinematic motion blur and slow-motion rotations",
    ],
  },

  // Interior Design & 3D Environments
  {
    title: "Cinematic Night City Scene",
    shortDescription:
      "Cyberpunk urban night environment with volumetric fog, neon signs and reflections.",
    description:
      "A 3D cinematic night city scene made in Blender, focusing on realistic materials, dynamic lighting, and smooth motion to create a modern tech-style showcase.",
    image: "/projects/project-7.png",
    video: "/videos/Cinematic.mp4",
    github: "https://github.com/MIHIR-1304/-blender-3D-creative-works",
    link: "https://github.com/MIHIR-1304/-blender-3D-creative-works",
    category: "Interior Design",
    subcategory: "Cyberpunk Night City",
    tags: ["Blender", "Cyberpunk", "Lighting", "Environment", "Volumetrics"],
    highlights: [
      "Volumetric mist and neon light emission bleeding",
      "Rain puddle PBR roughness mapping and screen-space reflections",
      "Modular architectural kitbashing for city skyline",
      "Cinematic color grading with cool blues and vibrant magentas",
    ],
  },
  {
    title: "Bullet Train Cinematic Animation",
    shortDescription:
      "High-speed shinkansen train animation passing futuristic rail infrastructure.",
    description:
      "A 3D bullet train cinematic animation made in Blender, focusing on realistic materials, dynamic lighting, and smooth motion to create a modern tech-style showcase.",
    image: "/projects/project-9.png",
    video: "/videos/Bullet.mp4",
    github: "https://github.com/MIHIR-1304/-blender-3D-creative-works",
    link: "https://github.com/MIHIR-1304/-blender-3D-creative-works",
    category: "Interior Design",
    subcategory: "Cinematic Motion",
    tags: ["Blender", "Motion Blur", "Cinematic", "Environment", "Camera Rig"],
    highlights: [
      "Curve-based train tracking with realistic suspension sway",
      "Subtle optical camera shake and speed blur simulation",
      "Overhead gantry and rail ballast procedural scattering",
      "Sunset golden hour atmospheric lighting",
    ],
  },
  {
    title: "Anime Aesthetic Scene",
    shortDescription:
      "Stylized cel-shaded Japanese interior room scene with warm natural lighting.",
    description:
      "A 3D anime scene made in Blender, focusing on realistic materials, dynamic lighting, and smooth motion to create a modern tech-style showcase.",
    image: "/projects/project-6.png",
    video: "/videos/Anime.mp4",
    github: "https://github.com/MIHIR-1304/-blender-3D-creative-works",
    link: "https://github.com/MIHIR-1304/-blender-3D-creative-works",
    category: "Interior Design",
    subcategory: "Stylized & Anime",
    tags: ["Blender", "Cel Shading", "Stylized 3D", "Interior & Lighting"],
    highlights: [
      "Custom NPR (non-photorealistic) toon outline shader nodes",
      "Cozy room prop dressing (desk, tatami, window breeze)",
      "Volumetric sunbeams with dust particle motes",
      "Makoto Shinkai-inspired vibrant color palette",
    ],
  },
  {
    title: "Horror Cinematic",
    shortDescription:
      "Eerie atmospheric horror hallway with flickering lighting and spatial audio cues.",
    description:
      "A 3D horror cinematic animation made in Blender, focusing on realistic materials, dynamic lighting, and smooth motion to create a modern tech-style showcase.",
    image: "/projects/project-10.png",
    video: "/videos/Horror.mp4",
    github: "https://github.com/MIHIR-1304/-blender-3D-creative-works",
    link: "https://github.com/MIHIR-1304/-blender-3D-creative-works",
    category: "Interior Design",
    subcategory: "Atmospheric Scenes",
    tags: ["Blender", "Atmospheric", "Volumetrics", "Environment"],
    highlights: [
      "Stochastic fluorescent light flickering drivers",
      "Distressed peeling wallpaper and grime decal projections",
      "Heavy shadow falloff and claustrophobic framing",
      "Tense pacing with slow, deliberate camera dolly",
    ],
  },
  {
    title: "Night Soul Cinematic Scene",
    shortDescription:
      "Spiritual floating spirit scene with mystical particle emissions in deep woods.",
    description:
      "A 3D night soul cinematic scene made in Blender, focusing on realistic materials, dynamic lighting, and smooth motion to create a modern tech-style showcase.",
    image: "/projects/project-11.png",
    video: "/videos/soul.mp4",
    github: "https://github.com/MIHIR-1304/-blender-3D-creative-works",
    link: "https://github.com/MIHIR-1304/-blender-3D-creative-works",
    category: "Interior Design",
    subcategory: "Atmospheric Scenes",
    tags: ["Blender", "VFX Particles", "Lighting", "Environment"],
    highlights: [
      "BPS simulation of floating ethereal soul orbs",
      "Bioluminescent fungi and moonlit foliage",
      "Dynamic wind turbulence affecting grass strands",
      "Dark fantasy mood composition",
    ],
  },

  // Game Assets: 3D Models & Interactive GLTF
  {
    title: "Interactive Rubix Cube",
    shortDescription:
      "Real-time 3D interactive Rubik's Cube with orbital controls and PBR textures.",
    description:
      "A 3D interactive rubix cube made in Blender, focusing on realistic materials, dynamic lighting, and smooth motion to create a modern tech-style showcase.",
    image: "/projects/project-13.png",
    model: "/models/rubix.glb",
    github: "https://github.com/MIHIR-1304/-blender-3D-creative-works",
    link: "https://github.com/MIHIR-1304/-blender-3D-creative-works",
    category: "Game Assets",
    subcategory: "Interactive Props",
    tags: ["Blender", "Interactive 3D", "Game Asset", "GLTF", "Three.js"],
    highlights: [
      "Interactive 3D OrbitControls directly in the browser",
      "GLTF embedded PBR textures with metallic roughness",
      "Subdivision surface beveling for realistic chamfered edges",
      "Optimized polygon count for 60fps web rendering",
    ],
  },
  {
    title: "Sci-Fi Pokeball",
    shortDescription:
      "High-poly Pokéball with metallic paint shader and emissive center ring.",
    description:
      "A 3D pokeball model made in Blender, focusing on realistic materials, dynamic lighting, and smooth motion to create a modern tech-style showcase.",
    image: "/projects/project-14.png",
    model: "/models/pokeball.glb",
    github: "https://github.com/MIHIR-1304/-blender-3D-creative-works",
    link: "https://github.com/MIHIR-1304/-blender-3D-creative-works",
    category: "Game Assets",
    subcategory: "Sci-Fi PBR Models",
    tags: ["Blender", "3D Model", "PBR Texture", "GLTF", "Realtime Asset"],
    highlights: [
      "Multi-material PBR texture set (glossy red, white, anodized ring)",
      "Emissive core LED ring with bloom simulation",
      "Optimized GLTF/GLB web asset pipeline",
      "Interactive 360-degree rotation view",
    ],
  },
  {
    title: "Skeleton Hand Anatomy",
    shortDescription:
      "Medically accurate digital sculpt of human hand skeletal structure.",
    description:
      "A 3D skeleton hand anatomy model made in Blender, focusing on realistic materials, dynamic lighting, and smooth motion to create a modern tech-style showcase.",
    image: "/projects/project-15.png",
    model: "/models/skeleton.glb",
    github: "https://github.com/MIHIR-1304/-blender-3D-creative-works",
    link: "https://github.com/MIHIR-1304/-blender-3D-creative-works",
    category: "Game Assets",
    subcategory: "Anatomical Sculpting",
    tags: ["Blender", "Sculpting", "Anatomy", "GLTF", "Subdivision"],
    highlights: [
      "Anatomically correct carpals, metacarpals, and phalanges",
      "High-res multiresolution digital sculpting in Blender",
      "Subsurface bone mineral shader with organic roughness",
      "Bake down to low-poly game mesh with normal maps",
    ],
  },

  // SQL Projects
  {
    title: "Comprehensive Hospital DBMS & Analytics Schema",
    shortDescription:
      "3NF relational hospital database schema with triggers, stored routines & analytics.",
    description:
      "Production-ready relational database architecture normalized to 3NF, featuring stored procedures, cascading triggers, role security, and index optimization for healthcare management.",
    image: "/projects/sql-hospital.svg",
    github: "https://github.com/MIHIR-1304",
    link: "https://github.com/MIHIR-1304",
    category: "SQL Projects",
    subcategory: "Hospital DBMS (3NF)",
    tags: ["SQL", "MySQL", "3NF Normalization", "Stored Procedures", "Triggers"],
    highlights: [
      "Third Normal Form (3NF) zero-redundancy schema design",
      "Stored procedures for atomic patient check-in & billing",
      "Cascading triggers updating bed availability in real-time",
      "B-tree index optimization on patient medical histories",
    ],
  },
  {
    title: "E-Commerce High-Volume Data Analytics Engine",
    shortDescription:
      "Advanced analytical SQL query pipeline leveraging window functions & partition optimization.",
    description:
      "Advanced analytical SQL queries utilizing window functions, subquery partitioning, composite indexing, and execution plan optimization for high transaction volume retail environments.",
    image: "/projects/sql-ecommerce.svg",
    github: "https://github.com/MIHIR-1304",
    link: "https://github.com/MIHIR-1304",
    category: "SQL Projects",
    subcategory: "E-Commerce Analytics",
    tags: ["SQL", "Query Optimization", "Window Functions", "Analytics", "PostgreSQL"],
    highlights: [
      "Complex window functions (RANK, DENSE_RANK, NTILE, LAG/LEAD)",
      "Customer lifetime value (CLV) & cohort retention queries",
      "EXPLAIN ANALYZE index scan tuning reducing query time by 80%",
      "Partitioning strategy across monthly transaction tables",
    ],
  },
  {
    title: "Automated Inventory & Sales Reporting Database",
    shortDescription:
      "Relational schema with materialized views, audit trails & automated business KPI rollups.",
    description:
      "Relational database schema with materialized views, audit trails, periodic aggregation routines, and automated business KPI generation for supply chain reporting.",
    image: "/projects/sql-inventory.svg",
    github: "https://github.com/MIHIR-1304",
    link: "https://github.com/MIHIR-1304",
    category: "SQL Projects",
    subcategory: "Materialized Views & Auditing",
    tags: ["SQL", "Relational Schema", "Materialized Views", "Audit Logs", "MySQL"],
    highlights: [
      "Complete audit logging via trigger execution",
      "Automated daily and weekly sales KPI rollups",
      "Referential integrity constraints guarding stock movement",
      "Warehouse tracking schemas with multi-location support",
    ],
  },

  // Graphic Design
  {
    title: "Futuristic Space & Brand Identity Suite",
    shortDescription:
      "Complete brand design system featuring futuristic vector logos and dark-space visual design.",
    description:
      "Complete brand design system featuring futuristic vector logos, bespoke typography guides, and dark-space visual design elements crafted in Photoshop & Canva.",
    image: "/projects/graphic-brand.svg",
    liveLink: "https://mihir-1304.github.io/3d-Portfolio/Website",
    github: "https://github.com/MIHIR-1304",
    link: "https://mihir-1304.github.io/3d-Portfolio/Website",
    category: "Graphic Design",
    subcategory: "Space Brand Identity",
    tags: ["Photoshop", "Canva", "Brand Identity", "Vector Design"],
    highlights: [
      "Custom vector logomarks and galactic branding symbols",
      "Typography pairing guides and color palettes",
      "Social media banner templates and vector assets",
      "Dark mode UI aesthetic guidelines",
    ],
  },
  {
    title: "Sci-Fi Game UI / HUD Concept System",
    shortDescription:
      "Interactive cyberpunk HUD layout, tactical minimap designs and modular game interface assets.",
    description:
      "Interactive cyberpunk HUD layout, tactical minimap designs, energy bar gauges, and modular game interface assets created for immersive 3D titles.",
    image: "/projects/graphic-hud.svg",
    liveLink: "https://mihir-1304.github.io/3d-Portfolio/Website",
    github: "https://github.com/MIHIR-1304",
    link: "https://mihir-1304.github.io/3d-Portfolio/Website",
    category: "Graphic Design",
    subcategory: "Sci-Fi UI / HUD Concepts",
    tags: ["UI/UX", "Photoshop", "Game HUD", "Concept Art"],
    highlights: [
      "Futuristic tactical radar and minimap layouts",
      "Energy shield gauges and weapon telemetry widgets",
      "Modular design system ready for Unity & Unreal Engine integration",
      "High-contrast cyberpunk color schemes",
    ],
  },
  {
    title: "3D Motion Graphics & Digital Promotional Posters",
    shortDescription:
      "Creative advertising posters combining 3D product renders and high-impact color grading.",
    description:
      "Creative advertising posters and digital social media campaigns combining 3D product renders, dynamic typography, and high-impact color grading.",
    image: "/projects/graphic-poster.svg",
    liveLink: "https://mihir-1304.github.io/3d-Portfolio/Website",
    github: "https://github.com/MIHIR-1304",
    link: "https://mihir-1304.github.io/3d-Portfolio/Website",
    category: "Graphic Design",
    subcategory: "3D Motion Graphics Posters",
    tags: ["Photoshop", "After Effects", "Motion Design", "Visual Arts"],
    highlights: [
      "Composite artwork combining 3D Blender renders with 2D graphics",
      "Cinematic color grading and typography layout",
      "Marketing posters optimized for digital campaigns",
      "High resolution print & web export variations",
    ],
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
