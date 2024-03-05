import React from 'react';

export default function UnorderedList({items}) {
    return (
        <>
            <ul className="divide-y divide-gray-200">
                {items.map((item, index) => (
                    <li key={index} className="py-4">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                </svg>
                            </div>
                            <div className="flex-1">
                                <div className="text-sm font-medium text-gray-900">{item.title}</div>
                                <div className="text-sm text-gray-500">Reported: {item.reportedDate}</div>
                            </div>
                            <div className="flex items-center mr-2">
                                <span className="text-gray-500">Completed: {item.completedDate}</span>
                                <div className="rounded-full h-3 w-3 ml-2 bg-green-500"></div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}

