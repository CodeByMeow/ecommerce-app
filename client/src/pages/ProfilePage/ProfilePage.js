import { useContext, useEffect, useState } from "react";
import UserAvatart from "../../components/Avatar/Avatar";
import authContext from "../../contexts/AuthContext/AuthContext";
import PageContainer from "../../layouts/PageContainer/PageContainer";
import RenderLoading from "../../components/Loading/RenderLoading";

const ProfilePage = () => {
    const { state } = useContext(authContext);
    const { user } = state;
    const [input, setInput] = useState(null);

    useEffect(() => {
        setInput({
            username: user?.username,
            fullname: user?.fullname,
            email: user?.email,
            address: user?.address,
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
    const onSubmitHandler = (e) => {
        e.preventDefault();
    };

    return (
        <PageContainer title="Hồ sơ cá nhân">
            <div className="p-10 flex bg-blue-100">
                <div className="border border-solid w-1/3 p-20 text-center rounded-tl-3xl rounded-bl-3xl text-gray-800">
                    <UserAvatart size={150} src={user?.avatar} />
                    <p className="block py-4 font-semibold">{input.username}</p>
                    <p>{input.fullname}</p>
                    <p>{input.email}</p>
                    <p>{input.address}</p>
                </div>
                <div className="border border-solid w-2/3 p-20 rounded-tr-3xl rounded-br-3xl">
                    <form onSubmit={onSubmitHandler}>
                        <label htmlFor="username" className="text-gray-700">
                            Tên đăng nhập
                        </label>
                        <input
                            type="text"
                            name="username"
                            value={input.username}
                            readOnly
                            className="p-2 outline-none text-gray-400 rounded-md w-full my-2"
                            id="username"
                            onChange={onInputChange}
                        />
                        <label htmlFor="fullname" className="text-gray-700">
                            Họ tên
                        </label>
                        <input
                            value={input.fullname}
                            name="fullname"
                            className="p-2 outline-none text-gray-700 rounded-md w-full my-2"
                            id="fullname"
                            onChange={onInputChange}
                        />

                        <label htmlFor="email" className="text-gray-700">
                            Email
                        </label>
                        <input
                            value={input.email}
                            name="email"
                            className="p-2 outline-none text-gray-700 rounded-md w-full my-2"
                            id="email"
                            onChange={onInputChange}
                        />

                        <label htmlFor="address" className="text-gray-700">
                            Địa chỉ
                        </label>
                        <input
                            value={input.address}
                            name="address"
                            className="p-2 outline-none text-gray-700 rounded-md w-full my-2"
                            id="address"
                            onChange={onInputChange}
                        />
                        <input
                            type="submit"
                            className=" sm:px-4 lg:px-8 xl:px-14 py-2 md:py-3 rounded-lg transition:all duration-300 bg-indigo-500 block mx-auto my-3 text-white hover:cursor-pointer"
                            value="Cập nhật"
                        />
                    </form>
                </div>
            </div>
        </PageContainer>
    );
};

export default ProfilePage;
