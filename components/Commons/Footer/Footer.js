import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "../../Reusables/Logo/Logo";
import { getCurrentYear } from "../../../utils/getCurrentYear";
import products from "../../../utils/products.json";

const Footer = () => {
    const router = useRouter();
    return (
        <footer className="footer">
            <div className="container">
                <div className="wrapper">
                    <div className="footer__up">
                        <div className="footer__description">
                            <Logo inverted onClick={() => router.push("/")} />
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
                            <Link href="/terms-and-conditions">
                                Terms & Conditions
                            </Link>
                        </h4>
                    </div>
                    <div className="footer__down">
                        <h4>{getCurrentYear()} &#169; YashCan</h4>
                        <p>
                            Made with &#9829; by{" "}
                            <a
                                href="http://www.prashaant.in/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Prashant
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
