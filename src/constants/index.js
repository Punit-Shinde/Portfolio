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
    icon: html,
    iconBg: "#E6DEDD",
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
    iconBg: "#383E56",
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
    iconBg: "#E6DEDD",
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
    iconBg: "#383E56",
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];
const mobProjects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, webProjects, mobProjects };
