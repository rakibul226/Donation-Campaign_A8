import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import SelectedCategory from "../Pages/Category/SelectedCategory";
import Donation from "../Pages/Donation";
import Home from "../Pages/Home";
import Statistics from "../Pages/Statistics/Statistics";

const myCreatedRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("donation.json"),
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/category/:product_id",
        element: <SelectedCategory></SelectedCategory>,
        loader: () => fetch("donation.json"),
      },
    ],
  },
]);

export default myCreatedRoute;
