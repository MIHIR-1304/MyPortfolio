"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

import { IconType } from "react-icons";

type SkillDataProviderProps = {
  src?: string;
  Icon?: IconType;
  color?: string;
  name: string;
  width: number;
  height: number;
  index: number;
};

export const SkillDataProvider = ({
  src,
  Icon,
  color,
  name,
  width,
  height,
  index,
}: SkillDataProviderProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.1;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
      className="flex flex-col items-center justify-center gap-2"
    >
      {Icon ? (
        <Icon size={width} color={color || "#ffffff"} title={name} />
      ) : src ? (
        <Image src={`/skills/${src}`} width={width} height={height} alt={name} />
      ) : null}
    </motion.div>
  );
};
