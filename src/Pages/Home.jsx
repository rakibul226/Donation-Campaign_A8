import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import AllCategory from "./Category/AllCategory";
import { Helmet } from "react-helmet";

const Home = () => {
  const categories = useLoaderData();

  return (
    <>
      <Helmet>
        <title>Donation Camping</title>
      </Helmet>
      <div className="md:px-14 lg:px-36">
        <Banner></Banner>
        <AllCategory categories={categories}></AllCategory>
      </div>
    </>
  );
};

export default Home;
