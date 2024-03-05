import { useState } from 'react';
import Header from "../../components/Header";
import TransactionHistory from './partials/TransactionHistory';
import Pagination from '../../components/Pagination';
import DepositForm from './partials/DepositForm';
import PaymentForm from './partials/PaymentForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Dropdown from '../../components/Dropdown';

export default function Payment({showingHistory}){
    const [paymentConfirmed, setPaymentConfirmed] = useState(false);
    const [activeTab, setActiveTab] = useState("pay");
    const [height] = useState(0);

    // const handleShowingHistory = (showingHistory) => {
    //     setShowingHistory(showingHistory);
    // };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
            <Header
                tabs={[
                    { label: "Pay", id: "pay" },
                    { label: "Deposit", id: "deposit" },
                    { label: "Transaction History", id: "history" }
                ]}
                activeTab={activeTab}
                onTabChange={handleTabChange}
            >
                <Dropdown>
                    <Dropdown.Trigger>
                        <FontAwesomeIcon icon="ellipsis-v" />
                    </Dropdown.Trigger>
                    <Dropdown.Content>
                        <div className="ml-1">
                            <Dropdown.Link to="" >
                                <FontAwesomeIcon icon="download" />
                                <span className="ml-1">
                                    Download Statement
                                </span>
                            </Dropdown.Link>
                        </div>
                    </Dropdown.Content>
                </Dropdown>
            </Header>
            
            <div className="flex items-center justify-center">
                <div className="w-full mt-6 px-6 py-4 bg-white shadow-md overflow-hidden md:rounded-lg">
                    {activeTab === "pay" && !paymentConfirmed && (
                        <>
                            <PaymentForm />
                        </>
                    )}
                    {activeTab === "pay" && paymentConfirmed && (
                        <>
                            <p className="text-green-500 font-bold">Payment Successful!</p>
                            {/* Payment Details here */}
                        </>
                    )}
                    {activeTab === "deposit" && (
                        <>
                            <h1 className='text-center text-lg text-slate-700 underline font-bold'>DEPOSIT</h1>
                            <DepositForm />
                        </>
                    )}
                    {activeTab === "history" && showingHistory && (
                        <>
                            <div className="overflow-y-auto w-full" style={{ maxHeight: height + '24rem' }}>
                                <TransactionHistory />
                            </div>
                            <div className="flex item-center justify-center p-2">
                                <Pagination
                                    totalEntries={100}
                                    entriesPerPage={10}
                                />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}