import AboutUs from "./component/AboutUs";
import Banner from "./component/Banner";
import CallToAction from "./component/CallToAction";
import PetCategory from "./component/PetCategory";
import TopDonation from "./component/TopDonation";

const Home = () => {
    return (
       <>
       <Banner></Banner>

<PetCategory></PetCategory>
<TopDonation></TopDonation>
<CallToAction></CallToAction>
<AboutUs></AboutUs>
       </>
    );
};

export default Home;