import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AddCoffee from "../pages/AddCoffee";
import UpdateCoffee from "../pages/UpdateCoffee";
import ViewCoffeeDetails from "../pages/ViewCoffeeDetails";
import NotFound from "../pages/NotFound";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import Users from "../pages/auth/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        loader: () => fetch("https://espresso-emporium-server-three-fawn.vercel.app/coffees"),
        // loader: () => fetch("https://espresso-emporium-server-5cr6.onrender.com/coffees"),
        element: <Home />,
      },
      {
        path: "add-coffee",
        element: <AddCoffee />,
      },
      {
        path: "update-coffee/:id",
          loader: ({ params }) => fetch(`https://espresso-emporium-server-three-fawn.vercel.app/coffees/${params.id}`),
          // loader: ({ params }) => fetch(`https://espresso-emporium-server-5cr6.onrender.com/coffees/${params.id}`),
        element: <UpdateCoffee />,
      },
      {
        path: "/coffee/:id",
        loader: ({ params }) => fetch(`https://espresso-emporium-server-three-fawn.vercel.app/coffees/${params.id}`),
        // loader: ({ params }) => fetch(`https://espresso-emporium-server-5cr6.onrender.com/coffees/${params.id}`),
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
        path: "users",
        loader: () => fetch("https://espresso-emporium-server-three-fawn.vercel.app/users"),
        // loader: () => fetch("https://espresso-emporium-server-5cr6.onrender.com/users"),
        element: <Users />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
export default router;
