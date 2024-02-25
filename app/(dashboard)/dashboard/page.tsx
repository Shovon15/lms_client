"use client";

import { Button } from "@/components/ui/button";
import { useLogoutMutation } from "@/redux/feature/auth/authApi";

// import { useLogoutQuery } from '@/redux/feature/auth/authApi';
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const DashboardPage = () => {
	const [logout, { isSuccess, isError }] = useLogoutMutation();

	const { user } = useSelector((state: any) => state.auth);

	useEffect(() => {
		if (isSuccess) {
			toast.success("logout");
		}

		if (isError) {
			toast.success("Something went wrong");
		}
	}, [isSuccess, isError]);

	const handleLogout = async () => {
		await logout({});
	};
	return (
		<div className="min-h-screen p-10">
			<h1 className="mx-auto font-bold">Dashboard page</h1>

			{user ? (
				<div>
					<h1> {user.name}</h1>
					<Button onClick={handleLogout}>Logout</Button>
				</div>
			) : (
				<div>user nai</div>
			)}
		</div>
	);
};

export default DashboardPage;
