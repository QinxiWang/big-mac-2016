// $(function() {
//     console.log("test")
// });

//alert("test")

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
    x:[0,1,2, 2,2],
    y:[2,2,2, 1,0],
    line: {
        dash: 'dot',
        width: 2
    }
}

var econGraph = [supplyCurve, demandCurve, dash];


Plotly.newPlot('finalGraph', econGraph, layout);
