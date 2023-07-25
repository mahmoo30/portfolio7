import React from "react";
import "../styles/styles.css";

const Projects = () => {
    return  (
        <div className="projects">
        <center>
            <h1>Projects</h1>
            <div className="projects-container">
                <div className="project">
                    <div className="project-info">
                        <h2>Park Quest</h2>
                        <div className="project-logo">
                        <img src="https://i.imgur.com/8X3Q1ZT.png" alt="resume" />
                        </div>
                        <p>
                        Park Quest is a web application that allows users to search for national parks by selecting a state. The application also provides the current weather for each park location, helping users better plan their visits.
                        </p>
                        <a href="https://joelcupeles.github.io/ParkQuest/">View Project</a>
                    </div>
                </div>
                <div className="project">
                    <div className="project-info">
                        <h2>Battlehawks Tailgates</h2>
                        <div className="project-logo">
                        <img src="https://i.imgur.com/8X3Q1ZT.png" alt="resume" />
                        </div>
                        <p>
                        Battlehawks Tailgates is a platform designed for people to sign up for tailgates at the Dome for Battlehawks games. It aims to create a community of tailgaters and provide them with a convenient platform to interact, organize, and sign up for various duties related to the tailgating experience.
                        </p>
                        <a href="https://infinite-savannah-06208.herokuapp.com/">View Project</a>
                    </div>
                </div>
                <div className="project">
                    <div className="project-info">
                        <h2>Workout Customizer</h2>
                        <div className="project-logo">
                        <img src="https://i.imgur.com/8X3Q1ZT.png" alt="resume" />
                        </div>
                        <p>
                        Workout Customizer is an application that allows users to find workouts and save them to their profile for easy access later on. It will assist users while they are working out by having all of their workouts easily accessible on one page with clear instructions on how to safely and effectively perform each exercise.
                        </p>
                        <a href="https://workout-customizer-1ca954ff9a9e.herokuapp.com/">View Project</a>
                    </div>
                </div>
                <div className="project">
                    <div className="project-info">
                        <h2>Book Search</h2>
                        <div className="project-logo">
                        <img src="https://i.imgur.com/8X3Q1ZT.png" alt="resume" />
                        </div>
                        <p>
                        Book Search is a web application that allows users to search for books by title. The application also provides a brief description of each book and allow users to save them to their profile for easy access later on.
                        </p>
                        <a href="https://pure-bastion-13517-9e04d956763a.herokuapp.com/">View Project</a>
                    </div>
                </div>
                <div className="project">
                    <div className="project-info">
                        <h2>Work Day Planner</h2>
                        <div className="project-logo">
                        <img src="https://i.imgur.com/8X3Q1ZT.png" alt="resume" />
                        </div>
                        <p>
                        Work Day Planner is a simple calendar application that allows users to save events for each hour of the day. This app runs in the browser and features dynamically updated HTML and CSS powered by jQuery.
                        </p>
                        <a href="https://mahmoo30.github.io/work-day-calendar/">View Project</a>
                    </div>
                </div>
                <div className="project">
                    <div className="project-info">
                        <h2>Weather Dashboard</h2>
                        <div className="project-logo">
                        <img src="https://i.imgur.com/8X3Q1ZT.png" alt="resume" />
                        </div>
                        <p>
                        Weather Dashboard is a web application that allows users to search for the current weather and 5-day forecast for any city. The application uses the OpenWeather API to retrieve weather data for cities and localStorage to store any persistent data.
                        </p>
                        <a href="https://mahmoo30.github.io/weather-dashboard/">View Project</a>
                    </div>
                </div>
            </div>
        </center>
        </div>

    );
};

export default Projects;