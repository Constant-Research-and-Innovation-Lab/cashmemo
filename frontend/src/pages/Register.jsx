import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [formData, setFormData] = useState({
        email: '',
        nid: '',
        tradeLicense: '',
        role: 'supplier',
        name: '',
        storeLocation: '',
        phoneNumber: '',
        tin: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/users', formData);
            console.log('User registered:', response.data);
        } catch (error) {
            console.error('Error registering user:', error.response.data);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Register</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Email" required onChange={handleChange} className="block border p-2 mb-2 w-full" />
                <input type="text" name="nid" placeholder="NID" required onChange={handleChange} className="block border p-2 mb-2 w-full" />
                <input type="text" name="tradeLicense" placeholder="Trade License" onChange={handleChange} className="block border p-2 mb-2 w-full" />
                <select name="role" onChange={handleChange} className="block border p-2 mb-2 w-full">
                    <option value="supplier">Supplier</option>
                    <option value="wholesaler">Wholesaler</option>
                </select>
                <input type="text" name="name" placeholder="Name" required onChange={handleChange} className="block border p-2 mb-2 w-full" />
                <input type="text" name="storeLocation" placeholder="Store Location" onChange={handleChange} className="block border p-2 mb-2 w-full" />
                <input type="text" name="phoneNumber" placeholder="Phone Number" onChange={handleChange} className="block border p-2 mb-2 w-full" />
                <input type="text" name="tin" placeholder="TIN" onChange={handleChange} className="block border p-2 mb-2 w-full" />
                <button type="submit" className="bg-blue-500 text-white p-2">Register</button>
            </form>
        </div>
    );
};

export default Register;
