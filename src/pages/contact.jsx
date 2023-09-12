import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

import "./styles/contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert('message sent successfully');
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      )
  }
  return (
    <React.Fragment>
      <h1 className="contact-title">get in touch</h1>
      <div className="contact-container">
        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail}>
            <label htmlFor="user_name">Name:</label>
            <input type='text' name='user_name' />
            <label htmlFor="user_email">Email:</label>
            <input type='email' name='user_email' />
            <label htmlFor="message">Message:</label>
            <textarea name='message' type='text' ></textarea>
            <input type='submit' value='Send' id='input-submit' />
          </form>
        </div>
      </div>
      <div className="contact-details">
        <p>✉️ chiaramuller@hotmail.be <br /> 📞 +32 (0) 479 18 29 65 <br /> 📍 Rue des Andrieux, 98 - 7370 Dour - Belgium </p>
      </div>
    </React.Fragment>
  )
}


export default Contact;
