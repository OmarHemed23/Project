import { useState } from "react";
import AnnouncementCard from "../../components/AnnouncementCard";
import AnnouncementList from "../../components/AnnouncementList";
import Pagination2 from "../../components/Pagination2";

export default function Announcement(){
    const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
    const height = 0;
    const announcements = [
        {
            id: 1,
            user: "Omar Hemed",
            image: "",
            timestamp: 'Today',
            message: 'Scheduled maintenance will be conducted on Saturday, March 2nd, from 9:00 AM to 12:00 PM. Please ensure all personal belongings are secured during this time.',
        },
        {
            id: 2,
            user: "Omar Hemed",
            image: "",
            timestamp: 'Today',
            message: 'Scheduled maintenance will be conducted on Saturday, March 2nd, from 9:00 AM to 12:00 PM. Please ensure all personal belongings are secured during this time.',
        },
        {
            id:3,
            user: "Omar Hemed",
            image: "",
            timestamp: 'Today',
            message: 'Scheduled maintenance will be conducted on Saturday, March 2nd, from 9:00 AM to 12:00 PM. Please ensure all personal belongings are secured during this time.',
        },
        {
            id:4,
            user: "Omar Hemed",
            image: "",
            timestamp: 'Today',
            message: 'Scheduled maintenance will be conducted on Saturday, March 2nd, from 9:00 AM to 12:00 PM. Please ensure all personal belongings are secured during this time.',
        },
    ];
    return (
        <>
            <div className="flex items-center justify-center">
                <div className="w-full mt-6 px-6 py-4 bg-white shadow-md md:rounded-lg">
                    <div class="block px-4 py-2 font-medium text-center text-gray-700 rounded-t-lg bg-gray-50 dark:bg-gray-800 dark:text-white">
                        Annoucements
                    </div>
                    <div className="overflow-y-auto scrollbar-none scrollbar-thin scrollbar-thumb-slate-900 scrollbar-track-transparent hover:scrollbar"style={{ maxHeight: height + '24rem' }}>
                        <AnnouncementList announcements={announcements} onSelectAnnouncement={setSelectedAnnouncement} />
                    </div>
                    <Pagination2 />
                </div>
            </div>
            <AnnouncementCard announcement={selectedAnnouncement} />
        </>
    );
}