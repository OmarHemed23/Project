import Pagination from "../../../components/Pagination";
import TransactionList from "../../../components/TransactionList";

export default function TransactionHistory() {
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
    return (
        <>
            <TransactionList transactions={transactions} />
        </>
    );
}