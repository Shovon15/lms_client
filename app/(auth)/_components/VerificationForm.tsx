/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";
import { CardWrapper } from "./CardWrapper";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { VerificationSchema } from "@/schemas";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useActivationMutation } from "@/redux/feature/auth/authApi";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export const VerificationForm = () => {
	const { token } = useSelector((state: any) => state.auth);
	const [activation, { isSuccess, isError, error, data, isLoading }] = useActivationMutation();
	const router = useRouter();

	const form = useForm<z.infer<typeof VerificationSchema>>({
		resolver: zodResolver(VerificationSchema),
		defaultValues: {
			verificationCode: "",
		},
	});

	useEffect(() => {
		if (isSuccess) {
			const message = data?.message || "verify succcessful";
			toast.success(message);
			router.push('/login');
		}

		if (error) {
			if ("data" in error) {
				const errorData = error as any;
				const errorMessage = errorData?.data?.message || "something went wrong";
				toast.error(errorMessage);
			}
		}
	}, [error, isSuccess]);

	const onSubmit = async (value: z.infer<typeof VerificationSchema>) => {
		const varificationData = { activation_token: token, activation_code: value.verificationCode };
		// console.log(varificationData, "varificationData");
		await activation(varificationData);
	};

	return (
		<CardWrapper
			headerText="account verification"
			headerLabel="verify your account">
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
					<div className="space-y-4">
						<FormField
							control={form.control}
							name="verificationCode"
							render={({ field }) => (
								<FormItem>
									<FormLabel>verification code</FormLabel>
									<FormControl>
										<Input {...field}
											disabled={isLoading}
											placeholder="****"
											type="number" />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<Button
						disabled={isLoading}
						type="submit"
						className="w-full">
						verify
					</Button>
				</form>
			</Form>
		</CardWrapper>
	);
};
