import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Stepper({ steps = [], activeStep, onStepChange }) {
    const goToPreviousStep = () => {
        if (activeStep > 0) {
            onStepChange(activeStep - 1);
        }
    };
    return (
        <ol className="flex items-center w-full md:mb-5">
            {steps.map((step, index) => (
                <li key={index} className={`flex w-full mt-8 items-center ${index !== steps.length - 1 && `after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700 ${activeStep === steps[index + 1]?.id ? "after:border-blue-100 dark:after:border-blue-800" : ""}`}`}>
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 shrink-0 ${activeStep === step.id ? "bg-blue-100 dark:bg-blue-800" : "bg-gray-100 dark:bg-gray-700"}`}>
                        <FontAwesomeIcon icon={step.icon} className={`w-4 h-4 text-blue-600 lg:w-6 lg:h-6 ${activeStep === step.id ? "dark:text-blue-300" : ""}`} />
                    </div>
                </li>
            ))} 
                <li className="flex w-full mt-8 items-center">
                    <button onClick={goToPreviousStep} className="text-blue-600 dark:text-blue-300 font-medium">
                        Previous
                    </button>
                </li>
        </ol>
    );
}