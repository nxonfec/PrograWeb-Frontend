import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyAwrGf7BG5jfBC2PuLfWT3jwNSpTIvoO7A",
    authDomain: "pw2023-9f84e.firebaseapp.com",
    projectId: "pw2023-9f84e",
    storageBucket: "pw2023-9f84e.appspot.com",
    messagingSenderId: "581151649799",
    appId: "1:581151649799:web:6cf79b8679198f4c59baa2",
    measurementId: "G-T270GV7LQR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;