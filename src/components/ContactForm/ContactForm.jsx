import React, { useState } from "react";
import { db } from "../../firebase/firebase.js";
import { collection, addDoc } from "firebase/firestore";
import "./ContactForm.scss";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    mobileNo: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Popup State
  const [popup, setPopup] = useState({
    show: false,
    type: "", // success | error
    message: "",
  });

  // --- Firestore Submit Logic ---
  const submitForm = async (data) => {
    const usersRef = collection(db, "users");
    const now = new Date();

    const createdDate = now.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "Asia/Kolkata",
    });

    const createdTime = now
      .toLocaleTimeString("en-GB", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
        timeZone: "Asia/Kolkata",
      })
      .toLowerCase();

    return await addDoc(usersRef, {
      ...data,
      createdDate,
      createdTime,
    });
  };

  // Input Handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  // Validate Fields
  const validate = () => {
    const newErrors = {};
    if (!formData.userName.trim()) newErrors.userName = "Name is required.";
    if (!formData.email.trim())
      newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Please enter a valid email.";
    if (!formData.mobileNo.trim())
      newErrors.mobileNo = "Mobile number is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  // Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    try {
      await submitForm(formData);
      setPopup({
        show: true,
        type: "success",
        message: "Your message has been sent successfully. Thank you! We will contact you soon.",
      });

      // Clear form
      setFormData({
        userName: "",
        email: "",
        mobileNo: "",
        message: "",
      });

    } catch (error) {
      setPopup({
        show: true,
        type: "error",
        message: "Something went wrong! Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Popup Overlay */}
      {popup.show && (
        <div className={`popup-overlay ${popup.type}`}>
          <div className="popup-box">
            <h3>{popup.type === "success" ? "✔ Success" : "✖ Error"}</h3>
            <p>{popup.message}</p>
            <button onClick={() => setPopup({ ...popup, show: false })}>
              Close
            </button>
          </div>
        </div>
      )}

      <div className="contact-form">
        {/* Left Information Section */}
        <div className="col-lg-6 content-left">
          <div className="title">Contact Us</div>
          <p className="sub-title">
            Have a question? Please contact us using the customer support
            channels below.
          </p>

          <ul className="contact-list">
            <li>
              <strong>Address:</strong>{" "}
              <a
                href="https://www.google.com/maps?q=54,Kallakurichi"
                target="_blank"
                rel="noopener noreferrer"
              >
                54, Near Tolgate, Chennai Salem Highway, Kallakurichi, Tamil Nadu 606202
              </a>
            </li>

            <li>
              <strong>Phone:</strong>{" "}
              <a href="tel:+919894487698">+919894487698</a>
            </li>

            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:murugan@mugilelitemart.com">
                murugan@mugilelitemart.com
              </a>
            </li>

            <li>
              <strong>Open:</strong> 8am – 7pm, Mon – Sat
            </li>
          </ul>
        </div>

        {/* Form Section */}
        <div className="col-lg-6 content-right">
          <div className="title">Get In Touch</div>

          <form className="form-default" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label>Your name*</label>
              <input
                type="text"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                className={errors.userName ? "error" : ""}
              />
              {errors.userName && <span className="error-msg">{errors.userName}</span>}
            </div>

            <div className="form-group">
              <label>Your email*</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "error" : ""}
              />
              {errors.email && <span className="error-msg">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label>Mobile No*</label>
              <input
                type="text"
                name="mobileNo"
                value={formData.mobileNo}
                onChange={handleChange}
                className={errors.mobileNo ? "error" : ""}
              />
              {errors.mobileNo && <span className="error-msg">{errors.mobileNo}</span>}
            </div>

            <div className="form-group">
              <label>Message*</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? "error" : ""}
              />
              {errors.message && <span className="error-msg">{errors.message}</span>}
            </div>

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
