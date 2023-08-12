import React, { useState } from "react";
import { Form } from "react-router-dom";
import Lottie from "lottie-react";
import animationData from "../../images/arrow.json";
import { Link } from "react-router-dom";
import contactStyles from "./contact.module.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  function handleEmailChange(event) {
    const enteredEmail = event.target.value;
    setEmail(enteredEmail);
    setIsValidEmail(isValidEmailFormat(enteredEmail));
  }

  function isValidEmailFormat(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!name || !isValidEmail || message.length < 10) {
      alert("Please fill in all fields correctly.");
      return;
    }

    // Send the form data to your backend or perform further actions
    console.log("Form submitted:", { name, email, message });
  }

  return (
    <>
      <div className={contactStyles.wrapper}>
        <h3 className={contactStyles.pHeading}>Contact.</h3>
        <p>Connect with me directly through my email, Solvene@gmail.com</p>
        <section className={contactStyles.formWrapper}>
          <Form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              maxLength="35"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            
            />
            <input
              type="email"
              placeholder="Email"
              maxLength="50"
              value={email}
              onChange={handleEmailChange}
              required
             
            />
            {!isValidEmail && (
              <p className={contactStyles.error}>Please enter a valid email address.</p>
            )}
            <textarea
              placeholder="Message"
              maxLength="300"
              minLength="20"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            
            />
            {(message.length < 10 && message.length > 3 )&& (
              <p className={contactStyles.error}>Message must be at least 10 characters long.</p>
            )}
            <button type="submit">Send Message</button>
          </Form>
          <div className={contactStyles.nextHome}>
            <h5 className={contactStyles.next}>Home Page</h5>
            <Link to={`/`}>
              <Lottie animationData={animationData} className={contactStyles.arrow} />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

export default Contact;
