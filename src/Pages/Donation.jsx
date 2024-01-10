import { useEffect, useState } from "react";
import Donated from "./Donation/Donated";

const Donation = () => {
  const [donated, setDonated] = useState([]);
  const [noDataFound, setNoDataFound] = useState(false);

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
        <p>{noDataFound}</p>
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-6 md:px-14 lg:px-36 md:mt-10">
            {donated.map((item) => (
              <Donated item={item} key={item.product_id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Donation;
