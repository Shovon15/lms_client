"use client";
import { useRouter } from "next/navigation";
import React from "react";

interface LoginButtonProp {
    children: React.ReactNode;
    mode?: "modal" | "redirect";
    asChild?: boolean;
}
export const LoginButton = ({ children, mode = "redirect", asChild }: LoginButtonProp) => {
    const router = useRouter();

    const onClick = () => {
        router.push("/login");
    };
    return (
        <span onClick={onClick} className="cursor-pointer">
            {children}
        </span>
    );
};
