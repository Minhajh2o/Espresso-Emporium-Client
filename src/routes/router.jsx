import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AddCoffee from "../pages/AddCoffee";
import UpdateCoffee from "../pages/UpdateCoffee";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
        {
            index: true,
            loader: () => fetch('http://localhost:3000/coffees'),
            element: <Home />
        },
        {
            path: "add-coffee",
            element: <AddCoffee />
        },
        {
            path: "update-coffee",
            element: <UpdateCoffee />
        }
    ],
  },
]);
export default router;