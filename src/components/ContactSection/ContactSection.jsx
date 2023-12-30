import React, { useState } from "react";
import "./ContactSection.css";
import backgroundVideo from "../../assets/backgroundVideo.mp4";

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        console.log("Form submitted successfully");
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleSendButtonClick = () => {
    // Programmatically trigger form submission
    const form = document.forms["contact"];
    if (form) {
      form.submit();
    }
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

            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" className="send-button">
              Send
            </button>

            {/* Add a button to trigger form submission */}
            <button
              type="button"
              className="send-button"
              onClick={handleSendButtonClick}
            >
              Send Programmatically
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
