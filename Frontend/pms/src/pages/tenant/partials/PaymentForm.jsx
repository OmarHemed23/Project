import React, { useState, useEffect } from 'react';
import DropdownInput from "../../../components/DropdownInput";
import Label from "../../../components/Label";
import Stepper from "../../../components/Stepper";
import TextInput from "../../../components/TextInput";
import PrimaryButton from "../../../components/PrimaryButton";
import Receipt from '../../../components/Receipt';

export default function PaymentForm(){
    const [selectedProperty, setSelectedProperty] = useState(null);
    const [leaseStartDate, setLeaseStartDate] = useState('');
    const [leaseEndDate, setLeaseEndDate] = useState('');
    const [totalAmount, setTotalAmount] = useState(0);
    const [activeStep, setActiveStep] = useState("details");

    useEffect(() => {
        // Calculate total amount when lease dates or property changes
        calculateTotalAmount();
    }, [leaseStartDate, leaseEndDate, selectedProperty]);

    const calculateTotalAmount = () => {
        // Implement your calculation logic here
        // Example calculation: total amount = lease duration * property rent amount
        let total = 0;
        if (selectedProperty && leaseStartDate && leaseEndDate) {
            // Calculate lease duration in months (assuming leaseStartDate and leaseEndDate are in Date format)
            const startDate = new Date(leaseStartDate);
            const endDate = new Date(leaseEndDate);
            const leaseDuration = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth());

            // Get rent amount for the selected property
            const rentAmount = selectedProperty.rentAmount;

            // Calculate total amount
            total = leaseDuration * rentAmount;
        }
        setTotalAmount(total);
    };

    const handlePropertyChange = (property) => {
        setSelectedProperty(property);
    };

    const handleActiveStep = () => {
        switch (activeStep) {
            case "details":
                setActiveStep("payment-information");
                break;
            case "payment-information":
                setActiveStep("complete-payment");
                break;
            case "complete-payment":
                break;
            default:
                break;
        }
    };

    const properties = [
        { id: 1, name: "Property 1" },
        { id: 2, name: "Property 2" },
    ];

    return (
        <>
            <Stepper
                steps={[
                    { icon: "user", id: "details" },
                    { icon: "cash-register", id: "payment-information" },
                    { icon: "check-square", id: "complete-payment" }
                ]}
                activeStep={activeStep}
            />
            <form action="">
            {activeStep === "details" && (
                <>
                    <h3 className="mb-4 text-lg font-medium leading-none text-gray-900 dark:text-white">
                        Tenant Info
                    </h3>
                    <div className="grid gap-4 mb-4 md:grid-cols-2">
                    <div>
                        <Label value="Name"/>
                        <TextInput
                        type="text"
                        name="name"
                        id="name"
                        />
                    </div>
                    <div>
                        <Label value="Email"/>
                        <TextInput
                        type="email"
                        name="email"
                        id="email"
                        />
                    </div>
                    <div>
                        <Label value="Phone Number"/>
                        <TextInput
                        type="text"
                        name="phone-number"
                        id="phone-number"
                        />
                    </div>
                    <div>
                        <Label value="Property"/>
                        <DropdownInput
                        value="Property"
                        items={properties}
                        />
                    </div>
                    </div>
                    <PrimaryButton onClick={handleActiveStep}>
                        Next Step: Payment Info 
                    </PrimaryButton>
                </>
            )}
            {activeStep === "payment-information" && (
                <>
                    <h3 className="mb-4 text-lg font-medium leading-none text-gray-900 dark:text-white">
                        Payment Information
                    </h3>
                    <div className="grid gap-4 mb-4 md:grid-cols-2">
                        <div>
                            <Label value="Property" />
                            <DropdownInput
                                value="Property"
                                items={properties}
                                onSelect={handlePropertyChange}
                            />
                        </div>
                        <div>
                            <Label value="Lease Term Start Date" />
                            <TextInput
                                type="date"
                                value={leaseStartDate}
                                onChange={(e) => setLeaseStartDate(e.target.value)}
                            />
                        </div>
                        <div>
                            <Label value="Lease Term End Date" />
                            <TextInput
                                type="date"
                                value={leaseEndDate}
                                onChange={(e) => setLeaseEndDate(e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <Label value="Total Amount" />
                        <TextInput
                            type="text"
                            value={totalAmount}
                            readOnly
                        />
                    </div>
                    <PrimaryButton className='mt-3' onClick={handleActiveStep}>
                        Next: Confirm Payment
                    </PrimaryButton>
                </>
            )}
            {activeStep === "complete-payment" && (
                <>
                    <Receipt />
                    <PrimaryButton className='mt-3' type='submit'>Pay</PrimaryButton>
                </>
            )}
            </form>
        </>
    );
}