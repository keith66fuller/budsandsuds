import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import * as fb from './firebasecred';

// const config = {
//   apiKey: "AIzaSyAMPGxmXVqWIhTmktwvJa86PzeV6Np_SMw",
//   authDomain: "project-3-65c2c.firebaseapp.com",
//   databaseURL: "https://project-3-65c2c.firebaseio.com",
//   projectId: "project-3-65c2c",
//   storageBucket: "project-3-65c2c.appspot.com",
//   messagingSenderId: "144016997115"
// };

const config = {
  apiKey: fb.Fire_API_KEY,
  authDomain: fb.Fire_AUTH_DOMAIN,
  databaseURL: fb.Fire_DATABASE_URL,
  projectId: fb.Fire_PROJECT_ID,
  storageBucket: fb.Fire_STORAGE_BUCKET,
  messagingSenderId: fb.Fire_MESSAGE_SENDER_ID
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};



// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/database';

// const prodConfig = {
//     apiKey: Fire_API_KEY,
//     authDomain: Fire_AUTH_DOMAIN,
//     databaseURL: Fire_DATABASE_URL,
//     projectId: Fire_PROJECT_ID,
//     storageBucket: Fire_STORAGE_BUCKET,
//     messagingSenderId: Fire_MESSAGE_SENDER_ID
// };

// const devConfig = {
//   apiKey: Fire_API_KEY,
//   authDomain: Fire_AUTH_DOMAIN,
//   databaseURL: Fire_DATABASE_URL,
//   projectId: Fire_PROJECT_ID,
//   storageBucket: Fire_STORAGE_BUCKET,
//   messagingSenderId: Fire_MESSAGE_SENDER_ID
// };

// const config = process.env.NODE_ENV === 'production'
//   ? prodConfig
//   : devConfig;

// if (!firebase.apps.length) {
//   firebase.initializeApp(config);
// }

// const db = firebase.database();
// const auth = firebase.auth();

// export {
//   db,
//   auth,
// };