import {Link} from "react-router-dom";
import {Outlet} from "react-router-dom";
import Logo from "../components/Logo";
import Alert from "../components/Alert";

export default function GuestLayout({children}){
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-10">
            <div>
                <Link path="/">
                    <Logo className="w-20 h-20" />
                </Link>
            </div>
            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                <Alert type="info" message="This is an error message" />
                {children}
                <Outlet />
            </div>
        </div>

    );
};