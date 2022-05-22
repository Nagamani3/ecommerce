import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBc6oB6mTu7ErYK8tyCG8VfOCpJ9SxWoro",
  authDomain: "e-clone-57af0.firebaseapp.com",
  projectId: "e-clone-57af0",
  storageBucket: "e-clone-57af0.appspot.com",
  messagingSenderId: "534385641317",
  appId: "1:534385641317:web:d25b15a74fa6c282e6438c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export let auth = getAuth(app);
