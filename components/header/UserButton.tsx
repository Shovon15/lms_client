"use client";

import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";
import { LoginForm } from "../../app/(auth)/_components/LoginForm";

type Props = {
    user: Object;
    route: (route: string) => void;
};

export const UserButton: React.FC<Props> = ({ user }: Props) => {
    return (
        <div>
            {!user ? (
                <>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </>
            ) : (
                <>
                    <LoginForm />
                </>
            )}
        </div>
    );
};
