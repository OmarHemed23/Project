import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Pagination({totalEntries, entriesPerPage}) {
    const [currentPage, setCurrentPage] = useState(1);
    // Calculate the range of entries to display
    const startIndex = (currentPage - 1) * entriesPerPage + 1;
    const endIndex = Math.min(currentPage * entriesPerPage, totalEntries);
    
    // Handle previous page click
    const handlePrevClick = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    // Handle next page click
    const handleNextClick = () => {
        const totalPages = Math.ceil(totalEntries / entriesPerPage);
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };
    return (
        <>
            <div class="flex flex-col items-center mt-4">
                <span class="text-sm text-gray-700 dark:text-gray-400">
                    Showing  
                    <span class="font-semibold ml-1 mr-1 text-gray-900 dark:text-white">
                         {startIndex}
                    </span>
                         to 
                    <span class="font-semibold text-gray-900 ml-1 mr-1 dark:text-white">
                         {endIndex}
                    </span>
                         of 
                    <span class="font-semibold text-gray-900 ml-1 mr-1 dark:text-white">
                        {totalEntries}
                    </span> 
                        Entries
                </span>
                <div class="inline-flex mt-2 xs:mt-0">
                    <button 
                    onClick={handlePrevClick}
                    class="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        <FontAwesomeIcon icon="arrow-left" className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" />
                        Prev
                    </button>
                    <button 
                    onClick={handleNextClick}
                    class="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        Next
                        <FontAwesomeIcon icon="arrow-right" className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" />
                    </button>
                </div>
            </div>
        </>
    );
}