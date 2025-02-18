// src/routes/Routes.jsx
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import Haircare from "../pages/Haircare";
import Fragrance from "../pages/Fragrance";
import Contact from "../pages/Contact";

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
