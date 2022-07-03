import Link from "next/link";
import Logo from "../../Reusables/Logo/Logo";
import products from "../../../data/products.json";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="wrapper">
                    <div className="footer__up">
                        <div className="footer__description">
                            {/* <Link href="/"> */}
                            <Logo inverted />
                            {/* </Link> */}
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
                                {products.map((product) => (
                                    <li key={product.id}>
                                        <Link
                                            href={`/products/${product.slug}`}
                                        >
                                            {product.name}
                                        </Link>
                                    </li>
                                ))}
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
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
