import { useContext, useEffect, useState } from "react";
import UserAvatart from "../../components/Avatar/Avatar";
import authContext from "../../contexts/AuthContext/AuthContext";
import PageContainer from "../../layouts/PageContainer/PageContainer";
import RenderLoading from "../../components/Loading/RenderLoading";
import AuthServices from "../../services/authService";
import useViewport from "../../hooks/useViewport";

const ProfilePage = () => {
    const { state } = useContext(authContext);
    const { user } = state;
    const [input, setInput] = useState();
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const viewPort = useViewport();
    const isMobile = viewPort.width < 1024;

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
                    />
                    <p className="block py-4 font-semibold whitespace-nowrap">
                        {input?.username}
                    </p>
                    <p className="whitespace-nowrap">{input?.fullname}</p>
                    <p className="whitespace-nowrap">{input?.email}</p>
                    <p className="whitespace-nowrap">{input?.address}</p>
                </div>
                <div className="border border-solid lg:w-2/3 w-full lg:p-20 p-5 lg:rounded-l-none my-3 lg:my-0 rounded-3xl bg-indigo-100">
                    <form onSubmit={onSubmitHandler}>
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
                            {loading && (
                                <svg
                                    className="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600"
                                    viewBox="0 0 100 101"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                        fill="currentFill"
                                    />
                                </svg>
                            )}
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
