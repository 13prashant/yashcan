import Head from "next/head";
const Meta = (props) => {
    return (
        <Head>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />

            <title>{props.title}</title>
            <meta name="description" content={props.description} />
            <meta name="keywords" content={props.keywords} />
            <meta charSet="utf-8" />
            <link rel="icon" type="image/png" href="/favicon.ico" />
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/apple-touch-icon.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicon-32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicon-16x16.png"
            />
            <link rel="manifest" href="/site.webmanifest"></link>
        </Head>
    );
};

Meta.defaultProps = {
    title: "YashCan - Commodity Trading Company",
    description:
        "Efficiently transporting bulk commodities and finished products across continents.",
    keywords: "yashcan, bulk commodities, commodity trading company",
};

export default Meta;
