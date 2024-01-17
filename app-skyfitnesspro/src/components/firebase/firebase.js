import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { getDatabase, ref, set, get, update } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword} from "firebase/auth";

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

const db = getDatabase(app);
console.log("firestore", db);

export const auth = getAuth(app);

export async function getData() {
  const response = await fetch("https://fitness-pro-bf034-default-rtdb.europe-west1.firebasedatabase.app/courses.json");
  const data = await response.json();
  return data;
}

export const regUser = async (email, password) => {
  console.log("registr");
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log(user);
  
    const userId = userCredential.user.uid;
    const userRef = ref(db, 'users/' + userId);
  
    const userData = {
      email: email,
      // другие данные
    }; 
      
    await set(userRef, userData);
    return userData; 
  } catch (error) {
    throw error; 
  }
}

export const getUserLessons = async () => {
  try {

    
    const userId = auth.currentUser.uid;
    
    const userRef = ref(db, 'users/' + userId);
    
    let snapshot  = await get(userRef);
    if (snapshot.exists()) {
      return snapshot.val()
    } else {
      console.log('No data available');
    }
  } catch (error) {
    throw error; 
  }
}

export const enter = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const userId = userCredential.user.uid;
    const emailRef = ref(db, 'users/' + userId)
    await update(emailRef, {
      email: userCredential.user.email,
    });
    const userRef = ref(db, 'users/' + userId);
    let snapshot  = await get(userRef);
    if (snapshot.exists()) {
      return snapshot.val()
    } else {
      console.log('No data available');
    }
  } catch (error) {
    throw error; 
  }
}

export const exit = async () => {
  try {
    signOut(auth)
  } catch (error) {
    throw error; 
  }
}