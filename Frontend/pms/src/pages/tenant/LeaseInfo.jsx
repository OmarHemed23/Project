import React from 'react';
import Pagination from '../../components/Pagination';
import Header from '../../components/Header';

export default function LeaseInfo() {
    let pageName = 'LeaseInfo';
  // Assuming you have lease data, replace the following with actual data
  const leaseData = [
    {
    propertyLeased: '123ABC',
    tenant: 'Omar Hemed',
    leaseStartDate: '2022-01-01',
    leaseEndDate: '2022-12-31',
    monthlyRent: 1500,
    securityDeposit: 2000,
    additionalTerms: 'No pets allowed',
    status: 'Active',
    // Add more lease information as needed
    }
  ];
//   h-2.5 w-2.5 rounded-full bg-green-500 me-2

  return (
    <>

        <div className="w-full">
            <Header
                tabs={[
                { label: "Lease Information", link: "/" },
            ]}
            >
            </Header>
            <div className="w-full mt-6 px-4 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                <div className="mt-8">
                    <h2 className="text-lg font-semibold mb-4">Important Notices</h2>
                    <div className="bg-red-500 shadow-md p-4">
                        <p className="text-gray-800">
                            Please ensure all lease agreements are signed and returned by
                            the specified deadline.
                        </p>
                    </div>
                </div>
                <div className="overflow-x-auto mb-2 scrollbar-none scrollbar-thin scrollbar-thumb-slate-900 scrollbar-track-transparent hover:scrollbar">
                    <table className="text-sm text-left text-slate-500 mt-4 shadow-md">
                        <thead className="text-xs text-slate-700 uppercase bg-slate-200">
                            <tr>
                                <th scope='col' className="px-6 py-3">
                                        propertyLeased 
                                </th>
                                <th scope='col' className="px-6 py-3">
                                        tenant 
                                </th>
                                <th scope='col' className="px-6 py-3">
                                        leaseStartDate 
                                </th>
                                <th scope='col' className="px-6 py-3">
                                        leaseEndDate 
                                </th>
                                <th scope='col' className="px-6 py-3">
                                        monthlyRent 
                                </th>
                                <th scope='col' className="px-6 py-3">
                                        securityDeposit 
                                </th>
                                <th scope='col' className="px-6 py-3">
                                        additionalTerms 
                                </th>
                                <th scope='col' className="px-6 py-3">
                                        status 
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {leaseData.map((data, index) => (
                                <tr key={index} className="bg-white border-b">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        {data.propertyLeased}
                                    </th>
                                    <td className="px-6 py-4">
                                        {data.tenant}
                                    </td>
                                    <td className="px-6 py-4">
                                        {data.leaseStartDate}
                                    </td>
                                    <td className="px-6 py-4">
                                        {data.leaseEndDate}
                                    </td>
                                    <td className="px-6 py-4">
                                        {data.monthlyRent}
                                    </td>
                                    <td className="px-6 py-4">
                                        {data.securityDeposit}
                                    </td>
                                    <td className="px-6 py-4">
                                        {data.additionalTerms}
                                    </td>
                                    <td className="px-6 py-4">
                                        {data.status}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <Pagination totalEntries={4} entriesPerPage={5} />
            </div>
        </div>
    </>
  );
}

