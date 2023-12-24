import PropTypes from "prop-types";
import {HelmetProvider } from 'react-helmet-async';
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider,GithubAuthProvider  , signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

import { RotateSpinner } from "react-spinners-kit";
import { auth } from "../config/__firebase__config";
import { Grid } from "@mui/material";
import useAxiosIntercepter from "../hooks/useAxiosIntercepter";


export const AuthInfo = createContext(null);
const googleProvider=new GoogleAuthProvider()
const gitProvider = new GithubAuthProvider();
const AuthContext = ({ children }) => {
  let [user,setUser]=useState(null)
  let [loading,setLoading]=useState(true)
 const [isAdminLoading,setIsAdminLoading]=useState(true)
 const [isAdmin,setIsAdmin]=useState(false)



const signInWithGoogle=()=>{

 return signInWithPopup(auth, googleProvider)
};
const signInWithGithub=()=>{

  return signInWithPopup(auth, gitProvider)
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
let AxiosCustomSecure=useAxiosIntercepter()

useEffect(()=>{

const unSubscribe=onAuthStateChanged(auth,currentUser=>{
  setUser(currentUser)
  let  jwt= async()=>{
    await AxiosCustomSecure.post('/auth/jwt',{email:user.email}).then(()=>{console.log('chilllll')})
   
    setLoading(false)
   
   }
  if(user){
 jwt()
  }else{
    setLoading(false)
  }

 
})
return ()=>{

  unSubscribe()
 
}
},[user,AxiosCustomSecure])

useEffect(()=>{
  setIsAdminLoading(true)
  AxiosCustomSecure.get('/auth/checkadmin').then(data=>{
    setIsAdmin(data.data)
    setIsAdminLoading(false)
     })
},[AxiosCustomSecure,user])









if(loading){
 return<Grid color='button' sx={{justifyContent:'center' , alignItems:'center', display:'flex',height:'100vh'}}>
  <RotateSpinner />
 </Grid>
}

  return (<HelmetProvider>
    <AuthInfo.Provider value={{signInWithGoogle,signInWithGithub,signUp,user,logOut,updateProf,loading,signIn,setLoading,isAdmin,isAdminLoading }}>
      {children}
      </AuthInfo.Provider>
  </HelmetProvider>)
};

AuthContext.propTypes = {
  children: PropTypes.node,
};
export default AuthContext;
