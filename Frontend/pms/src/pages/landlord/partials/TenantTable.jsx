import React from 'react';
import CheckBox from '../../../components/CheckBox';
import Label from '../../../components/Label';

const TenantTable = ({ tenants }) => {
  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="p-4">
            <div className="flex items-center">
              <CheckBox className="w-4 h-4" />
            </div>
          </th>
          <th scope="col" className="px-4 py-3">Tenant Name</th>
          <th scope="col" className="px-4 py-3">Email</th>
          <th scope="col" className="px-4 py-3">Phone</th>
          <th scope="col" className="px-4 py-3">Property</th>
          <th scope='col' className="px-4 py-3">Property Type</th>
          <th scope="col" className="px-4 py-3">Rent Amount</th>
          <th scope="col" className="px-4 py-3">Status</th>

          {/* Add more columns as needed */}
        </tr>
      </thead>
      <tbody>
        {tenants.map((tenant, index) => (
          <tr key={index} className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
            <td className="w-4 px-4 py-3">
              <div className="flex items-center">
                <CheckBox id={`checkbox-table-search-${index}`} type="checkbox" onClick={(event) => event.stopPropagation()} className="w-4 h4" />
              </div>
            </td>
            <td scope="row" className="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {tenant.name}
            </td>
            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {tenant.email}
            </td>
            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {tenant.phone}
            </td>
            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {tenant.property}
            </td>
            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {tenant.propertyType}
            </td>
            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {tenant.rentAmount}
            </td>

            <td className={`px-4 py-2 font-medium whitespace-nowrap ${
              tenant.status === 'paid' ? 'text-green-500' : 'text-red-500'
            }`}>
              {tenant.status.toUpperCase()}
            </td>
            {/* Add more columns as needed */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TenantTable;
