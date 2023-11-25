import PropTypes from "prop-types";
import {HelmetProvider } from 'react-helmet-async';
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider,GithubAuthProvider ,TwitterAuthProvider , signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

import axios from "axios";
import { RotateSpinner } from "react-spinners-kit";
import { auth } from "../config/__firebase__config";
import { Grid } from "@mui/material";


export const AuthInfo = createContext(null);
const googleProvider=new GoogleAuthProvider()
const gitProvider = new GithubAuthProvider();
const twitterProvider = new TwitterAuthProvider();
const AuthContext = ({ children }) => {
  let [user,setUser]=useState(null)
  let [loading,setLoading]=useState(true)


const signInWithGoogle=()=>{

 return signInWithPopup(auth, googleProvider)
};
const signInWithGithub=()=>{

  return signInWithPopup(auth, gitProvider)
 };
const signInWithTwitter=()=>{

  return signInWithPopup(auth, twitterProvider)
 };
 const logOut=()=>{
  setLoading(true)
  return signOut(auth)
 }
let signUp=(email,password)=>{
  
  return createUserWithEmailAndPassword(auth, email, password)
}
let signIn=(email,password)=>{

  return signInWithEmailAndPassword(auth, email, password)
}
let updateProf=(name,photo)=>{

  return updateProfile(auth.currentUser, {
    displayName: name,
    photoURL:photo
  })
}


useEffect(()=>{
const unSubscribe=onAuthStateChanged(auth,currentUser=>{
  setUser(currentUser)

  // if(user){
  //   axios.post(`${import.meta.env.VITE_URL}/jwt`,{email:user.email},{withCredentials:true}).then(data=>console.log(data))
  // }

  setLoading(false)
 
})
return ()=>{

  unSubscribe()
 
}
},[user])



if(loading){
 return <Grid color='button' sx={{justifyContent:'center' , alignItems:'center', display:'flex',height:'100vh'}}>
  <RotateSpinner />
 </Grid>

}

  return (<HelmetProvider>
    <AuthInfo.Provider value={{signInWithGoogle,signInWithGithub,signInWithTwitter,signUp,user,logOut,updateProf,loading,signIn,setLoading }}>{children}</AuthInfo.Provider>
  </HelmetProvider>)
};

AuthContext.propTypes = {
  children: PropTypes.node,
};
export default AuthContext;
