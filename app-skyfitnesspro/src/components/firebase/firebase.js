import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDmYZms9AfZn000OA1N6TLdc4VgDZA22is",
  authDomain: "fitness-pro-bf034.firebaseapp.com",
  databaseURL: "https://fitness-pro-bf034-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fitness-pro-bf034",
  storageBucket: "fitness-pro-bf034.appspot.com",
  messagingSenderId: "193730051673",
  appId: "1:193730051673:web:02ffefc40615cbf83d3b48"
};

export const app = firebase.initializeApp(firebaseConfig);
console.log(firebase.app().name);

const db = firebase.firestore(app);
console.log("firestore", db);