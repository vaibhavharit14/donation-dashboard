import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { donationsByDate } from "../utils/stats";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

export default function DonationChart() {
  const { labels, values } = donationsByDate();
  const data = {
    labels,
    datasets: [
      {
        label: "Donations (INR)",
        data: values,
        borderColor: "#60a5fa",
        backgroundColor: "rgba(96,165,250,0.15)",
        tension: 0.3,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: { display: true, labels: { color: "#e5e7eb" } },
      tooltip: { enabled: true },
    },
    scales: {
      x: { ticks: { color: "#94a3b8" }, grid: { color: "#1f2937" } },
      y: { ticks: { color: "#94a3b8" }, grid: { color: "#1f2937" } },
    },
  };
  return (
    <div className="rounded-xl p-4 border border-slate-800 bg-[var(--card)]">
      <Line data={data} options={options} />
    </div>
  );
}