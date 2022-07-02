const GoogleMap = () => {
    return (
        <div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d368512.47766697564!2d-79.350379!3d43.814282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xed8f6cb3820a6984!2sRegus!5e0!3m2!1sen!2sus!4v1656765513477!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
};

export default GoogleMap;
