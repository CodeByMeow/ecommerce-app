/**
 * @param {object} options - config object
 * @return {object} AuthServices - object for login action
 */

import axiosInstance from "./axiosInstance";

const AuthServices = {
    login: (authInfo) => {
        // console.log(authInfo);
        return axiosInstance.post("/account/login", authInfo);
    },
    register: (userInfo) => {
        return axiosInstance.post("/account", userInfo);
    },
    refreshToken: async (
        refreshToken /* type: obj because body in request is an Object  */
    ) => {
        const result = await axiosInstance.post("/account/token", {
            refreshToken,
        });
        return result.data;
    },
    verifyToken: async () => {
        const result = await axiosInstance.get("/account/profile");
        /* const result = await axiosInstance({
          method: 'GET',
          url: '/account/profile',
        }); */
        return result;
    },
    updateProfile: async (user) => {
        const updated = await axiosInstance.patch("/account/profile", user);

        return updated;
    },
};

export default AuthServices;
