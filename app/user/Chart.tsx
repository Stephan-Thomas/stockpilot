"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useRef, useEffect, useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend
);

export default function CustomChart() {
  const chartRef = useRef<any>(null);
  const [gradient, setGradient] = useState<CanvasGradient | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const chart = chartRef.current.ctx;
      const g = chart.createLinearGradient(0, 0, 0, chartRef.current.height);
      g.addColorStop(0, "rgba(19,164,236,0.2)"); // light blue fade
      g.addColorStop(1, "rgba(19,164,236,0)"); // transparent bottom
      setGradient(g);
    }
  }, []);

  const data = {
    labels: [
      "Start",
      "P1",
      "P2",
      "P3",
      "P4",
      "P5",
      "P6",
      "P7",
      "P8",
      "P9",
      "End",
    ],
    datasets: [
      {
        label: "Sample Line",
        data: [109, 21, 41, 93, 33, 101, 61, 45, 121, 149, 25], // from your path
        borderColor: "#13a4ec",
        borderWidth: 3,
        pointRadius: 0,
        tension: 0.4, // smooth curve
        fill: true,
        backgroundColor: gradient || "rgba(19,164,236,0.2)",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: { display: false },
      y: { display: false },
    },
  };

  return (
    <div className="mt-4 h-64">
      <Line ref={chartRef} data={data} options={options} />
    </div>
  );
}
