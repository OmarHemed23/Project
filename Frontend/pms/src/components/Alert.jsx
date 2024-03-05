import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Alert({type, message}){
    const [showingAlert, setShowingAlert] = useState(true);

    // Handle Closing Alert 
    const handleClose = () => {
        setShowingAlert(false);
    };

    let bgColor, textColor;
    if (type === 'error') {
        bgColor = 'bg-red-100';
        textColor = 'text-red-700';
    }else if (type === 'success'){
        bgColor = 'bg-green-100';
        textColor = 'text-green-700';
    }else if (type === 'info'){
        bgColor = 'bg-blue-100';
        textColor = 'text-blue-800';
    }

    return (
        <>
            {showingAlert && (
                <div className={`flex items-center p-4 mb-4 ${textColor} rounded-lg  ${bgColor}`} role="alert">
                    <FontAwesomeIcon icon="info-circle" className="flex-shrink-0 w-4 h-4" />
                    <span className="sr-only">message</span>
                    <div className="ms-3 text-sm font-medium">
                        {message}
                    </div>
                    <button 
                    onClick={handleClose}
                    className={`ms-auto -mx-1.5 -my-1.5 ${bgColor} ${textColor} rounded-lg focus:ring-2 focus:ring-${textColor} p-1.5 hover:${bgColor} inline-flex items-center justify-center h-8 w-8`}
                    data-dismiss-target="#alert" aria-label="Close">
                        <span className="sr-only">Close</span>
                        <FontAwesomeIcon icon="times" className="w-3 h-3" />
                    </button>
                </div>
            )}     
        </>
    );
};

