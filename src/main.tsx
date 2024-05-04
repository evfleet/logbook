import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./main.css";
import { CreateHabit } from "./routes/CreateHabit";
import { Dashboard } from "./routes/Dashboard";
import { Habit } from "./routes/Habit";
import { Settings } from "./routes/Settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />
  },
  {
    path: "/habit/create",
    element: <CreateHabit />
  },
  {
    path: "/habit/:id",
    element: <Habit />
  },
  {
    path: "/settings",
    element: <Settings />
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
