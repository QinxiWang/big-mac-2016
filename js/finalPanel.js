// Final Graph rendering
// var layout = {
//     title: 'A Title',
//     xaxis:{
//         //range: [1, 4],
//         title: 'Number of Books',
//         showgrid: true,
//         //zeroline: false,
//         tick0: 0,
//         dtick: 1,
//         ticklen: 4,
//         tickwidth: 1,
//     },
//     yaxis:{
//         title: 'Price of Books ($)',
//         tick0: 0,
//         dtick: 1,
//         ticklen: 4,
//         tickwidth: 1,
//     }
// };
//
// var supplyCurve = {
//     x: [0,1,2,3,4],
//     y: [4,3,2,1,0],
//     type: 'scatter'
// }
//
// var demandCurve = {
//     x: [0,1,2,3,4],
//     y: [0,1,2,3,4]
// }
//
// var dash = {
//     x:[0,1,2, 2,2],
//     y:[2,2,2, 1,0],
//     line: {
//         color: 'green',
//         dash: 'dot',
//         width: 2
//     }
// }
//
// var econGraph = [supplyCurve, demandCurve, dash];
//
// Plotly.newPlot('finalGraph', econGraph, layout);

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
    x:[0,1,2, 0],
    y:[0,1,2, 2],
    line: {
        dash: 'dot',
        width: 2
    },
    fill:'tozeroy',
}

var dash2 = {
    x:[0,1,2,1,0],
    y:[2,2,2,3,4],
    line: {
        dash: 'dot',
        width: 2
    },
    fill:'tozerox',
}

var econGraph = [supplyCurve, demandCurve, dash, dash2];

Plotly.newPlot('finalGraph', econGraph, layout);




// Animation for user interaction with panels corresponding to graph
(function(){

    var highlightTraceColor = function(){
        var updateD3 = {
            line: {
                color: 'blue',
                width: 8.0
            }
        };
        Plotly.restyle(finalGraph, updateD3, [0]);
    }

    //d1

    //d2

    //d3

    var revertColorD3 = function(){
        var revertChangeD3 = {
            line: {color: 'blue'}
        };
        Plotly.restyle(finalGraph, revertChangeD3, [0]);
    }

    var toggleGraphColorD3 = function(){ $( ".d3" )
        .mouseenter(function() {
          highlightTraceColor();
        })
        .mouseleave(function() {
            revertColorD3();
        });
    }

    //d4
    var highlightTraceColorD4 = function(){
        var updateD4 = {
            line: {
                color: 'orange',
                width: 8.0
            }
        };
        Plotly.restyle(finalGraph, updateD4, [1]);
    }

    //d1

    //d2

    //d3

    var revertColorD4 = function(){
        var revertChangeD4 = {
            line: {color: 'orange'}
        };
        Plotly.restyle(finalGraph, revertChangeD4, [1]);
    }

    var toggleGraphColorD4 = function(){ $( ".d4" )
        .mouseenter(function() {
          highlightTraceColorD4();
        })
        .mouseleave(function() {
            revertColorD4();
        });
    }
    //d5

    //d6

    //d7




    // behavior calls
    toggleGraphColorD3();
    toggleGraphColorD4();


}());
