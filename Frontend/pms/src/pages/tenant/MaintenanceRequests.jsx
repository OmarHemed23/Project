import React, { useState } from "react";
import Header from "../../components/Header";
import PrimaryButton from "../../components/PrimaryButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UnorderedList from "../../components/UnorderedList";
import Pagination from "../../components/Pagination";
import MaintenaceRequestForm from "./partials/MaintenanceRequestForm";
import Schedule from "./partials/Schedule";

// Functional component for Maintenance Requests page
export default function MaintenanceRequests() {
    const [makingRequest, setMakingRequest] = useState(false);
    const [activeTab, setActiveTab] = useState("Maintenance-Requests");

    const closeModal = () => {
        setMakingRequest(false);
    };
    const makeRequest = () => {
        setMakingRequest(true);
    };
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };
    const items = [
        {
            title: "Leaked drainage",
            reportedDate: "2024-10-20",
            completedDate: "2023-10-30"
        },
        {
            title: "Broken pipe",
            reportedDate: "2024-01-15",
            completedDate: "2023-02-28"
        },
    ]; 
    return (
        <>
            <Header
                tabs={[
                { label: "Maintenance Requests", id:"Maintenance-Requests" },
                { label: "Maintenace Schedule", id: "Maintenace-Schedule" },
            ]}
                activeTab={activeTab}
                onTabChange={handleTabChange}
            >
            </Header>
            <div className="mt-4">
                <div className="flex justif-start">
                    <PrimaryButton onClick={makeRequest}>
                        Make request
                        <FontAwesomeIcon icon="tools" className='rtl:rotate-180 w-3.5 h-3.5 ms-2' />
                    </PrimaryButton>
                </div>
                <div className="flex flex-col md:col-span-2 md:row-span-2 mt-4 bg-white shadow-md rounded-lg">
                    { activeTab === "Maintenance-Requests" &&(
                        <>
                            <div className="px-6 py-5 font-semibold border-b border-gray-100">
                                Maintenace Requests
                            </div>
                            <div className="p-4 flex-grow overflow-y-auto">
                                <UnorderedList
                                items={items}
                                />
                            </div>
                            <div className="flex item-center justify-center p-2">
                                <Pagination
                                totalEntries={100}
                                entriesPerPage={10}
                                />
                            </div>
                        </>
                    )}
                    { activeTab === "Maintenace-Schedule" && (
                        <>
                            <Schedule />
                        </>
                    )}
                </div>
                <MaintenaceRequestForm makingRequest={makingRequest} closeModal={closeModal} />
            </div>
        </>
    );
}
