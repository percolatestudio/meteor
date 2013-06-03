if (Meteor.isServer) {
  console.log(Assets.getText("test.txt"));
  console.log(Assets.getBinary("test.txt"));
}
