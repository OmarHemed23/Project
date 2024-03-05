import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PrimaryButton from '../../components/PrimaryButton';
import UnorderedList from '../../components/UnorderedList';
import TransactionList from '../../components/TransactionList';
import MaintenaceRequestForm from './partials/MaintenanceRequestForm';


export default function Home() {
    const [height] = useState(0);
    const [makingRequest, setMakingRequest] = useState(false);
    const [showingHistory, setShowingHistory] = useState(false);

    const handleShowingHistory = () => {
        setShowingHistory(true);
    };
    const makeRequest = () => {
        setMakingRequest(true);
    };
    const closeModal = () => {
        setMakingRequest(false);
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
    const transactions = [
        {
            isDeposit: true,
            refNo: "REGF50",
            transactionDate: "2024-01-15",
            amount: 50.00,
        },
        {
            isDeposit: false,
            refNo: "REGF50",
            transactionDate: "2024-01-15",
            amount: 50.00,
        },
        {
            isDeposit: false,
            refNo: "REGF50",
            transactionDate: "2024-01-15",
            amount: 50.00,
        },
    ];
    // Sample announcement data
    const announcements = [
        {
            id: 1,
            title: 'Important Maintenance Notice',
            content: 'Scheduled maintenance will be conducted on Saturday, March 2nd, from 9:00 AM to 12:00 PM. Please ensure all personal belongings are secured during this time.',
        },
        {
            id: 2,
            title: 'Community Event: Potluck Picnic',
            content: 'Join us for a community potluck picnic on Sunday, March 10th, at the central park area. Bring your favorite dish to share!',
        },
    ];
    return (
        <>
            <div ClassName="w-full">
                <Header
                    tabs={[
                    { label: "Home", link: "/" },
                ]}
                >
                </Header>
                <div className="mt-4 rounded-lg dark:border-gray-700" >
                    <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-4">
                        <div className="flex items-center p-8 h-24 bg-white shadow-md rounded-lg">
                            <div ClassName="inline-flex flex-shrink-0 items-center justify-center text-purple-600 bg-purple-100 rounded-lg mr-6">
                                <FontAwesomeIcon icon="user" className='h-6 w-6' size='10x' aria-hidden="true" />
                            </div>
                            <div>
                                <h2 className="block text-medium font-bold">Tenant Info</h2>
                                <span className="block text-gray-500 text-medium font-bold">Omar Hemed</span>
                                <span className="block text-gray-500 text-medium font-bold">Unit 101</span>
                            </div>
                        </div>
                        <div className="flex items-center p-8 h-24 bg-red-300 shadow-md rounded-lg">
                            <div className="inline-flex flex-shrink-0 items-center justify-center text-purple-600 rounded-lg mr-6">
                                <FontAwesomeIcon icon="wallet" className='h-6 w-6' size='10x' aria-hidden="true" />
                            </div>
                            <div>
                                <h2 className="block text-medium font-bold">Account Balance</h2>
                                <span className="block text-gray-500 text-medium font-bold">Ksh:400</span>
                            </div>
                        </div>
                        <div className="flex items-center p-8 h-24 bg-amber-200 shadow-md rounded-lg">
                            <div className="inline-flex flex-shrink-0 items-center justify-center text-purple-600 rounded-lg mr-6">
                                <FontAwesomeIcon icon="building" className='h-6 w-6' size='10x' aria-hidden="true" />
                            </div>
                            <div>
                                <h2 className="block text-medium font-bold">Property Details</h2>
                                <span className="block text-gray-500 text-medium font-bold">2 Bedroom</span>
                            </div>
                        </div>
                        <div className="flex items-center p-8 h-24 bg-green-200 shadow-md rounded-lg">
                            <div className="inline-flex flex-shrink-0 items-center justify-center text-purple-600 bg-green-200 rounded-lg mr-6">
                                <FontAwesomeIcon icon="file-contract" className='h-6 w-6' size='10x' aria-hidden="true" />
                            </div>
                            <div>
                                <h2 className="block text-medium font-bold">Lease Info</h2>
                                <span className="block text-gray-500 text-medium font-bold">Lease End: 2024-08-15</span>
                            </div>
                        </div>
                    </section>
                    <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
                        <div className="flex flex-col md:col-span-2 md:row-span-2 bg-white shadow-md rounded-lg">
                            <div className="px-6 py-5 font-semibold border-b border-gray-100">
                                Maintenance Requests
                            </div>
                            <div className="p-4 flex-grow overflow-y-auto">
                                <UnorderedList items={items}/>
                            </div>
                            <MaintenaceRequestForm closeModal={closeModal} makingRequest={makingRequest} />
                            <div className="flex item-center justify-center p-2">
                                <PrimaryButton onClick={makeRequest}>
                                    Make request
                                    <FontAwesomeIcon icon="tools" className='rtl:rotate-180 w-3.5 h-3.5 ms-2' />
                                </PrimaryButton>
                                <PrimaryButton>
                                    <Link to="/tenant/maintenace-request">
                                        View More
                                        <FontAwesomeIcon icon="arrow-right" className='rtl:rotate-180 w-3.5 h-3.5 ms-2' />
                                    </Link>
                                </PrimaryButton>
                            </div>
                        </div>
                        <div className="flex flex-col md:col-span-2 md:row-span-2 bg-white shadow-md rounded-lg">
                            <div className="flex items-center justify-between px-6 py-5 font-semibold border-b border-gray-100">
                                <span>
                                    <h5><FontAwesomeIcon icon="exchange" className='mr-2' />
                                        My Transactions
                                    </h5>
                                </span> 
                                <span>
                                    <PrimaryButton>
                                        <Link to="/tenant/payment" >
                                            View All
                                            <FontAwesomeIcon icon="chevron-right" className='ml-2' />
                                        </Link>
                                    </PrimaryButton>
                                </span>
                            </div>
                            <div className="overflow-y-auto w-full max-w-md" style={{ maxHeight: height + '24rem' }}>
                                <TransactionList transactions={transactions} />
                            </div>
                        </div>
                    </section>         
                    {/* Announcements Section */}
                    <section className="bg-white rounded-lg border-gray-300 shadow-md dark:border-gray-600 mt-4">
                        <div className="px-6 py-5 font-semibold border-b border-gray-100">
                            <h5>
                                <FontAwesomeIcon icon="bullhorn" className='mr-2' />
                                Announcements
                            </h5>
                        </div>
                        <div className="overflow-y-auto p-4 flex-grow max-h-72">
                            {/* Rendering announcements */}
                            {announcements.map(announcement => (
                                <div key={announcement.id} className="mb-4">
                                    <h6 className="font-semibold">{announcement.title}</h6>
                                    <p className="text-sm text-gray-600">{announcement.content}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}

  