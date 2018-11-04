"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
exports.userOnDelete = functions.firestore.document('/users/{uid}').onDelete((event, context) => {
    return admin.auth().deleteUser(context.params.uid);
});
//# sourceMappingURL=index.js.map