import firebase from 'firebase/app';
import {auth} from "../firebase/config";

export default function SignIn(){

  const signInWithGoogle = () =>{
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return ( 
    <button onClick={signInWithGoogle}>Sign In With Google</button>
   );
}