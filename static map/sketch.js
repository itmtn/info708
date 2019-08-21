//
// border gelocations -180,-85.0511,180,85.0511
// 400 x 399
//

let map;
let mapImage;
const SCALE_X = 2;
const SCALE_Y = 1.5;
let OFFSET_X;
let OFFSET_Y;


function preload(){
    mapImage = loadImage("nz.png");
}

function setup(){
    createCanvas(window.innerWidth, window.innerHeight);   
    noLoop(); 
    let OFFSET_X = (window.innerWidth/2) - (mapImage.width * SCALE_X/2);
    let OFFSET_Y = (window.innerHeight/2) - (mapImage.height * SCALE_Y/2);
    map = new MercatorMap(400, 507, -33.8522, -48.2100, 164.8828, 180);
    background(0);
    image(mapImage, OFFSET_X, OFFSET_Y, mapImage.width * SCALE_X, mapImage.height * SCALE_Y);

    gloc = createVector(-37.788143, 175.278655);
    sloc = map.getScreenLocation(gloc);
    ellipse(sloc.x * SCALE_X + OFFSET_X, sloc.y * SCALE_Y + OFFSET_Y, 30, 30);
}


