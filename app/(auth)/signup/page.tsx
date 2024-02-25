import React from "react";
import { SignupForm } from "../_components/signupForm";
import MetaHeading from "@/utils/MetaHeading";

const SignupPage = () => {
    return (
        <>
            <MetaHeading
                title="signup"
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. In harum itaque cumque at! Culpa sunt quo doloribus cum ratione! Architecto?"
                keywords="about lms platform"
            />
            <SignupForm />
        </>
    );
};

export default SignupPage;
