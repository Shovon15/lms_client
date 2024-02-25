"use client"
import IsLogedin from "@/hooks/loginHook";
import React from "react";

type Props = {
	children: React.ReactNode;
};

const layout = ({ children }: Props) => {
	return <div className="w-full flex justify-center items-center py-5">
		<IsLogedin>
			{children}
		</IsLogedin>
	</div>;
};

export default layout;
