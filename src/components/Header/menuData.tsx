import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Ride",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Services",
    path: "/#services",
    newTab: false,
  },

  {
    id: 3,
    title: "Get a quote",
    path: "/#contact",
    newTab: false,
  },
  {
    id: 4,
    title: "About",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "About us",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "Safety",
        path: "/safety",
        newTab: false,
      },
    ],
  },
];
export default menuData;
