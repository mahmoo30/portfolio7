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
};

export default Contact;