import 'chartjs-adapter-date-fns';
import { Context } from 'chartjs-plugin-datalabels';
import { format } from 'date-fns';

export const timelineData = {
  datasets: [
    {
      label: 'Dataset 1',
      data: [
        { x: ['2024-01-01', '2024-08-03'], y: 'Utkarsh FD 1' },
        { x: ['2024-01-01', '2025-04-30'], y: 'Shriram FD Plan 2' },
        { x: ['2024-05-01', '2025-04-10'], y: 'Bajaj Finserv FD 1' },
        { x: ['2024-06-01', '2026-07-10'], y: 'Mahindra FD Plan 2' },
      ],
      backgroundColor: '#3B39D9',
      borderSkipped: false,
      borderRadius: 8,
      borderWidth: 1,
    },
  ],
};

const backgroundChartArea = {
  id: 'background-chart-area',
  beforeDatasetsDraw(chart, args, options) {
    const { ctx, data, chartArea: { top, bottom, left, right, width, height }, scales: { x, y } } = chart;
    ctx.fillStyle = 'rgba(240, 239, 255, 0.3)';
    ctx.fillRect(0, 0, 299, 400);
  },
};

const chartYears = {
  id: 'chart-years',
  afterDatasetsDraw(chart, args, options) {
    const { ctx, data, chartArea: { top, bottom, left, right }, scales: { x, y } } = chart;
  }
}

export const timelineOptions = {
  indexAxis: 'y' as const,
  maintainAspectRatio: false,
  barPercentage: 0.7,
  scales: {
    y: {
      display: false,
    },
    x: {
      type: 'time' as const,
      time: {
        unit: 'month' as const,
      },
    //   grid: {
    //     color: 'white',
    //   },
      min: '2024-01-01',
      max: '2026-12-31',
      position: 'top' as const,
      ticks: {
        callback: function(value: number, index: number, ticks) {
          return `${format(value, 'MMMMM')}`;
        }
      },
      grid: { offset: true },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      color: '#FFF',
      formatter: function (value: { x: string[], y: string }, context: Context) {
        return `${value.y}`;
      },
      font: {
        size: '8px'
      },
    },
  },
};

export const timelinePlugins = [backgroundChartArea];