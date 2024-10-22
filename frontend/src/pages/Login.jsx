import React from 'react';

const Login = () => {
    return (
        <div className="container mx-auto text-center py-10">
            <h1 className="text-3xl font-bold mb-4">Login</h1>
            <form className="flex flex-col items-center">
                <input type="email" placeholder="Email" className="border p-2 mb-4 rounded w-80" required />
                <input type="password" placeholder="Password" className="border p-2 mb-4 rounded w-80" required />
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
