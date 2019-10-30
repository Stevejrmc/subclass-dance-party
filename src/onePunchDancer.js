// Create an instance of class Dancer
var OnePunchDancer = function(top, left, timeBetweenSteps) {

  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="https://thumbs.gfycat.com/GreedyIdealisticImago-max-1mb.gif" class="puncher">');

};

OnePunchDancer.prototype = Object.create(Dancer.prototype);
OnePunchDancer.prototype.constructor = OnePunchDancer;

// OnePunchDancer.prototype.punch = function() {


// };