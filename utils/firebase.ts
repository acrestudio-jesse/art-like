import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA_bFtYuhMiUYC2lKVbAWH_DaGQoA69at4",
  authDomain: "art-like.firebaseapp.com",
  projectId: "art-like",
  storageBucket: "art-like.appspot.com",
  messagingSenderId: "832908418037",
  appId: "1:832908418037:web:2071a9fed5ff129bda5ebc",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export const getUsers = async () => {
const userCol = collection(db, 'users')
const userSnapshot = await getDocs(userCol)
const userList =  userSnapshot.docs.map(doc => doc.data())
return  userList
}

