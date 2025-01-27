// resources/js/app.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';  // Importamos el componente Home
import About from './components/About';  // Importamos el componente About
import { Link } from 'react-router-dom';


function App() {
    return (
        <Router>
            <div>
                <h1 className="text-3xl text-red-500">React with Laravel!</h1>
                <nav>
                    <ul className="space-x-4">
                        <li><Link to="/" className="text-blue-500">Home</Link></li>
                        <li><Link to="/about" className="text-blue-500">About</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </Router>
    );
}

const root = createRoot(document.getElementById('app'));
root.render(<App />);
