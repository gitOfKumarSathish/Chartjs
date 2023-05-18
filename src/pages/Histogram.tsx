import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';
import * as d3Array from 'd3-array';

const Histogram: React.FC = () => {
    useEffect(() => {
        const data = [21, 14, 23, 17, 29, 21, 12, 18, 26, 31, 22, 16, 19, 27, 24, 15, 28, 19, 25, 20];

        const counts = d3Array.histogram()(data);

        const config = {
            type: 'bar',
            data: {
                labels: counts.map(d => { return `${d.x0}-${d.x1}`; }),
                datasets: [
                    {
                        data: counts.map(d => d.length),
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderWidth: 0,
                    },
                ],
            },
            options: {
                scales: {
                    x: {
                        type: 'linear',
                        beginAtZero: true,
                        ticks: {
                            display: false,
                        },
                    },
                    y: {
                        beginAtZero: true,
                    },
                },
                plugins: {
                    legend: {
                        display: false,
                    },
                },
            },
        };

        const myChart = new Chart(document.getElementById('myChart'), config);

        return () => {
            myChart.destroy();
        };
    }, []);

    return (
        <>
            <div className="chartMenu">
                <p>
                    WWW.CHARTJS3.COM (Chart JS <span id="chartVersion"></span>)
                </p>
            </div>
            <div className="chartCard">
                <div className="chartBox">
                    <canvas id="myChart"></canvas>
                </div>
            </div>
        </>
    );
};

export default Histogram;
