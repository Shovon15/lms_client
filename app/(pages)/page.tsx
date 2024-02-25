"use client";

import { FC, useState } from "react";
import { Header } from "@/app/(pages)/_components/Header";
import { useSelector } from "react-redux";
import { useGetCoursesQuery } from "@/redux/feature/course/courseApi";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LoginButton } from "../(auth)/_components/LoginButton";
import { ThemeButton } from "@/components/ThemeButton";
import { useLogoutMutation } from "@/redux/feature/auth/authApi";
// import MetaHeading from "@/utils/MetaHeading";

interface Props { }

const HomePage: FC<Props> = (Props) => {
	const { user } = useSelector((state: any) => state.auth);

	const { data, isLoading, isSuccess } = useGetCoursesQuery({});

	const [logout] = useLogoutMutation()
	// console.log({ data, isLoading, isSuccess })

	const handleLogout = async () => await logout({});
	return (
		<div className="relative min-h-screen flex justify-center items-center gap-5">
			{/* <MetaHeading
				title="Lms platform"
				description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. In harum itaque cumque at! Culpa sunt quo doloribus cum ratione! Architecto?"
				keywords="Programming, MERN, Redux"
			/> */}
			<div className="absolute right-5 top-5">
				<ThemeButton />
			</div>
			<Card className="p-4">
				<p className="text-5xl font-bold text-green-600">Chat app</p>

				<CardContent className="flex flex-col justify-center items-center gap-2 p-5">
					{user ? (
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
							<Button >Chat</Button>
						</>
					) : (
						<LoginButton asChild>
							<Button className="bg-primary" size="lg">
								Login
							</Button>
						</LoginButton>
					)}

				</CardContent>

				{
					user?.role === "admin" &&
					(<Button asChild>
						<Link href="/dashboard">Dashboard</Link>
					</Button>)
				}


			</Card>
		</div>
	);
};

export default HomePage;
