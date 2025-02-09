export interface Experience {
  id: number;
  companyLogo: string;
  companyName: string;
  role: string;
  duration: string;
  description: string;
}

export const experienceConfig: Experience[] = [
  {
    id: 1,
    companyLogo: "/experienceSection/slash.webp",
    companyName: "Slash Mark",
    role: "MERN Full Stack Developer Intern",
    duration: "December 2024 – Present",
    description: `Working on developing a "Second Brain" application, a productivity tool designed to help users capture, organize, and retrieve knowledge efficiently. Building a robust MERN stack architecture with seamless frontend-backend integration. Implementing authentication, cloud storage, and real-time data synchronization to enhance user experience. Collaborating with the team to optimize database performance and ensure scalability.`,
  },
];

