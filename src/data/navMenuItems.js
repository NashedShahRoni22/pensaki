const navMenuItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Features & Tools",
    link: "/features",
  },
  {
    name: "Our Products",
    link: "/products",
  },
  {
    name: "About Us",
    child: [
      {
        name: "Cookie policy",
        link: "/cookie",
      },
      {
        name: "Privacy policy",
        link: "/privacy",
      },
      {
        name: "General Condition",
        link: "/general",
      },
    ],
  },
  {
    name: "Contact Us",
    link: "/support",
  },
];

export default navMenuItems;
