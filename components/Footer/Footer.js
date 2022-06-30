import Link from "next/link";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="wrapper">
                    <div className="footer__up">
                        <div className="footer__description">
                            <a href="/" className="navbar__logo">
                                <h3>YASHCAN</h3>
                            </a>
                            <p>
                                YashCan Incorporated is carving a niche as a
                                prominent Importer, Exporter and Trader to
                                fulfill the needs & demands of consumers and
                                emerging small business & enterprises.
                            </p>
                        </div>
                        <div className="footer__links">
                            <h4>Quick Links</h4>
                            <ul>
                                <li>
                                    <Link href="/">Home</Link>
                                </li>
                                <li>
                                    <Link href="/our-business">
                                        Our Business
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/products">Products</Link>
                                </li>
                                <li>
                                    <Link href="/contact-us">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="footer_products">
                            <h4>Products</h4>
                            <ul>
                                <li>
                                    <Link href="/products/logs">Logs</Link>
                                </li>
                                <li>
                                    <Link href="/products/occ">
                                        OCC Waste Paper
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__middle">
                        <h4>
                            <Link href="/privacy-policy">Privacy Policy</Link>
                        </h4>
                        <h4>
                            <Link href="/terms-&-conditions">
                                Terms & Conditions
                            </Link>
                        </h4>
                    </div>
                    <div className="footer__down">
                        <h4>2021 &#169; YashCan</h4>
                        {/* <h5>
                            Made with &hearts; by{" "}
                            <a href="www.prashaant.in" target="_blank">
                                Prashant
                            </a>
                        </h5> */}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
