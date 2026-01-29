import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { createRoot } from "react-dom/client";
import Login from "./Login.tsx";
import Dashboard from "./Dashboard.tsx";
import Users from "./Users.tsx";
import UsersDetails from "./UsersDetails.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/user",
    element: <Users />,
  },
  {
    path: "/users/:id",
    element: <UsersDetails />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
