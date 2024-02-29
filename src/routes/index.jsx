import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layout/index";
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";

import Contact from "../pages/Contact";
import Portfolio from "../pages/Portfolio";
import Services from "../pages/Services";

export default function index() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/portfolios",
          element: <Portfolio />,
        },

        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
}
