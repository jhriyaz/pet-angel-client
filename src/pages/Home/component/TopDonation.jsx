import { useQuery } from "react-query";
import useAxiosIntercepter from "../../../hooks/useAxiosIntercepter";
import { Container } from "@mui/material";
import SharedDonationTable from "../../../components/shared/SharedDonationTable";
import LoadingTable from "../../../utils/LoadingTable";
import SectionTittle from "../../../components/shared/SectionTittle";

const TopDonation = () => {
    const AxiosCustomSecure= useAxiosIntercepter()

    let {data:TopDonation,isLoading,isFetching}=useQuery({
        queryKey:['topdonation'],
        queryFn:async()=>{
            let data=await AxiosCustomSecure.get('/api/top_donation')
            return data.data
        }
    })



    return (
      <Container sx={{paddingTop:'100px'}}>
<SectionTittle tittle={'Top Donations'} desc={'Some wonderful people came with blessing'}></SectionTittle>


        {isLoading||isFetching?<LoadingTable></LoadingTable>:   <SharedDonationTable donation={TopDonation}></SharedDonationTable>}

      </Container>
    );
};

export default TopDonation;