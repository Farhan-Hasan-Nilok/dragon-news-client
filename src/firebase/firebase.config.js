// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCIAWgj628TPCU1-M2pEvMBz4w1kVBeNFo",
    authDomain: "dragon-news-f58b7.firebaseapp.com",
    projectId: "dragon-news-f58b7",
    storageBucket: "dragon-news-f58b7.appspot.com",
    messagingSenderId: "931041010283",
    appId: "1:931041010283:web:fa4a5e42c491ff313f872e",
    measurementId: "G-GYXPB2ZBDY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);