import { useContext } from "react";

import { AuthInfo } from "../Context/AuthContext";

 const useAuth = () => {
    
    let {signInWithGoogle,signInWithGithub,signUp,user,logOut,updateProf,loading,signIn,setLoading,isAdmin}=useContext(AuthInfo);

     return {signInWithGoogle,signInWithGithub,signUp,user,logOut,updateProf,loading,signIn,setLoading,isAdmin}
}
export default useAuth;
