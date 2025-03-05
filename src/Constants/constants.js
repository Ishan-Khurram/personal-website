import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faX,
  faBars,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

// project images and skill icons
import {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  npmIcon,
  figmaIcon,
  avatar,
  spotifywrapped,
  hybridtraining,
  mystimon,
  therapai,
  stockbot,
  tsIcon,
  swift,
  reactnative,
  nextjs,
  expo,
  django,
  firebase,
} from "../assets";

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  npmIcon,
  figmaIcon,
  avatar,
  tsIcon,
  swift,
  reactnative,
  nextjs,
  expo,
  django,
  firebase,
};

const icons = {
  faBars,
  faX,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faReact,
  faGithub,
  faLinkedin,
  faEnvelope,
};

const introduction = {
  text: [
    "Hello there, and welcome to my portfolio!",

    "My name is Ishan, a 23-year-old software developer and dual citizen of the US and Canada, currently based in Canada. I have a deep passion for technology and specialize in React, TypeScript, and Python, creating engaging and efficient applications that elevate user experiences.",
    "Beyond coding, I'm an avid runner and enjoy playing basketball and volleyball. I have a deep appreciation for all things exploration, which fuels my love for travelling and nature.",
    "I thrive in collaborative environments, and am excited to work with teams that share my enthusiasm for innovation and problem-solving. Thanks for stopping by-I hope you enjoy exploring my work!",
  ],
};

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const projects = [
  {
    name: "Spotify Weekly Wrapped",
    description:
      "My personal Spotify Weekly Wrapped tracks my top songs, artists, and genres every week. Built with Python, OAuth2, and the Spotify API, it automates insights and recommendations, helping me stay on top of my music trends effortlessly.",
    image: spotifywrapped,
    source_code_link: "https://github.com/Ishan-Khurram/SpotifyWeeklyWrapped",
  },
  {
    name: "Zenkai",
    description:
      "Zenkai is a sleek and intuitive fitness tracking app designed for athletes who want to push their limits. Log runs, track lifts, and monitor weight trends with structured workout folders and real-time data visualization. Built for iOS, Zenkai keeps your progress organized and accessible, helping you improve every step of the way.",
    image: hybridtraining,
    source_code_link: "https://github.com/Ishan-Khurram/Zenkai",
  },
  {
    name: "TherapAI",
    description:
      "TherapAI is an AI-powered chatbot designed to simulate conversations with a virtual therapist, offering a space for self-reflection and emotional support. Built with natural language processing and sentiment analysis, it provides thoughtful responses to help navigate thoughts and feelings in a judgment-free environment.",
    image: therapai,
    source_code_link: "",
  },
  {
    name: "Mystimon",
    description:
      "MystiMon is an interactive Pokémon guessing game where players identify Pokémon based on AI-generated hints that progressively increase in difficulty, covering type matchups, evolution details, design inspirations, and trivia. Built with Next.js and hosted on Vercel, the game challenges players' Pokémon knowledge while avoiding direct Pokédex references for a more engaging experience.",
    image: mystimon,
    source_code_link: "https://github.com/Ishan-Khurram/Mystimon",
  },
  {
    name: "Discord Stock Bot",
    description:
      "My Discord Stock Bot provides real-time stock price updates directly in Discord. Built with Python and integrated with financial APIs, it allows users to quickly retrieve the latest stock prices by simply typing a ticker symbol like MSFT, BTC, etc.",
    image: stockbot,
    source_code_link: "https://github.com/Ishan-Khurram/Discord-StockBot",
  },
];

const memoji = {
  image: [avatar],
};

const skills = [
  {
    id: "html",
    title: "HTML",
    icon: htmlIcon,
    description:
      "I have a strong command of HTML for organizing web pages and generating meaningful content that can be accessed by all users.",
  },
  {
    id: "css",
    title: "CSS",
    icon: cssIcon,
    description:
      "I possess expertise in utilizing CSS to design web pages and craft visually captivating layouts that enhance the overall user experience.",
  },
  {
    id: "javascript",
    title: "JavaScript",
    icon: jsIcon,
    description:
      "I am learning Swift to develop iOS applications, focusing on UI components, data persistence, and SwiftUI.",
  },
  {
    id: "typescript",
    title: "TypeScript",
    icon: tsIcon, // change to ts icon
    description:
      "I have experience using TypeScript to build strongly typed applications, primarily within React and Node.js projects.",
  },
  {
    id: "swift",
    title: "Swift",
    icon: swift, // change to swift
    description:
      "I have experience using Swift to build basic IOS applications.",
  },
  {
    id: "reactnative",
    title: "ReactNative",
    icon: reactnative, // change to react native icon
    description:
      "I have experience developing mobile applications with React Native, integrating APIs, and optimizing performance for iOS",
  },
  {
    id: "nextjs",
    title: "NextJs",
    icon: nextjs, // next js icon
    description:
      "I am learning Next.js to build server-side rendered and static sites, leveraging its built-in API routes and optimizations.",
  },
  {
    id: "expo",
    title: "Expo",
    icon: expo, // change to expo
    description:
      "I have used Expo to streamline React Native development, handling dependencies, configurations, and testing.",
  },
  {
    id: "django",
    title: "django", // change to django
    icon: django,
    description:
      "I have built full-stack applications using Django, implementing REST APIs, authentication, and database integrations.",
  },
  {
    id: "firebase",
    title: "FireBase", // change to firebase.
    icon: firebase,
    description:
      "I have implemented Firebase Firestore for real-time database management, authentication, and cloud storage.",
  },
  {
    id: "react",
    title: "React",
    icon: reactIcon,
    description:
      "I am well-versed in React, proficient in creating reusable components and managing application state using hooks and context.",
  },
  {
    id: "java",
    title: "Java",
    icon: javaIcon,
    description:
      "I have experience utilizing Java for object-oriented programming (OOP) and implementing data structures.",
  },
  {
    id: "figma",
    title: "Figma",
    icon: figmaIcon,
    description:
      "In my Figma skills, I unleash creativity, designing captivating user interfaces and collaborating seamlessly with designers and developers.",
  },
  {
    id: "git",
    title: "Git",
    icon: gitIcon,
    description:
      "I am proficient in Git, managing code changes, collaborating with others, and resolving conflicts effectively.",
  },
  {
    id: "github",
    title: "GitHub",
    icon: githubIcon,
    description:
      "I am skilled in using GitHub for seamless project collaboration, code sharing, and issue tracking. Through GitHub, I efficiently create and manage repositories and effectively present my work to potential employers.",
  },
  {
    id: "vite",
    title: "Vite",
    icon: viteIcon,
    description:
      "I have gained considerable experience working with Vite for approximately six months, leveraging its capabilities to build React websites and seamlessly deploy them on platforms like Netlify.",
  },
  {
    id: "py",
    title: "Python",
    icon: pyIcon,
    description:
      "With 5 years of Python experience, 2 of which being professional, I am adept at coding functions, have strong OOP priciples, and I am able to implement data structures.",
  },
  {
    id: "npm",
    title: "npm",
    icon: npmIcon,
    description:
      "When it comes to building web applications, I prefer using npm as my runtime environment over Yarn. I have expertise to develop powerful and scalable web applications.",
  },
  {
    id: "eslint",
    title: "Eslint",
    icon: eslintIcon,
    description:
      "I utilize ESLint to identify and resolve code issues, as well as standardize the structure of my projects. With ESLint, I ensure code quality and consistency throughout my development process.",
  },
];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export { media, introduction, projects, memoji, skills, markerSvg, icons };
