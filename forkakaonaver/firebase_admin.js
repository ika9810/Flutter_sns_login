var admin = require("firebase-admin");

var serviceAccount = require("./flutter-sns-login-test-firebase-adminsdk.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
module.exports=admin;