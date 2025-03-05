import Ceo from "../components/Home/Ceo/Ceo";
import Main from "../components/Home/Main/Main";
import OurThings from "../components/Home/OurThings/OurThings";
import OurBusiness from "../components/Home/OurBusiness/OurBusiness";
import WeAreExpanding from "../components/Home/WeAreExpanding/WeAreExpanding";

const Home = () => {
    return (
        <>
            <WeAreExpanding />
            <Main />
            <Ceo />
            <OurBusiness />
            <OurThings />
        </>
    );
};

export default Home;
