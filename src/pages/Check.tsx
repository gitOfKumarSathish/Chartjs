import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsHeatmap from "highcharts/modules/heatmap";
import HighchartsHistogram from "highcharts/modules/histogram-bellcurve";

// Initialize the heatmap and histogram modules
HighchartsHeatmap(Highcharts);
HighchartsHistogram(Highcharts);

const HeatmapHistogramChart = () => {
    // Set up the initial state for the chart data
    const [chartData, setChartData] = useState({
        heatmap: {
            chart: {
                type: "heatmap",
                height: "40%",
                marginTop: 40,
            },
            title: {
                text: "Heatmap Chart",
            },
            series: [
                {
                    name: "Sales per employee",
                    borderWidth: 1,
                    data: [
                        [0, 0, 10],
                        [0, 1, 19],
                        [0, 2, 8],
                        [0, 3, 24],
                        [0, 4, 67],
                        [1, 0, 92],
                        [1, 1, 58],
                        [1, 2, 78],
                        [1, 3, 117],
                        [1, 4, 48],
                        [2, 0, 35],
                        [2, 1, 15],
                        [2, 2, 123],
                        [2, 3, 64],
                        [2, 4, 52],
                        [3, 0, 72],
                        [3, 1, 132],
                        [3, 2, 114],
                        [3, 3, 19],
                        [3, 4, 16],
                        [4, 0, 38],
                        [4, 1, 5],
                        [4, 2, 8],
                        [4, 3, 117],
                        [4, 4, 115],
                    ],
                    dataLabels: {
                        enabled: true,
                        color: "#000000",
                    },
                },
            ],
            xAxis: {
                categories: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            },
            yAxis: {
                categories: ["John", "Jane", "Joe", "Jack", "Jill"],
            },
            colorAxis: {
                min: 0,
                minColor: "#FFFFFF",
                maxColor: Highcharts.getOptions().colors[0],
            },
        },
        histogram: {
            chart: {
                type: "histogram",
                height: "60%",
                marginTop: 40,
            },
            title: {
                text: "Histogram Chart",
            },
            series: [
                {
                    name: "Histogram 1",
                    data: [11, 2, 13, 14, 5, 16, 7, 18, 9],
                },
                {
                    name: "Histogram 2",
                    data: [2, 4, 6, 8, 10, 12, 14, 16, 18],
                },
            ],
            xAxis: [
                {
                    title: {
                        text: "Data",
                    },
                    alignTicks: false,
                },
                {
                    title: {
                        text: "Histogram",
                    },
                    alignTicks: false,
                    opposite: true,
                },
            ],
            yAxis: [
                {
                    title: {
                        text: "Frequency",
                    },
                },
                {
                    title: {
                        text: "Histogram",
                    },
                    opposite: true,
                },
            ],
            plotOptions: {
                histogram: {
                    accessibility: {
                        pointDescriptionFormatter: function (point: { index: number; x: number; x2: number; y: any; }) {
                            var ix = point.index + 1;
                            var x1 = point.x.toFixed(3);
                            var x2 = point.x2.toFixed(3);
                            var val = point.y;
                            return ix + ". " + x1 + " to " + x2 + ", " + val + ".";
                        },
                    },
                },
            },
        },
    });

    // Set up the options for the pan and zoom feature
    const [panZoomOptions, setPanZoomOptions] = useState({
        chart: {
            zoomType: "xy",
        },
        xAxis: {
            gridLineWidth: 1,
        },
        yAxis: {
            startOnTick: false,
            endOnTick: false,
        },
        title: {
            text: "Pan and Zoom Chart",
        },
        series: [
            {
                type: "line",
                data: [
                    [0, 1],
                    [1, 6],
                    [2, 3],
                    [4, 5],
                    [6, 4],
                    [8, 7],
                    [10, 9],
                ],
                marker: {
                    enabled: false,
                },
                states: {
                    hover: {
                        lineWidth: 0,
                    },
                },
                enableMouseTracking: false,
            },
            {
                type: "scatter",
                data: [
                    [1, 7],
                    [2, 8],
                    [3, 6],
                    [4, 9],
                    [5, 8],
                    [6, 7],
                    [7, 5],
                    [8, 6],
                    [9, 7],
                ],
                marker: {
                    radius: 5,
                },
            },
        ],
    });

    return (
        <>
            <HighchartsReact highcharts={Highcharts} options={chartData.heatmap} />
            <HighchartsReact highcharts={Highcharts} options={chartData.histogram} />
            <HighchartsReact highcharts={Highcharts} options={panZoomOptions} />
        </>
    );
};

export default HeatmapHistogramChart;