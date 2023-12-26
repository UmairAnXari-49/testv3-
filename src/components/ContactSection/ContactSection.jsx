import React from "react";
import "./ContactSection.css";
import backgroundVideo from "../../assets/backgroundVideo.mp4";

function ContactSection() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="contact-section" id="contact">
      <div className="background-title-contact">CONTACT</div>

      <div className="form-container">
        <video autoPlay loop muted className="contact-form-video">
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="form-overlay">
          <form
            onSubmit={handleSubmit}
            name="contact"
            method="POST"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="contact" />

            <h1>Let's talk</h1>

            <input type="email" name="email" placeholder="Email" required />

            <input type="text" name="subject" placeholder="Subject" required />

            <textarea
              name="message"
              placeholder="Your message"
              required
            ></textarea>

            <button type="submit" className="send-button">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
