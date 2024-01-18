import Chart from "react-apexcharts";
import React, { useState, useEffect } from "react";

function PieChart() {
    const [totalDonation, setTotalDonation] = useState(12);
    const [donatedItems, setDonatedItems] = useState([]);

    useEffect(() => {

        const storedDonatedItems = JSON.parse(localStorage.getItem("donated"));
        setDonatedItems(storedDonatedItems || []);
        setTotalDonation(totalDonation - storedDonatedItems.length);
    }, []);

    return (
        <React.Fragment>
            <div className="container-fluid">

                {donatedItems.length > 0 ? (
                    <Chart
                        type="pie"
                        width={1349}
                        height={550}
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
