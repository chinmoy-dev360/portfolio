const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Years of Experience" },
  { value: 6, suffix: "+", label: "Satisfied Clients" },
  { value: 12, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Chinmoy with strong logical thinking and problem-solving skills, significantly improving frontend performance for our clients. His work has been invaluable in delivering faster and more efficient user experiences",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Frontend Developer",
    date: "January 2023 - Present",
    responsibilities: [
      "Developed and maintained user-facing features for the client website using React, TypeScript, and Tailwind CSS.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
    ],
  },
  {
    review: "Chinmoy’s contributions to OSB and Lloyds have been outstanding. He possesses exceptional skills in logical reasoning and system design, having solved numerous complex problems and delivered high-quality, reliable solutions",
    imgPath: "/images/ps2.jpg",
    logoPath: "/images/ps.png",
    title: "Backend Developer",
    date: "July 2023 - Present",
    responsibilities: [
      "Working across a distributed system involving over 10 microservices using Spring Boot, Azure, MySQL, OOP, Kafka, Redis, Twilio, and GraphQL. Achieved 85%+ unit test coverage, ensuring high reliability and performance.",
      "Collaborated closely with the Accounts team as a Senior Developer in the Savings Journey, achieving a 90%+ client success rate. Resolved several complex design issues and critical production bugs",
      "Contributed to the Loan Payment Module, implementing Zero Trust security policies and fault-tolerant architecture. Applied multiple design patterns and followed best coding practices to ensure scalability and maintainability",
      "Developed components for the Client Dashboard including features for distributed tracing, centralized logging, monitoring, database indexing, batch job orchestration, and webhook event creation for real-time integrations.",
    ],
  },
  {
    review: "Chinmoy’s work on client’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "React Native Developer",
    date: "January 2023 - Present",
    responsibilities: [
      "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
      "Improved app performance and user experience through code optimization and testing.",
      "Coordinated with the product team to implement features based on feedback.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Bhushan Rade",
    designation: "Sr Platform Engineer",
    mentions: "@bhushanrade",
    review:
      "Chinmoy is skilled in both feature development and defect resolution, consistently finding the root cause and providing effective solutions. He is knowledgeable and continuously learns new technologies",
    imgPath: "/images/bhushan.jpg",
  },
  {
    name: "Joseph Mohanti",
    designation: "Agile Manager",
    mentions: "@josephmohanti",
    review:
      "Chinmoy played a crucial role in ensuring the project's success by taking initiative, effectively managing their tasks, and collaborating seamlessly with team members. Their ability to anticipate potential challenges and proactively address them significantly contributed to our ability to meet tight deadlines and deliver outstanding results.",
    imgPath: "/images/joseph.jpg",
  },
  {
    name: "Edwin Lawrance",
    designation: "Sr Manager",
    mentions: "@edwinlawrance",
    review:
      "BIG SHOUT OUT to CHINMOY for swiftly thinking on his feet and resolving the design issue for migrated accounts in no time!",
    imgPath: "/images/edwin.jpg",
  },
  {
    name: "Rajakumar Rajendran",
    designation: "Manager in Technology",
    mentions: "@rajakumarrajendran",
    review:
      "Chinmoy is outstanding when it comes to development. He has quickly adopted a wide range of skills and implemented them effectively despite having minimal experience. The way he works reflects the maturity of a senior engineer. He is a valuable asset to the company and holds tremendous potential to achieve great things in his career.",
    imgPath: "/images/rajakumar.png",
  },
  {
    name: "Angshuman Sarma",
    designation: "Sr Engineer",
    mentions: "@angshumansarma",
    review:
      "Chinmoy's multitasking ability is unlike anything I have seen. He always keep tabs on new technologies while also ensuring that he doesn't get too swayed away from his current work , a key component of a good developer",
    imgPath: "/images/angshuman.jpg",
  },
  {
    name: "Bishwaraj Paul",
    designation: "Sr Engineer",
    mentions: "@bishwarajpaul",
    review:
      "Chinmoy is an outstanding backend developer and problem solver. We studied together during our B.Tech and have worked on multiple projects over the last couple of years. Wishing him a great future ahead!",
    imgPath: "/images/bishwaraj.jpg",
  },
];

const socialImgs = [
  {
    name: "insta",
    url : "https://www.google.com/",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    url : "https://www.google.com/",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    url : "https://www.google.com/",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/chinmoy-talukdar-sde/",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
