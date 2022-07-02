import Footer from "../components/Commons/Footer/Footer";
import Navbar from "../components/Commons/Navbar/Navbar";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Navbar />
            {/* <div className="container"> */}
            <Component {...pageProps} />
            {/* </div> */}
            <Footer />
        </>
    );
}

export default MyApp;
