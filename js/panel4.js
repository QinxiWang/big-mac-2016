var layout = {
    title: 'A Title',
    xaxis:{
        //range: [1, 4],
        title: 'Number of Books',
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
    type: 'scatter'
}

var demandCurve = {
    x: [0,1,2,3,4],
    y: [0,1,2,3,4]
}

var dash = {
    x:[1,1,1, 1,0],
    y:[1,2,3, 3,3],
    line: {
        dash: 'dot',
        width: 2
    }
}

var econGraph = [supplyCurve, demandCurve, dash];


Plotly.newPlot('panelGraph4', econGraph, layout);
