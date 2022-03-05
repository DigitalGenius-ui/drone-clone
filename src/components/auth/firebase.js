import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBpyDrSetRp-Bp5olcpjXGbvJnlt_egcGY",
    authDomain: "drone-clone.firebaseapp.com",
    projectId: "drone-clone",
    storageBucket: "drone-clone.appspot.com",
    messagingSenderId: "1031445301845",
    appId: "1:1031445301845:web:86e7a1ac9f91173f4ea2dc",
    measurementId: "G-1PFMY9SDRX"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
