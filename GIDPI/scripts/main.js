/**
* Add functionality to page. This ist for testing only.
*/
var chart = null;

$(document).ready(function(){
	
  // create the flowchart instance
  chart = new FlowChart($);
  
  // add your node templates in a key-value format
  // where key is the name and css class of the node and value is the content
  chart.nodeTemplates = {
    "simple-node": "<div></div>",
    "expression-node": "<svg width='100' height='50'><rect x='2' y='2' rx='10' ry='10' width='90' height='40' /></svg>",
    // "decision-node": "<svg width='60' height='60'><polygon points='30,5 55,30 30,55 5,30' /></svg>"
  };

  // set the root element position coordinates
  chart.rootElementPosition = {left: 60, top: 5};

  // set offset between parent and child node
  // nodes are always added from left to right horizontally
  chart.offsetForNextElement = 150;

  // set the effect for node action end, like node creation or movement
  chart.nodeActionEndEffect = 'bounce';

  // add nodes actions
  chart.addNodeActions = function(nodeObj, chartInstanceObj){
    nodeObj.click(function(){
      chartInstanceObj.addNode('simple-node', nodeObj);
    });
    nodeObj.on('contextmenu', function(event){
      chartInstanceObj.deleteNode(nodeObj.attr('id'));
      return false;
    });
  };
  
  // import flowchart
  var chartJSON = {
	  nodes: [
	{ id: 'node-0', type: 'expression-node', left: 900 , top: 430},
	{ id: 'node-1', type: 'simple-node', left: 380, top: 100},
    { id: 'node-2', type: 'simple-node', left: 1000, top: 220},
    { id: 'node-3', type: 'simple-node', left: 260, top: 270},
    { id: 'node-4', type: 'simple-node', left: 400, top: 550},
    { id: 'node-5', type: 'simple-node', left: 660, top: 600},
    { id: 'node-6', type: 'simple-node', left: 900, top: 570}

	  ],
	  connections: [
	    { start: 'node-0', end: 'node-1'},
      { start: 'node-1', end: 'node-0'},
      { start: 'node-2', end: 'node-0'},
      { start: 'node-3', end: 'node-0'},
      { start: 'node-4', end: 'node-0'},
      { start: 'node-5', end: 'node-0'},
      { start: 'node-6', end: 'node-0'}
	  ]
  };  
  chart.importChart(chartJSON);
  
  //programmatically add nodes to the chart 

  var node7 = chart.addNode('simple-node', $('#node-7')); 

});


