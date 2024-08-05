import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAja-16Wx-uOFnGQULX4wgDv17pQ3rfceQ",
    authDomain: "cursofullstackpro-9b780.firebaseapp.com",
    projectId: "cursofullstackpro-9b780",
    storageBucket: "cursofullstackpro-9b780.appspot.com",
    messagingSenderId: "1025529033964",
    appId: "1:1025529033964:web:5b3b3dfbf23edea5e7e1c9",
    measurementId: "G-2E5X77F2PQ"
};

const firebaseApp = initializeApp(firebaseConfig)

export const auth = getAuth(firebaseApp)
export const db = getFirestore(firebaseApp)

