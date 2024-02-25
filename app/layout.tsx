"use client";

import { Josefin_Sans, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/utils/ThemeProvider";
import { ReduxProviders } from "./provider";
import { SessionProvider } from "next-auth/react";

import { Toaster } from "react-hot-toast";
import { useLoadUserQuery } from "@/redux/feature/api/apiSlice";
import Loader from "@/utils/loader";
import { useEffect, useState } from "react";
import { boolean } from "zod";
// const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-poppins",
});

const josefin = Josefin_Sans({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-josefin",
});



export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${poppins.variable} ${josefin.variable}  dark:bg-background `}
			>
				<ReduxProviders>
					{/* <SessionProvider> */}
					<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
						<Custom>
							{children}
						</Custom>
					</ThemeProvider>
					{/* </SessionProvider> */}
				</ReduxProviders>
				<Toaster />
			</body>
		</html>
	);
}


type CustomPros = {
	children: React.ReactNode
}

const Custom = ({ children }: CustomPros) => {
	const [loading, setLoading] = useState<boolean>(true);

	const { isLoading } = useLoadUserQuery();

	useEffect(() => {
		if (!isLoading) {
			setLoading(false);
		}
	}, [isLoading]);

	// console.log(isLoading);

	return (
		<>
			{
				loading ?
					<Loader />
					:
					<>{children}</>

			}
		</>
	)

}