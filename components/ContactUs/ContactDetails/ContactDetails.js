import Link from "next/link";
import { EMAIL, MOBILE } from "../../../utils/constants";

const ContactDetails = () => {
    return (
        <div className="main s2">
            <div className="container">
                <div className="contactDetails__wrapper wrapper grid">
                    <div className="contactDetails__content">
                        <div className="contactDetails__card card">
                            <img src="/images/call.svg" alt="" />
                            <div>
                                <h5>Phone Number</h5>
                                <h4>
                                    <a href={`tel:${MOBILE}`}>{MOBILE}</a>
                                </h4>
                            </div>
                        </div>
                        <div className="contactDetails__card card">
                            <img src="/images/email.svg" alt="" />
                            <div>
                                <h5>Email Address</h5>
                                <h4>
                                    <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="contactDetails__img">
                        <img src="/images/trucksTop.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactDetails;
