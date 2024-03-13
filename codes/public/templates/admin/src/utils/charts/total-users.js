Highcharts.chart("total-users-container", {
  chart: {
    type: "variwide",
    margin: [0, 0, 0, 0],
    height: null,
    renderTo: document.getElementById("total-users-container").offsetHeight,
  },

  title: {
    text: null,
  },
  exporting: false,
  credits: {
    enabled: false,
  },

  subtitle: {
    text: null,
  },

  xAxis: {
    type: "category",
    legend: {
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

  caption: {
    text: null,
    enabled: false,
  },

  legend: {
    enabled: false,
  },

  series: [
    {
      name: "Labor Costs",
      data: [
        ["Norway", 50.2, 335504],
        ["Denmark", 42, 277339],
        ["Belgium", 39.2, 421611],
        ["Sweden", 38, 462057],
        ["France", 35.6, 2228857],
        ["Netherlands", 34.3, 702641],
        ["Finland", 33.2, 215615],
        ["Germany", 33.0, 3144050],
        ["Austria", 32.7, 349344],
        ["Ireland", 30.4, 275567],
        ["Italy", 27.8, 1672438],
        ["United Kingdom", 26.7, 2366911],
        ["Spain", 21.3, 1113851],
        ["Greece", 14.2, 175887],
        ["Portugal", 13.7, 184933],
        ["Czech Republic", 10.2, 176564],
        ["Poland", 8.6, 424269],
        ["Romania", 5.5, 169578],
      ],
      tooltip: {
        pointFormat:
          "Labor Costs: <b>€ {point.y}/h</b><br>" +
          "GDP: <b>€ {point.z} million</b><br>",
      },
      borderRadius: 3,
      colorByPoint: true,
    },
  ],
});
