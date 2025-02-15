export interface Project {
  id: number;
  number: string;
  title: string;
  description: string;
  imageLight: string;
  imageDark: string;
  reverse?: boolean;
  link?: string;
}

export const projectsConfig: Project[] = [
  {
    id: 1,
    number: "01",
    title: "Groot",
    description: `Developed "Groot," a custom version control system designed to help understand the internal workings of Git. Implemented core functionalities such as adding files to a staging area, committing changes, viewing commit history (Groot log), and comparing commits (Groot diff). Built using JavaScript and Node.js, ensuring a user-friendly CLI for seamless version tracking. Published as an NPM package (groot-vcs), making it accessible for global installation and usage. This project enhanced knowledge of Git internals, improving overall proficiency in version control systems.`,
    imageLight: "/projectSection/project1.jpg",
    imageDark: "/projectSection/project1.png",
    reverse: false,
    link: "https://www.npmjs.com/package/groot-vcs",
  },
  {
    id: 2,
    number: "02",
    title: "AgriConnect",
    description: `AgriConnect is a transformative platform that enables direct transactions between farmers and consumers, eliminating middlemen to ensure fair pricing and increased farmer profits. The platform provides a seamless user experience, allowing farmers to list their products and consumers to purchase fresh produce at competitive prices. 
    Technologies: React.js, Spring Boot, MySQL.`,
    imageLight: "/projectSection/agriconnect.png",
    imageDark: "/projectSection/project2.png",
    reverse: true,
    link: "https://github.com/Naveenreddy7571/agriBackEndWorking",
  },

  {
    id: 3,
    number: "03",
    title: "Second Brain",
    description: `Second Brain" is an AI-powered application designed to revolutionize research, planning, and productivity. It allows users to seamlessly integrate and interact with various content types—such as books, PDFs, videos, and websites—providing precise, actionable insights tailored to individual needs. With features like Memory and a Chrome Extension, users can effortlessly save and organize information, making complex tasks more manageable and efficient.`,
    imageLight: "/projectSection/secondbrain.png",
    imageDark: "/projectSection/secondbrain.png",
    reverse: false,
    link: "https://github.com/Naveenreddy7571/Second-Brain",
  },
];
