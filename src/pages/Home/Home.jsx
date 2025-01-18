import Banner from "@/pages/Home/Banner";
import PetsCategory from "./PetsCategory";
import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Pet Squad</title>
            </Helmet>
            <Banner></Banner>
            <PetsCategory></PetsCategory>
        </div>
    );
};

export default Home;