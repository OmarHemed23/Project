import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Schedule(){
    return (
        <>
            {/* Property Maintenance Schedule Section */}
            <section className="mt-6 bg-white rounded-lg border-gray-300 shadow-md">
                <div className="px-6 py-5 font-semibold border-b border-gray-100">
                    <h5>
                        <FontAwesomeIcon icon="tools" className='mr-2' />
                        Property Maintenance Schedule
                    </h5>
                </div>
                <div className="overflow-y-auto p-4 flex-grow max-h-72">
                    {/* Content for Property Maintenance Schedule */}
                    {/* You can add your content here */}
                    <h1>Hello</h1>
                </div>
            </section> 
        </>
    );
}