import React from "react";
import "../styles/styles.css";
import { useState } from "react"; // import useState hook
// import required components/pages
import NavTabs from "./NavTabs"
import Header from "./Header";
import Footer from "./Footer";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Resume from "../pages/Resume";
import Contact from "../pages/Contact";

const Portfolio = () => {
    const [ currentPage, setCurrentPage ] = useState("About"); // set currentPage to 'About' using useState hook
    // create a switch statement that will return the appropriate component of the 'currentPage'
    const renderPage = () => {
        if (currentPage === "About") {
            return <About />;
        }
        if (currentPage === "Projects") {
            return <Projects />;
        }
        if (currentPage === "Resume") {
            return <Resume />;
        }
        return <Contact />;
    };

    // create a function that will handle changing the currentPage
    const handlePageChange = (page) => setCurrentPage(page);
    return (
        <div>
            <Header />
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </div>
    );

};

export default Portfolio;