import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Page2 from "../Pages/Page2";


const myCreatedRoute = createBrowserRouter([
    
    {
        path :"/",
        element : <MainLayout></MainLayout>,
        children : [
            {
                path :"/",
                element  : <Home></Home>
            },
            {
                path :"page2",
                element  : <Page2></Page2>
            },
        ] 
    }
])

export default myCreatedRoute;