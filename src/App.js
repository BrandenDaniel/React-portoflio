import HomePage from "./pages/HomePage";
import WorkPage from "./pages/WorkPage";
import ProfilePage from "./pages/ProfilePage";
import "./font/stylesheet.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/work",
    element: <WorkPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
