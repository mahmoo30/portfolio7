import React from "react"; // import React
import "../styles/styles.css"; // import styles
import { useState } from "react"; // import useState hook

const Contact = () => {
    // declare state variables
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    // declare state variable functions
    const handleNameChange = (e) => {
        console.log(e.target.value);
        setName(e.target.value);
    }
    const handleEmailChange = (e) => {
        console.log(e.target.value);
        setEmail(e.target.value);
    }
    const handleMessageChange = (e) => {
        console.log(e.target.value);
        setMessage(e.target.value);
    }
    // declare submit function
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
        // clear form
        setName("");
        setEmail("");
        setMessage("");
    }

    return  (
        <center>
        <div className="contact">
            <h1>Contact</h1>

            <div className="contact-container">
						<div className="title contact-title">
							<h3> Let's Get in Touch: &nbsp; Ways to Connect with Me </h3>
						</div>
						<div className="contact-message">
							Thank you for your interest in getting in touch with
							me. I welcome your feedback, questions, and
							suggestions. If you have a specific question or
							comment, please feel free to leave me a message by filling out the form below.
						</div>
					</div>

            <form className="contact-message" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name: &nbsp; </label>
                    <input type="text" name="name" value={name} onChange={handleNameChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email: &nbsp; </label>
                    <input type="email" name="email" value={email} onChange={handleEmailChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message: &nbsp; </label>
                    <textarea name="message" value={message} onChange={handleMessageChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
        </center>
    );
};

export default Contact;