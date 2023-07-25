import React from "react";
import "../styles/styles.css";

const Footer = () => {
    return  (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-item">
                    <a href="/">Github</a>
                </div> 
                <div className="footer-item">
                    <a href="/">LinkedIn</a>
                </div>
                <div className="footer-item">
                    <a href="/">Email</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;