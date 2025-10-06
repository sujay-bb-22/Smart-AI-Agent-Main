// index.js (or equivalent backend entry file)
const admin = require('firebase-admin');

// Initialization will be handled automatically when deployed to Cloud Functions,
// but locally you may need a service account JSON file.
// For now, keep it simple for deployment:
admin.initializeApp();

const db = admin.firestore();

// You can now use 'db' to read and write data
// e.g., db.collection('users').get()