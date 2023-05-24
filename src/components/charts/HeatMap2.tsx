import React, { Component } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsHeatmap from 'highcharts/modules/heatmap';

// Initialize the heatmap module
HighchartsHeatmap(Highcharts);

class HeatmapChart2 extends Component {
    render() {
        const options = {
            chart: {
                type: 'heatmap',
                marginTop: 40,
                marginBottom: 80,
                // plotBorderWidth: 0
            },
            boost: {
                useGPUTranslations: true
            },
            title: {
                text: 'Heatmap Chart with Multiple Colors'
            },

            xAxis: {
                categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                title: {
                    text: 'Day'
                },
                labels: {
                    style: {
                        fontSize: '12px'
                    }
                }
            },
            yAxis: {
                categories: ['1am', '2am', '3am', '4am', '5am'],
                title: {
                    text: 'Time'
                },
                labels: {
                    style: {
                        fontSize: '12px'
                    }
                }
            },
            colorAxis: {
                stops: [
                    [0, '#3060cf'],
                    [0.5, '#fffbbc'],
                    [0.9, '#c4463a']
                ],
                min: 0,
                max: 1,
                startOnTick: false,
                endOnTick: false,
                labels: {
                    format: '{value}'
                }
            },
            series: [{
                // borderWidth: 1,
                turboThreshold: 0, // Set turboThreshold to 0 to disable threshold
                data: [
                    [0, 0, 0.1],
                    [0, 1, 0.2],
                    [0, 2, 0.3],
                    [0, 3, 0.4],
                    [0, 4, 0.5],
                    [1, 0, 0.6],
                    [1, 1, 0.7],
                    [1, 2, 0.8],
                    [1, 3, 0.9],
                    [1, 4, 0.1],
                    [2, 0, 0.2],
                    [2, 1, 0.3],
                    [2, 2, 0.4],
                    [2, 3, 0.5],
                    [2, 4, 0.6],
                    [3, 0, 0.7],
                    [3, 1, 0.8],
                    [3, 2, 0.9],
                    [3, 3, 0.1],
                    [3, 4, 0.2],
                    [4, 0, 0.3],
                    [4, 1, 0.4],
                    [4, 2, 0.5],
                    [4, 3, 0.6],
                    [4, 4, 0.7]
                ],
                dataLabels: {
                    enabled: false, // show value on top of Boxes
                    color: '#000000'
                }
            }],
            plotOptions: {
                heatmap: {
                    borderWidth: 0, // Set border width to 0
                    states: {
                        hover: {
                            brightness: 0.1
                        }
                    }
                }
            },
            legend: {
                align: 'right',
                layout: 'vertical',
                margin: 0,
                verticalAlign: 'top',
                y: 25,
                symbolHeight: 280
            }
        };

        return (
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        );
    }
}

export default HeatmapChart2;