import React, { useState, useRef } from 'react';

const Invoice = () => {
    const [clientName, setClientName] = useState('');
    const [clientAddress, setClientAddress] = useState('');
    const [clientPhone, setClientPhone] = useState('');
    const [items, setItems] = useState([{ name: '', quantity: 0, price: 0 }]);
    const [invoiceTotal, setInvoiceTotal] = useState(0);
    const invoiceRef = useRef(); // Reference to the invoice content

    const handlePrint = () => {
        window.print(); // Trigger print dialog
    };

    const handleChange = (index, e) => {
        const newItems = [...items];
        newItems[index][e.target.name] = e.target.value;
        setItems(newItems);
        calculateTotal(newItems);
    };

    const calculateTotal = (newItems) => {
        const total = newItems.reduce((sum, item) => {
            return sum + (item.price * item.quantity);
        }, 0);
        setInvoiceTotal(total);
    };

    const handleAddItem = () => {
        setItems([...items, { name: '', quantity: 0, price: 0 }]);
    };

    const handleSubmit = () => {
        // Prepare data to send to backend
        const invoiceData = {
            clientName,
            clientAddress,
            clientPhone,
            items,
            total: invoiceTotal,
        };

        console.log('Invoice Data to send to backend:', invoiceData);
        // Here you would typically send the data to the backend
        // e.g., using fetch or axios
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div
                ref={invoiceRef}
                className="bg-white p-10 rounded-lg shadow-lg max-w-2xl w-full"
            >
                <h1 className="text-3xl font-bold text-center mb-6">Invoice</h1>
                <p className="text-right text-sm text-gray-600">Invoice Date: {new Date().toLocaleDateString()}</p>

                <div className="my-6">
                    <h2 className="text-xl font-semibold mb-2">Bill To:</h2>
                    <input
                        type="text"
                        placeholder="Client Name"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        className="border rounded p-2 mb-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="text"
                        placeholder="Client Address"
                        value={clientAddress}
                        onChange={(e) => setClientAddress(e.target.value)}
                        className="border rounded p-2 mb-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="text"
                        placeholder="Client Phone"
                        value={clientPhone}
                        onChange={(e) => setClientPhone(e.target.value)}
                        className="border rounded p-2 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <h2 className="text-xl font-semibold text-center mb-2">Items:</h2>
                <hr className="border-t border-gray-300 mb-2" />
                <div className="flex mb-2 justify-center">
                    <div className="w-2/5 text-center">
                        <h3 className="text-sm">Item</h3>
                    </div>
                    <div className="w-1/5 text-center">
                        <h3 className="text-sm">Quantity</h3>
                    </div>
                    <div className="w-1/5 text-center">
                        <h3 className="text-sm">Price</h3>
                    </div>
                </div>

                {items.map((item, index) => (
                    <div key={index} className="flex mb-4 items-center justify-center space-x-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Item Name"
                            value={item.name}
                            onChange={(e) => handleChange(index, e)}
                            className="border rounded p-2 w-2/5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="number"
                            name="quantity"
                            placeholder="0"
                            value={item.quantity}
                            onChange={(e) => handleChange(index, e)}
                            className="border rounded p-2 w-1/5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="number"
                            name="price"
                            placeholder="0.00"
                            value={item.price}
                            onChange={(e) => handleChange(index, e)}
                            className="border rounded p-2 w-1/5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                ))}
                <button
                    onClick={handleAddItem}
                    className="mt-2 bg-green-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-500 transition duration-300"
                >
                    Add Item
                </button>

                <h3 className="text-right text-xl font-semibold mt-4">
                    Grand Total: ${invoiceTotal.toFixed(2)}
                </h3>

                <div className="flex justify-between mt-6">
                    <button
                        onClick={handlePrint}
                        className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-500 transition duration-300"
                    >
                        Print Invoice
                    </button>

                    <button
                        onClick={handleSubmit}
                        className="bg-blue-800 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                    >
                        Submit Invoice
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Invoice;
