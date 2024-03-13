Highcharts.chart("chart-container", {
  chart: {
    type: "spline",
    margin: [15, 0, 0, 0],
    backgroundColor: "transparent",
    credits: {
      enabled: false, // Set enabled to false to remove credits
    },
  },
  exporting: false,
  credits: {
    enabled: false,
  },
  title: {
    text: null,
    align: "left",
  },
  legend: {
    enabled: false, // Set enabled to false to remove the legend
  },
  subtitle: {
    text: null,
    align: "left",
  },
  xAxis: {
    type: "datetime",
    labels: {
      overflow: "justify",
      enabled: false,
    },
  },
  yAxis: {
    minorGridLineWidth: 0,
    gridLineWidth: 0,
    alternateGridColor: null,
    labels: {
      enabled: false,
    },
    title: null,
  },
  tooltip: {
    valueSuffix: " m/s",
  },
  plotOptions: {
    spline: {
      lineWidth: 4,
      states: {
        hover: {
          lineWidth: 5,
        },
      },
      marker: {
        enabled: false,
      },
      pointInterval: 3600000, // one hour
      pointStart: Date.UTC(2020, 3, 15, 0, 0, 0),
    },
  },
  series: [
    {
      name: "Hestavollane",
      data: [
        5.4, 5.2, 5.7, 6.3, 5.2, 5.6, 6.1, 5.6, 5.9, 7.1, 8.6, 7.8, 8.6, 8.0,
        9.7, 11.2, 12.5, 13.1, 10.6, 10.9, 8.9, 9.5, 7.5, 3.5, 4.2,
      ],
    },
  ],
});
