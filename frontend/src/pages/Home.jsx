import React from 'react';

const Home = () => {
    return (
        <div className="text-center p-10">
            <h1 className="text-4xl font-bold">Welcome to Cashmemo</h1>
            <p className="mt-4 text-xl">Your B2B Invoice Generator and Business Record Keeper.</p>
            <a href="/register" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded">
                Register
            </a>
            <a href="/invoice" className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded">
                Generate Invoice
            </a>
            <a href="/company-info" className="mt-4 inline-block bg-yellow-500 text-white px-4 py-2 rounded">
                Company Info
            </a>
        </div>
    );
};

export default Home;
