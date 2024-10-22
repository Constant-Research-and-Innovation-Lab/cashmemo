import React from 'react';

const Pricing = () => {
    return (
        <div className="container mx-auto text-center py-10">
            <h1 className="text-3xl font-bold mb-4">Pricing</h1>
            <p className="mb-4">Choose a plan that suits your needs.</p>
            <ul className="space-y-4">
                <li className="border p-4 rounded">Basic Plan - $10/month</li>
                <li className="border p-4 rounded">Pro Plan - $25/month</li>
                <li className="border p-4 rounded">Enterprise Plan - Contact Us</li>
            </ul>
        </div>
    );
};

export default Pricing;
