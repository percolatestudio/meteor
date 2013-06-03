Meteor.startup(function () {
  console.log(Assets.getText("test-package.txt"));
  console.log(Assets.getBinary("test-package.txt"));
});
