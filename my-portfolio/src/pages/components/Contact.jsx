import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import styled from "styled-components";

export default function Contact() {
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
    <ContactStyled>
      <div className="contact-container">
        <h2>Contact</h2>
        <hr className="contact-hr"/>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="input">
            <label htmlFor="user_name">Name</label>
            <input type='text' name='user_name' placeholder="John Doe"/>
          </div>
          <div className="input" >
            <label htmlFor="user_email">Email Address</label>
            <input type='email' name='user_email' placeholder="example@example.com"/>
          </div>
          <div className="input" >
            <label htmlFor="message">Your message</label>
            <textarea className="text-input" name='message' type='text' placeholder="Enter your message here"></textarea>
          </div>
          <div className="input">
            <button className="submit-button">Submit</button>
          </div>
        </form>
      </div>
    </ContactStyled>
  )
}

const ContactStyled = styled.div`

  margin: 0;
  display: flex;
	justify-content: center;
  align-items: center;
  height: 750px;

  .contact-container {
    display: flex;
    flex-direction: column;
    width: 900px;
  }

  .contact-hr {
    border: 1px solid black;
    width: 30%;
    margin-left: 0;
  }

  .contact-form {
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 70px;
    grid-row-gap: 20px;
  }

  .input:nth-child(1) {
    grid-area: 1 / 1 / 2 / 2;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .input:nth-child(2) {
    grid-area: 2 / 1 / 3 / 2;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .input:nth-child(3) {
    grid-area: 1 / 2 / -2 / 3;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .input:nth-child(4) {
    grid-area: 3 / 2 / -1 / -1;
    text-align: right;
  }

  input {
    border-radius: 5px;
    border: 1px solid grey;
    height: 30px;
    padding-left: 8px;
  }

  textarea {
    border-radius: 5px;
    border: 1px solid grey;
    height: 110px;
    padding-left: 8px;
    padding-top: 8px;
  }

  .submit-button {
    width: 175px;
    height: 35px;
    cursor: pointer;
    background-color: black;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 18px;
  }
`;
