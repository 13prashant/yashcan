import Link from "next/link";
import Button from "../../components/Reusables/Button/Button";
import products from "../../data/products.json";

const Product = ({ product }) => {
    const getDescription = () => {
        for (let key in product.description) {
            <div className="product__row">
                <h5>{key}</h5>
                <p>{product.description[key]}</p>
            </div>;
        }
    };

    return (
        <div className="main s2">
            <div className="container">
                <div className="product__wrapper wrapper grid">
                    <div className="product__img">
                        <img src="/images/products/logs.jpg" alt="" />
                    </div>
                    <div className="product__content">
                        <h2>{product.name}</h2>
                        <div className="product__details">
                            {getDescription()}
                            {/* <div className="product__row">
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
                            </div> */}
                        </div>
                        {/* <Link href="/"> */}
                        <Button>Make an inquiry</Button>
                        {/* </Link> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export const getStaticProps = async (context) => {
    const product = products.find(
        (product) => product.slug === context.params.product
    );

    return {
        props: {
            product,
        },
    };
};

export const getStaticPaths = async () => {
    const slugs = products.map((product) => product.slug);
    const paths = slugs.map((slug) => ({
        params: { product: slug.toString() },
    }));

    return { paths, fallback: false };
};

export default Product;
