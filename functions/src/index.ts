import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

exports.userOnDelete = functions.firestore.document('/users/{uid}').onDelete((event, context) => {
    return admin.auth().deleteUser(context.params.uid)
});
