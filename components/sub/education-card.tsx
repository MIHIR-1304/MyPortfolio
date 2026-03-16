'use client';
import { motion } from "framer-motion";

type EducationCardProps = {
  degree: string;
  institution: string;
  duration: string;
  score: string;
  description: string;
  index: number;
};

export const EducationCard = ({
  degree,
  institution,
  duration,
  score,
  description,
  index,
}: EducationCardProps) => {
  return (
    <div className="relative flex items-stretch md:w-1/2 w-full group">
      {/* Timeline Dot (Visible only on Desktop for alternating design) */}
      <div className="hidden md:absolute right-[-45px] top-[40px] z-10 w-9 h-9 bg-[#0a0520] border-4 border-purple-500 rounded-full items-center justify-center -translate-y-1/2 group-[.is-left]:flex group-[.is-right]:right-auto group-[.is-right]:left-[-45px]" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="w-full relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] bg-[#03001427] hover:bg-[#03001450] transition-colors p-6 ml-6 md:ml-0 md:group-[.is-right]:ml-16 md:group-[.is-left]:mr-16"
      >
        <div className="flex flex-col gap-2 relative z-20">
          <div className="flex justify-between items-start flex-wrap gap-2 text-gray-300">
            <span className="text-sm font-light px-3 py-1 border border-cyan-500/30 text-cyan-400 rounded-full">
              {duration}
            </span>
            <span className="text-sm font-bold bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-3 py-1 rounded-full shadow-lg">
              {score}
            </span>
          </div>
          
          <h2 className="text-2xl font-bold text-white mt-3">
            {degree}
          </h2>
          <h3 className="text-lg font-semibold text-purple-400">
            {institution}
          </h3>
          
          <p className="text-gray-400 leading-relaxed text-sm md:text-base mt-2">
            {description}
          </p>
        </div>
      </motion.div>
    </div>
  );
};
