import { FaGithubSquare } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

export const PROJECTS = [

  {
    id: "1",
    imageSource: "/images/la-casa-sofia.png",
    title: "La Casa Sophia - WIP",
    description: "E-commerce website for a client who sells ceramics.",
    stack: ["REACT", "SHOPIFY"],
    Icon: [<FaGithubSquare size={30}/>, <FaExternalLinkAlt size={28}/>],
    link: ["https://github.com/chiara-muller/la-casa-sofia", ""]
  },
  {
    id: "2",
    imageSource: "/images/be-my-burger.png",
    title: "Be My Burger",
    description: "Online food ordering website with fake data, created for learning purposes.",
    stack: ["REACT", "FIREBASE"],
    Icon: [<FaGithubSquare size={30}/>, <FaExternalLinkAlt size={28}/>],
    link: ["https://github.com/chiara-muller/be-my-burger", "https://be-my-burger.vercel.app"]
  },
  {
    id: "3",
    imageSource: "/images/trip-it-easy.jpg",
    title: "Trip It Easy",
    description: "Web app created for discovering new places to eat/drink/visit.",
    stack: ["RUBY", "RAILS", "HEROKU"],
    Icon: [<FaGithubSquare size={30}/>, <FaExternalLinkAlt size={28}/>],
    link: ["https://github.com/chiara-muller/TripItEasy", "https://tripiteasy.herokuapp.com/"]
  },
  {
    id: "4",
    imageSource: "/images/connect-4.jpg",
    title: "Connect 4",
    description: "Online version of the famous Connect 4 game.",
    stack: ["HTML", "CSS", "JAVASCRIPT"],
    Icon: [<FaGithubSquare size={30}/>, <FaExternalLinkAlt size={28}/>],
    link: ["https://github.com/chiara-muller/connect4", "https://chiara-muller.github.io/connect4/"]
  },

]
