
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyDEZIT13gNMnUGj1tTCc3TCf9mnXOgIdjg",
//   authDomain: "recipeapp-6f383.firebaseapp.com",
//   projectId: "recipeapp-6f383",
//   storageBucket: "recipeapp-6f383.appspot.com",
//   messagingSenderId: "276366920294",
//   appId: "1:276366920294:web:d4c233a77b63f9c5627ba7"
// };


// const app = initializeApp(firebaseConfig);

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,      
  authDomain:  import.meta.env.VITE_authDomain,
  projectId:  import.meta.env.VITE_projectId,  
  storageBucket:  import.meta.env.VITE_storageBucket  ,
  messagingSenderId:  import.meta.env.VITE_messagingSenderId,
  appId:  import.meta.env.VITE_appId  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;