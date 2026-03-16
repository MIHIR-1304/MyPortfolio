'use client';
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, MouseEvent } from "react";
import { FaPlay, FaExternalLinkAlt, FaCertificate } from "react-icons/fa";

type ExperienceCardProps = {
  role: string;
  company: string;
  duration: string;
  project: string;
  description: string;
  certificate: string;
  projectImage: string;
  projectVideo?: string;
  projectLink?: string;
};

export const ExperienceCard = ({
  role,
  company,
  duration,
  project,
  description,
  certificate,
  projectImage,
  projectVideo,
  projectLink,
}: ExperienceCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMediaClick = (e: MouseEvent) => {
    if (projectVideo) {
        e.preventDefault(); 
        setIsPlaying(true);
    } else if (projectLink) {
        // Let it naturally navigate to link
    }
  };

  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] bg-[#03001427] p-6 lg:p-8 flex flex-col lg:flex-row gap-8 items-center lg:items-start group z-30">
      
      {/* Text Info */}
      <div className="flex-1 flex flex-col relative z-20">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-2">
          {role}
        </h2>
        <div className="flex justify-between items-center mb-4 flex-wrap gap-2 text-gray-300">
          <h3 className="text-xl font-semibold">{company}</h3>
          <span className="text-sm font-light px-3 py-1 border border-purple-500/30 rounded-full">
            {duration}
          </span>
        </div>
        
        <div className="mb-4">
          <h4 className="text-lg font-medium text-purple-400 mb-1">Project: {project}</h4>
          <p className="text-gray-400 leading-relaxed text-sm lg:text-base mb-6">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a
              href={certificate}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 bg-purple-600/20 hover:bg-purple-600/40 border border-purple-500/50 text-white px-4 py-2 rounded-lg transition-colors cursor-pointer text-sm font-medium"
            >
              <FaCertificate className="text-purple-400" />
              Open Certificate
            </a>
            
            {projectLink && (
              <a
                href={projectLink}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 bg-cyan-600/20 hover:bg-cyan-600/40 border border-cyan-500/50 text-white px-4 py-2 rounded-lg transition-colors cursor-pointer text-sm font-medium"
              >
                <FaExternalLinkAlt className="text-cyan-400" />
                View Project
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Project Image/Video thumbnail */}
      <Link 
        href={projectLink || "#"} 
        target={projectLink ? "_blank" : "_self"}
        rel="noreferrer noopener"
        className="w-full lg:w-[400px] relative rounded-lg border border-[#2A0E61] overflow-hidden shrink-0 block group/media"
        onClick={(e) => {
            if (!projectLink && !projectVideo) e.preventDefault();
        }}
      >
        {projectVideo && isPlaying ? (
          <div onClick={(e) => e.preventDefault()}>
            <video
              ref={videoRef}
              src={projectVideo}
              autoPlay
              controls
              className="w-full object-contain h-auto rounded-lg"
            />
          </div>
        ) : (
          <div className="relative cursor-pointer" onClick={handleMediaClick}>
            <Image
              src={projectImage}
              alt={`${project} Preview`}
              width={800}
              height={600}
              className="w-full object-cover transition-transform duration-500 group-hover/media:scale-105"
            />
            {/* Play button overlay that appears on hover if there's a video or link */}
            {(projectVideo || projectLink) && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover/media:opacity-100 transition-opacity">
                {projectVideo ? (
                  <FaPlay className="text-white text-5xl opacity-90 hover:scale-110 transition-transform" />
                ) : projectLink ? (
                  <FaExternalLinkAlt className="text-white text-4xl opacity-90 hover:scale-110 transition-transform" />
                ) : null}
              </div>
            )}
          </div>
        )}
      </Link>
    </div>
  );
};
