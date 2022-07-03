import ProductCard from "../components/Products/ProductCard/ProductCard";
import products from "../data/products.json";

const Products = () => {
    return (
        <div className="main s2">
            <div className="container">
                <div className="products__wrapper wrapper">
                    {products.map(({ name, image, description, slug }) => (
                        <ProductCard
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
