'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, MouseEvent } from "react";
import { FaPlay, FaCube, FaExternalLinkAlt } from "react-icons/fa";
import { RxGithubLogo, RxCross2 } from "react-icons/rx";
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

  const getCategoryStyles = (cat?: string) => {
    switch (cat) {
      case "Product Design":
        return {
          pill: "border-orange-500/40 text-orange-300 bg-orange-950/40",
          glow: "from-orange-500/20 via-amber-500/10 to-transparent",
          tagBorder: "group-hover:border-orange-500/30",
        };
      case "Web Development":
        return {
          pill: "border-cyan-500/40 text-cyan-300 bg-cyan-950/40",
          glow: "from-cyan-500/20 via-blue-500/10 to-transparent",
          tagBorder: "group-hover:border-cyan-500/30",
        };
      case "Interior Design":
        return {
          pill: "border-emerald-500/40 text-emerald-300 bg-emerald-950/40",
          glow: "from-emerald-500/20 via-teal-500/10 to-transparent",
          tagBorder: "group-hover:border-emerald-500/30",
        };
      case "Game Assets":
        return {
          pill: "border-purple-500/40 text-purple-300 bg-purple-950/40",
          glow: "from-purple-500/20 via-pink-500/10 to-transparent",
          tagBorder: "group-hover:border-purple-500/30",
        };
      case "Java Projects":
        return {
          pill: "border-amber-500/40 text-amber-300 bg-amber-950/40",
          glow: "from-amber-500/20 via-red-500/10 to-transparent",
          tagBorder: "group-hover:border-amber-500/30",
        };
      case "Backend Projects":
        return {
          pill: "border-teal-500/40 text-teal-300 bg-teal-950/40",
          glow: "from-teal-500/20 via-emerald-500/10 to-transparent",
          tagBorder: "group-hover:border-teal-500/30",
        };
      case "SQL Projects":
        return {
          pill: "border-blue-500/40 text-blue-300 bg-blue-950/40",
          glow: "from-blue-500/20 via-cyan-500/10 to-transparent",
          tagBorder: "group-hover:border-blue-500/30",
        };
      case "Graphic Design":
        return {
          pill: "border-pink-500/40 text-pink-300 bg-pink-950/40",
          glow: "from-pink-500/20 via-fuchsia-500/10 to-transparent",
          tagBorder: "group-hover:border-pink-500/30",
        };
      default:
        return {
          pill: "border-cyan-500/40 text-cyan-300 bg-cyan-950/40",
          glow: "from-cyan-500/20 via-purple-500/10 to-transparent",
          tagBorder: "group-hover:border-cyan-500/30",
        };
    }
  };

  const currentStyles = getCategoryStyles(category);

  return (
    <>
      {/* Modern Glassmorphic Project Card */}
      <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.12] bg-gradient-to-b from-white/[0.06] via-purple-950/15 to-[#08021a]/90 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.5),inset_0_1px_1px_0_rgba(255,255,255,0.1)] group hover:border-cyan-400/50 hover:shadow-[0_0_35px_rgba(6,182,212,0.22)] hover:-translate-y-1.5 transition-all duration-500 z-20">
        {/* Radial ambient glow in card background */}
        <div
          className={`absolute -top-20 -right-20 w-52 h-52 rounded-full bg-gradient-to-br ${currentStyles.glow} blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700 opacity-60 group-hover:opacity-100`}
        />

        {/* Shiny glass highlight streak on card corner */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.08] pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity" />

        <div className="relative z-10">
          {/* Card Media / Thumbnail Viewport */}
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/60 border-b border-white/[0.08] flex items-center justify-center">
            {video && isPlaying && !isViewingModel ? (
              <div className="relative w-full h-full bg-black flex items-center justify-center">
                <video
                  ref={videoRef}
                  src={video}
                  autoPlay
                  controls
                  className="w-full h-full object-contain"
                />
                <button
                  onClick={() => setIsPlaying(false)}
                  className="absolute top-3 right-3 p-1.5 rounded-full bg-black/70 hover:bg-red-600/80 text-white text-xs backdrop-blur-md transition-colors border border-white/20 z-20"
                  title="Close Video"
                >
                  <RxCross2 />
                </button>
              </div>
            ) : (
              <div
                className="relative w-full h-full cursor-pointer flex items-center justify-center group/thumb"
                onClick={handleMediaClick}
              >
                {/* Prominent High-Res Project Thumbnail */}
                <Image
                  src={src}
                  alt={title}
                  width={800}
                  height={500}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/thumb:scale-108"
                />

                {/* Subtle dark gradient overlay at bottom of thumbnail */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0528] via-black/20 to-transparent opacity-80 group-hover/thumb:opacity-60 transition-opacity" />

                {/* Floating Glass Pill: Category Badge (Top-Left) */}
                {category && (
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span
                      className={`px-2.5 py-1 rounded-full text-[11px] font-semibold backdrop-blur-md border shadow-lg ${currentStyles.pill}`}
                    >
                      {category}
                    </span>
                  </div>
                )}

                {/* Floating Media Badges (Top-Right) */}
                {model && !isPlaying && (
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/70 backdrop-blur-md border border-cyan-400/50 px-2.5 py-1 rounded-full text-[10px] font-bold text-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.3)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                    <FaCube className="text-cyan-400 text-xs" />
                    <span>3D GLTF</span>
                  </div>
                )}
                {video && !isPlaying && (
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/70 backdrop-blur-md border border-purple-400/50 px-2.5 py-1 rounded-full text-[10px] font-bold text-purple-300 shadow-[0_0_12px_rgba(168,85,247,0.3)]">
                    <FaPlay className="text-[9px] text-purple-400" />
                    <span>VIDEO</span>
                  </div>
                )}

                {/* Interactive Hover Prompt Overlay */}
                {(video || model) && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/55 backdrop-blur-[2px] opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-300">
                    {model ? (
                      <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-950/80 border border-cyan-400/60 shadow-[0_0_20px_rgba(6,182,212,0.4)] text-cyan-200 text-xs font-bold uppercase tracking-wider scale-95 group-hover/thumb:scale-100 transition-transform">
                        <FaCube className="text-cyan-400 text-sm animate-pulse" />
                        <span>Launch 3D Model</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-950/80 border border-purple-400/60 shadow-[0_0_20px_rgba(168,85,247,0.4)] text-purple-200 text-xs font-bold uppercase tracking-wider scale-95 group-hover/thumb:scale-100 transition-transform">
                        <FaPlay className="text-purple-400 text-xs" />
                        <span>Play Showcase</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Details Section */}
          <div className="p-5">
            {/* Subcategory Glass Chip */}
            {subcategory && (
              <div className="mb-2.5 flex items-center gap-1.5">
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-white/[0.06] border border-white/10 text-gray-300">
                  {subcategory}
                </span>
              </div>
            )}

            {/* Project Title */}
            <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:via-purple-300 group-hover:to-pink-300 transition-all duration-300 line-clamp-1">
              {title}
            </h3>

            {/* Description */}
            <p className="mt-2 text-xs md:text-sm text-gray-300/80 leading-relaxed line-clamp-3">
              {description}
            </p>

            {/* Tech Stack Glass Tags */}
            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-white/[0.08]">
                {tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] md:text-[11px] px-2.5 py-0.5 rounded-full bg-white/[0.04] text-purple-200/90 border border-purple-500/20 backdrop-blur-sm group-hover:border-purple-500/40 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Card Action Footer */}
        <div className="relative z-10 p-4 pt-0 flex items-center justify-between gap-2.5 border-t border-white/[0.08] mt-2">
          {model ? (
            <button
              onClick={() => setIsViewingModel(true)}
              className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-xs font-semibold shadow-[0_0_15px_rgba(6,182,212,0.25)] hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all cursor-pointer"
            >
              <FaCube className="text-xs" />
              <span>3D Interactive</span>
            </button>
          ) : video && !isPlaying ? (
            <button
              onClick={() => setIsPlaying(true)}
              className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-semibold shadow-[0_0_15px_rgba(147,51,234,0.25)] hover:shadow-[0_0_25px_rgba(147,51,234,0.4)] transition-all cursor-pointer"
            >
              <FaPlay className="text-[10px]" />
              <span>Watch Video</span>
            </button>
          ) : null}

          <Link
            href={link}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-purple-400/50 text-gray-200 hover:text-white text-xs font-semibold backdrop-blur-md transition-all"
          >
            <RxGithubLogo className="text-sm" />
            <span>Project</span>
            <FaExternalLinkAlt className="text-[9px] opacity-70" />
          </Link>
        </div>
      </div>

      {/* 3D Interactive Viewer Fullscreen Modal */}
      {isViewingModel && model && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-xl p-4">
          <div className="relative w-full h-[85vh] max-w-5xl bg-[#050114]/95 rounded-2xl border border-cyan-400/40 shadow-[0_0_60px_rgba(6,182,212,0.35)] overflow-hidden flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-[#0c0528]/80 backdrop-blur-md">
              <div className="flex items-center gap-2.5 text-cyan-300 font-bold text-sm md:text-base">
                <div className="p-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
                  <FaCube className="text-cyan-400 text-lg" />
                </div>
                <span>3D Interactive Viewer: {title}</span>
              </div>
              <button
                className="text-white text-xs font-semibold bg-red-500/80 hover:bg-red-500 px-3.5 py-1.5 rounded-full cursor-pointer transition-all border border-red-400 shadow-md flex items-center gap-1"
                onClick={() => setIsViewingModel(false)}
              >
                <span>Close</span>
                <RxCross2 className="text-sm" />
              </button>
            </div>

            {/* Model Canvas */}
            <div className="relative flex-1 w-full h-full bg-[#030010]">
              <ModelViewer url={model} />
            </div>

            {/* Modal Footer Controls Helper */}
            <div className="py-2.5 px-4 text-center text-xs text-gray-400 bg-[#0c0528]/90 border-t border-white/10 flex items-center justify-center gap-4">
              <span className="flex items-center gap-1 text-cyan-300">
                🖱️ Left Click + Drag: Rotate
              </span>
              <span className="hidden sm:inline text-purple-300">
                • Right Click: Pan
              </span>
              <span className="text-emerald-300">• Scroll: Zoom</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};