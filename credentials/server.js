var admin = require("firebase-admin")
var serviceAccount = require("./fantasyFiveServiceAcct.json");

module.export = {
	//todo server config
	credential: admin.credential.cert(serviceAccount),
	databaseURL: "https://the-fantasy-five.firebaseio.com"

}
