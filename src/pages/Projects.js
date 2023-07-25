// projects: [
//     {
//         title: "Park Quest",
//         description: "Park Quest is a web application that allows users to search for national parks by selecting a state. The application also provides the current weather for each park location, helping users better plan their visits.",
//         logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
//         linkText: "View Project",
//         link: "https://joelcupeles.github.io/ParkQuest/",
//     },

//     {
//         title: "Battlehawks Tailgates",
//         description:
//             "Battlehawks Tailgates is a platform designed for people to sign up for tailgates at the Dome for Battlehawks games. It aims to create a community of tailgaters and provide them with a convenient platform to interact, organize, and sign up for various duties related to the tailgating experience.",
//         logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/css/css.png",
//         linkText: "View Project",
//         link: "https://infinite-savannah-06208.herokuapp.com/",
//     },

//     {
//         title: "Workout Customizer",
//         description: "Workout Customizer is an application that allows users to find workouts and save them to their profile for easy access later on. It will assist users while they are working out by having all of their workouts easily accessible on one page with clear instructions on how to safely and effectively perform each exercise.",
//         logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
//         linkText: "View Project",
//         link: "https://workout-customizer-1ca954ff9a9e.herokuapp.com/",
//     },

//     {
//         title: "Project 4",
//         description: "Coming Soon!",
//         logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
//         linkText: "View Project",
//         // link: "https://github.com",
//     },

//     {
//         title: "Project 5",
//         description: "Coming Soon!",
//         logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/css/css.png",
//         linkText: "View Project",
//         // link: "https://github.com",
//     },

//     {
//         title: "Project 6",
//         description: "Coming Soon!",
//         logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
//         linkText: "View Project",
//         // link: "https://github.com",
//     },

// ]

import React from "react";
import "../styles/styles.css";

const Projects = () => {
    return  (
        <div className="projects">
            <h1>Projects</h1>
            <div className="projects-container">
                <div className="project">
                    <div className="project-logo">
                        <img src="https://i.imgur.com/8X3Q1ZT.png" alt="resume" />
                    </div>
                    <div className="project-info">
                        <h2>Park Quest</h2>
                        <p>
                        Park Quest is a web application that allows users to search for national parks by selecting a state. The application also provides the current weather for each park location, helping users better plan their visits.
                        </p>
                        <a href="https://joelcupeles.github.io/ParkQuest/">View Project</a>
                    </div>
                </div>
                <div className="project">
                    <div className="project-logo">
                        <img src="https://i.imgur.com/8X3Q1ZT.png" alt="resume" />
                    </div>
                    <div className="project-info">
                        <h2>Battlehawks Tailgates</h2>
                        <p>
                        Battlehawks Tailgates is a platform designed for people to sign up for tailgates at the Dome for Battlehawks games. It aims to create a community of tailgaters and provide them with a convenient platform to interact, organize, and sign up for various duties related to the tailgating experience.
                        </p>
                        <a href="https://infinite-savannah-06208.herokuapp.com/">View Project</a>
                    </div>
                </div>
                <div className="project">
                    <div className="project-logo">
                        <img src="https://i.imgur.com/8X3Q1ZT.png" alt="resume" />
                    </div>
                    <div className="project-info">
                        <h2>Workout Customizer</h2>
                        <p>
                        Workout Customizer is an application that allows users to find workouts and save them to their profile for easy access later on. It will assist users while they are working out by having all of their workouts easily accessible on one page with clear instructions on how to safely and effectively perform each exercise.
                        </p>
                        <a href="https://workout-customizer-1ca954ff9a9e.herokuapp.com/">View Project</a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Projects;