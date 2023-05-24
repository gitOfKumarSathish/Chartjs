import React, { Component } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsHeatmap from 'highcharts/modules/heatmap';
import HighchartsSpectrogram from 'highcharts/modules/solid-gauge';

// Initialize the heatmap and spectrogram modules
HighchartsHeatmap(Highcharts);
HighchartsSpectrogram(Highcharts);

class SpectrogramChart extends Component {
    render() {
        const options = {
            chart: {
                type: 'heatmap'
            },
            title: {
                text: 'Spectrogram Chart'
            },
            xAxis: {
                categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                title: {
                    text: 'Day'
                }
            },
            yAxis: {
                categories: ['1am', '2am', '3am', '4am', '5am'],
                title: {
                    text: 'Time'
                }
            },
            colorAxis: {
                min: 0,
                max: 1,
                stops: [
                    [0, '#3060cf'],
                    [0.5, '#fffbbc'],
                    [0.9, '#c4463a']
                ]
            },
            series: [{
                name: 'Spectrogram',
                borderWidth: 0,
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
                    enabled: true,
                    color: '#000000'
                }
            }]
        };

        return (
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        );
    }
}

export default SpectrogramChart;