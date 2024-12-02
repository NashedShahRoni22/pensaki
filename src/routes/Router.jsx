import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import GlobalSupport from "../pages/GlobalSupport";
import CookiePolicy from "../pages/CookiePolicy";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import GeneralCondition from "../pages/GeneralCondition";
import Pensakidoc from "../components/Pensakidoc";
import Pensakicloud from "../components/Pensakicloud";
import Pensakipdf from "../components/Pensakipdf";
import Pensakistudent from "../components/Pensakistudent";
import Features from "../pages/Features/Features";
import Products from "../pages/Home/Products/Products";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/features",
        element: <Features />,
      },
      {
        path: "/support",
        element: <GlobalSupport />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/cookie",
        element: <CookiePolicy />,
      },
      {
        path: "/privacy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/general",
        element: <GeneralCondition />,
      },
      {
        path: "/pensakidoc",
        element: <Pensakidoc />,
      },
      {
        path: "/pensakicloud",
        element: <Pensakicloud />,
      },
      {
        path: "/pensakipdf",
        element: <Pensakipdf />,
      },
      {
        path: "/pensakistudent",
        element: <Pensakistudent />,
      },
    ],
  },
]);
