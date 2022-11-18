import { useEffect, useState, useReducer } from "react";
import authReducer from "./AuthReducer";
import AuthContext from "./AuthContext";
import actionCreator from "../../utils/actionCreator.js";
import AuthServices from "../../services/authService.js";

import { GET_USER_INFO, REFRESH_TOKEN } from "../../contexts/types.js";

const AuthState = (props) => {
    const { loading } = props;
    const initialState = {
        token: localStorage.getItem("token") || null,
        refreshToken: localStorage.getItem("refreshToken") || null,
        isAuthenticated: !!localStorage.getItem("refreshToken") || false,
        authLoading: loading,
        user: null,
        authError: null,
    };

    const [state, dispatch] = useReducer(authReducer, initialState);
    const { refreshToken } = state;

    const verifyRefreshToken = async () => {
        try {
            const response = await AuthServices.refreshToken(refreshToken);
            // if token does not expired or invalid => dispatch to global state
            response && dispatch(actionCreator(REFRESH_TOKEN, response));
        } catch (err) {
            console.log(err.response.data.msg);
        }
    };

    /* check if refreshToken was stored in localStorage is expired or not */
    // call API with accessToken embed to headers
    const verifyToken = async () => {
        try {
            const authorizedUser = await AuthServices.verifyToken();
            console.log(authorizedUser);
            // if token does not expired or invalid => dispatch to global state
            authorizedUser &&
                dispatch(actionCreator(GET_USER_INFO, authorizedUser.data));
            // console.log(authorizedUser.data);
        } catch (err) {
            console.log(err.message);
        }
    };

    useEffect(() => {
        verifyRefreshToken();
        verifyToken();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                state,
                dispatch,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthState;
