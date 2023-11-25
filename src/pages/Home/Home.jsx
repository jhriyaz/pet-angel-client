import AboutUs from "./component/AboutUs";
import Banner from "./component/Banner";
import CallToAction from "./component/CallToAction";
import PetCategory from "./component/PetCategory";

const Home = () => {
    return (
       <>
       <Banner></Banner>

<PetCategory></PetCategory>
<CallToAction></CallToAction>
<AboutUs></AboutUs>
       </>
    );
};

export default Home;