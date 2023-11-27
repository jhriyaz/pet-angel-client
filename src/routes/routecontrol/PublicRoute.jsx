import PropTypes from "prop-types";
import { Navigate} from "react-router-dom";

import { useContext } from "react";
import { AuthInfo } from "../../context/AuthContext";

const PublicRoute = ({children}) => {
    let {loading,user}=useContext(AuthInfo)
   if (loading) {
    return <div className=" flex justify-center items-center pt-16"><span className="loading loading-spinner loading-lg"></span></div>
   }
    if (!user){
        return children
    }else{
       return <Navigate to='/'></Navigate>
    }
};
PublicRoute.propTypes = {
    children: PropTypes.node,
  };
export default PublicRoute;