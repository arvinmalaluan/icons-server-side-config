// Data retrieved from https://netmarketshare.com/
// Make monochrome colors
const colors = Highcharts.getOptions().colors.map((c, i) =>
  // Start out with a darkened base color (negative brighten), and end
  // up with a much brighter color
  Highcharts.color(Highcharts.getOptions().colors[0])
    .brighten((i - 3) / 7)
    .get()
);

// Build the chart
Highcharts.chart("user-by-demo-container", {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: "pie",
    height: "80%",
    margin: [25, 0, 0, 0],
  },
  exporting: false,
  credits: { enabled: false },
  title: {
    text: null,
    align: "left",
  },
  tooltip: {
    pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
  },
  accessibility: {
    point: {
      valueSuffix: "%",
    },
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: "pointer",
      dataLabels: {
        enabled: false,
      },
    },
  },
  series: [
    {
      name: "Brands",
      colorByPoint: true,
      data: [
        {
          name: "Chrome",
          y: 74.77,
          sliced: true,
          selected: true,
        },
        {
          name: "Edge",
          y: 12.82,
        },
        {
          name: "Firefox",
          y: 4.63,
        },
        {
          name: "Safari",
          y: 2.44,
        },
        {
          name: "Internet Explorer",
          y: 2.02,
        },
        {
          name: "Other",
          y: 3.28,
        },
      ],
    },
  ],
});
