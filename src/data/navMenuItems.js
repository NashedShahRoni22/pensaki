const navMenuItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About us",
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
    name: "Features",
    link: "/features",
  },
  {
    name: "Products",
    link: "/products",
  },
  {
    name: "Global Support",
    link: "/support",
  },
];

export default navMenuItems;
