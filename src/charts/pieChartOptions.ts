import { Context } from "chartjs-plugin-datalabels";

export const pieChartData = {
  labels: ['Bajaj Finserv', 'Shriram Finance', 'Mahindra Finance', 'Utkarsh Small Finance Bank'],
  datasets: [
    {
      label: 'Deposit amount',
      data: [25000, 20000, 15000, 40000],
      backgroundColor: [
        '#6C63FF',
        '#FA9D17',
        '#B9C606',
        '#59CBD3',
      ],
      borderColor: [
        '#6C63FF',
        '#FA9D17',
        '#B9C606',
        '#59CBD3',
      ],
      borderWidth: 1,
    },
  ],
};

export const pieChartOptions = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'right' as const,
      labels: {
        font: {
          size: 10,
        },
        usePointStyle: true,
        pointStyle: 'circle' as const,
        boxWidth: 3,
        boxHeight: 3,
      },
    },
    datalabels: {
      color: '#FFF',
      formatter: function (value: number, context: Context) {
        return `${value.toLocaleString()} (${value / 1000}%)`;
      },
      font: {
        size: 5,
      },
    },
  },
};
