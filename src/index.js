require("dotenv").config();

const { initializeApp, cert } = require("firebase-admin/app");
const serviceAccount = require("./config/serviceAccountKey.json");

initializeApp({
  credential: cert(serviceAccount),
});

const app = require("./app");

app.listen(process.env.PORT);
