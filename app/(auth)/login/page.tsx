import { LoginForm } from "@/app/(auth)/_components/LoginForm";
import MetaHeading from "@/utils/MetaHeading";
import React from "react";

const LoginPage = () => {
	return (

		<>

			<MetaHeading
				title="login"
				description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. In harum itaque cumque at! Culpa sunt quo doloribus cum ratione! Architecto?"
				keywords="about lms platform"
			/>
			<LoginForm />
		</>
	);
};

export default LoginPage;
