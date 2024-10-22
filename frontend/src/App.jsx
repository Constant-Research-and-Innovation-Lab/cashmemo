import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Invoice from './pages/Invoice';
import CompanyInfo from './pages/CompanyInfo';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/invoice" element={<Invoice />} />
                <Route path="/company-info" element={<CompanyInfo />} />
            </Routes>
        </Router>
    );
}

export default App;
