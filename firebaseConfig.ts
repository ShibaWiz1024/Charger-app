// firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB6s32UmDbVnfzW4i5HnsYq30l6MMijECY",
  authDomain: "chargerapp-b42c1.firebaseapp.com",
  projectId: "chargerapp-b42c1",
  storageBucket: "chargerapp-b42c1.appspot.com",
  messagingSenderId: "63360112327",
  appId: "1:63360112327:web:9fb8e11811b362460d10e2",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
