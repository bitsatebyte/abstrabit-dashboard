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
  beforeDatasetsDraw(chart: any, args: any, options: any) {
    const { ctx, data, chartArea: { top, bottom, left, right, width, height }, scales: { x, y } } = chart;
    ctx.save();

    bgColors(0, 10, 'rgba(240, 239, 255, 1)');
    bgColors(10, 20, 'rgba(241, 246, 229, 1)');
    bgColors(20, 30, 'rgba(254, 245, 231, 1)');
    function bgColors(bracketLow, bracketHigh, color){
      ctx.fillStyle = color;
      ctx.fillRect(left, x.getPixelForValue(bracketHigh), width, x.getPixelForValue(bracketLow) - x.getPixelForValue(bracketHigh));
      ctx.restore();
    }
  },
};

const chartYears = {
  id: 'chart-years',
  afterDatasetsDraw(chart: any, args: any, options: any) {
    const { ctx, data, chartArea: { top, bottom, left, right }, scales: { x, y } } = chart;
    ctx.fillStyle = 'blue';
    ctx.fillText('text', x.getPixelForValue(0), 10);
  }
}

export const timelineOptions = {
  layout: {
    padding: {
      top: 1,
    },
  },
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
        callback: function(value: number, index: number, ticks: any) {
          return `${format(value, 'MMMMM')}`;
        },
        padding: -1,
      },
      grid: { offset: true },
    },
    x1: {
      align: 'end',
      type: 'time' as const,
      time: {
        unit: 'month' as const,
      },
      position: 'top',
      ticks: {
        callback: function(value: number, index: number, ticks: any) {
          console.log(index);
          if(index === 6) { return '2024' };
          if(index === 18) { return '2025' };
          if(index === 30) { return '2026' };
        }
      },
      grid: {
        drawOnChartArea: false,
        drawTicks: false,
      },
      border: {
        display: false,
      },
      min: '2024-01-01',
      max: '2026-12-31',
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
        size: 8,
      },
    },
  },
};

export const timelinePlugins = [backgroundChartArea, chartYears];