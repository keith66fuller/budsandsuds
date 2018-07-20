import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const prodConfig = {
    apiKey: Fire_API_KEY,
    authDomain: Fire_AUTH_DOMAIN,
    databaseURL: Fire_DATABASE_URL,
    projectId: Fire_PROJECT_ID,
    storageBucket: Fire_STORAGE_BUCKET,
    messagingSenderId: Fire_MESSAGE_SENDER_ID
};

const devConfig = {
  apiKey: Fire_API_KEY,
  authDomain: Fire_AUTH_DOMAIN,
  databaseURL: Fire_DATABASE_URL,
  projectId: Fire_PROJECT_ID,
  storageBucket: Fire_STORAGE_BUCKET,
  messagingSenderId: Fire_MESSAGE_SENDER_ID
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
