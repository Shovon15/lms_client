"use client"
import Protected from "@/hooks/userHook";
import React, { useState } from "react";

type Props = {
    children: React.ReactNode;
};

const ProfileLayout = ({ children }: Props) => {
    return (
        <>
            <Protected>
                {children}
            </Protected>
        </>
    );
};

export default ProfileLayout;