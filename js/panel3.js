var layout = {
    title: 'Consumer and Producer Surplus',
    xaxis:{
        //range: [1, 4],
        title: 'Number of Books on Shelf',
        showgrid: true,
        //zeroline: false,
        tick0: 0,
        dtick: 1,
        ticklen: 4,
        tickwidth: 1,
    },
    yaxis:{
        title: 'Price of Books ($)',
        tick0: 0,
        dtick: 1,
        ticklen: 4,
        tickwidth: 1,
    }
};

var supplyCurve = {
    x: [0,1,2,3,4],
    y: [4,3,2,1,0],
    name: 'Evans Demand',
    type: 'scatter'
}

var demandCurve = {
    x: [0,1,2,3,4],
    y: [0,1,2,3,4],
    name: 'Sandras Supply'
}


var econGraph = [supplyCurve, demandCurve];


Plotly.newPlot('panelGraph3', econGraph, layout);
