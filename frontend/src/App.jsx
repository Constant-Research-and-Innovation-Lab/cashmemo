import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Demo from './pages/Demo';
import Pricing from './pages/Pricing';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Invoice from './pages/Invoice';  // Import Invoice Page

const App = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/demo" element={<Demo />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/invoice" element={<Invoice />} />  {/* Invoice Route */}
                </Routes>
            </main>
            <Footer />
        </div>
    );
};

export default App;
