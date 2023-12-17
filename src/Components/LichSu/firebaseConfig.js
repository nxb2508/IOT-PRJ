// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKssfcwiUWz3l7Q6H6tuwFfIv0NzmGh0k",
  authDomain: "iot-project-74c0f.firebaseapp.com",
  databaseURL: "https://iot-project-74c0f-default-rtdb.firebaseio.com",
  projectId: "iot-project-74c0f",
  storageBucket: "iot-project-74c0f.appspot.com",
  messagingSenderId: "824460870370",
  appId: "1:824460870370:web:b90a9c8b20b97a889094bb",
  measurementId: "G-0544ZYD6PX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app