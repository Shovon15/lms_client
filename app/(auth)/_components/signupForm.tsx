/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useEffect, useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "../../../components/ui/input";
import Link from "next/link";
import * as z from "zod";
import { LoginSchema, RegisterSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { CardWrapper } from "./CardWrapper";
import { useRegisterMutation } from "@/redux/feature/auth/authApi";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export const SignupForm = () => {
    const [register, { data, isSuccess, error, isLoading }] = useRegisterMutation();
    const router = useRouter();

    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    });

    useEffect(() => {
        if (isSuccess) {
            const message = data?.message || "signup succcessful";
            toast.success(message);
            router.push('/verification');
        }

        if (error) {
            if ("data" in error) {
                const errorData = error as any;
                const errorMessage = errorData?.data?.message || "something went wrong";
                toast.error(errorMessage);
            }
        }
    }, [error, isSuccess]);

    const onSubmit = async (values: z.infer<typeof RegisterSchema>) => await register(values);

    return (
        <CardWrapper
            headerText="Signup"
            headerLabel="Create Your Account"
            backButtonLabel="Already have an account?"
            backButtonHref="/login"
            showSocial
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input {...field} disabled={isLoading} placeholder="john doe" type="text" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
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
                        signup
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    );
};
