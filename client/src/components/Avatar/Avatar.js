import { CameraIcon } from "@heroicons/react/24/outline";
import Avatar from "react-avatar";

const UserAvatart = ({
    fullname,
    color = "#AB2F52",
    size = 140,
    src = null,
}) => {
    return (
        <div
            className={`relative group rounded-full w-[${size}px] text-center overflow-clip hover:cursor-pointer`}
        >
            <Avatar
                name={fullname}
                title={fullname}
                round={true}
                color={color}
                src={src}
                className="object-cover"
                size={size}
            />
            <div className="bg-black opacity-40 h-0 w-full absolute left-0 bottom-0 group-hover:h-10 transition-all ease-in-out duration-200">
                <CameraIcon className="w-7 h-7 mx-auto text-white" />
            </div>
        </div>
    );
};

export default UserAvatart;
