import {
  mobile,
  backend,
  creator,
  web,
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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  chatterBox,
  stepInStyle,
  flexForce,
  dishDelight,
  pinClone,
  devilDelicacy
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const experiences = [
  {
    title: "Basic Web Development",
    company_name: "HTML, CSS, JavaScript",
    icon: starbucks,
    iconBg: "#d9d0e0f7",
    date: "Phase 1",
    points: [
      "Introduction to Web Development: Starting with HTML, CSS, and JavaScript lays the foundation of understanding how websites are structured and styled.",
      "Building Static Websites: Focus on creating static web pages using HTML and CSS. Learn about layout, styling, and basic interactivity using JavaScript.",
      "Making Sites Dynamic with JavaScript: Dive deeper into JavaScript to add dynamic functionality to web pages. This involves DOM manipulation, event handling, and basic animations.",
      "Responsive Design: Understand responsive web design principles using CSS media queries and flexible layouts to ensure websites work well on different devices and screen sizes.",
      "Introduction to Frontend Frameworks: Get introduced to frontend frameworks like React and Vue.js to understand their importance in building modern web applications.",
    ],
  },
  {
    title: "Advanced Frontend Development",
    company_name: "React, Tailwind CSS, Redux",
    icon: reactjs,
    iconBg: "#786982f7",
    date: "Phase 2",
    points: [
      "Mastering React: Dive deep into React to understand components, props, state, and lifecycle methods. Learn how to build reusable UI components and manage application state efficiently.",
      "Styling with Tailwind CSS: Explore Tailwind CSS for utility-first styling approach, which enhances productivity and maintains a consistent design system.",
      "State Management with Redux: Understand the principles of Redux for managing complex application states. Learn about actions, reducers, and the Redux store.",
      "Exploring React Hooks: Embrace the power of React Hooks for managing stateful logic and side effects within functional components, improving code readability and reusability.",
      "API Integration: Learn how to integrate APIs with React applications to fetch and display dynamic data. Understand concepts like asynchronous JavaScript and handling API responses.",
    ],
  },
  {
    title: "Full Stack Development",
    company_name: "MERN Stack",
    icon: mongodb,
    iconBg: "#d9d0e0f7",
    date: "Phase 3",
    points: [
      "Backend Development with Node.js and Express: Dive into server-side development with Node.js and Express.js to build RESTful APIs. Learn about routing, middleware, and database integration.",
      "Working with Databases (MongoDB): Explore MongoDB as a NoSQL database solution. Learn about CRUD operations, schema design, and integrating MongoDB with Express.js.",
      "Building Full Stack Applications: Combine frontend (React) and backend (Node.js, Express.js, MongoDB) to create full-stack web applications. Understand the flow of data between client and server.",
      "Authentication and Authorization: Learn about implementing user authentication and authorization mechanisms using JWT (JSON Web Tokens) and sessions in MERN stack applications.",
      "Deployment and Scalability: Explore various deployment options for MERN stack applications, including cloud platforms like Heroku and AWS. Understand scalability considerations for production environments.",
    ],
  },
  {
    title: "Mobile Development",
    company_name: "React Native",
    icon: meta,
    iconBg: "#786982f7",
    date: "Phase 4",
    points: [
      "Introduction to React Native: Understand the basics of React Native framework for building cross-platform mobile applications using JavaScript and React.",
      "Components and Navigation: Learn about React Native components and navigation libraries for building mobile UIs and navigating between screens.",
      "Accessing Device Features: Explore how to access device features such as camera, geolocation, and sensors using React Native APIs and third-party libraries.",
      "State Management in React Native: Apply state management techniques like Context API or Redux for managing complex application states in React Native apps.",
      "Building and Publishing Apps: Learn about the process of building, testing, and publishing React Native apps to app stores for both iOS and Android platforms.",
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
    icon: reactjs,
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
      }    
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
