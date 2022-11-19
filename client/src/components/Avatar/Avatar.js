import Avatar from "react-avatar";

const UserAvatart = ({
    fullname,
    size = 100,
    color = "#AB2F52",
    src = null,
}) => {
    return (
        <Avatar
            name={fullname}
            title={fullname}
            round={true}
            size={size}
            color={color}
            src={src}
            className="object-cover"
        />
    );
};

export default UserAvatart;
