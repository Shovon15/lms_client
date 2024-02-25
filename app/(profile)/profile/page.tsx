"use client"

import { Button } from '@/components/ui/button';
import { useLogoutMutation } from '@/redux/feature/auth/authApi';
import React from 'react'
import { useSelector } from 'react-redux';

type Props = {}

const ProfilePage = (props: Props) => {
    const { user } = useSelector((state: any) => state.auth);
    const [logout, { isSuccess, isError }] = useLogoutMutation();
    const handleLogout = async () => {
        await logout({});
    };

    return (
        <div><p>ProfilePage</p>

            {user && (
                <div>
                    <h1> {user.name}</h1>
                    <Button onClick={handleLogout}>Logout</Button>
                </div>
            )}
        </div>
    )
}

export default ProfilePage