import Meta from "../components/Meta";
import Navbar from "../components/Commons/Navbar/Navbar";
import Footer from "../components/Commons/Footer/Footer";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Meta />
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default MyApp;
