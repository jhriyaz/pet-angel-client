import axios from "axios";
import { useEffect } from "react";

const AxiosCustomPublic=axios.create({baseURL:import.meta.env.VITE_BACKEND_URL});
const useAxiosPublic = () => {
useEffect(()=>{
    AxiosCustomPublic.interceptors.request.use(res=>{return res},
        error=>{
            if(error.response.data.message){
                console.error(error.response.data.message)
             }
        }
        )
},[])
return AxiosCustomPublic
};

export default useAxiosPublic;