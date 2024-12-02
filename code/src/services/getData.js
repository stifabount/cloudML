const admin = require("firebase-admin");

// Load service account key
const serviceAccount = require("../../firebaseAdmin.json");

// Initialize Firebase Admin SDK
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

// Get Firestore instance
const db = admin.firestore();

async function getAllDocuments() {
    const collectionRef = db.collection("predictions");
    const snapshot = await collectionRef.get();

    if (snapshot.empty) {
        console.log("No matching documents.");
        return;
    }

    const data = [];
    snapshot.forEach((doc) => {
        data.push({
            "id": doc.id,
            "history": {
                "result": doc.data().result,
                "createdAt": doc.data().createdAt,
                "suggestion": doc.data().suggestion,
                "id": doc.id
            }
        });
        // console.log(`${doc.id} =>`, doc.data());
    });
    
    return data;
}

module.exports = getAllDocuments;
