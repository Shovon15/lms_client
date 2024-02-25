"use client"

import React from 'react'
import DesktopSidebar from './_components/Sidebar/desktopSidebar';
import DashboardNavbar from './_components/dashboardNavbar';
import Protected from '@/hooks/userHook';
import AdminProtected from '@/hooks/adminHook';


interface DashboardLayoutProps {
    children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {

    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
    const handleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    return (
        <div className="flex">
            <AdminProtected>


                <Protected>
                    <aside
                        className={`${isSidebarOpen
                            ? "w-0"
                            : "w-72"
                            } transition-all duration-300 ease-in-out fixed hidden lg:block`}
                    >
                        <DesktopSidebar
                            handleSidebar={handleSidebar} />
                    </aside>
                    <div
                        className={`${isSidebarOpen
                            ? ""
                            : "lg:ml-72"
                            } flex-grow transition-all duration-300 ease-in-out`}
                    >
                        <DashboardNavbar
                            handleSidebar={handleSidebar}
                            isSidebarOpen={isSidebarOpen} />

                        <div className="bg-secondary dark:bg-secondary">
                            {children}
                        </div>
                        {/* <Footer /> */}
                    </div>
                </Protected>
            </AdminProtected>
        </div>



    );
};

export default DashboardLayout;