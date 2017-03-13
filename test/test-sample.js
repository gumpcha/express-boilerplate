require('should');

function promiseFunc(param) {
  return Promise.resolve(param);
}


describe('test-promise', function() {
  before(function() {
    return Promise.resolve(true);
  });

  it('test-primitive', function() {
    this.timeout(3000);

    var expect = 3;
    return promiseFunc(expect).then(function(actual) {
      actual.should.be.equal(expect);
    });
  });
});
