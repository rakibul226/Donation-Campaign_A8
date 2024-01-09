import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Donation from "../Pages/Donation";
import Statistics from "../Pages/Statistics";
import SelectedCategory from "../Pages/Category/SelectedCategory";



const myCreatedRoute = createBrowserRouter([
    
    {
        path :"/",
        element : <MainLayout></MainLayout>,
        children : [
            {
                path :"/",
                element  : <Home></Home>,
                loader :() => fetch('../../public/donation.json')
            },
            {
                path :"/donation",
                element  : <Donation></Donation>
            },
            {
                path :"/statistics",
                element  : <Statistics></Statistics>
            },
            {
                path :"/category/:product_id",
                element : <SelectedCategory></SelectedCategory>,
                loader :() => fetch('../../public/donation.json')
            }
        ] 
    }
])

export default myCreatedRoute;