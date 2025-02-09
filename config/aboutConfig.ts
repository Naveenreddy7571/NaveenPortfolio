export interface AboutContent {
  title: string;
  imageSrc: string;
  imageAlt: string;
  paragraphs: string[];
}

export const aboutConfig: AboutContent = {
  title: "About Me",
  imageSrc: "/aboutSection/about.svg", 
  imageAlt: "About Me Illustration",
  paragraphs: [
    `I'm a passionate full-stack developer skilled in JavaScript, TypeScript, React.js, and Node.js. I love building scalable, high-performance applications with seamless user experiences.`,

    `With expertise in Java, Spring Boot, MySQL, and MongoDB, I develop robust backends while ensuring efficient data management. My workflow includes Git, GitHub, and Tailwind CSS for clean and responsive designs.`,

    `Always eager to learn and innovate, I thrive in solving complex problems and optimizing performance. Let's create something amazing!`,
  ],
};
