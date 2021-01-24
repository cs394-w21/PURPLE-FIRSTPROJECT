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

const intoFirebaseObject = (array) =>
  array.reduce((acc, el, index) => ({ ...acc, [index]: el }), {});

const overwriteArray = (object, key) => {
  const maybeArray = object[key];
  return Array.isArray(maybeArray)
    ? { ...object, [key]: intoFirebaseObject(maybeArray) }
    : object;
};

const mapArraysToFirebaseObjects = (object) =>
  Object.keys(object).reduce(overwriteArray, { ...object });

const mapFormToDb = (formValues) => mapArraysToFirebaseObjects(formValues);

// eslint-disable-next-line import/prefer-default-export
export { firebase, mapFormToDb };
