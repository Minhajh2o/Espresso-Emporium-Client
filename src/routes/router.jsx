import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AddCoffee from "../pages/AddCoffee";
import UpdateCoffee from "../pages/UpdateCoffee";
import ViewCoffeeDetails from "../pages/ViewCoffeeDetails";
import NotFound from "../pages/NotFound";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/coffees`),
        element: <Home />,
      },
      {
        path: "add-coffee",
        element: <AddCoffee />,
      },
      {
        path: "update-coffee/:id",
          loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/coffees/${params.id}`),
        element: <UpdateCoffee />,
      },
      {
        path: "/coffee/:id",
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/coffees/${params.id}`),
        element: <ViewCoffeeDetails />,
      },
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
export default router;
