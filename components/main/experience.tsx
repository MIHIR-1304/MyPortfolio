import { ExperienceCard } from "@/components/sub/experience-card";
import { EXPERIENCES } from "@/constants";

export const Experience = () => {
  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center py-20 px-10 w-full"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        My Experience & Internships
      </h1>
      <div className="h-full w-full max-w-[1250px] flex flex-col gap-10">
        {EXPERIENCES.map((exp, index) => (
          <ExperienceCard
            key={index}
            role={exp.role}
            company={exp.company}
            duration={exp.duration}
            project={exp.project}
            description={exp.description}
            certificate={exp.certificate}
            projectImage={(exp as any).projectImage}
            projectVideo={(exp as any).projectVideo}
            projectLink={(exp as any).projectLink}
          />
        ))}
      </div>
    </section>
  );
};
