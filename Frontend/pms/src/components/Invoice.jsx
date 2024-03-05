import Logo from './Logo';
export default function Invoice({children, items}){
    return (
        <>
            <div class="bg-white border rounded-lg shadow-lg px-6 py-8 w-full mx-auto mt-8">
                <div className="flex justify-between items-center">
                    <div className="items-center justify-center mx-auto">
                        <Logo className='h-20'/>
                    </div>
                </div>
                <hr class="mb-2" />
                {items.map((item, index) => (
                    <>
                        <div key={index} class="flex justify-between mb-6">
                            <h1 class="text-lg font-bold">Invoice</h1>
                            <div class="text-gray-700">
                                <div>{item.date}</div>
                                <div>Invoice #:{item.invoice_no}</div>
                            </div>
                        </div>
                        <div class="mb-8">
                            <h2 class="text-lg font-bold mb-4">Bill To:</h2>
                            <div class="text-gray-700 mb-2">{item.name}</div>
                            <div class="text-gray-700 mb-2">{item.address}</div>
                            <div class="text-gray-700">{item.email}</div>    
                        </div>
                    </>
                ))}
                <table class="w-full mb-8">
                    <thead>
                        <tr>
                            <th class="text-left font-bold text-gray-700">Description</th>
                            <th class="text-right font-bold text-gray-700">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="text-left text-gray-700">Product 1</td>
                            <td class="text-right text-gray-700">{item.price}</td>
                        </tr>
                        <tr>
                            <td class="text-left text-gray-700">Product 2</td>
                            <td class="text-right text-gray-700">$50.00</td>
                        </tr>
                        <tr>
                            <td class="text-left text-gray-700">Product 3</td>
                            <td class="text-right text-gray-700">$75.00</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td class="text-left font-bold text-gray-700">Total</td>
                            <td class="text-right font-bold text-gray-700">$225.00</td>
                        </tr>
                    </tfoot>
                </table>
                <div class="text-gray-700 mb-2">Thank you for your business!</div>
                <div class="text-gray-700 text-sm">Please remit payment within 30 days.</div>
                {children}
            </div>
        </>
    );
}