'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, MouseEvent } from "react";
import { FaPlay, FaCube, FaExternalLinkAlt } from "react-icons/fa";
import { RxGithubLogo } from "react-icons/rx";
import { ModelViewer } from "./model-viewer";

export type ProjectCardProps = {
  src: string;
  video?: string;
  model?: string;
  title: string;
  description: string;
  link: string;
  category?: string;
  subcategory?: string;
  tags?: readonly string[] | string[];
};

export const ProjectCard = ({
  src,
  video,
  model,
  title,
  description,
  link,
  category,
  subcategory,
  tags,
}: ProjectCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isViewingModel, setIsViewingModel] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMediaClick = (e: MouseEvent) => {
    if (model) {
      e.preventDefault();
      setIsViewingModel(true);
    } else if (video) {
      e.preventDefault();
      setIsPlaying(true);
    }
  };

  const getCategoryBadgeClass = (cat?: string) => {
    switch (cat) {
      case "Blender 3D":
        return "border-orange-500/40 text-orange-300 bg-orange-500/10";
      case "Java Projects":
        return "border-amber-500/40 text-amber-300 bg-amber-500/10";
      case "SQL Projects":
        return "border-cyan-500/40 text-cyan-300 bg-cyan-500/10";
      case "Backend Projects":
        return "border-emerald-500/40 text-emerald-300 bg-emerald-500/10";
      case "Graphic Design":
        return "border-pink-500/40 text-pink-300 bg-pink-500/10";
      case "AI & Robotics":
        return "border-purple-500/40 text-purple-300 bg-purple-500/10";
      default:
        return "border-cyan-500/40 text-cyan-300 bg-cyan-500/10";
    }
  };

  return (
    <>
      <div className="relative flex flex-col justify-between overflow-hidden rounded-xl shadow-lg border border-[#2A0E61] bg-[#070318]/80 backdrop-blur-md group hover:border-[#7042f890] transition-all duration-300 hover:shadow-[0_0_30px_rgba(112,66,248,0.25)] z-30">
        <div>
          {/* Header Bar with Category & Subcategory */}
          {(category || subcategory) && (
            <div className="flex flex-wrap items-center justify-between gap-2 p-3 border-b border-[#2A0E61]/60 bg-[#0d0726]/60 text-xs">
              {category && (
                <span
                  className={`px-2.5 py-0.5 rounded-full font-medium border ${getCategoryBadgeClass(
                    category
                  )}`}
                >
                  {category}
                </span>
              )}
              {subcategory && (
                <span className="text-gray-400 font-medium text-[11px] bg-white/5 px-2 py-0.5 rounded-md border border-white/10 truncate max-w-[200px]">
                  {subcategory}
                </span>
              )}
            </div>
          )}

          {/* Media Section */}
          <div className="relative aspect-video w-full overflow-hidden bg-black/40 flex items-center justify-center">
            {video && isPlaying && !isViewingModel ? (
              <video
                ref={videoRef}
                src={video}
                autoPlay
                controls
                className="w-full h-full object-contain"
              />
            ) : (
              <div
                className="relative w-full h-full cursor-pointer flex items-center justify-center group/media"
                onClick={handleMediaClick}
              >
                <Image
                  src={src}
                  alt={title}
                  width={800}
                  height={500}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover/media:scale-105"
                />

                {/* Overlay for Video / 3D Model */}
                {(video || model) && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {model ? (
                      <div className="flex flex-col items-center justify-center bg-black/70 px-4 py-2.5 rounded-xl border border-cyan-500/40 shadow-lg">
                        <FaCube className="text-cyan-400 text-3xl animate-pulse" />
                        <span className="text-cyan-200 mt-1.5 font-semibold text-xs tracking-wider uppercase">
                          Interact 3D
                        </span>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center bg-black/70 px-4 py-2.5 rounded-xl border border-purple-500/40 shadow-lg">
                        <FaPlay className="text-purple-400 text-2xl" />
                        <span className="text-purple-200 mt-1.5 font-semibold text-xs tracking-wider uppercase">
                          Play Preview
                        </span>
                      </div>
                    )}
                  </div>
                )}

                {/* Static badge indicator on top right */}
                {model && !isPlaying && (
                  <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 bg-black/70 border border-cyan-500/50 px-2 py-1 rounded-md text-[10px] font-semibold text-cyan-300">
                    <FaCube /> 3D MODEL
                  </div>
                )}
                {video && !isPlaying && (
                  <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 bg-black/70 border border-purple-500/50 px-2 py-1 rounded-md text-[10px] font-semibold text-purple-300">
                    <FaPlay className="text-[8px]" /> VIDEO
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Details Section */}
          <div className="p-5">
            <h2 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-colors line-clamp-1">
              {title}
            </h2>
            <p className="mt-2 text-sm text-gray-300/90 leading-relaxed line-clamp-3">
              {description}
            </p>

            {/* Tech Tags */}
            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-white/5">
                {tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] px-2 py-0.5 rounded bg-[#170e38] text-purple-200 border border-purple-500/20"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Card Action Footer */}
        <div className="p-4 pt-0 flex items-center justify-between gap-3 border-t border-[#2A0E61]/40 mt-2">
          {model ? (
            <button
              onClick={() => setIsViewingModel(true)}
              className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-xs font-semibold shadow-md shadow-cyan-900/20 transition-all cursor-pointer"
            >
              <FaCube className="text-sm" />
              <span>Launch 3D Model</span>
            </button>
          ) : video && !isPlaying ? (
            <button
              onClick={() => setIsPlaying(true)}
              className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-semibold shadow-md shadow-purple-900/20 transition-all cursor-pointer"
            >
              <FaPlay className="text-xs" />
              <span>Play Video</span>
            </button>
          ) : null}

          <Link
            href={link}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-[#7042f8]/60 hover:bg-[#7042f8]/20 text-gray-200 hover:text-white text-xs font-semibold transition-all"
          >
            <RxGithubLogo className="text-sm" />
            <span>Project</span>
            <FaExternalLinkAlt className="text-[10px] opacity-70" />
          </Link>
        </div>
      </div>

      {/* 3D Viewer Modal */}
      {isViewingModel && model && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md">
          <div className="relative w-full h-[85vh] max-w-5xl bg-[#030014] rounded-2xl border border-cyan-500/40 shadow-[0_0_50px_rgba(6,182,212,0.3)] overflow-hidden flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-[#2A0E61] bg-[#0c0628]">
              <div className="flex items-center gap-2 text-cyan-300 font-bold text-base">
                <FaCube className="text-xl" />
                <span>3D Interactive Viewer: {title}</span>
              </div>
              <button
                className="text-white text-xs font-bold bg-red-500/80 hover:bg-red-500 px-4 py-1.5 rounded-full cursor-pointer transition-all border border-red-400"
                onClick={() => setIsViewingModel(false)}
              >
                Close 3D View ✕
              </button>
            </div>
            <div className="relative flex-1 w-full h-full">
              <ModelViewer url={model} />
            </div>
            <div className="p-2 text-center text-xs text-gray-400 bg-[#0c0628]/80 border-t border-[#2A0E61]">
              Use mouse / touch to rotate, pan, and zoom the 3D model
            </div>
          </div>
        </div>
      )}
    </>
  );
};
