"use client";

import React from 'react'

// import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Button } from '@/components/ui/button';
// import { signIn, useSession } from 'next-auth/react';


// import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const Social = () => {
    // const searchParams = useSearchParams();
    // const callbackUrl = searchParams.get("callbackUrl");
    // const { data: session } = useSession();
    // console.log({ data: session } )

    const onClick = (provider: "google" | "github") => {
        // console.log(provider, "provider")
        // signIn(provider, {
        //     callbackUrl: "/",
        // });
    }

    return (
        <div className="flex items-center w-full gap-x-2">
            <Button
                size="lg"
                className="w-full"
                variant="outline"
                onClick={() => onClick("google")}
            >
                <FcGoogle className="h-5 w-5" />
            </Button>
            <Button
                size="lg"
                className="w-full"
                variant="outline"
                onClick={() => onClick("github")}
            >
                <FaGithub className="h-5 w-5" />
            </Button>
        </div>
    )
}

