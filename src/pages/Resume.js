import React from "react";
import "../styles/styles.css";

const Resume = () => {
    return  (
        <div className="resume">
            <h1>Resume</h1>
            <div className="resume-container">
                <a className="download" href="/" download={true}>Download Resume</a>
            </div>
            <div className="resume-pic-container">
                <img src="https://i.imgur.com/8X3Q1ZT.png" alt="resume" />
            </div>
        </div>
    );
};

export default Resume;