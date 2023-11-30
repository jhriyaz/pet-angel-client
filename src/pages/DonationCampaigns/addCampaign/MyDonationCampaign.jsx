import { useQuery } from "react-query";
import useAxiosIntercepter from "../../../hooks/useAxiosIntercepter";
import { Container } from "@mui/material";
import DashBoardTittle from "../../dashboard/DashBoardTittle";
import MyDonationTable from "./MyDonationTable";
import LoadingTable from "../../../utils/LoadingTable";

const MyDonationCampaign = () => {
    let AxiosCustomSecure=useAxiosIntercepter()

    let {data:donationCampaign,refetch,isLoading,isFetching,isRefetching}=useQuery({
        queryKey:['donationCampaign'],
        queryFn:async()=>{
            let data= await AxiosCustomSecure.get('/api/donation_campaign')
            return data.data
        }
    })

if(isLoading||isFetching||isRefetching){
return <Container>
<LoadingTable></LoadingTable>
</Container>
}
    return (
      <Container>
<DashBoardTittle title="My Donation Campaign"></DashBoardTittle>
<MyDonationTable donation={donationCampaign} refetch={refetch}></MyDonationTable>

      </Container>
    );
};

export default MyDonationCampaign;