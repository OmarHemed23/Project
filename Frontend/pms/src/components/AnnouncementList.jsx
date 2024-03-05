import React from "react";
import Dropdown from "./Dropdown";

export default function AnnouncementList({announcements, onSelectAnnouncement}){
    return (
        <>
            <div class="divide-y divide-gray-100 dark:divide-gray-700">
                {announcements.map((announcement, index) => (
                    <Dropdown.Link key={index} onClick={() => onSelectAnnouncement(announcement)} class="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
                        <div class="flex-shrink-0">
                            <img class="rounded-full w-11 h-11" src={announcement.image} alt="Jese image" />
                        </div>
                        <div class="w-full ps-3">
                            <div class="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                                New message from  
                                <span class="font-semibold text-gray-900 dark:text-white"> 
                                        {announcement.user}
                                </span>: {announcement.message}
                            </div>
                            <div class="text-xs text-blue-600 dark:text-blue-500">{announcement.timestamp}</div>
                        </div>
                    </Dropdown.Link>
                ))}
            </div>
        </>
    );
}

