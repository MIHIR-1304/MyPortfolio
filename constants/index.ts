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

export const PROJECTS = [
  {
    title: "TataNav: 3D Locator and Navigator Interface",
    description:
      'Developed 3D plant navigation system with real-time employee tracking. Automated pathfinding and visualization using Python–Blender integration. Delivered multi-platform interactive web interface.',
    image: "/projects/project-1-new.png",
    video: "/videos/tatanav.mp4",
    link: "https://mihir-1304.github.io/3d-Portfolio/Website",
  },
  {
    title: "NOBoT– AI Integrated Spider Quadrobot",
    description:
      'Built AI-driven quadrobot for hazardous terrain navigation and rescue scenarios. Implemented real-time edge AI object detection and sensor fusion system. Enabled live control, video, and telemetry monitoring using Python, Raspberry Pi, Arduino.',
    image: "/projects/project-2.jpg",
    link: "https://mihir-1304.github.io/3d-Portfolio/Website",
  },
  {
    title: "3D Portfolio Website",
    description:
      'Designed a fully responsive 3D portfolio website showcasing projects and models. Integrated interactive 3D animations using Spline 3D. Implemented smooth transitions and dynamic UI with HTML, CSS, and JavaScript.',
    image: "/projects/project-3.png",
    link: "https://mihir-1304.github.io/3d-Portfolio/Website",
  },
  {
    title: "Iphone 12 product animation",
    description: "A 3D product animation of the iPhone 12 made in Blender, focusing on realistic materials, dynamic lighting, and smooth motion to create a modern tech-style showcase.",
    image: "/projects/project-4.png",
    video: "/videos/iphone-12-product-animation.mp4",
    link: "https://github.com/mihir-1304",
  },
  {
    title: "Nivia Product animation",
    description: "A 3D product animation of the Nivia product made in Blender, focusing on realistic materials, dynamic lighting, and smooth motion to create a modern tech-style showcase.",
    image: "/projects/project-5.png",
    video: "/videos/Nivea.mp4",
    link: "https://github.com/mihir-1304",
  },
  {
    title: "Anime scene",
    description: "A 3D anime scene made in Blender, focusing on realistic materials, dynamic lighting, and smooth motion to create a modern tech-style showcase.",
    image: "/projects/project-6.png",
    video: "/videos/Anime.mp4",
    link: "https://github.com/mihir-1304",
  },
  {
    title: "Cinematic Night City Scene",
    description: "A 3D cinematic night city scene made in Blender, focusing on realistic materials, dynamic lighting, and smooth motion to create a modern tech-style showcase.",
    image: "/projects/project-7.png",
    video: "/videos/Cinematic.mp4",
    link: "https://github.com/mihir-1304",
  },
  {
    title: "Airpods Animation",
    description: "A 3D airpods animation made in Blender, focusing on realistic materials, dynamic lighting, and smooth motion to create a modern tech-style showcase.",
    image: "/projects/project-8.png",
    video: "/videos/Airpods.mp4",
    link: "https://github.com/mihir-1304",
  },
  {
    title: "Bullet Train Cinematic Animation",
    description: "A 3D bullet train cinematic animation made in Blender, focusing on realistic materials, dynamic lighting, and smooth motion to create a modern tech-style showcase.",
    image: "/projects/project-9.png",
    video: "/videos/Bullet.mp4",
    link: "https://github.com/mihir-1304",
  },
  {
    title: "Horror Cinematic",
    description: "A 3D horror cinematic animation made in Blender, focusing on realistic materials, dynamic lighting, and smooth motion to create a modern tech-style showcase.",
    image: "/projects/project-10.png",
    video: "/videos/Horror.mp4",
    link: "https://github.com/mihir-1304",
  },
  {
    title: " Night Soul Cinematic Scene",
    description: "A 3D night soul cinematic scene made in Blender, focusing on realistic materials, dynamic lighting, and smooth motion to create a modern tech-style showcase.",
    image: "/projects/project-11.png",
    video: "/videos/soul.mp4",
    link: "https://github.com/mihir-1304",
  },
  {
    title: "Spectacles Ad",
    description: "A 3D spectacles ad made in Blender, focusing on realistic materials, dynamic lighting, and smooth motion to create a modern tech-style showcase.",
    image: "/projects/project-12.png",
    video: "/videos/Specs.mp4",
    link: "https://github.com/mihir-1304",
  },
  {
    title: "Rubix Cube",
    description: "A 3D rubix cube made in Blender, focusing on realistic materials, dynamic lighting, and smooth motion to create a modern tech-style showcase.",
    image: "/projects/project-13.png",
    model: "/models/rubix.glb", // <-- REPLACE THIS with your own .glb file!
    link: "https://github.com/mihir-1304",
  },
  {
    title: "Pokeball",
    description: "A 3D pokeball made in Blender, focusing on realistic materials, dynamic lighting, and smooth motion to create a modern tech-style showcase.",
    image: "/projects/project-14.png",
    model: "/models/pokeball.glb",
    link: "https://github.com/mihir-1304",
  },
  {
    title: "Skeleton hand",
    description: "A 3D skeleton hand made in Blender, focusing on realistic materials, dynamic lighting, and smooth motion to create a modern tech-style showcase.",
    image: "/projects/project-15.png",
    model: "/models/skeleton.glb",
    link: "https://github.com/mihir-1304",
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
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
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
