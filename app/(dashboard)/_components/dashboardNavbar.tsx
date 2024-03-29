import { AlignLeft } from "lucide-react";
import { MobileSidebar } from "./Sidebar/mobileSidebar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThemeButton } from "@/components/ThemeButton";
import Image from "next/image";
import { useSelector } from "react-redux";

type NavProps = {
    handleSidebar: () => void;
    isSidebarOpen: boolean;
    // isDesktopWidth: boolean;
}

const DashboardNavbar = ({ handleSidebar, isSidebarOpen }: NavProps) => {

    const { user } = useSelector((state: any) => state.auth);

    return (
        <nav className="sticky top-0 z-50 w-full border-b dark:border-slate-100 bg-secondary dark:bg-secondary px-10">
            <div className="flex h-16 justify-between items-center">
                <div className="flex gap-4 items-center">
                    <MobileSidebar />
                    {isSidebarOpen && (
                        // <TooltipWrapper content="menu">
                        <Button variant="ghost" className="px-2.5" onClick={handleSidebar}>
                            <AlignLeft className="w-5 h-5" />
                        </Button>
                        // </TooltipWrapper>
                    )}
                    {/* <Logo /> */}
                </div>
                <div className="flex gap-3">
                    <Button asChild variant={"ghost"}>
                        <Link href="/" className="font-semibold">Home</Link>
                    </Button>
                </div>
                <div className="flex gap-3">
                    {
                        user && (
                            <>
                                <Avatar>
                                    {user?.avatar?.url ? (
                                        <AvatarImage src={user?.avatar?.url} />
                                    ) : user?.name ? (
                                        <AvatarFallback>{user?.name.slice(0, 2)}</AvatarFallback>
                                    ) : (
                                        <AvatarFallback></AvatarFallback>
                                    )}
                                </Avatar>
                            </>
                        )
                    }
                    <ThemeButton />
                </div>
            </div>
        </nav>
    );
};

export default DashboardNavbar;