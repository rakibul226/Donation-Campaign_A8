import { useEffect, useState } from "react";
import Donated from "./Donation/Donated";

const Donation = () => {
  const [donated, setDonated] = useState([]);
  const [noDataFound, setNoDataFound] = useState(false);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const donatedItems = JSON.parse(localStorage.getItem("donated"));

    if (donatedItems) {
      setDonated(donatedItems);
    } else {
      setNoDataFound("No Data Found");
    }
  }, []);
  return (
    <div>
      {noDataFound ? (
        <p className="text-center mt-96 text-6xl">No data found.</p>

      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-6 md:px-14 lg:px-36 md:mt-10">
            {isShow ? donated.map((item) => ( 
                <Donated item={item} key={item.product_id} /> ))
             : 
             donated.slice(0, 4).map((item) => 
                <Donated item={item} key={item.product_id} />)}
          </div>
          <button
            onClick={() => setIsShow(!isShow)} className="px-5 py-2 bg-green-500 block mx-auto my-2 mt-10 rounded-sm text-white">
            {isShow ? "See less" : "See more"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Donation;
