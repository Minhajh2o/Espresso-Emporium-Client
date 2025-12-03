import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AddCoffee from "../pages/AddCoffee";
import UpdateCoffee from "../pages/UpdateCoffee";
import ViewCoffeeDetails from "../pages/ViewCoffeeDetails";

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
    ],
  },
]);
export default router;
