import { FaGithubSquare } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

export const PROJECTS = [

  {
    id: "1",
    imageSource: "/images/la-casa-sofia.png",
    title: "La Casa Sophia - WIP",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    stack: ["REACT", "SHOPIFY"],
    Icon: [<FaGithubSquare size={30}/>, <FaExternalLinkAlt size={28}/>]
  },
  {
    id: "2",
    imageSource: "/images/be-my-burger.png",
    title: "Be My Burger",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    stack: ["REACT", "FIREBASE"],
    Icon: [<FaGithubSquare size={30}/>, <FaExternalLinkAlt size={28}/>]
  },
  {
    id: "3",
    imageSource: "/images/trip-it-easy.jpg",
    title: "Trip It Easy",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    stack: ["RUBY", "RAILS", "HEROKU"],
    Icon: [<FaGithubSquare size={30}/>, <FaExternalLinkAlt size={28}/>]
  },
  {
    id: "4",
    imageSource: "/images/connect-4.jpg",
    title: "Connect 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    stack: ["HTML", "CSS", "JAVASCRIPT"],
    Icon: [<FaGithubSquare size={30}/>, <FaExternalLinkAlt size={28}/>]
  },

]
