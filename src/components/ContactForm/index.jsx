import React from "react";
import "./contactForm.scss";

export default function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="contactForm" id="contactForm">
      <div className="left">
        <img src="assets/contactForm.png" alt="" />
      </div>
      <div className="right">
        <h2>Contact Me..</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
