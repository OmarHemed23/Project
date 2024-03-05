export default function AnnouncementCard({ announcement }) {

    return (
        <>
            {announcement && (
                <div className="w-full mt-6 px-6 py-4 bg-white shadow-md md:rounded-lg">
                    <div className="block px-4 py-2 font-medium text-center text-gray-700 rounded-t-lg bg-gray-50 dark:bg-gray-800 dark:text-white">
                        Selected Announcement
                    </div>
                    <div className="px-4 py-3">
                        <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                            New message from  
                            <span className="font-semibold text-gray-900 dark:text-white"> 
                                {announcement.user}
                            </span>: {announcement.message}
                        </div>
                        <div className="text-xs text-blue-600 dark:text-blue-500">{announcement.timestamp}</div>
                    </div>
                </div>
            )}
        </>
    )
}