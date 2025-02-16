import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useCrypto } from "../context/crypto-context";
ChartJS.register(ArcElement, Tooltip, Legend);

export function PortfolioChart() {
  const { assets } = useCrypto();
  const data = {
    labels: assets.map((a) => a.name),
    datasets: [
      {
        label: "$",
        data: assets.map((a) => a.totalAmount),
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgb(202, 235, 54)",
          "rgb(255, 0, 0)",
          "rgb(255, 0, 221)",
        ],
      },
    ],
  };

  return (
    <div
      style={{
        display: "flex",
        marginBottom: "1rem",
        justifyContent: "center",
        maxHeight: "500px",
      }}
    >
      <Pie data={data} />
    </div>
  );
}
