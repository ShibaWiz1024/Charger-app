import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB6S32UDMbVnfzW4i5HnsYq30L6M9ijECY",
  authDomain: "chargerapp-b42c1.firebaseapp.com",
  projectId: "chargerapp-b42c1",
  storageBucket: "chargerapp-b42c1.appspot.com",
  messagingSenderId: "63360112287",
  appId: "1:63360112287:web:9fb8e1181b362460d10e2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

