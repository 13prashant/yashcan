import ProductCard from "../components/Products/ProductCard/ProductCard";
import products from "../utils/products.json";

const Products = () => {
    return (
        <div className="main s2">
            <div className="container">
                <div className="products__wrapper wrapper">
                    <h1>Products</h1>
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
    );
};

export default Products;
