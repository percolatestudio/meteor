if (Meteor.isServer) {
  var passed = true;
  var expectText = "Test";

  if (Assets.getText("test.txt").trim() !== expectText)
    passed = false;
  if (TestAsset.convert(Assets.getBinary("test.txt")).trim()
      !== expectText)
    passed = false;

  Assets.getText("test.txt", function (err, result) {
    if (err || result.trim() !== expectText)
      passed = false;
    Assets.getBinary("test.txt", function (err, result) {
      if (err || TestAsset.convert(result).trim() !== expectText)
        passed = false;
      TestAsset.go(passed);
    });
  });
}
