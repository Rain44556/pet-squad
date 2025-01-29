import Banner from "@/pages/Home/Banner";
import PetsCategory from "./PetsCategory";
import { Helmet } from "react-helmet-async";
import CallToAction from "./CallToAction";
import AboutUs from "./AboutUs";
import FAQ from "./FAQ";
import Blog from "./Blog";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Pet Squad</title>
            </Helmet>
            <Banner></Banner>
            <PetsCategory></PetsCategory>
            <CallToAction></CallToAction>
            <Blog></Blog>
            <AboutUs></AboutUs>
        <FAQ></FAQ>
    
        </div>
    );
};

export default Home;