import Link from "next/link";

const Main = () => {
    return (
        <div className="main s2">
            <div className="container">
                <div className="main__wrapper wrapper grid">
                    <div className="main__image">
                        <img src="/images/containers.svg" />
                    </div>
                    <div className="main__content">
                        <h2>
                            Efficiently transporting bulk commodities and
                            finished products across continents.
                        </h2>
                        <Link href="/">
                            <button>Learn More</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
