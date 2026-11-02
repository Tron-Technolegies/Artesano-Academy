import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  About,
  AppliedCivilEngineering,
  Blog,
  Contact,
  Course,
  DesignAutomation,
  Home,
  PracticalArchitecture,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/course",
    element: <Course />,
  },
  {
    path: "/course/applied-civil-engineering",
    element: <AppliedCivilEngineering />,
  },
  {
    path: "/course/design-automation",
    element: <DesignAutomation />,
  },
  {
    path: "/course/practical-architecture",
    element: <PracticalArchitecture />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
