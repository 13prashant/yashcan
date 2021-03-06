import PropTypes from "prop-types";

const Logo = ({ inverted, ...rest }) => {
    const logoStyle = {
        display: "flex",
        cursor: "pointer",
    };
    const yashStyle = {
        color: "#ffffff",
        backgroundColor: "#2e3b95",
    };
    const canStyle = {
        color: inverted ? "#000000" : "",
        backgroundColor: inverted ? "#f26223" : "",
    };

    return (
        <div style={logoStyle} {...rest}>
            <h2 style={yashStyle}>Yash</h2>
            <h2 style={canStyle}>Can</h2>
        </div>
    );
};

Logo.propTypes = {
    inverted: PropTypes.bool,
};

Logo.defaultProps = { inverted: false };

export default Logo;
