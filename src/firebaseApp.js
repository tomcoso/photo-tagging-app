import { initializeApp } from "firebase/app";
import {
  arrayUnion,
  doc,
  getDoc,
  getFirestore,
  updateDoc,
} from "firebase/firestore";

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

const getLeaderboard = async (board) => {
  const merge = (arr) => {
    if (arr.length < 2) return arr;

    const left = merge(arr.slice(0, arr.length / 2));
    const right = merge(arr.slice(arr.length / 2));
    arr = [];

    while (left.length > 0 && right.length > 0) {
      left[0].time < right[0].time
        ? arr.push(left.shift())
        : arr.push(right.shift());
    }
    if (left.length < 1) arr = arr.concat(right);
    if (right.length < 1) arr = arr.concat(left);

    return arr;
  };

  const data = (await getDoc(doc(db, "leaderboard", board))).get("list");
  return merge(data);
};

const addToLeaderboard = async (val) => {
  const docRef = doc(db, `leaderboard/${val.board}`);
  await updateDoc(docRef, {
    list: arrayUnion({ name: val.name, time: val.time }),
  });
};

export { getBoard, getLeaderboard, addToLeaderboard };
