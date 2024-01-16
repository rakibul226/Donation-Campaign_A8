import Chart from "react-apexcharts";
import React from "react";



function Piechart()
{
    return(
        <React.Fragment>
            <div className="container-fluid">
                <h3>Wellcome to the picchart</h3>
                <Chart
                    type="pie"
                    width={1349}
                    height={550}
                
                    series={[23,43,50]}

                    options={
                        {
                            labels:['a','b','c']
                        }
                    }

                >



                </Chart>

            </div>
        </React.Fragment>
    );

}



export default Piechart;