import { FunctionComponent, useEffect, useRef } from 'react';
import { Chart, ChartConfiguration, registerables } from 'chart.js';
import styles from './line-graph.module.scss';

interface LineGraphProps {
  data: number[];
}

export const LineGraph: FunctionComponent<LineGraphProps> = ({ data }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      const ctx = chartRef.current.getContext('2d');

      if (ctx) {
        Chart.register(...registerables);

        const chartConfig: ChartConfiguration<'line', number[]> = {
          type: 'line',
          data: {
            labels: ['1', '2', '3', '4', '5'],
            datasets: [
              {
                label: 'Line Graph',
                data,
                borderColor: '#007bff',
                fill: false
              }
            ]
          }
        };

        chartInstanceRef.current = new Chart(ctx, chartConfig);
      }
    }

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
        chartInstanceRef.current = null;
      }
    };
  }, [data]);

  return <canvas ref={chartRef} className={styles.chart} />;
};
