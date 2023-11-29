import { Container, Typography } from "@mui/material"
import AdoptionTable from "./AdoptionTable";
import { useQuery } from "react-query";
import useAxiosIntercepter from "../../../../hooks/useAxiosIntercepter";
import LoadingTable from "../../../../utils/LoadingTable";
import DashBoardTittle from "../../DashBoardTittle";

const AdoptionRequest = () => {
    let AxiosCustomSecure=useAxiosIntercepter()
    let {data:requests,isLoading,isFetching,refetch}=useQuery({
        queryKey:['adoptionRequested'],
        queryFn:async()=>{
        let data= await AxiosCustomSecure.get('/api/my-adoption')
        return data.data
        }
    })
    


if(isLoading||isFetching){
    return <LoadingTable></LoadingTable>
}

if(requests.length<1){
    return <Container>
          <DashBoardTittle tittle='Adoption Request'></DashBoardTittle>

        <Typography variant="h6" align="center" sx={{paddingTop:3}}>
            NO Request Yet
        </Typography>
    </Container>
}
    return (
     <Container>
        <DashBoardTittle tittle='Adoption Request'></DashBoardTittle>
        <AdoptionTable requests={requests} refetch={refetch}>

        </AdoptionTable>
     </Container>
    );
};

export default AdoptionRequest;