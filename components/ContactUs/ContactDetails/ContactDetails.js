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
                                <h4>Phone Number</h4>
                                <h5>
                                    <a href={`tel:${MOBILE}`}>{MOBILE}</a>
                                </h5>
                            </div>
                        </div>
                        <div className="contactDetails__card card">
                            <img src="/images/email.svg" alt="" />
                            <div>
                                <h4>Email Address</h4>
                                <h5>
                                    <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                                </h5>
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
