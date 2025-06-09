// firebaseConfig.ts
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from "firebase/app";
//@ts-ignore
import { getReactNativePersistence, initializeAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyB6s32UmDbVnfzW4i5HnsYq30l6MMijECY",
  authDomain: "chargerapp-b42c1.firebaseapp.com",
  projectId: "chargerapp-b42c1",
  storageBucket: "chargerapp-b42c1.appspot.com",
  messagingSenderId: "63360112327",
  appId: "1:63360112327:web:9fb8e11811b362460d10e2",
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const db = getFirestore(app);
export const storage = getStorage(app);
