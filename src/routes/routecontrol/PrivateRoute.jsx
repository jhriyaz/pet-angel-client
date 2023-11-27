import PropTypes from "prop-types";
import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthInfo } from "../../Context/AuthContext";


const PrivateRoute =({children}) => {
    let {loading,user}=useContext(AuthInfo)
    let location = useLocation().pathname

   if (loading) {
    return <div className=" flex justify-center items-center pt-16"><span className="loading loading-spinner loading-lg"></span></div>
   }
    if (user){
        return children
    }else{
       return <Navigate to='/auth/login' state={{from:location}}></Navigate>
    }
};
PrivateRoute.propTypes = {
    children: PropTypes.node,
};
export default PrivateRoute;