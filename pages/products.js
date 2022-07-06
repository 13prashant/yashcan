import ProductCard from "../components/Products/ProductCard/ProductCard";
import products from "../utils/products.json";

const Products = () => {
    return (
        <div className="s2">
            <div className="container">
                <div className="products__wrapper wrapper">
                    <h1 className="heading">Products</h1>
                    <div className="products__cards">
                        {products.map(({ name, image, description, slug }) => (
                            <ProductCard
                                key={name}
                                name={name}
                                image={image}
                                description={description}
                                slug={slug}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
