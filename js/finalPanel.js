// Final Graph rendering
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
        color: 'yellow',
        dash: 'dot',
        width: 2
    }
}

var econGraph = [supplyCurve, demandCurve, dash];

var graphRef = Plotly.newPlot('finalGraph', econGraph, layout);

// Animation for user interaction with panels corresponding to graph
var highlightTraceColor = function(){
    var update = {
        line: {color: 'green'}
    };
    Plotly.restyle(finalGraph, update, [0]);
}

var revertColor = function(){
    var revertChange = {
        line: {color: 'blue'}
    };
    Plotly.restyle(finalGraph, revertChange, [0]);
}

// working code
// var n = 0;
// $( "div.enterleave" ) div.enterleave
//   .mouseenter(function() {
//     n += 1;
//     highlightTraceColor();
//     $( this ).find( "span" ).text( "mouse enter x " + n );
//   })
//   .mouseleave(function() {
//       revertColor();
//     $( this ).find( "span" ).text( "mouse leave" );
//   });

// var n = 0;
// $( ".d1")
//   .mouseenter(function() {
//     n += 1;
//     highlightTraceColor();
//     $( this ).find( "span" ).text( "mouse enter x " + n );
//   })
//   .mouseleave(function() {
//       revertColor();
//     $( this ).find( "span" ).text( "mouse leave" );
//   });


  var toggleGraphColors = function(){ $( ".d1" )
    .mouseenter(function() {
      highlightTraceColor();
    })
    .mouseleave(function() {
        revertColor();
    });
};

toggleGraphColors();
