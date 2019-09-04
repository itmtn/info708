const CANVAS_WIDTH = 700;
const CANVAS_HEIGHT = 500;
let chart;
let data;

function preload(){
    data = loadJSON('data.json');
}

function setup(){
    let canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);       
    canvas.parent("canvas-container");
    chart = new Chart(data);
}

function draw(){    
    clear();
    chart.drawGrid();
    chart.plotData();
}


