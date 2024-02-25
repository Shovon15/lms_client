/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useEffect } from "react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "../../../components/ui/input";
import { Button } from "@/components/ui/button";
import * as z from "zod";
import { LoginSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { CardWrapper } from "./CardWrapper";
import { userLogedIn } from "@/redux/feature/auth/authSlice";
import { useLoginMutation } from "@/redux/feature/auth/authApi";
import toast from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const LoginForm = () => {
	const [login, { isError, error, data, isSuccess, isLoading }] = useLoginMutation();
	const router = useRouter();

	const form = useForm<z.infer<typeof LoginSchema>>({
		resolver: zodResolver(LoginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	useEffect(() => {
		if (isSuccess) {
			const message = data?.message || "login succcessful";
			toast.success(message);
			// router.push("/verification");
			router.push("/profile");
			// console.log(data?.payload.user?.role ==="user")
		}

		if (error) {
			if ("data" in error) {
				const errorData = error as any;
				const errorMessage = errorData?.data?.message || "something went wrong";
				toast.error(errorMessage);
			}
		}
	}, [error, isSuccess]);

	const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
		await login(values);
		// console.log({ isError, error, data, isSuccess, isLaoding });
	};

	return (
		<CardWrapper
			headerText="Login"
			headerLabel="Welome back"
			backButtonLabel="Don't have an account?"
			backButtonHref="/signup"
			showSocial
		>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
					<div className="space-y-4">
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input
											{...field}
											disabled={isLoading}
											placeholder="john.doe@example.com"
											type="email"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Password</FormLabel>
									<FormControl>
										<Input {...field} disabled={isLoading} placeholder="******" type="password" />
									</FormControl>
									<Button size="sm" variant="link" asChild className="px-0 font-normal">
										<Link href="/auth/reset">Forgot password?</Link>
									</Button>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<Button disabled={isLoading} type="submit" className="w-full">
						login
					</Button>
				</form>
			</Form>
		</CardWrapper>
	);
};
