import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../components/Home";
import AddCoffee from "../components/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
        {
            index: true,
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