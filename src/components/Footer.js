import React from "react";
import "../styles/styles.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
    return  (
        <footer className="footer enclose problem">
            <div className="footer-container">
                <div className="footer-item">
                    <a href="https://github.com/mahmoo30">
                    <FaGithub size={32} />Github</a>
                </div> 
                <div className="footer-item">
                    <a href="https://www.linkedin.com/in/wasifuddin-mahmood/">
                    <FaLinkedin size={32} />LinkedIn</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;