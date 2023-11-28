import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const AdminRoute =({children}) => {

    let location = useLocation().pathname
let {isAdmin,loading,isAdminLoading,user}=useAuth()
   if (loading||isAdminLoading) {
    return <div className=" flex justify-center items-center pt-16"><span className="loading loading-spinner loading-lg"></span></div>
   }
    if (user&&isAdmin){
        return children
    }else{
       return <Navigate to='/auth/login' state={{from:location}}></Navigate>
    }
};
AdminRoute.propTypes = {
    children: PropTypes.node,
};
export default AdminRoute;