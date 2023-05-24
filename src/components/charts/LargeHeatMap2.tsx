// Here's an example configuration for a heatmap chart that visualizes hourly temperature in 2017:;

import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import boost from 'highcharts/modules/boost';
import { data } from '../../assets/data';

// Initialize the Boost module
boost(Highcharts);

// Define the chart options
const options = {
    chart: {
        type: 'heatmap',
        height: '100%',
        plotBorderWidth: 1
    },
    title: {
        text: 'Hourly Temperature in 2017'
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
        categories: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
        title: null,
        reversed: true
    },
    colorAxis: {
        min: -10,
        max: 30,
        minColor: '#0071A7',
        maxColor: '#FF404E'
    },
    series: [{
        data: data // Add your data here
    }],

};

const LargeHeatMap2 = () => {
    return (
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    );
};

export default LargeHeatMap2;