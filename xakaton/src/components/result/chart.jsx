/** @format */

import React from "react";
import { Doughnut, defaults } from "react-chartjs-2";

defaults.plugins.legend.position = "right";
defaults.elements.bar.borderWidth = 5;

const ChartDoughnut = ({category}) => {
  const data = []
  category.map((category)=>{
    data.push(category.value);
  })
  return (
    <div>
      <Doughnut
        data={{
          labels: ["ART", "IT", "BUSINESS", "TECHNICIAN"],
          datasets: [
            {
              label: "Points",
              backgroundColor: ["#f1c40f", "#e67e22", "#16a085", "#2980b9"],
              data: [...data],
            },
          ],
        }}
        height={550}
        options={{
          maintainAspectRatio: false,
          plugins: {
            legend: {
              labels: {
                color: "#000",
                font: {
                  size: 22,
                  weight: 700,
                },
              },
            },
          },
          layout: {
            padding: {
              right: 200,
              top: 60,
              bottom: 60,
              left: 100,
            }
        }
        }}
      />
    </div>
  );
};

export default ChartDoughnut;
