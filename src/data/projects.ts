import { MdOutlineShoppingCart } from "react-icons/md";
import { LuGamepad2 } from "react-icons/lu";
import { IoFastFoodOutline } from "react-icons/io5";
import { AiOutlineYoutube } from "react-icons/ai";
import { GrTask } from "react-icons/gr";

export const projects = [
  {
    slug: "flipzon-ecommerce-site",
    icon: MdOutlineShoppingCart,
    title: "FlipZon",
    subtitle: "E-commerce Platform",
    description:
      "A full-featured e-commerce website built with the MERN stack. Offers user registration, product listings, cart management, and an admin dashboard for a personalized experience.",
    techStack: [
      "Next.js",
      "MongoDB",
      "Express.js",
      "Node.js",
      "Tailwind CSS",
      "Zustand",
      "JWT",
    ],
    features: [
      "User and Admin registration and login",
      "JWT-based authentication",
      "View all products with details",
      "Cart management (add/remove)",
      "Admin Dashboard with CRUD operations",
      "Responsive UI with ShadcnUI",
    ],
    links: {
      github: "https://github.com/sandeep-m-patil/FlipZon",
      demo: "https://flip-zon.vercel.app/",
    },
    image: "/images/Flipzon.png",
    featured: true,
  },
  {
    slug: "zwigato-site",
    icon: IoFastFoodOutline,
    title: "Zwigato",
    subtitle: "Restaurant Website",
    description:
      "A frontend restaurant website built with vanilla JS, HTML, and CSS. Demonstrates core DOM manipulation, event handling, and basic state management without frameworks.",
    techStack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    features: [
      "Add products to cart dynamically",
      "Remove individual items from the cart",
      "Real-time cart updates",
      "Fully responsive and interactive UI",
      "Built using vanilla JavaScript",
    ],
    links: {
      github: "https://github.com/sandeep-m-patil/zwigato",
      demo: "https://sandeep-m-patil.github.io/zwigato/",
    },
    image: "/images/Zwigato.png",
    featured: false,
  },
  {
    slug: "rock-paper-scissors-game",
    icon: LuGamepad2,
    title: "Rock Paper Scissors",
    subtitle: "Browser Game",
    description:
      "A fun and interactive Rock-Paper-Scissors game where you play against the computer. Tracks and stores your win/loss history using Local Storage.",
    techStack: ["HTML", "CSS", "JavaScript"],
    features: [
      "Play against the computer in real-time",
      "Game history stored using Local Storage",
      "Tracks wins, losses, and draws",
      "Clean and minimal UI",
      "Option to reset or restart the game",
    ],
    links: {
      github: "https://github.com/sandeep-m-patil/Rock-Paper-Scissors",
      demo: "https://sandeep-m-patil.github.io/Rock-Paper-Scissors/",
    },
    image: "/images/Rock-Paper-Scissors.png",
    featured: false,
  },
  {
    slug: "youtube-frontend-clone",
    icon: AiOutlineYoutube,
    title: "YouTube Clone",
    subtitle: "Frontend Clone",
    description:
      "A YouTube frontend clone built with pure HTML, CSS, and JavaScript. Replicates the basic layout including header, sidebar, and video grid with responsive design.",
    techStack: ["HTML", "CSS"],
    features: [
      "Replicates YouTube's layout",
      "Header, sidebar, and video grid",
      "Styled with pure CSS",
      "Clean and minimal UI",
      "Lightweight — no frameworks used",
    ],
    links: {
      github: "https://github.com/sandeep-m-patil/Youtube-Clone",
      demo: "https://sandeep-m-patil.github.io/Youtube-Clone/",
    },
    image: "/images/Youtube.png",
    featured: false,
  },
  {
    slug: "todo-app",
    icon: GrTask,
    title: "Todo App",
    subtitle: "Task Manager",
    description:
      "A simple yet functional Todo App built with HTML, CSS, and JavaScript. Enables users to add, delete, and manage daily tasks with Local Storage persistence.",
    techStack: ["HTML", "CSS", "JavaScript"],
    features: [
      "Add new tasks to your list",
      "Mark tasks as completed",
      "Delete tasks individually",
      "Tasks persist using Local Storage",
      "Responsive design for mobile and desktop",
    ],
    links: {
      github: "https://github.com/sandeep-m-patil/Todo-List",
      demo: "https://sandeep-m-patil.github.io/Todo-List/",
    },
    image: "/images/Todo.png",
    featured: false,
  },
];
