// src/routes/Routes.jsx
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Layout/HomePage";
import Haircare from "../pages/Haircare";
import Fragrance from "../pages/Fragrance";
import Contact from "../pages/Contact";
import Skincare from "../pages/Skincare";
import Makeup from "../pages/Makeup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/makeup",
        element: <Makeup />,
      },
      {
        path: "/skincare",
        element: <Skincare />,
      },
      {
        path: "/haircare",
        element: <Haircare />,
      },
      {
        path: "fragrance",
        element: <Fragrance />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
