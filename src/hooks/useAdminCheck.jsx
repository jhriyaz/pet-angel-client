import { useState } from "react";
import { useQuery } from "react-query";
import useAxiosIntercepter from "./useAxiosIntercepter";


const useAdminCheck = () => {
    let [isAdminLoading,setisAdminLoading] =useState(true)
    let AxiosCustomSecure=useAxiosIntercepter()
let {data:isAdmin,isLoading,isFetching}=useQuery({
    queryKey:['Admin'],
    queryFn:async()=>{
        AxiosCustomSecure.get('/auth/checkadmin')
    }
})
if(isLoading||isFetching){
    setisAdminLoading(true)
}else{
    setisAdminLoading(false)
}

    return [isAdmin,isAdminLoading]
};

export default useAdminCheck;