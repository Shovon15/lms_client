import MetaHeading from "@/utils/MetaHeading";
import React from "react";
import { VerificationForm } from "../_components/VerificationForm";

const VerificationPage = () => {
	return (
		<>
			<MetaHeading
				title="verification"
				description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. In harum itaque cumque at! Culpa sunt quo doloribus cum ratione! Architecto?"
				keywords="about lms platform"
			/>
			<VerificationForm />
		</>
	);
};

export default VerificationPage;
