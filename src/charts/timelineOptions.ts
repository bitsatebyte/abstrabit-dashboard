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

const xScalePadding = {
  id: 'x-scale-padding',
  beforeDatasetsDraw(chart: any, args: any, pluginOptions: any) {
    const { ctx, data, scales: { x, y } } = chart;
    x._labelItems.forEach((label: any, index: number) => {
      label.textOffset = 0;
    });
  }
}

const chartAreaBorder = {
  id: 'chart-area-border',
  borderColor: 'blue', 
  borderWidth: 1,
};

export const timelineOptions = {
  layout: {
    padding: {
      top: 1,
    },
  },
  indexAxis: 'y' as const,
  maintainAspectRatio: false,
  barPercentage: 0.9,
  scales: {
    y: {
      display: false,
    },
    x: {
      type: 'time' as const,
      time: {
        unit: 'month' as const,
      },
      min: '2024-01-01',
      max: '2026-12-31',
      position: 'top' as const,
      ticks: {
        callback: function(value: number, index: number, ticks: any) {
          return `${format(value, 'MMMMM')}`;
        },
        length: 20,
        offset: true,
        padding: -7,
      },
      grid: { 
        offset: true,
        tickLength: 20,
      },
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
        },
      },
      grid: {
        drawOnChartArea: false,
        drawTicks: false,
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
        size: 10,
      },
    },
  },
};

export const timelinePlugins = [chartAreaBorder, xScalePadding];
