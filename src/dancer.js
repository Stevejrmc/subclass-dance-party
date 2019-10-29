// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');

  // this.timeBetweenSteps = timeBetweenSteps;
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
};

Dancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  // debugger;
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function (top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //                     b
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

// var mike = new Dancer(10, 20, 100);
// this = Object.create(Dancer.prototype);
// set properties:
// this.$node = value;
// this.setPosition(10,20);
// this.step() => setTimeout(this.step, 100);

// set methods/functions
// return this
