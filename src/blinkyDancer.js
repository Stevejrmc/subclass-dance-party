var BlinkyDancer = function(top, left, timeBetweenSteps) {
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  Dancer.call(this, top, left, timeBetweenSteps);

};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this); // `this` is bound to blinkyDancer, whereas without call(), `step()` would be bound to `Dancer.prototype`. We want to bind to `blinkyDancer`

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};

// BlinkyDancer.prototype.oldStep = Dancer.prototype.step;

// var kevin = new BlinkDancer(10,20,100);
// this = Object.create(BlinkyDancer.prototype);
// set properties:
// Inherited:
//   this.$node = $('<span class="dancer"></span>');
//   this.step()

// set methods/functions:
// return this
