import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SideBar({ userType, showingNavigation }) {
    const userTypeConfig = {
        tenant: {
            links: [
                { to: "home", label: "Home", icon: "home" },
                { to: "leaseinfo", label: "Lease Information", icon: "circle-info" },
                { to: "payment", label: "Payment", icon: "cash-register" },
                { to: "maintenance-request", label: "Maintenance Request", icon: "tools" },
                { to: "tenant-talk", label: "TenantTalk", icon: "comments" }
            ]
        },
        landlord: {
            links: [
                { to: "dashboard", label: "Dashboard", icon: "dashboard" },
                { to: "", label: "Properties", icon: "building" },
                { to: "", label: "Tenant Management", icon: "users" },
                { to: "", label: "Maintenance & Repairs", icon: "tools" },
                { to: "", label: "Financial Management", icon: "chart-line" },
                { to: "", label: "Communication", icon: "comments" },
                { to: "", label: "Reports & Analytics", icon: "chart-bar" },
                { to: "", label: "Documents", icon: "file-alt" },
                { to: "", label: "Settings & Configuration", icon: "cog" },
            ]
        }
    };
    const links = userTypeConfig[userType].links;
    return (
        <>
            <aside
                id="pms-tenant-sidebar"
                className={`${showingNavigation ? 'translate-x-0' : '-translate-x-full'} fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
                aria-label="PMS Sidebar"
            >
                <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        {links.map((link, index) => (
                            <li key={index}>
                                <Link
                                    to={link.to}
                                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                                >
                                    <FontAwesomeIcon 
                                        icon={link.icon} 
                                        className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    />
                                    <span className="ms-3">{link.label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
        </>
    );
}
// Dashboard: The central hub where landlords can view an overview of their properties, tenants, rent payments, maintenance requests, and other key metrics. It should provide a snapshot of the current status of all properties.
// Property Listings: A page where landlords can add, edit, and manage property listings. Include details such as property address, rental price, photos, and any special features.
// Tenant Management: This page allows landlords to view tenant information, track lease agreements, and manage tenant communication. Features may include tenant profiles, lease terms, and contact details.
// Rent Collection: An area where landlords can track rent payments, set up automatic reminders, and view payment history. Integrating online payment options can streamline this process.
// Maintenance Requests: A section where tenants can submit maintenance requests, and landlords can assign tasks, track progress, and communicate with service providers.
// Financial Reports: Provide financial summaries, including income, expenses, and profit/loss statements. Landlords can analyze data related to their properties.
// Document Repository: Store important documents such as leases, property agreements, and inspection reports. Make them easily accessible for both landlords and tenants.
// Communication Center: A messaging platform for landlords and tenants to communicate securely. Include notifications for rent reminders, lease renewals, and other important updates.
// Analytics and Insights: Display visualizations of property performance, occupancy rates, and trends. Landlords can make informed decisions based on data.
// Settings and Profile: Allow landlords to customize their account settings, update personal information, and manage preferences.

