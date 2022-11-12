import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqFpWgrCabpwnkNSuyvzu4Vis-7iszIRw",
  authDomain: "place-tag-3eed3.firebaseapp.com",
  projectId: "place-tag-3eed3",
  storageBucket: "place-tag-3eed3.appspot.com",
  messagingSenderId: "450958196420",
  appId: "1:450958196420:web:b4dd04cf1ad17ccbc11391",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const getBoard = (param) => {
  const docRef = doc(db, `boards/${param}`);
  const board = getDoc(docRef);
  return board;
};

export { getBoard };
