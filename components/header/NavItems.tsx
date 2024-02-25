import { Menu } from "lucide-react";
import Link from "next/link";
import React from "react";


const ItemData = [
    {
        name: "home",
        url: "/",
    },
    {
        name: "about",
        url: "/about",
    },
    {
        name: "home",
        url: "/",
    },
    {
        name: "home",
        url: "/",
    },
];
type Props = {
    activeItem: number;
    isMobile: boolean;
    onItemClick: (index: number) => void;
};

export const NavItems: React.FC<Props> = ({ activeItem, isMobile, onItemClick }: Props) => {

    // console.log(isMobile,"isMobile")
    return (
        <div>
            {/* {ItemData &&
                ItemData.map((i, index) => (
                    <Link href={i.url} key={index} passHref>
                        <span
                            className={`${activeItem === index ? "text-primary" : "text-green-500"
                                } text-[18px] px-6 font-Popins font-[400] `}
                            onClick={() => onItemClick(index)}
                        >
                            {i.name}
                            {index}
                        </span>
                    </Link>
                ))} */}

            {
                isMobile ? (
                    <>
                        <Menu />
                    </>
                ) : (
                    <>
                        {ItemData &&
                            ItemData.map((i, index) => (
                                <Link href={i.url} key={index} passHref>
                                    <span
                                        className={`${activeItem === index ? 'text-primary' : 'text-green-500'
                                            } text-[18px] px-6 font-Popins font-[600]`}
                                        onClick={() => onItemClick(index)}
                                    >
                                        {i.name}

                                    </span>
                                </Link>
                            ))}
                    </>
                )
            }

        </div>
    );
};
