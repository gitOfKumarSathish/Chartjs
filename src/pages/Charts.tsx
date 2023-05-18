import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarElement, LogarithmicScale } from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import zoomPlugin from "chartjs-plugin-zoom";

ChartJS.register(
    zoomPlugin,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    LogarithmicScale
);


const ReactChart = () => {

    const options: any = {
        responsive: false,
        interaction: {
            intersect: false,
            mode: 'index',
        },
        plugins: {
            legend: {
                display: true,
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Bar Chart',
            },
            zoom: {
                pan: {
                    enabled: true,
                    mode: "x",
                    // speed: 1,
                    // modifierKey: 'ctrl',
                    // overScaleMode: "xy",
                    // scaleMode: "xy",
                    threshold: 10
                },
                zoom: {
                    drag: {
                        enable: true,
                    },
                    // wheel: {
                    //     enabled: true // SET SCROOL ZOOM TO TRUE
                    // },
                    // mode: "xy",
                    // speed: 1,
                    // pinch: {
                    //     enabled: true
                    // },
                },

            },
        },
        scales: {
            y: {
                type: "logarithmic",
                title: {
                    display: true,
                    text: 'Y-Axis Title'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'X-Axis Title'
                }
            }
        },
        barPercentage: 1,
        categoryPercentage: 1
    };

    const labels = [1, 2, 3, 4, 5, 6, 7, 8];
    const logNumbers = (num) => {
        const data = [];

        for (let i = 0; i < num; ++i) {
            data.push(Math.ceil(Math.random() * 10.0) * Math.pow(10, Math.ceil(Math.random() * 5)));
        }

        return data;
    };
    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                // data: logNumbers(7),
                // data: labels.map(() => Math.floor(Math.random() * 100000)),
                data: [1, 2, 3, 4, 5, 6, 7, 8],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Dataset 2',
                // data: logNumbers(labels.length),
                data: [1, 2, 3, 4, 5, 6, 7, 8],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
            {
                label: 'Dataset 3',
                // data: logNumbers(labels.length),
                data: [1, 2, 3, 4, 5, 6, 7, 8],
                borderColor: 'lightgreen',
                backgroundColor: 'lightgreen',
            },
        ],
    };

    return (
        <div>
            {/* <Line options={options} data={data} width={600} height={400} /> */}
            <Bar options={options} data={data} width={600} height={400} />
        </div>
    );
};


export default React.memo(ReactChart);
