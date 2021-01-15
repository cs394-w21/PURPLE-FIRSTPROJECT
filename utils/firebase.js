import * as firebase from "firebase";

import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCIIHY2GTurF1wk7idDyTdvv04xlNUWwIg",
  authDomain: "resumesync.firebaseapp.com",
  databaseURL: "https://resumesync-default-rtdb.firebaseio.com",
  projectId: "resumesync",
  storageBucket: "resumesync.appspot.com",
  messagingSenderId: "562481804838",
  appId: "1:562481804838:web:8ca3a25a99d4e31960d8e7",
};

firebase.initializeApp(firebaseConfig);

export { firebase };
