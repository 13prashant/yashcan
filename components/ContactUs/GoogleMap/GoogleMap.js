const GoogleMap = ({ location }) => {
    return (
        <div>
            <iframe
                src={location}
                width="100%"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
            ></iframe>
        </div>
    );
};

export default GoogleMap;
