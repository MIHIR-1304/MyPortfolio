'use client';
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, MouseEvent } from "react";
import { FaPlay, FaCube } from "react-icons/fa";
import { ModelViewer } from "./model-viewer";

type ProjectCardProps = {
  src: string;
  video?: string;
  model?: string;
  title: string;
  description: string;
  link: string;
};

export const ProjectCard = ({
  src,
  video,
  model,
  title,
  description,
  link,
}: ProjectCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isViewingModel, setIsViewingModel] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMediaClick = (e: MouseEvent) => {
    if (model) {
        e.preventDefault(); 
        setIsViewingModel(true);
    } else if (video) {
        e.preventDefault(); // Prevent navigating to the link immediately
        setIsPlaying(true);
    }
  };

  return (
    <>
      <Link
        href={link}
        target="_blank"
        rel="noreferrer noopener"
        className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] group z-30"
        onClick={(e) => {
          if (isViewingModel) e.preventDefault(); // Don't follow link if watching 3D model
        }}
      >
        {video && isPlaying && !isViewingModel ? (
          <div onClick={(e) => e.preventDefault()}>
            <video
              ref={videoRef}
              src={video}
              autoPlay
              controls
              className="w-full object-contain h-auto"
            />
          </div>
        ) : (
          <div className="relative cursor-pointer" onClick={handleMediaClick}>
            <Image
              src={src}
              alt={title}
              width={1000}
              height={1000}
              className="w-full object-contain"
            />
            {/* Play button overlay that appears on hover if there's a video or model */}
            {(video || model) && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                 {model ? (
                   <div className="flex flex-col items-center">
                     <FaCube className="text-white text-5xl opacity-80" />
                     <span className="text-white mt-2 font-semibold">View 3D</span>
                   </div>
                 ) : (
                   <FaPlay className="text-white text-5xl opacity-80" />
                 )}
              </div>
            )}
          </div>
        )}

        <div className="relative p-4">
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
          <p className="mt-2 text-gray-300">{description}</p>
        </div>
      </Link>
      
      {/* 3D Viewer Modal */}
      {isViewingModel && model && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4">
          <div className="relative w-full h-[80vh] max-w-5xl bg-[#030014] rounded-lg border border-[#2A0E61] overflow-hidden">
            <button 
              className="absolute top-4 right-4 z-[200] text-white text-sm font-bold bg-red-500 hover:bg-red-600 px-4 py-2 rounded-full cursor-pointer transition-colors"
              onClick={() => setIsViewingModel(false)}
            >
              Close 3D View
            </button>
            <ModelViewer url={model} />
          </div>
        </div>
      )}
    </>
  );
};
