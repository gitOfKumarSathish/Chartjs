import React, { useRef, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import annotations from "highcharts/modules/annotations";

// Initialize the Annotations module
annotations(Highcharts);

const options = {
  chart: {
    type: "line"
  },
  title: {
    text: "Annotations as Bars in Time Series Chart"
  },
  xAxis: {
    type: "datetime"
  },
  yAxis: {
    title: {
      text: "Value"
    }
  },
  annotations: [{
    draggable: '',
    labels: [{
      // shape: 'circle',
      type: "rect",
      // overflow: 'allow',
      text: 'true',
      padding: 15,
      point: {
        x: 100,
        y: 200
      },
      style: {
        // textOutline: '1px white',
        fontSize: '10px',
        width: '200px', // 30 days
        height: '200px',
        backgroundColor: "rgba(49, 141, 201, 1)",
      }
      // fill: "rgba(49, 141, 201, 1)",
      // strokeWidth: 1,
      // strokeColor: "rgba(49, 141, 201, 1)",
    }]
  }],
  // annotations: [
  //   {
  //     labels: [{

  //       shapes: [
  //         {
  //           type: "rect",
  //           point: {
  //             x: Date.UTC(2021, 0, 1),
  //             y: 0
  //           },
  //           width: 30 * 24 * 60 * 60 * 1000, // 30 days
  //           height: 100,
  //           fill: "rgba(255, 0, 0, 0.5)",
  //           strokeWidth: 0
  //         }
  //       ]
  //     }]
  //   }
  // ],
  series: [
    {
      data: [
        [Date.UTC(2020, 11, 1), 5],
        [Date.UTC(2021, 0, 1), 10],
        [Date.UTC(2021, 1, 1), 20],
        [Date.UTC(2021, 2, 1), 15]
      ]
    }
  ]
};

const BarAnnotation = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Access the chart object and add annotations programmatically
    const chart = chartRef.current.chart;
    chart.addAnnotation({
      shapes: [
        {
          type: "rect",
          point: {
            x: Date.UTC(2021, 1, 1),
            y: 0
          },
          width: 30 * 24 * 60 * 60 * 1000, // 30 days
          height: 100,
          fill: "rgba(0, 255, 0, 0.5)",
          strokeWidth: 0
        }
      ]
    });
  }, []);

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} ref={chartRef} />
    </div>
  );
};

export default BarAnnotation;