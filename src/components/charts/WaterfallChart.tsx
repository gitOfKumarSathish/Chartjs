import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
    chart: {
        type: 'waterfall'
    },
    title: {
        text: 'Waterfall Chart'
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: 'Value'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: '<b>{point.y:,.2f}</b>'
    },
    series: [{
        data: [{
            name: 'Start',
            y: 120000
        }, {
            name: 'Product Revenue',
            y: 569000
        }, {
            name: 'Service Revenue',
            y: 231000
        }, {
            name: 'Positive Balance',
            isIntermediateSum: true,
            color: Highcharts.getOptions().colors[1]
        }, {
            name: 'Fixed Costs',
            y: -342000
        }, {
            name: 'Variable Costs',
            y: -233000
        }, {
            name: 'Balance',
            isSum: true,
            color: Highcharts.getOptions().colors[0]
        }]
    }]
};

const WaterfallChart = () => (
    <HighchartsReact
        highcharts={Highcharts}
        options={options}
    />
);

export default WaterfallChart;