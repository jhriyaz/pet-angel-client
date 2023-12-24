import { useQuery } from "react-query";
import useAxiosIntercepter from "./useAxiosIntercepter";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useState } from "react";







const usePagiNation = ({number,perPage,ProductApi}) => {
  let AxiosCustomSecure=useAxiosIntercepter()
let [pageNumber,setpageNumber]=useState(1)

const handlePageNumber = (event, newPage) => {

  window.scrollTo({ top: 20, left: 0, behavior: 'smooth' })
  setpageNumber(newPage)
};

let {data:items,isLoading,isRefetching,refetch}=useQuery({
    queryKey:[ProductApi],
    queryFn:async()=>{
        let data= await AxiosCustomSecure.get(`${ProductApi}&perPage=${perPage}&page=${(pageNumber-1)}`)
      return data.data
        }
})


let pageCount = Math.ceil(parseInt(number)/perPage)



let pagesButton=pageCount>1?(<Stack spacing={2}>
  <Pagination count={pageCount} page={pageNumber} onChange={handlePageNumber} color="primary" /> 
 
 </Stack>):''
 return {pagesButton,isLoading,refetch,isRefetching,items,pageNumber}
 };

export default usePagiNation;