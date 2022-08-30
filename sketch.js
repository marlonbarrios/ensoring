//An enso circle or ensō (円相) is a minimalist Japanese symbol that features a simple, circular shape that is not filled in, drawn to leave out the outline.

//Ensō: ensō rings represent enlightenment. Enlightenment can be defined as an awakening or understanding of something. With it, your goal is to be enlightened about the beauty of your inner self and emptiness. 
//Tried to simulate the quality of the ink and watercolor

//form is emptiness emptiness is form

//Concept and code by: Marlon Barrios Solano



var  start = 0;

var settings = {
  space: 0.05,
  circleRadius: 180,
  negHeight: -199,
  posHeight: 52,
  start: 0.01
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  noiseDetail(2,1)  


//   gui = new dat.GUI();
//   gui.add(settings, 'space',0.05, 2.0).name("Density")
//   gui.add(settings, 'circleRadius', 0, 200).name("Radius")
//   gui.add(settings, 'negHeight', -200, -1).name("Negative Height");
//   gui.add(settings, 'posHeight', 1, 200).name("Positive Height");
//   gui.add(settings, 'start', 0.01, 0.1).name("Animation Speed");


//   gui.width = 300;
//   gui.close();
//   gui.remember(settings);

}

function windowResized() {
  background(0);
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(230, 10);
  noStroke();
  translate(width / 2, height / 2);



 for (var i = 0; i < 360; i += settings.space) {

  var xoff = map(cos(i), -1, 1, 0, 3);
  var yoff = map(sin(i), -1, 1, 0, 3);

  var n = noise(xoff + start , yoff + start);

  var h = map(n, 0, 1, settings.negHeight, settings.posHeight);

  var r = map(sin(i), -1, 1, 100, 255);
  var g = map(h, -150, 150, 0 , 255);
  var b = map(n , 0 , 1, 0, 255);

  fill(r, g, b, 255);


 rotate(settings.space)
  rect(settings.circleRadius, settings.circleRadius , h, 1)

 }

 start += settings.start;
}
