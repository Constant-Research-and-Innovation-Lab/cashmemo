import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen bg-custom-navy text-white">
            <main className="flex-grow flex flex-col items-center justify-center py-10 text-center">
                <h2 className="text-5xl font-bold mb-4">Welcome to Cashmemo</h2>
                <p className="mb-6 max-w-xl text-lg">
                    Simplify your invoicing and keep track of your business records effortlessly with Cashmemo, designed for businesses of all sizes.
                </p>
                <div className="flex space-x-4">
                    <Link to="/invoice">
                        <button className="bg-blue-600 text-white py-3 px-8 rounded-lg shadow-md hover:bg-blue-500 transition duration-300 text-lg">
                            Create Invoice
                        </button>
                    </Link>
                    <Link to="/demo">
                        <button className="bg-gray-700 text-white py-3 px-8 rounded-lg shadow-md hover:bg-gray-600 transition duration-300 text-lg">
                            Try Demo
                        </button>
                    </Link>
                </div>
                <section className="mt-10 p-6 bg-gray-800 rounded-lg shadow-md">
                    <h3 className="text-3xl font-semibold mb-4">Key Features</h3>
                    <ul className="list-disc list-inside space-y-2 text-left text-lg">
                        <li>Customizable invoice templates for your brand.</li>
                        <li>Manage clients and track their details easily.</li>
                        <li>Keep tabs on your expenses for better financial oversight.</li>
                        <li>Set up recurring invoices for regular clients.</li>
                        <li>Monitor payment statuses to ensure timely cash flow.</li>
                    </ul>
                </section>
            </main>
        </div>
    );
};

export default Home;
