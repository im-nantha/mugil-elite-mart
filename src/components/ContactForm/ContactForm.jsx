import React, { useState } from "react";
import "./ContactForm.scss";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // clear error when typing
  };

  // Validation
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setSubmitted(true);
      console.log("Form submitted:", formData);
      // API call will go here
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="contact-form">
      {/* Left Section */}
      <div className="col-lg-6 content-left">
        <div className="title">Contact Us</div>
        <p className="sub-title">
          Have a question? Please contact us using the customer support <br />
          channels below.
        </p>
        <ul className="contact-list">
          <li>
            <p>
              <strong>Address:</strong>{" "}
              <a
                href="https://www.google.com/maps?q=15Yarranst,Punchbowl,NSW,Australia"
                target="_blank"
                rel="noopener noreferrer"
              >
                54, Near Tolgate, near, Chennai Salem Highway, oop. admk office, Kallakurichi, Tamil Nadu 606202
              </a>
            </p>
          </li>
          <li>
            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:+919894487698">+919894487698</a>
            </p>
          </li>
          <li>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:murugan@mugilelitemart.com">murugan@mugilelitemart.com</a>
            </p>
          </li>
          <li>
            <p>
              <strong>Open:</strong> 8am - 7pm, Mon - Sat
            </p>
          </li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="col-lg-6 content-right">
        <div className="title">Get In Touch</div>
        <p className="sub-title">
          Please submit&nbsp;all general enquiries&nbsp;in the contact form
          below and we look forward to hearing from you soon.
        </p>

        <form className="form-default" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="name">Your name*</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? "error" : ""}
            />
            {errors.name && <span className="error-msg">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Your email*</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "error" : ""}
            />
            {errors.email && <span className="error-msg">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="message">Message*</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? "error" : ""}
            />
            {errors.message && (
              <span className="error-msg">{errors.message}</span>
            )}
          </div>

          <button type="submit" className="submit-btn">
            Send
          </button>
          {submitted && (
            <p className="success-msg">Thank you! Your message has been sent.</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;