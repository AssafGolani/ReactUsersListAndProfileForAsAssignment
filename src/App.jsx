import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UserPage from "./pages/User";
import UserProfile from "./components/UserProfile";
import RootLayout from "./pages/Root";
import ThreeDPage from "./pages/3D";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, // Parent layout for all routes
    children: [
      {
        index: true, // Default child route
        element: <UserPage />,
      },
      {
        path: "users",
        element: <UserPage />,
        children: [
          {
            path: ":userId",
            element: <UserProfile />,
          },
        ],
      },
      {
        path: "/3d",
        element: <ThreeDPage />,
      },
      {
        path: "cookies",
        element: <div>Cookies</div>,
      },
      {
        path: "notifications",
        element: <div>Notifications</div>,
      },
      {
        path: "policies",
        element: <div>General Policies</div>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
