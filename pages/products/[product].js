import Link from "next/link";
import Button from "../../components/Reusables/Button/Button";

const Product = () => {
    return (
        <div className="main s2">
            <div className="container">
                <div className="product__wrapper wrapper grid">
                    <div className="product__img">
                        <img src="/images/products/logs.jpg" alt="" />
                    </div>
                    <div className="product__content">
                        <h2>Product Name</h2>
                        <div className="product__details">
                            <div className="product__row">
                                <h5>Type</h5>
                                <p>OCC11</p>
                            </div>
                            <hr />
                            <div className="product__row">
                                <h5>Color</h5>
                                <p>Yellow</p>
                            </div>
                            <hr />
                            <div className="product__row">
                                <h5>Diameter</h5>
                                <p>8 to 12.5 inches</p>
                            </div>
                        </div>
                        <Link href="/">
                            <Button>Make an inquiry</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
