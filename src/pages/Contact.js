import React from "react"; // import React
import "../styles/styles.css"; // import styles

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
        <div className="contact">
            <h1>Contact</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" value={name} onChange={handleNameChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" value={email} onChange={handleEmailChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" value={message} onChange={handleMessageChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Contact;