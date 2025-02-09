import React from "react";

interface Education {
  id: number;
  institution: string;
  degree: string;
  score: string;
  duration: string;
}

const educationData: Education[] = [
  {
    id: 1,
    institution: "Parul University",
    degree: "B-Tech in Computer Science",
    score: "CGPA: 8.65 / 10",
    duration: "2021 - 2025",
  },
  {
    id: 2,
    institution: "Narayana Junior College",
    degree: "Class XII",
    score: "Percentage: 98%",
    duration: "2019 - 2021",
  },
  {
    id: 3,
    institution: "Oxford EM High School",
    degree: "Class X",
    score: "CGPA: 10 / 10",
    duration: "2019",
  },
];

const EducationSection: React.FC = () => {
  return (
    <section id="education" className="bg-primary-white px-4 py-10 md:px-20">
      <div className="mx-auto max-w-screen-xl px-4 py-8">
        {/* Section Title */}
        <div className="mb-4 text-center md:mb-8">
          <h1 className="text-display-medium font-regular text-primary-black dark:text-primary-white">
            My <span className="font-extrabold">Education</span>
          </h1>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className="group flex flex-col items-center justify-center rounded-lg border-2 border-primary-black p-6 shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:bg-primary-black hover:text-primary-white"
            >
              <h2 className="text-xl font-semibold">{edu.institution}</h2>
              <p className="text-md mt-2 font-medium">{edu.degree}</p>
              <p className="text-sm mt-1">{edu.score}</p>
              <p className="text-sm mt-1 text-gray-600 dark:text-gray-400">
                {edu.duration}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
