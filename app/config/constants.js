import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBO5OqibdXj4DG4-AXZal9_hlgjRb7bA3o",
  authDomain: "kranz-auth.firebaseapp.com",
  databaseURL: "https://kranz-auth.firebaseio.com",
  projectId: "kranz-auth",
  storageBucket: "kranz-auth.appspot.com",
  messagingSenderId: "760025902248"
};

firebase.initializeApp(config);

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
