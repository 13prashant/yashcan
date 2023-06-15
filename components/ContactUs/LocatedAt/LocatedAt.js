import GoogleMap from "../GoogleMap/GoogleMap";
import { LOCATION1, LOCATION2 } from "../../../utils/constants";

const LocatedAt = () => {
    return (
        <div className="s1">
            <div className="container">
                <div className="locatedAt__wrapper">
                    <h4 className="heading">We are located at</h4>
                    <div className="locatedAt__maps">
                        <div className="locatedAt__card">
                            <GoogleMap location={LOCATION1} />
                        </div>
                        <div className="locatedAt__card">
                            <GoogleMap location={LOCATION2} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LocatedAt;
