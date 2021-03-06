function Assertion() {}
Assertion.prototype.command = function command(cssSelector, msg) {
  var self = this;
  return this.client.isVisible(cssSelector, function(result) {
    var passed;
    if (result === false || result && result.status == -1) {
      passed = false;
      msg = msg || ('Testing if element <' + cssSelector + '> is hidden. Element could not be located.');
    } else {
      passed = result.value === false;
      msg = msg || ('Testing if element <' + cssSelector + '> is hidden.');
    }
    
    self.client.assertion(passed, passed, true, msg, self.abortOnFailure);
  });
};

module.exports = Assertion;

