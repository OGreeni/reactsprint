import admin, { credential } from 'firebase-admin';

import serviceAccount from './serviceAccountKey.json';

// const serviceAccount = JSON.parse(
//   process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string
// );

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      // @ts-ignore
      credential: admin.credential.cert(serviceAccount),
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error('Firebase admin initialization error', error.stack);
    } else {
      console.log('Firebase admin initialization error', error);
    }
  }
}

export default admin.firestore();
