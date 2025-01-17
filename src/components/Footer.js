import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-dark text-white py-3 fixed-bottom">
            <div className="container d-flex justify-content-between">
                <span>© 2025 TextUtils. All rights reserved.</span>
                <div>
                    <a href="https://www.linkedin.com/in/abhinavahlawat/" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                        <FaLinkedin size={30} />
                    </a>
                    <a href="https://github.com/Abhinav-Ahlawat" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                        <FaGithub size={30} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
