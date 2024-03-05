import TransactionCard from "./TransactionCard.";

export default function TransactionList({transactions}) {
    return (
        <>
            <div className="p-6 space-y-6">
                {transactions.map((transaction, index) => (
                    <TransactionCard
                        key={index}
                        isDeposit={transaction.isDeposit}
                        refNo={transaction.refNo}
                        transactionDate={transaction.transactionDate}
                        amount={transaction.amount}
                    />
                ))}
            </div>
        </>
    );
}


