
import { Container, Grid, Typography } from "@mui/material";
import DashBoardTittle from "../DashBoardTittle";
import { useQuery } from "react-query";
import useAxiosIntercepter from "../../../hooks/useAxiosIntercepter";
import usePagiNation from "../../../hooks/usePagiNation";
import { useEffect, useState } from "react";
import LoadingTable from "../../../utils/LoadingTable";
import MyPetsTable from "./MyPetsTable";

const MyPets = () => {
    let AxiosCustomSecure=useAxiosIntercepter()
    let [sort,setSort]=useState(true)
    let perPages=8
let {data:number,isLoading:isLoadingPagrNUmber,isFetching,refetch:refetchPetCount}=useQuery({
    queryKey:['mypetcount'],
    queryFn:async()=>{
    let data= await AxiosCustomSecure.get('/api/mypetcount')
    return data.data.total
    }
})

let {pagesButton,isLoading,refetch,isRefetching,items,pageNumber}=usePagiNation({number:number,perPage:perPages,ProductApi:`/api/mypets?sort=${sort}`})





useEffect(()=>{
    refetch()
},[refetch,sort,pageNumber])
if(isLoadingPagrNUmber||isFetching||isLoading||isRefetching){
    return <LoadingTable></LoadingTable>
}


if(isLoading||isFetching){
    return <LoadingTable></LoadingTable>
}

if(items.length<1){
    return <Container>
          <DashBoardTittle tittle='Adoption Request'></DashBoardTittle>

        <Typography variant="h6" align="center" sx={{paddingTop:3}}>
            You didn't add any pet!
        </Typography>
    </Container>
}

return (
     <Grid>

<DashBoardTittle tittle="My added Pets"></DashBoardTittle>
<Grid >
<Grid sx={{display:'grid',alignItems: 'center',paddingTop:1,marginX:'auto'}}>
<MyPetsTable pets={items} page={pageNumber} refetch={refetch} perPages={perPages} sort={sort} setSort={setSort} refetchPetCount={refetchPetCount}></MyPetsTable>
</Grid>
<Grid sx={{display:'flex',alignItems: 'center',paddingTop:4,marginX:'auto'}}>
{pagesButton}
</Grid>
</Grid>
     </Grid>
    );
};

export default MyPets;