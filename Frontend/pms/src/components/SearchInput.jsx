import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Label from "./Label";
export default function SearchInput({className='',...props}){
    return (
        <>
            <div className="relative mt-1">
                <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                    <FontAwesomeIcon icon="search" className="w-4 h-4 text-gray-500"/>
                </div>
                <input type="text" id="table-search" className="block p-2 ps-10 text-sm text-gray-900 border
                border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" />
            </div>
        </>
    );
}