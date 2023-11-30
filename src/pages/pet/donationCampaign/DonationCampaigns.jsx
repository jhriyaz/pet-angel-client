import { Container, Grid } from "@mui/material";
import { useQuery } from "react-query";
import DOnationCard from "./DOnationCard";
import LoadingRow from "../../../utils/LoadingRow";
import useAxiosIntercepter from "../../../hooks/useAxiosIntercepter";
import SectionTittle from "../../../components/shared/SectionTittle";

const DonationCampaigns = () => {

    let AxiosCustomSecure=useAxiosIntercepter()

let{data:donationCampaigns,isLoading,isFetching}=useQuery({
    queryKey:['donationPage'],
    queryFn:async()=>{
        let data =await AxiosCustomSecure.get('/api/donation_campaigns')
        return data.data
    }
})

if(isLoading||isFetching){
    return <LoadingRow></LoadingRow>
}
    return (
<Container>

<SectionTittle tittle="Donation Campaigns" desc="All Campaigns listed here">

</SectionTittle>
<Grid container spacing={2}>
{donationCampaigns.data?.map(donation=><DOnationCard key={donation._id} donation={donation} time={donationCampaigns.time}> </DOnationCard>)}
</Grid>
</Container>

        );
};

export default DonationCampaigns;