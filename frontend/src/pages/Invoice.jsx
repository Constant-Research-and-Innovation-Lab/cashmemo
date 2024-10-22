import React, { useState } from 'react';
import axios from 'axios';

const Invoice = () => {
    const [formData, setFormData] = useState({
        clientId: '',
        product: '',
        quantity: '',
        price: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/invoices', formData);
            console.log('Invoice created:', response.data);
        } catch (error) {
            console.error('Error creating invoice:', error.response.data);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Create Invoice</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="clientId" placeholder="Client ID" required onChange={handleChange} className="block border p-2 mb-2 w-full" />
                <input type="text" name="product" placeholder="Product" required onChange={handleChange} className="block border p-2 mb-2 w-full" />
                <input type="number" name="quantity" placeholder="Quantity" required onChange={handleChange} className="block border p-2 mb-2 w-full" />
                <input type="number" name="price" placeholder="Price" required onChange={handleChange} className="block border p-2 mb-2 w-full" />
                <button type="submit" className="bg-blue-500 text-white p-2">Create Invoice</button>
            </form>
        </div>
    );
};

export default Invoice;
