import Dashboard from "@/pages/dashboard/Dashboard.tsx";
import type { RouteObject } from "react-router-dom";
import App from "../App.tsx";
import About from "../pages/about/About.tsx";
import ContactUs from "../pages/contact-us/ContactUs.tsx";
import NotFoundPage from "../pages/not-found/NotFoundPage.tsx";
import Service from "../pages/service/Service.tsx";
import Videos from "../pages/videos/Videos.tsx";

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
