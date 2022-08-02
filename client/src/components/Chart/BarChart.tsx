import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'CLPSEC game',
    },
  },
};

export const data = (blue: number, orange: number) => {
  return{
    labels: [''],
    datasets: [
      {
        label: 'blue',
        data: [blue],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'orange',
        data: [orange],
        backgroundColor: 'rgba(255,165,0, 0.5)',
      },
    ],
  }
};

type Props = {
  blue: number;
  orange: number;
}
const BarChart:React.FC<Props> = ({blue, orange}) => {
  return (
    <div>
      <Bar options={options} data={data(blue, orange)} />;
    </div>
  )
}
export default BarChart;

