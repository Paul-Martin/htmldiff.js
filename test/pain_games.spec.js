describe('Pain Games', function(){
  var cut, res;

  beforeEach(function(){
    cut = require('../js/htmldiff');
  });

  describe('When an entire sentence is replaced', function(){
    beforeEach(function(){
      res = cut('this is what I had', 'and now we have a new one');
    });

    it('should replace the whole chunk', function(){
      expect(res).to.equal('<del>this is what I had</del>' +
        '<ins>and now we have a new one</ins>');
    });
  }); // describe('When an entire sentence is replaced')
}); // describe('Pain Games')
