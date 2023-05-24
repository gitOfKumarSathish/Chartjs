import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsTimeline from 'highcharts/modules/timeline';

HighchartsTimeline(Highcharts);

const options = {
    chart: {
        type: 'timeline'
    },
    title: {
        text: 'Timeline Chart'
    },
    xAxis: {
        type: 'datetime'
    },
    yAxis: {
        title: {
            text: null
        }
    },
    tooltip: {
        style: {
            width: 300
        }
    },
    series: [{
        dataLabels: {
            allowOverlap: false,
            format: '<span style="color:{point.color}">● </span><span style="font-weight: bold;" > ' +
                '{point.x:%d %b %Y}</span><br/>{point.label}'
        },
        marker: {
            symbol: 'circle'
        },
        data: [{
            x: Date.UTC(2021, 0, 1),
            label: 'Event 1'
        }, {
            x: Date.UTC(2021, 2, 1),
            label: 'Event 2'
        }, {
            x: Date.UTC(2021, 4, 1),
            label: 'Event 3'
        }, {
            x: Date.UTC(2021, 6, 1),
            label: 'Event 4'
        }]
    }]
};

const TimelineChart = () => (
    <HighchartsReact
        highcharts={Highcharts}
        options={options}
    />
);

export default TimelineChart;