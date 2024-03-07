import { Link } from "react-router-dom";
import Logo from "./Logo";
import Dropdown from "./Dropdown";
import AnnouncementList from "./AnnouncementList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProfilePic from "./ProfilePic";

export default function TopBar({ toggleSidebar, showingNavigation}){
    const announcements = [
        {
            user: "Omar Hemed",
            image: "",
            timestamp: 'Today',
            message: 'Scheduled maintenance will be conducted on Saturday, March 2nd, from 9:00 AM to 12:00 PM. Please ensure all personal belongings are secured during this time.',
        },
    ];
    return (
        <>
            <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 shadow-md">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start rtl:justify-end">
                            <button onClick={toggleSidebar}
                                data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" 
                                aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 text-sm 
                                text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 
                                focus:ring-gray-200 dark:text-gray-400">
                                    <span className="sr-only">Open sidebar</span>
                                    <span className="w-6 h-6" aria-hidden="true">
                                        <FontAwesomeIcon 
                                            className={!showingNavigation ? 'inline-flex' : 'hidden'} 
                                            icon="bars" 
                                            size="15xs"
                                        />
                                        <FontAwesomeIcon 
                                            className={ showingNavigation? 'inline-flex' : 'hidden'} 
                                            icon="times"
                                            size="15xs"
                                        />
                                    </span>
                            </button>
                            <Link path="" className="flex ms-2 md:me-24">
                                <Logo  className="h-8 me-3" alt="PMS Logo" />
                                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap ">
                                    FLASH RENT
                                </span>
                            </Link>
                        </div>
                        <div className="flex items-center">
                            <div className="flex items-center ms-3">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <button 
                                            id="dropdownNotificationButton" 
                                            data-dropdown-toggle="dropdownNotification" 
                                            class="relative inline-flex items-center text-sm ml-3 font-medium text-center text-gray-500 hover:text-gray-900 focus:outline-none dark:hover:text-white dark:text-gray-400" 
                                            type="button">
                                                <FontAwesomeIcon 
                                                    className="w-5 h-5"
                                                    aria-hidden="true"
                                                    icon="bell"
                                                />
                                                <div class="absolute block w-3 h-3 bg-red-500 border-2 border-white rounded-full -top-0.5 start-2.5 dark:border-gray-900"></div>
                                        </button>
                                    </Dropdown.Trigger>
                                    <Dropdown.Content>
                                        <AnnouncementList announcements={announcements} />
                                        <Link to="announcement" class="block py-2 text-sm font-medium text-center text-gray-900 rounded-b-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">
                                            <div class="inline-flex items-center ">
                                                <FontAwesomeIcon 
                                                    className="w-4 h-4 me-2"
                                                    aria-hidden="true"
                                                    icon="eye"
                                                />
                                                    View all
                                            </div>
                                        </Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                            <div className="flex items-center ms-3">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <button type="button" className="flex text-sm bg-gray-800 rounded-full
                                        focus:ring-4 focus:ring-gray-300" aria-expanded="false" data-dropdown-toggle="dropdown-user"
                                        >
                                            <span className="sr-only">Open User Menu</span>
                                            <ProfilePic
                                            className='w-8 h-8 rounded-full'
                                            />
                                        </button>
                                    </Dropdown.Trigger>
                                    <Dropdown.Content>
                                        <div className="px-4 py-3" role="none">
                                            <p className="text-sm text-gray-900" role="none">
                                                Omar Hemed
                                            </p>
                                            <p className="text-sm font-medium text-gray-900 truncate" role="none">
                                                omarhemed800@gmail.com
                                            </p>
                                        </div>
                                        <ul className="py-1" role="none">
                                            <li>
                                                <Dropdown.Link>
                                                    Dashboard
                                                </Dropdown.Link>
                                                <Dropdown.Link>
                                                    Settings
                                                </Dropdown.Link>
                                                <Dropdown.Link>
                                                    Log Out
                                                </Dropdown.Link>
                                            </li>
                                        </ul> 
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>
                    </div>   
                </div>
            </nav>
        </>
    );
}