const ErrorMessage = ({ msg }) => {
    return !msg ? null : (
        <div
            style={{
                color: "#bd2560",
                fontSize: "0.95rem",
                textTransform: "capitalize",
            }}
        >
            {msg}
        </div>
    );
};

export default ErrorMessage;
