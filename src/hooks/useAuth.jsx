import { useContext } from "react";

import { AuthInfo } from "../Context/AuthContext";

 const useAuth = () => {
    
    let {signInWithGoogle,signInWithGithub,signUp,user,logOut,updateProf,loading,signIn,setLoading}=useContext(AuthInfo);
   
     return {signInWithGoogle,signInWithGithub,signUp,user,logOut,updateProf,loading,signIn,setLoading}
}
export default useAuth;
