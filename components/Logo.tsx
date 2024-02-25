import Link from "next/link";
import Image from "next/image";
// import localFont from "next/font/local";

import { cn } from "@/lib/utils";

// import { Roboto } from 'next/font/google'

// const roboto = Roboto({
//     weight: '900', // if single weight, otherwise you use array like [400, 500, 700],
//     style: 'normal',// if single style, otherwise you use array like ['normal', 'italic']
//     subsets: ['latin'],
// })

export const Logo = () => {
    return (
        <Link href="/">
            <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
                <Image
                    src="/vercel.svg"
                    alt="Logo"
                    height={30}
                    width={30}
                />
                {/* <p className={cn(
                    "text-lg text-neutral-700 pb-1",
                    "font-Popins", // Use the Tailwind CSS font family class
                    //   roboto.className
                )}>
                    E-learning <span>Platform</span>
                </p> */}

                <p className="text-lg text-neutral-700 pb-1">
                    <span className="font-Popins text-2xl font-[900]">E-learning</span>{' '}
                    <span className="font-Josefin">Platform</span>
                </p>
            </div>

        </Link >
    );
};