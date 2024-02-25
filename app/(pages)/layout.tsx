"use client"
import { Header } from "@/app/(pages)/_components/Header";
import IsLogedin from "@/hooks/loginHook";
import React, { useState } from "react";

type Props = {
	children: React.ReactNode;
};

const PageLayout = ({ children }: Props) => {
	return (
		<>
			{/* <Header /> */}
			<IsLogedin>
				{children}
			</IsLogedin>
		</>
	);
};

export default PageLayout;
