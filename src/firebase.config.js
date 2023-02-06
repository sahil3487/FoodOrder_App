import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC1og21EncgTzMkiiOv6YH93iZf3fGS49Y",
  authDomain: "resturentapp-70070.firebaseapp.com",
  projectId: "resturentapp-70070",
  storageBucket: "resturentapp-70070.appspot.com",
  messagingSenderId: "444847822321",
  appId: "1:444847822321:web:388406ae56fc8902f6e050",
  measurementId: "G-G42BSQN1N7"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
