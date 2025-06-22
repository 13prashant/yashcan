import { EMAIL, EMAIL_RESPONSE, WEB_URL } from "../../../utils/constants";

const ContactForm = ({ productTitle }) => {
    return (
        <form
            className="contactForm card"
            action={`https://formsubmit.co/${EMAIL}`}
            method="POST"
        >
            <label>
                <span>Your Email Address</span>
                <input type="email" name="email" required />
            </label>
            <label>
                <span>Product you want to enquire about</span>
                <input
                    type="text"
                    name="product"
                    defaultValue={productTitle}
                    required
                />
            </label>
            <label>
                <span>Your Message</span>
                <textarea name="message" required cols="30" rows="10" />
            </label>
            <input className="btn" type="submit" value="Submit" />
            <input type="hidden" name="_autoresponse" value={EMAIL_RESPONSE} />
            <input type="hidden" name="_next" value={WEB_URL} />
        </form>
    );
};

export default ContactForm;
