import React from "react";
import "../styles/styles.css";
import { Document } from 'react-pdf';
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

const Resume = () => {
    return  (
        <div className="resume">
            <center>
            <h1>Resume</h1>
            <div className="resume-container">
                <a href="./resume.pdf" download="resume.pdf">
                <button>Download Resume</button>
                </a>
            </div>
            <div className="resume-pic-container">
                <img src="resume.png" alt="resume" />
            </div>
            <div>
                <Document file="resume.pdf">
                </Document>
            </div>
            </center>
        </div>
    );
};

export default Resume;