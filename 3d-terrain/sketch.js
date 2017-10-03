var cols, rows;
var terrain_scale = 20;
function setup() {
	createCanvas(600,600, WEBGL);
	cols = 600.0 / terrain_scale;
	rows = 600.0 / terrain_scale;
}

function draw() {
	background(0);
    stroke(255);
//    noFill();
    box(40);
//	for (var x = 0; x < cols; x++) {
//		for (var y = 0; y < rows; y++) {
//			rect(
//                x*terrain_scale, y*terrain_scale, terrain_scale, terrain_scale);
//		}
//	}
}
