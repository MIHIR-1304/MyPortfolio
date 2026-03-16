import { EducationCard } from "@/components/sub/education-card";
import { EDUCATION } from "@/constants";

export const Education = () => {
  return (
    <section
      id="education"
      className="flex flex-col items-center justify-center py-20 px-4 md:px-10 w-full"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 mb-10">
        My Education
      </h1>
      
      <div className="relative w-full max-w-[1000px] flex flex-col gap-8 md:gap-0">
        {/* Main Vertical Timeline Line */}
        <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-purple-500 to-cyan-500 md:-translate-x-1/2 rounded-full hidden md:block" />

        {EDUCATION.map((edu, index) => {
          // Determine if it should map to left or right based on index for desktop view
          const isLeft = index % 2 === 0;
          
          return (
            <div 
              key={index} 
              className={`flex w-full ${isLeft ? 'md:justify-start' : 'md:justify-end'} relative md:-my-5`}
            >
              {/* Wrapper applies classes for the child card to anchor the dots properly */}
              <div className={`w-full md:w-1/2 group ${isLeft ? 'is-left' : 'is-right'}`}>
                <EducationCard
                  degree={edu.degree}
                  institution={edu.institution}
                  duration={edu.duration}
                  score={edu.score}
                  description={edu.description}
                  index={index}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
