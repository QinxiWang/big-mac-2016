// Graph Panel 0
var trace1 = {
  x: [null],
  y: [null],
  name: 'Sandras Demand',
  type: 'scatter'
};

var trace2 = {
  x: [null],
  y: [null],
  name: 'Evans Supply',
  type: 'scatter'
};

var data = [trace1, trace2];

var layout = {
  title: 'Graph 0',
  xaxis: {
    title: 'Number of Books on Shelf',
    range: [0, 4],
    dtick: 1,
    showgrid: true,
    showline: true,
    showticklabels: true
  },
  yaxis: {
    // autorange: true,
    showgrid: true,
    zeroline: false,
    showline: false,
    autotick: true,
    showticklabels: false
  }
};
Plotly.newPlot('panelGraph0', data, layout);
