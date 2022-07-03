import { useRouter } from "next/router";
import Button from "../../components/Reusables/Button/Button";
import products from "../../data/products.json";

const Product = ({ product }) => {
    const router = useRouter();

    const getDescription = () => {
        let res = [];
        for (let key in product.description) {
            res.push([key, product.description[key]]);
        }
        return res;
    };

    return (
        <div className="main s2">
            <div className="container">
                <div className="product__wrapper wrapper grid">
                    <div className="product__img">
                        <img src={product.image} alt="" />
                    </div>
                    <div className="product__content">
                        <h2>{product.name}</h2>
                        <div className="product__details">
                            {getDescription().map((desc) => (
                                <div key={desc[0]} className="product__row">
                                    <h5>{desc[0]}</h5>
                                    <p>{desc[1]}</p>
                                </div>
                            ))}
                        </div>
                        <Button onClick={() => router.push("/contact-us")}>
                            Make an inquiry
                        </Button>
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
