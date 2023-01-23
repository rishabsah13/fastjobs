import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJLCD0uPuWGmyV6U5t6Saa1FCgJZ8dliY",
  authDomain: "fastjobs-569af.firebaseapp.com",
  projectId: "fastjobs-569af",
  storageBucket: "fastjobs-569af.appspot.com",
  messagingSenderId: "442065304776",
  appId: "1:442065304776:web:c3ff82f90c948da91739fd",
  measurementId: "G-TRLQX72ZMK",
};

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
// export { firebase };
