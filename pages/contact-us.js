import { useRouter } from "next/router";
import ContactDetails from "../components/ContactUs/ContactDetails/ContactDetails";
import LocatedAt from "../components/ContactUs/LocatedAt/LocatedAt";
import products from "../utils/products.json";

const ContactUs = () => {
    const router = useRouter();

    const productSlug = router.query.product;
    const foundProduct = products.find((item) => item.slug === productSlug);
    const productTitle = foundProduct?.name;

    return (
        <>
            <ContactDetails productTitle={productTitle || ""} />
            <LocatedAt />
        </>
    );
};

export default ContactUs;
