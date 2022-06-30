const Logo = ({ inverted }) => {
    const logoStyle = {
        display: "flex",
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
        <div style={logoStyle}>
            <h2 style={yashStyle}>Yash</h2>
            <h2 style={canStyle}>Can</h2>
        </div>
    );
};

export default Logo;
