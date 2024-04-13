import {
  mobile,
  backend,
  web,
  fullstack,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  github,
  figma,
  api,
  bootstrap,
  canva,
  express,
  filmora,
  photoshop,
  webdev,
  r_native,
  chatterBox,
  stepInStyle,
  flexForce,
  dishDelight,
  pinClone,
  devilDelicacy,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "tech",
    title: "Tech",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Fullstack Developer",
    icon: fullstack,
  },
];

const experiences = [
  {
    title: "Basic Web Development",
    company_name: "HTML, CSS, JavaScript",
    icon: webdev,
    iconBg: "#d9d0e0f7",
    date: "Phase 1",
    points: [
      "Introduction to Web Development: Begin with HTML, CSS, and JavaScript to understand the structure, style, and interactivity of web pages.",
      "uilding Static Websites: Focus on creating static web pages using HTML and CSS, learning layout and basic styling.",
      "Dynamic Web Development: Dive into JavaScript to add dynamic functionality to web pages, including DOM manipulation and event handling.",
      "Responsive Design: Understand responsive web design principles to ensure websites adapt well to different devices and screen sizes.",
    ],
  },
  {
    title: "Advanced Frontend Development",
    company_name: "React, Tailwind CSS, Redux",
    icon: reactjs,
    iconBg: "#786982f7",
    date: "Phase 2",
    points: [
      "Mastering React: Deepen understanding of React, learning about components, props, state, and lifecycle methods.",
      "Styling with Tailwind CSS: Explore Tailwind CSS for efficient and consistent styling of UI components.",
      "State Management with Redux: Learn Redux for managing application state in complex React applications.",
      "API Integration: Understand how to integrate APIs with React applications to fetch and display dynamic data.",
    ],
  },
  {
    title: "Full Stack Development",
    company_name: "MERN Stack",
    icon: mongodb,
    iconBg: "#d9d0e0f7",
    date: "Phase 3",
    points: [
      "Backend Development with Node.js and Express: Learn server-side development with Node.js and Express.js to build RESTful APIs.",
      "Working with Databases (MongoDB): Explore MongoDB for NoSQL database solutions and integrate it with Express.js.",
      "Full Stack Applications: Combine frontend (React) and backend (Node.js, Express.js, MongoDB) to create full-stack web applications.",
      "Authentication and Deployment: Implement user authentication and deploy MERN stack applications to production environments.",
    ],
  },
  {
    title: "Mobile Development",
    company_name: "React Native",
    icon: r_native,
    iconBg: "#786982f7",
    date: "Phase 4",
    points: [
      "Introduction to React Native: Begin with React Native framework for building cross-platform mobile applications.",
      "Components and Navigation: Learn about React Native components and navigation libraries for building mobile UIs.",
      "Accessing Device Features: Explore accessing device features like camera and geolocation using React Native APIs.",
      "State Management and Publishing: Apply state management techniques and publish React Native apps to app stores for iOS and Android platforms.",
    ],
  },
];

const technologies = [
  {
    title: "HTML 5",
    icon: html,
  },
  {
    title: "CSS 3",
    icon: css,
  },
  {
    title: "Bootstrap",
    icon: bootstrap,
  },
  {
    title: "JavaScript",
    icon: javascript,
  },
  {
    title: "React JS",
    icon: reactjs,
  },
  {
    title: "React-Native",
    icon: r_native,
  },
  {
    title: "Tailwind",
    icon: tailwind,
  },
  {
    title: "Restful API",
    icon: api,
  },
  {
    title: "Redux Toolkit",
    icon: redux,
  },
  {
    title: "MongoDB",
    icon: mongodb,
  },
  {
    title: "Express Js",
    icon: express,
  },
  {
    title: "Node JS",
    icon: nodejs,
  },

  {
    title: "git",
    icon: git,
  },
  {
    title: "github",
    icon: github,
  },
  {
    title: "figma",
    icon: figma,
  },
  {
    title: "Photoshop",
    icon: photoshop,
  },
  {
    title: "Filmora",
    icon: filmora,
  },
  {
    title: "Canva",
    icon: canva,
  },
];

const webProjects = [
  {
    name: "Step In Style",
    description:
      "Web-based ecommerce platform that allows users to search footware view details, login/register, place order, pay for it and also update the profile in realtime, providing a efficient ecommerce solution.",
    tags: [
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "orange-text-gradient",
      },
    ],
    image: stepInStyle,
    source_code_link: "https://github.com/Punit-Shinde/MERN-StepInStyle",
  },
  {
    name: "Chatter Box",
    description:
      "Real-time chat app that allows users to login/register and search other users and chat with various users in realtime, providing a convenient and efficient solution for conversation needs.",
    tags: [
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "orange-text-gradient",
      },
    ],
    image: chatterBox,
    source_code_link: "https://github.com/Punit-Shinde/MERN-ChatterBox",
  },
  {
    name: "Pinterest-Clone",
    description:
      "The Pinterest Clone project, a web application inspired by Pinterest's layout and functionality like - User Authentication, Image Upload, board creation, explore feeds and responsive design",
    tags: [
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "ejs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "orange-text-gradient",
      },
    ],
    image: pinClone,
    source_code_link: "https://github.com/Punit-Shinde/MERN-ChatterBox",
  },
  {
    name: "Dish Delight",
    description:
      "Web-based recipe app that allows users to search and learn recipes of different cuisines from all around the world or just surf through the app via categories to discover new dishes according to their taste.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "rapid-api",
        color: "blue-text-gradient",
      },
    ],
    image: dishDelight,
    source_code_link: "https://github.com/Punit-Shinde/DishDelight",
  },
  {
    name: "Flex Force",
    description:
      "Web-based platform that allows users to search workouts either by name or body part which it targets and details of the workout how to do it as well as its targeted muscles. It also provide related youtube videos",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "rapid-api",
        color: "blue-text-gradient",
      },
    ],
    image: flexForce,
    source_code_link: "https://github.com/Punit-Shinde/FlexForce",
  },
];

const mobProjects = [
  {
    name: "Devil Delicacy",
    description:
      "Mobile based platform that allows users to search, bid, and view devil fruits details that are available for the auction.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
    ],
    image: devilDelicacy,
    source_code_link: "https://github.com/Punit-Shinde/DevilDelicacy",
  },
];

export { services, technologies, experiences, webProjects, mobProjects };
