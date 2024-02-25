"use client";
import React, { useEffect, useState } from "react";
import { ThemeButton } from "../../../components/ThemeButton";
import { Logo } from "../../../components/Logo";
import { NavItems } from "../../../components/header/NavItems";
import { UserButton } from "../../../components/header/UserButton";
import { LoginForm } from "../../(auth)/_components/LoginForm";
import LoginPage from "@/app/(auth)/login/page";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/app/(auth)/_components/LoginButton";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSession } from "next-auth/react";
import { useLogoutMutation, useSocialAuthMutation } from "@/redux/feature/auth/authApi";
import { userLogedOut } from "@/redux/feature/auth/authSlice";
import { useLoadUserQuery } from "@/redux/feature/api/apiSlice";
import ClipLoader from "react-spinners/ClipLoader";

export const Header = () => {
	const [open, setOpen] = useState(false);
	const [active, setActive] = useState(false);
	const [activeItem, setActiveItem] = useState(0);
	const [isMobileOpen, setIsMobileOpen] = useState(false);

	// const { isLoading } = useLoadUserQuery({});
	const { user } = useSelector((state: any) => state.auth);

	const [logout, { isSuccess }] = useLogoutMutation();

	// const dispatch = useDispatch();

	// useEffect(() => {
	// 	if (data) dispatch(setCredentials(data))
	//   }, [data, dispatch])

	// console.log({ data, isLoading }, "from useLogoutQuery")

	// const data = useLogoutQuery("")
	// const { data } = useSession();
	// const [socialAuth, { isSuccess, data: userData }] = useSocialAuthMutation();

	// console.log(isSuccess, "isSuccess");
	// console.log(user, "user");
	// console.log(data?.user, "data from useSession");

	// useEffect(() => {
	// 	if (!userExist && data) {
	// 		const socialAuthData = {
	// 			name: data.user?.name ?? "",
	// 			email: data.user?.email ?? "",
	// 			avatar: data.user?.image ?? "",
	// 		};
	// 		socialAuth(socialAuthData);
	// 	}

	// 	if (isSuccess) {
	// 		const message = userData?.message || "login succcessful";
	// 		toast.success(message);
	// 	}
	// }, [data, user]);

	const handleItemClick = (index: number) => setActiveItem(index);

	useEffect(() => {
		if (typeof window !== "undefined") {
			const handleScroll = () => {
				if (window.scrollY > 80) {
					setActive(true);
				} else {
					setActive(false);
				}
			};

			const innerWidth = () => {
				if (window.innerWidth >= 960) {
					setIsMobileOpen(true);
				} else {
					setIsMobileOpen(false);
				}
			};

			window.addEventListener("scroll", handleScroll);
			window.addEventListener("resize", innerWidth);

			return () => {
				window.removeEventListener("scroll", handleScroll);
				window.removeEventListener("resize", innerWidth);
			};
		}
	}, []);

	

	const handleLogout = async () => {
		// console.log("clicked");
		await logout({});
	};
	return (
		<nav className="w-full relative">
			<div
				className={`${
					active
						? "dark:bg-opacity-50 dark:bg-gradient-to-b dark:from-gray-900 dark:to-black fixed top-0 left-0  border-b dark:border-[#ffffff] shadow-xl transition duration-500 "
						: "border-b dark:shadow"
				}  w-full h-[60px] z-[80] flex justify-between items-center px-10`}
			>
				<Logo />
				<div className="flex flex-col md:flex-row justify-between items-center gap-5">
					<NavItems activeItem={activeItem} isMobile={isMobileOpen} onItemClick={handleItemClick} />
					<ThemeButton />
					
					{/* {isLoading ? (
						<ClipLoader
							// color={}
							// loading={loading}
							// cssOverride={override}
							size={30}
							aria-label="Loading Spinner"
							data-testid="loader"
						/>
					) : ( */}
					{
						user ? (
							<>
								<Avatar>
									{user?.avatar?.url ? (
										<AvatarImage src={user?.avatar?.url} />
									) : user?.name ? (
										<AvatarFallback>{user?.name.slice(0, 2)}</AvatarFallback>
									) : (
										<AvatarFallback></AvatarFallback>
									)}
								</Avatar>
								<Button onClick={handleLogout}>Logout</Button>
							</>
						) : (
							<LoginButton asChild>
								<Button variant="secondary" size="lg">
									Login
								</Button>
							</LoginButton>
						)
					}
				</div>
			</div>
		</nav>
	);
};
