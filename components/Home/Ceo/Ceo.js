import React from "react";

const Ceo = () => {
    return (
        <div className="s1">
            <div className="container">
                <div className="ceo__wrapper wrapper grid">
                    <div className="ceo__image">
                        <img src="/images/shipsTop.jpg" />
                    </div>
                    <div className="ceo__content">
                        <p>
                            YashCan Incorporated is established to meet the
                            needs and demands of varied verticals of industries
                            with outstanding solutions.
                        </p>
                        <p>
                            We are carving a niche as a prominent importer,
                            exporter and Trader of variety of products.
                        </p>
                        {/* <div className="ceo__author">
                            <img src="/images/ceo.jpg" alt="" />
                            <div>
                                <h4>Yasmin Patel</h4>
                                <h5>CEO, YashCan</h5>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ceo;
