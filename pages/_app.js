import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Navbar />
            <div className="container">
                <Component {...pageProps} />
            </div>
            <Footer />
        </>
    );
}

export default MyApp;
