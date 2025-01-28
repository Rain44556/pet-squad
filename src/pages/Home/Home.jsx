import Banner from "@/pages/Home/Banner";
import PetsCategory from "./PetsCategory";
import { Helmet } from "react-helmet-async";
import CallToAction from "./CallToAction";
import AboutUs from "./AboutUs";
import WhyAdoptPet from "./WhyAdoptPet";
import Testimonials from "./Testimonials";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Pet Squad</title>
            </Helmet>
            <Banner></Banner>
            <PetsCategory></PetsCategory>
            <CallToAction></CallToAction>
            <AboutUs></AboutUs>
          <WhyAdoptPet></WhyAdoptPet>
          <Testimonials></Testimonials>
        </div>
    );
};

export default Home;