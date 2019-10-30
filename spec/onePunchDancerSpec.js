describe('onePunchDancer', function() {

  var onePunchDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    onePunchDancer = new onePunchDancer(15, 25, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(onePunchDancer.$node).to.be.an.instanceof(jQuery);
  });

  xit('should have a step function that makes its node blink', function() {
    sinon.spy(onePunchDancer.$node, 'toggle');
    onePunchDancer.step();
    expect(onePunchDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(onePunchDancer, 'step');
      expect(onePunchDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(onePunchDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(onePunchDancer.step.callCount).to.be.equal(2);
    });
  });
});
