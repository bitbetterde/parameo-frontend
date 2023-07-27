import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import type { ChartOptions, ChartData } from "chart.js";
import type React from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
  className?: string;
  data: ChartData<"doughnut">;
}

const DoughnutChart: React.FC<Props> = ({ className, data }) => {
  const options: ChartOptions<"doughnut"> = {
    plugins: {
      legend: {
        position: "right",
        labels: { usePointStyle: true, boxWidth: 8, padding: 16 },
      },
      tooltip: {
        usePointStyle: true,
        boxHeight: 8,
        callbacks: {
          title: () => {
            return "";
          },
          label: (tooltipItem) => {
            const value = data?.datasets[0]?.data[tooltipItem.dataIndex];
            return ` ${value}%`;
          },
          labelPointStyle: () => {
            return {
              pointStyle: "circle",
              rotation: 0,
            };
          },
          labelColor: (tooltipItem) => {
            const backgroundColor =
              tooltipItem?.element?.options?.backgroundColor;
            return {
              borderColor: backgroundColor,
              backgroundColor: backgroundColor,
            };
          },
        },
      },
    },
    cutout: "70%",
  };

  const textCenter = {
    id: "textCenter",
    beforeDatasetDraw(chart: any) {
      const { ctx } = chart;
      ctx.save();
      ctx.font = "14px";
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(
        "Emissions",
        chart?.getDatasetMeta(0)?.data[0]?.x,
        chart?.getDatasetMeta(0)?.data[0]?.y
      );
    },
  };

  return (
    <div
      className={`flex flex-col justify-center items-center ${className || ""}`}
    >
      <Doughnut data={data} options={options} plugins={[textCenter]} />
    </div>
  );
};

export default DoughnutChart;
