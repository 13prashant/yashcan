import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
    const router = useRouter();
    const isPathHome = router.pathname === "/";
    const isPathOurBusiness = router.pathname === "/our-business";
    const isPathProducts = router.pathname === "/products";
    const isPathContactUs = router.pathname === "/contact-us";

    const [isMenuVisible, setIsMenuVisible] = useState(false);

    return (
        <header>
            <div className="container">
                <nav className="navbar">
                    <a href="/" className="navbar__logo">
                        <h3>YASHCAN</h3>
                    </a>
                    <ul style={{ display: isMenuVisible ? "flex" : "none" }}>
                        <li
                            className={`navbar__link ${
                                isPathHome ? "active" : ""
                            }`}
                        >
                            <Link href="/">Home</Link>
                        </li>
                        <li
                            className={`navbar__link ${
                                isPathOurBusiness ? "active" : ""
                            }`}
                        >
                            <Link href="/our-business">Our Business</Link>
                        </li>
                        <li
                            className={`navbar__link ${
                                isPathProducts ? "active" : ""
                            }`}
                        >
                            <Link href="/products">Products</Link>
                        </li>
                        <li
                            className={`navbar__link ${
                                isPathContactUs ? "active" : ""
                            }`}
                        >
                            <Link href="/contact-us">Contact Us</Link>
                        </li>
                    </ul>
                    <div
                        onClick={() => setIsMenuVisible(!isMenuVisible)}
                        className="navbar__hamburger"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
