
import admin from "firebase-admin";
import serviceAccount from "../serviceKey.json";

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    ignoreUndefinedProperties: true,
    databaseURL: "https://supplychain-4f098.firebaseio.com"
});



const db = admin.firestore();

export default db;