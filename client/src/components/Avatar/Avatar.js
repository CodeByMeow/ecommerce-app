import { CameraIcon } from "@heroicons/react/24/outline";
import Avatar from "react-avatar";
import SmallLoading from "../../components/SmallLoading/SmallLoading";

const UserAvatart = ({
    fullname,
    color = "#AB2F52",
    size = 140,
    src = null,
    onAvatarClickHandler,
    loadingUpload,
}) => {
    return (
        <div
            className={`relative group rounded-full w-[${size}px] text-center overflow-clip hover:cursor-pointer`}
            onClick={onAvatarClickHandler}
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
            {loadingUpload && (
                <div className="absolute backdrop-blur-xl bg-black/30 left-1/2 top-0 -translate-x-1/2 w-full h-full flex items-center justify-center">
                    <SmallLoading />
                </div>
            )}
        </div>
    );
};

export default UserAvatart;
