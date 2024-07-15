const admin = require('firebase-admin');
const serviceAccount = require('./firebase-service-account.json');

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: 'https://lehanchil-bbc8b.firebaseio.com'
    });
}

const db = admin.firestore();

module.exports = db;
