import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StatsCard from "../../components/StatsCard";

export default function Dashboard () {
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
                <div className="px-6 py-5 font-semibold border-b border-gray-100">
                    Tenants
                </div>
            </section>
        </>
    );
}