import axios from "axios";
import { useEffect } from "react";

const AxiosCustomSecure=axios.create({baseURL:import.meta.env.VITE_BACKEND_URL,withCredentials:true});
const useAxiosIntercepter = () => {
useEffect(()=>{
    AxiosCustomSecure.interceptors.request.use(res=>{return res},
        error=>{
            if(error.response.data.message){
                console.error(error.response.data.message)
             }
        }
        )
},[])
return AxiosCustomSecure
};

export default useAxiosIntercepter;