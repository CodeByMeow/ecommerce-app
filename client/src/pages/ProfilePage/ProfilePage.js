import { useContext, useEffect, useRef, useState } from "react";
import UserAvatart from "../../components/Avatar/Avatar";
import authContext from "../../contexts/AuthContext/AuthContext";
import PageContainer from "../../layouts/PageContainer/PageContainer";
import RenderLoading from "../../components/Loading/RenderLoading";
import SmallLoading from "../../components/SmallLoading/SmallLoading";
import AuthServices from "../../services/authService";
import useViewport from "../../hooks/useViewport";
import uploadImage from "../../services/uploadImage";

const ProfilePage = () => {
    const { state } = useContext(authContext);
    const { user } = state;
    const [input, setInput] = useState();
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [loadingUpload, setLoadingUpload] = useState(false);
    const viewPort = useViewport();
    const isMobile = viewPort.width < 1024;
    const image = useRef();

    useEffect(() => {
        setInput({
            username: user?.username || "",
            fullname: user?.fullname || "",
            email: user?.email || "",
            address: user?.address || "",
            avatar: user?.avatar || "",
        });
    }, [user]);

    if (!user) return <RenderLoading />;

    const onInputChange = (e) => {
        const { name, value } = e.target;
        setInput({
            ...input,
            [name]: value,
        });
    };

    const updateProfile = async (updateData) => {
        try {
            setLoading(true);
            const update = await AuthServices.updateProfile(updateData);
            setMessage(update.data?.msg);
        } catch (e) {
            setMessage(e.message);
        } finally {
            setLoading(false);
        }

        setTimeout(() => setMessage(null), 3000);
    };
    const onAvatarInputChange = async () => {
        try {
            setLoadingUpload(true);
            const imageUpload = await uploadImage(image.current.files[0]);
            setInput({ ...input, avatar: imageUpload.data.data.url });
        } catch (e) {
            setMessage(e.message);
        } finally {
            setLoadingUpload(false);
        }

        setTimeout(() => setMessage(null), 3000);
    };

    const onAvatarClickHandler = () => {
        image.current.click();
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        updateProfile(input);
    };

    return (
        <PageContainer title="Hồ sơ cá nhân">
            <div className="flex lg:flex-row flex-col mb-10 justify-center px-6 min-w-min">
                <div className="border border-solid lg:w-80 w-full min-w-fit lg:p-20 p-5 rounded-3xl lg:rounded-r-none text-gray-800 flex-shrink-0 flex-grow-0 bg-indigo-300 flex items-center flex-col">
                    <UserAvatart
                        size={isMobile ? 100 : 140}
                        src={input?.avatar}
                        fullname={input?.fullname}
                        onAvatarClickHandler={onAvatarClickHandler}
                        loadingUpload={loadingUpload}
                    />
                    <p className="block py-4 font-semibold whitespace-nowrap">
                        {input?.username}
                    </p>
                    <p className="whitespace-nowrap">{input?.fullname}</p>
                    <p className="whitespace-nowrap">{input?.email}</p>
                    <p className="whitespace-nowrap">{input?.address}</p>
                </div>
                <div className="border border-solid lg:w-2/3 w-full lg:p-20 p-5 lg:rounded-l-none my-3 lg:my-0 rounded-3xl bg-indigo-100">
                    <form
                        onSubmit={onSubmitHandler}
                        encType="multipart/form-data"
                    >
                        <input
                            type="file"
                            ref={image}
                            className="hidden"
                            onChange={onAvatarInputChange}
                        />
                        <label htmlFor="username" className="text-gray-700">
                            Tên đăng nhập
                        </label>
                        <input
                            type="text"
                            name="username"
                            value={input?.username}
                            readOnly
                            className="p-2 outline-none text-gray-400 rounded-md w-full my-2"
                            id="username"
                            onChange={onInputChange}
                        />
                        <label htmlFor="fullname" className="text-gray-700">
                            Họ tên
                        </label>
                        <input
                            value={input?.fullname}
                            name="fullname"
                            className="p-2 outline-none text-gray-700 rounded-md w-full my-2"
                            id="fullname"
                            onChange={onInputChange}
                        />

                        <label htmlFor="email" className="text-gray-700">
                            Email
                        </label>
                        <input
                            value={input?.email}
                            name="email"
                            className="p-2 outline-none text-gray-700 rounded-md w-full my-2"
                            id="email"
                            onChange={onInputChange}
                        />

                        <label htmlFor="address" className="text-gray-700">
                            Địa chỉ
                        </label>
                        <input
                            value={input?.address}
                            name="address"
                            className="p-2 outline-none text-gray-700 rounded-md w-full my-2"
                            id="address"
                            onChange={onInputChange}
                        />
                        <div className="flex items-center gap-1 justify-center">
                            <input
                                type="submit"
                                className="px-6 inline-block sm:px-4 lg:px-8 xl:px-14 py-2 md:py-3 rounded-lg transition:all duration-300 bg-indigo-500 my-3 text-white cursor-pointer"
                                value="Cập nhật"
                            />
                            {loading && <SmallLoading />}
                        </div>
                    </form>
                </div>
            </div>
            {message && (
                <div className="fixed right-0 top-40 py-2 px-3 bg-indigo-500 rounded-l-md">
                    <p className="text-white">{message}</p>
                </div>
            )}
        </PageContainer>
    );
};

export default ProfilePage;
