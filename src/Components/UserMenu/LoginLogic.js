import React, {useState, useEffect} from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import {fireAuth, firebaseuiApp} from '../../fire';
import { useStateValue } from '../../State/State';



export default function LoginLogic() {

  const [{ user }, dispatch] = useStateValue();
  


  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      fireAuth.auth.GoogleAuthProvider.PROVIDER_ID,
      //fireAuth.auth.FacebookAuthProvider.PROVIDER_ID,
      firebaseuiApp.auth.AnonymousAuthProvider.PROVIDER_ID
    ]
  };
useEffect(()=> {
  fireAuth.auth().onAuthStateChanged(function (user) {
    if (user) {
   dispatch({ type: "login", newUser: user}) ;
      console.log("[LoginLogic] user is signed in " + user.displayName)
    } else {
      console.log("[LoginLogic] no user ")
    }
  });
}, [])


    return (
        <div>
       <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={fireAuth.auth()}/>
        </div>
    )
}