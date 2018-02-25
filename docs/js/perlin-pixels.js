function setup() {
	var cnv = createCanvas(600, 600);
	cnv.parent("sketch-container");
	pixelDensity(1);
}

function draw() {
	loadPixels();
	var xoff = 0;
	var yoff = 0;
	var inc = 0.00001;
	for (x = 0; x < width; x++) {
		for (y = 0; y < height; y++) {
			var idx =	(x+y*width)*4;

			var r = noise(x/100, y/100) * 255;
			pixels[idx+0]  = r;
			pixels[idx+1]  = r;
			pixels[idx+2]  = r;
			pixels[idx+3]  = 255;
		}
	}
	updatePixels();
}
