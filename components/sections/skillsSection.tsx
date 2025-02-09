import React from "react";
import { skillsConfig } from "../../config/skillsConfig";

const categorizedSkills = {
  "Programming Languages": ["Java", "Python", "JavaScript"],
  "Frontend Development": ["HTML", "CSS", "Tailwind CSS", "ReactJS"],
  "Backend Development": ["Node.js", "Express.js", "Spring", "Spring Boot"],
  "Tools & Databases": ["MySQL", "MongoDB", "Git", "GitHub"],
};

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="md:py-15 scroll-mt-navbar-height bg-primary-white px-4 py-10 pt-navbar-height md:px-20"
    >
      <div className="mx-auto max-w-screen-xl px-4 py-8">
        {/* Section Title */}
        <div className="mb-4 text-center md:mb-8">
          <h1 className="text-display-medium font-regular text-primary-black dark:text-primary-white">
            My <span className="font-extrabold">Skills</span>
          </h1>
        </div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {Object.entries(categorizedSkills).map(([category, skills]) => (
            <div
              key={category}
              className="rounded-lg border-2 border-primary-black p-6 shadow-lg transition-transform duration-300 ease-in-out  hover:text-primary-black"
            >
              <h2 className="mb-4 text-center text-xl font-bold">{category}</h2>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                {skills.map((skill) => {
                  const skillData = skillsConfig.find((s) => s.label === skill);
                  if (!skillData) return null;
                  const IconComponent = skillData.icon;

                  return (
                    <div
                      key={skill}
                      className="group flex flex-col items-center justify-center rounded-md border-2 border-primary-black p-4 transition-transform duration-300 ease-in-out hover:bg-primary-black hover:text-primary-white hover:shadow-lg"
                    >
                      <div className="mb-2 text-3xl text-current transition-transform duration-300 group-hover:scale-125">
                        <IconComponent aria-hidden="true" />
                      </div>
                      <span className="text-sm font-semibold">{skill}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
