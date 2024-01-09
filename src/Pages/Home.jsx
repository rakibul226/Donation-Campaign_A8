import Banner from "./Banner";
import { useLoaderData } from "react-router-dom";
import AllCategory from "./Category/AllCategory";


const Home = () => {

    const categorys= useLoaderData();
   

    return (
        <div className="md:px-14 lg:px-36">
            <Banner></Banner>
            <AllCategory categorys = {categorys}></AllCategory>
        </div>
    );
};

export default Home;