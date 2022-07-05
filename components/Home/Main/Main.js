import { useRouter } from "next/router";
import Button from "../../Reusables/Button/Button";

const Main = () => {
    const router = useRouter();
    return (
        <div className="main">
            <div className="container">
                <div className="main__wrapper wrapper">
                    <div className="main__content">
                        <h1>
                            Efficiently transporting bulk commodities and
                            finished products across continents.
                        </h1>
                        <Button onClick={() => router.push("/#our-business")}>
                            Learn More
                        </Button>
                    </div>
                </div>
            </div>
            <div class="fade"></div>
        </div>
    );
};

export default Main;
