import PropTypes from "prop-types";

const Logo = ({ inverted, ...rest }) => {
    return (
        <div
            style={{
                display: "flex",
                cursor: "pointer",
            }}
            {...rest}
        >
            <h2
                style={{
                    color: "#ffffff",
                    backgroundColor: "#2e3b95",
                }}
            >
                Yash
            </h2>
            <h2
                style={{
                    color: "#000000",
                    backgroundColor: inverted ? "#f26223" : "transparent",
                }}
            >
                Can
            </h2>
        </div>
    );
};

Logo.propTypes = {
    inverted: PropTypes.bool,
};

Logo.defaultProps = { inverted: false };

export default Logo;
