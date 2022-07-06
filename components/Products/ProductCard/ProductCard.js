import Link from "next/link";

const ProductCard = ({ image, name, slug }) => {
    return (
        <Link href={`/products/${slug}`}>
            <div className="productCard">
                <img src={image} alt="" />
                <div className="productCard__details">
                    <h4>{name}</h4>
                    <a>View details</a>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
