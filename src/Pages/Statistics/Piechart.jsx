import Chart from "react-apexcharts";
import React, { useState, useEffect } from "react";

function PieChart() {
  const [totalDonation, setTotalDonation] = useState(12);
  const [donatedItems, setDonatedItems] = useState([]);

  useEffect(() => {
    try {
      const storedDonatedItems = JSON.parse(localStorage.getItem("donated")) || [];
      const length = storedDonatedItems.length;
      setDonatedItems(storedDonatedItems);
      setTotalDonation(totalDonation - length);
    } catch (error) {
      console.error("Error parsing or retrieving donated items from local storage:", error);
    }
  }, []);

  return (
    <React.Fragment>
      <div className="container-fluid ml-12">
        {donatedItems.length > 0 ? (
          <Chart
            type="pie"
            width={375}
            height={300}
            series={[totalDonation, donatedItems.length]}
            options={{
              labels: ['Total Donation', 'Donated Items']
            }}
          />
        ) : (
          <p className="text-center mt-96 text-6xl">No data found.</p>
        )}
      </div>
    </React.Fragment>
  );
}

export default PieChart;
