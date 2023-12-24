import AboutUs from "./component/AboutUs";
import Banner from "./component/Banner";
import CallToAction from "./component/CallToAction";
import PetCategory from "./component/PetCategory";
import Reviews from "./component/Reviews";
import TopDonation from "./component/TopDonation";

const Home = () => {
    return (
       <>
       <Banner></Banner>

<PetCategory></PetCategory>
<TopDonation></TopDonation>
<CallToAction></CallToAction>
<Reviews></Reviews>
<AboutUs></AboutUs>
       </>
    );
};

export default Home;