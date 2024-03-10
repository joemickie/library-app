import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD2ttgCGJKhuh-FDaqljqQA_YZezF0ezxk",
    authDomain: "libary-app-79d88.firebaseapp.com",
    projectId: "libary-app-79d88",
    storageBucket: "libary-app-79d88.appspot.com",
    messagingSenderId: "1001145234721",
    appId: "1:1001145234721:web:fdd501e61ccd2b055eba60",
    // measurementId: "G-9ZC7PTMX9R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export default firestore;
