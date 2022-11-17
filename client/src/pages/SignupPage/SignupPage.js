import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthServices from "../../services/authService.js";
import SignupForm from "../../components/Forms/SignupForm.js";
import PageContainer from "../../layouts/PageContainer/PageContainer.js";

const SignupPage = () => {
    const [signupInProgress, setSignupProgress] = useState(false);
    const [signupError, setSignupError] = useState(null);
    const [successMess, setSuccessMess] = useState(null);

    const navigate = useNavigate();
    const onSignupHandler = async (values) => {
        setSignupProgress(true);
        try {
            const signupRes = await AuthServices.register(values);
            console.log(signupRes);
            setSignupProgress(false);
            setSuccessMess(
                "Register successfully. Please sign in to continue explore."
            );
            navigate("/signin");
        } catch (err) {
            setSignupProgress(false);
            console.log(err);
            setSignupError(err.response.data);
        }
    };

    return (
        <div>
            <SignupForm
                inProgress={signupInProgress}
                onSignupHandler={onSignupHandler}
                error={signupError}
                success={successMess}
            />
        </div>
    );
};

export default SignupPage;
