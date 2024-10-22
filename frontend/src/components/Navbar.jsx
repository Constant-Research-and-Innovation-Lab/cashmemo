import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-custom-navy py-4 border-b-[0.5px] border-blue-900 p-4">
            <div className="container mx-auto flex justify-between">
                <h1 className="text-white text-2xl">Cashmemo</h1>
                <div>
                    <Link to="/" className="text-white px-4">Home</Link>
                    <Link to="/login" className="text-white px-4">Login</Link>
                    <Link to="/register" className="text-white px-4">Register</Link>
                    <Link to="/demo" className="text-white px-4">Demo</Link>
                    <Link to="/pricing" className="text-white px-4">Pricing</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
