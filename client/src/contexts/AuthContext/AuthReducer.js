import {
    SIGN_OUT,
    SIGN_IN,
    SIGN_UP,
    GET_USER_INFO,
    REFRESH_TOKEN,
} from "../types";

const authReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case SIGN_IN:
            const { token, refreshToken, isAuthenticated, user } = payload;
            localStorage.setItem("token", token);
            localStorage.setItem("refreshToken", refreshToken);
            return { ...state, token, refreshToken, isAuthenticated, user };
        case SIGN_UP:
            return state;
        case SIGN_OUT:
            localStorage.removeItem("refreshToken");
            localStorage.removeItem("token");
            localStorage.removeItem("cart");
            return {
                ...state,
                token: null,
                refreshToken: null,
                isAuthenticated: false,
                user: null,
            };
        case GET_USER_INFO: {
            const { user } = payload;
            return {
                ...state,
                user: user,
            };
        }
        case REFRESH_TOKEN: {
            const { token } = payload;
            localStorage.setItem("token", token);
            return {
                ...state,
                token,
            };
        }
        default:
            return state;
    }
};

export default authReducer;
