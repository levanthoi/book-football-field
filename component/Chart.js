import Chart from 'chart.js/auto';
import { colors } from 'data/data';
import { useEffect, useRef } from 'react';
import styles from 'static/scss/chart.module.scss';

export const ChartCustom = ({ dataChart, type }) => {
  const chartRef = useRef(null);
  useEffect(() => {
    const ctxChart = chartRef.current.getContext('2d');

    const gradientChart = ctxChart.createLinearGradient(0, 16, 0, 600);

    gradientChart.addColorStop(0, colors.purple.half);
    gradientChart.addColorStop(0.65, colors.purple.quarter);
    gradientChart.addColorStop(1, colors.purple.zero);

    const configChart = {
      type,
      data: dataChart,
    };

    const myChart = new Chart(ctxChart, configChart);

    return function cleanup() {
      myChart.destroy();
    };
  }, []);
  return (
    <div className={styles.chart_bar}>
      <canvas ref={chartRef} />
    </div>
  );
};
