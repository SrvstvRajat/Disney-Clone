import { initializeApp } from 'firebase/app';
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyClUZyMsFYEsaCYxKdInL1WzExQzoS0xOg",
    authDomain: "disneyplus-clone-6da1a.firebaseapp.com",
    projectId: "disneyplus-clone-6da1a",
    storageBucket: "disneyplus-clone-6da1a.appspot.com",
    messagingSenderId: "917726404153",
    appId: "1:917726404153:web:a38871c32aa2e9e74237e8",
    measurementId: "G-GDFZ1NWF9Y"
  };

  const app=initializeApp(firebaseConfig)
  const db=getFirestore(app);
  const auth=getAuth(app);
  const provider=new GoogleAuthProvider();
  // const storage=storage();
  export {auth,provider};
  export default db