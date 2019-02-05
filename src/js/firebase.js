const firebase = require("firebase/app");

require("firebase/auth");
require("firebase/database");

const config = require('../json/fireconfig');
firebase.initializeApp(config);

export const database = firebase.database();