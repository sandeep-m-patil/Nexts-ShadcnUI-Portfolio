import { MdOutlineShoppingCart } from "react-icons/md";
import { LuGamepad2 } from "react-icons/lu";
import { IoFastFoodOutline } from "react-icons/io5";
import { AiOutlineYoutube } from "react-icons/ai";
import { GrTask } from "react-icons/gr";


export const blogPosts = [
  {
    slug: "flipzon-ecommerce-site",
    icon: MdOutlineShoppingCart ,
    title: "FlipZon – E-commerce site ",
    description: `Developed a dynamic and responsive E-commerce Platform using the MERN stack.

Implemented full CRUD functionality for product management, enabling 100% control over product lifecycle (Create, Read, Update, Delete). 

Built with ❤️ using the MERN stack.

`,
    techStack: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Tailwind CSS",
      "Zustand"
    ],
    features: [
      "Add new Product",
      "Remove old Product",
      "Update existing Product",
      "Responsive UI using Tailwind CSS",
    ],
    links: {
      github: "https://github.com/sandeep-m-patil/MERN-FlipZon",
      demo: "https://mern-flipzon.vercel.app/",
    },

    image: "/images/Flipzon.png",// 🔁 Replace this with actual image URL
  },
  {
    slug: "zwigato-site",
    icon: IoFastFoodOutline ,
    title: "Zwigato – Restaurant Website",
    description: `It is a simple frontend website built using pure JavaScript, HTML, and CSS. 
    
The application allows users to add items to a cart and also remove items from the cart.
    
It's designed to demonstrate core DOM manipulation, event handling, and basic state management in JavaScript without using any frameworks or libraries.

Built with ❤️ using the Bootstrap.

`,
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
    ],
    features: [
      "Add products to cart dynamically",
      "Remove individual items from the cart",
      "Real-time cart updates on screen",
      "Fully responsive and interactive UI",
      "Built using vanilla JavaScript – no frameworks"
    ],
    links: {
      github: "https://github.com/sandeep-m-patil/zwigato",
      demo: "https://sandeep-m-patil.github.io/zwigato/",
    },

    image: "/images/Zwigato.png",// 🔁 Replace this with actual image URL
  },

   {
    slug: "rock-paper-scissors-game",
    icon: LuGamepad2,
    title: "Rock Paper Scissors",
    description: `A fun and interactive Rock-Paper-Scissors game where you play against the computer. 
    
The game tracks and stores your win/loss history using Local Storage, giving you a simple yet engaging experience every time you play.

Built with ❤️ using the JavaScript.

`,
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    features: [
      "Play against the computer in real-time",
      "Game history stored using Local Storage",
      " Tracks wins, losses, and draws",
      "Clean and minimal UI using HTML, CSS, and JavaScript",
      "Option to reset or restart the game anytime"
    ],
    links: {
      github: "https://github.com/sandeep-m-patil/Rock-Paper-Scissors",
      demo: "https://sandeep-m-patil.github.io/Rock-Paper-Scissors/",
    },

    image: "/images/Rock-Paper-Scissors.png",// 🔁 Replace this with actual image URL
  },

    {
    slug: "youtube-forntend-clone",
    icon: AiOutlineYoutube,
    title: "Youtube Frontend Clone",
    description: `A simple YouTube frontend clone built using pure HTML, CSS, and JavaScript.

It replicates the basic layout and styling of the YouTube homepage, including the header, sidebar, video grid, and responsive design. 

Ideal for practicing frontend development skills without using any frameworks.

Built with ❤️ using the CSS.

`,
    techStack: [
      "HTML",
      "CSS",
    ],
    features: [
      "Replicates YouTube’s layout with header, sidebar, and video grid",
      "Styled using pure CSS for a clean and responsive design",
      "Video thumbnails, titles, channel info",
      "Clean and minimal UI using HTML and CSS",
      "Lightweight and fast – no libraries or frameworks used"
    ],
    links: {
      github: "https://github.com/sandeep-m-patil/Youtube-Clone",
      demo: "https://sandeep-m-patil.github.io/Youtube-Clone/",
    },

    image: "/images/Youtube.png",// 🔁 Replace this with actual image URL
  },
    {
    slug: "todo-app",
    icon: GrTask ,
    title: "Todo app",
    description: `A simple yet functional Todo App built using HTML, CSS, and JavaScript. 
    
It enables users to add, delete, and manage their daily tasks efficiently. 

The application leverages Local Storage to persist user data, ensuring tasks remain saved even after the page is refreshed or the browser is closed.

Built with ❤️ using the HTML.

`,
    techStack: [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    features: [
      "Add new tasks to your list",
      "Mark tasks as completed",
      "Delete tasks individually",
      "Tasks persist using Local Storage",
      "Responsive design for mobile and desktop"
    ],
    links: {
      github: "https://github.com/sandeep-m-patil/Todo-List",
      demo: "https://sandeep-m-patil.github.io/Todo-List/",
    },

    image: "/images/Todo.png",// 🔁 Replace this with actual image URL
  },
];
