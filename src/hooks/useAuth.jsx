import { useContext } from "react";
import { AuthInfo } from "../Context/AuthContext";

const useAuth = () => {
    let data=useContext(AuthInfo)
    console.log(data)
    return [...data]
};

export default useAuth;