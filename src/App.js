import HomePage from "./pages/HomePage";
import WorkPage from "./pages/WorkPage";
import ProfilePage from "./pages/ProfilePage";
import ThemeToggler from "./component/ThemeToggler";

import "./font/stylesheet.css";

import { createHashRouter, RouterProvider } from "react-router-dom";
const router = createHashRouter([
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
  return (
    <div>
      <RouterProvider router={router} />
      <ThemeToggler />
    </div>
  );
}

export default App;
