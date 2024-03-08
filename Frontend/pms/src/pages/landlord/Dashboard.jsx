import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StatsCard from "../../components/StatsCard";
import TenantTable from "./partials/TenantTable";
import FilterDropdown from "../../components/Filter";
import PrimaryButton from "../../components/PrimaryButton";

export default function Dashboard () {
    const [filterValue, setFilterValue] = useState('');

    const tenants = [
        { name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', property: 'Uni101', 
        propertyType: 'Commercial Building', rentAmount: '20,000' , status: 'Unpaid'
        },
        { name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210', status: 'paid', 
        property: 'Unitcom102', propertyType: 'Commercial Building', rentAmount: '20,000' ,  
        },
    ];
  
    const filteredTenants = tenants.filter(tenant => {
    return tenant.name.toLowerCase().includes(filterValue.toLowerCase()) ||
            tenant.email.toLowerCase().includes(filterValue.toLowerCase());
    });
    const filterItems = [
        { id: "1", name: "Name"},
        { id: "2", name: "Property"},
        { id: "3", name: "Status"},
        { id: "4", name: "Property type"},
        { id: "5", name: "Rent amount"},
    ];
    return (
        <>
            <section className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
                <StatsCard title="Total Properties" total="0" stat="Apartments 2">
                    <FontAwesomeIcon icon="building" className="text-blue-700" />
                </StatsCard>
                <StatsCard title="Total Tenants" total="0">
                    <FontAwesomeIcon icon="users" className="text-blue-700" />
                </StatsCard>
                <StatsCard title="Occupancy Rate" total="0" rate="0%" levelUp>
                    <FontAwesomeIcon icon="building" className="text-blue-700" />
                </StatsCard>
                <StatsCard title="Total Revenue" total="0" rate="0%" levelUp>
                    <FontAwesomeIcon icon="building" className="text-blue-700" />
                </StatsCard>
            </section>
            <section className="bg-white rounded-lg shadow-md h-96 mt-4">
                <div className="flex justify-between px-6 py-5 font-semibold border-b border-gray-100">
                    <div>
                        Tenants
                    </div>
                    <div className="flex items-center space-x-4">
                        <FilterDropdown items={filterItems} onChange={setFilterValue} />
                        <PrimaryButton >
                            <FontAwesomeIcon icon="plus" className="mr-2" />
                            Add Tenant
                        </PrimaryButton>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <TenantTable tenants={filteredTenants} />
                </div>
            </section>
        </>
    );
}