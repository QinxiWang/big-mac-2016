// Graph Panel 1
var layout1 = {
    title: 'Graph 1',
    xaxis:{
        range: [0, 4],
        dtick: 1,
        title: 'Number of Books on Shelf',
        showgrid: true,
    },
    yaxis:{
        range: [0, 4],
        dtick: 1,
        title: 'Price of Books ($)'
    }
};

var supplyCurve1 = {
    x: [null],
    y: [null],
    name: 'Sandras Supply',
    type: 'scatter'
}

var demandCurve1 = {
    x: [null],
    y: [null],
    name: 'Evans Demand'
}

var graph1 = [supplyCurve1, demandCurve1];

Plotly.newPlot('panelGraph1', graph1, layout1);
