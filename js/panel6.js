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

var dash = {
    x:[0,1,2, 0],
    y:[0,1,2, 2],
    name: 'Evans Surplus',
    line: {
        dash: 'dot',
        width: 2
    },
    fill:'tozeroy',
}

var dash2 = {
    x:[0,1,2,1,0],
    y:[2,2,2,3,4],
    name: 'Sandras Surplus',
    line: {
        dash: 'dot',
        width: 2
    },
    fill:'tozerox',
}

var econGraph = [supplyCurve, demandCurve, dash, dash2];


Plotly.newPlot('panelGraph6', econGraph, layout);
