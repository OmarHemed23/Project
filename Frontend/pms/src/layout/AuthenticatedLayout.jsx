import { useState } from "react";
import TopBar from "../components/TopBar";
import SideBar from "../components/SideBar";
import { Outlet, useLocation } from "react-router-dom";
import Alert from "../components/Alert";

export default function AuthenticatedLayout({children}){
    const [showingNavigation, setShowingNavigation] = useState(false);

    const location = useLocation();

    let userType = "tenant";
    if (location.pathname.startsWith("/admin")) {
        userType = "admin";
    } else if (location.pathname.startsWith("/landlord")) {
        userType = "landlord";
    } else {
        userType = "tenant";
    }

    const toggleSidebar = () => {
        setShowingNavigation((previousState) => !previousState);
    };
    const closeToggleSidebar = () => {
        setShowingNavigation(false);
    };
    
    return (
        <div className="min-h-screen bg-gray-100">
            <TopBar toggleSidebar={toggleSidebar} showingNavigation={showingNavigation} />
                <main className="flex p-6 md:p-10 space-y-6" onClick={closeToggleSidebar}>
                    {/* SideBar */}
                    <SideBar userType={userType} showingNavigation={showingNavigation} />
                    {/* SideBar End */}
                    {/* Main Content */}
                    <div className="flex-1 p-4 overflow-y-auto scrollbar-none hover:scrollbar-visible scrollbar-thin scrollbar-thumb-slate-900 scrollbar-track-slate-100">
                        <div className="relative h-full p-4 md:ml-60">
                            <Alert type="success" message="You are logged in"/>
                            {children}
                            <Outlet />
                        </div>
                    </div>
                </main>
        </div>
    );
}