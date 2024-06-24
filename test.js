var assert = chai.assert;

describe('countOccurence', function() {

  it('count hello world', function() {
    assert.equal(countOccurence('Hello world'), 1);
    assert.equal(countOccurence('hello world'), 1);
    assert.equal(countOccurence('Hello World'), 1);
    assert.equal(countOccurence('Hello'), 2);
    assert.equal(countOccurence('world'), 2);
  });

  it('count p', function() {
    assert.equal(countOccurence('p'), 3);
  });

  it('count right', function() {
    assert.equal(countOccurence('right'), 1);
  });

  it('count n', function() {
    assert.equal(countOccurence('n'), 4);
  });

  it('count log', function() {
    assert.equal(countOccurence('log'), 1);
    assert.equal(countOccurence('console.log'), 1);
  });

  it('count clock', function() {
    assert.equal(countOccurence("o'clock"), 1);
    assert.equal(countOccurence('clock'), 0);
  });

  it('count e-mail', function() {
    assert.equal(countOccurence('e-mail'), 1);
  });

  it('count sentence', function() {
    assert.equal(countOccurence('This is a multiline paragraph'), 1);
    assert.equal(countOccurence("Hello world ! It's 9 o'clock"), 0);
  });
});