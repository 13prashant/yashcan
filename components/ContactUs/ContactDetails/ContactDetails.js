import { EMAIL, MOBILE } from "../../../utils/constants";
import ContactForm from "../ContactForm/ContactForm";

const ContactDetails = () => {
    return (
        <div className="s2">
            <div className="container">
                <div className="contactDetails__wrapper wrapper grid">
                    <div className="contactDetails__content">
                        <h4 className="heading">Contact Us</h4>
                        <h1>
                            Leave your message here. We will reaach out you
                            soon.
                        </h1>
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
                    <ContactForm />
                </div>
            </div>
        </div>
    );
};

export default ContactDetails;
