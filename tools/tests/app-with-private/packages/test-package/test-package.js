// @export TestAsset
TestAsset = {};

if (Meteor.isServer) {

  var done = function (passed) {
    if (passed)
      process.exit(0);
    else
      process.exit(1);
  };

  TestAsset.convert = function (b) {
    return (new Buffer(b)).toString();
  };

  TestAsset.go = function (passed) {
    var expectText = "Package";
    if (Assets.getText("test-package.txt").trim() !== expectText)
      passed = false;
    if (TestAsset.convert(Assets.getBinary("test-package.txt")).trim()
        !== expectText)
      passed = false;

    Assets.getText("test-package.txt", function (err, result) {
      if (err || result.trim() !== expectText)
        passed = false;
      Assets.getBinary("test-package.txt", function (err, result) {
        if (err || TestAsset.convert(result).trim() !== expectText)
          passed = false;
        done(passed);
      });
    });
  };
}
