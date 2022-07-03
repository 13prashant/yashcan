import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import Logo from "../../Reusables/Logo/Logo";

const Navbar = () => {
    const router = useRouter();
    const path = router.pathname.split("/")[1];
    const isPathHome = path === "";
    const isPathProducts = path === "products";
    const isPathContactUs = path === "contact-us";

    const [isMenuVisible, setIsMenuVisible] = useState(false);

    return (
        <header>
            <div className="container">
                <nav className="navbar">
                    {/* <Link href="/"> */}
                    <Logo />
                    {/* </Link> */}
                    <ul
                        className={isMenuVisible ? "" : "inactive"}
                        style={{ display: "flex" }}
                    >
                        <li
                            className={`navbar__link ${
                                isPathHome ? "active-link" : ""
                            }`}
                        >
                            <Link href="/">Home</Link>
                        </li>
                        <li
                            className={`navbar__link ${
                                isPathProducts ? "active-link" : ""
                            }`}
                        >
                            <Link href="/products">Products</Link>
                        </li>
                        <li
                            className={`navbar__link ${
                                isPathContactUs ? "active-link" : ""
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
