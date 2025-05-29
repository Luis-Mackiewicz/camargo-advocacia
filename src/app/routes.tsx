import Dashboard from "@/pages/Dashboard.tsx";
import type { RouteObject } from "react-router-dom";
import App from "../App.tsx";
import About from "../pages/About.tsx";
import ContactUs from "../pages/ContactUs.tsx";
import NotFoundPage from "../pages/NotFoundPage.tsx";
import Service from "../pages/Service.tsx";
import Videos from "../pages/Videos.tsx";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Service /> },
      { path: "videos", element: <Videos /> },
      { path: "contact-us", element: <ContactUs /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
];

export default routes;
