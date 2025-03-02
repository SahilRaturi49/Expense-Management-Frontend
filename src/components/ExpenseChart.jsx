import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const ExpenseChart = ({ expenses }) => {
  const categories = ["Food", "Transport", "Entertainment", "Utilities", "Other"];
  const data = {
    labels: categories,
    datasets: [
      {
        data: categories.map(
          (cat) => expenses.filter((exp) => exp.category === cat).length
        ),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"],
      },
    ],
  };

  return <Pie data={data} />;
};

export default ExpenseChart;