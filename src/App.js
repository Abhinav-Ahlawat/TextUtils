import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    const [mode, setMode] = useState('light');
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({ msg: message, type: type });
        setTimeout(() => setAlert(null), 3000);
    };

    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = '#121212';
            showAlert('Dark mode has been enabled.', 'success');
        } else {
            setMode('light');
            document.body.style.backgroundColor = 'white';
            showAlert('Light mode has been enabled.', 'success');
        }
    };

    return (
        <Router>
            <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
            <Alert alert={alert} />
            <div className="container my-3">
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={
                            <TextForm
                                showAlert={showAlert}
                                heading="TextUtils: Simplify Your Text - Count Words, Characters & Clean Up Spaces!"
                                mode={mode}
                            />
                        }
                    />
                    <Route exact path="/about" element={<About mode={mode} />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}

export default App;
