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
  const [status, setStatus] = useState("");

  // --- Inline API call ---
  const submitForm = async (data) => {
    try {
      const usersRef = collection(db, "users");

      // Current timestamp
      const now = new Date();

      // Format date and time in IST
      const createdDate = now.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "Asia/Kolkata",
      });

      const createdTime = now.toLocaleTimeString("en-GB", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
        timeZone: "Asia/Kolkata",
      }).toLowerCase();

      const docRef = await addDoc(usersRef, {
        ...data,
        createdDate,
        createdTime,
      });

      return { id: docRef.id, ...data, createdDate, createdTime };
    } catch (error) {
      console.error("Error submitting form:", error);
      throw error;
    }
  };



  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  // Validation
  const validate = () => {
    const newErrors = {};
    if (!formData.userName.trim()) newErrors.userName = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email.";
    }
    if (!formData.mobileNo.trim())
      newErrors.mobileNo = "Mobile number is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      await submitForm(formData); // Firestore POST
      setStatus("success"); // if addDoc succeeds
    } catch (err) {
      setStatus("error");
    } finally {
      setLoading(false);
      setFormData({ userName: "", email: "", mobileNo: "", message: "" });
    }
  };


  // --- UI Rendering ---
  if (loading) {
    return (
      <div className="contact-form loading-screen">
        <p>Sending your message...</p>
      </div>
    );
  }

  if (status === "success") {
    return (
      <div className="contact-form success-screen">
        <h3>✅ Thank you!</h3>
        <p>Your message has been sent successfully.</p>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="contact-form error-screen">
        <h3>❌ Oops!</h3>
        <p>Something went wrong. Please try again later.</p>
      </div>
    );
  }

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
                54, Near Tolgate, near, Chennai Salem Highway, opp. admk office,
                Kallakurichi, Tamil Nadu 606202
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
              <a href="mailto:murugan@mugilelitemart.com">
                murugan@mugilelitemart.com
              </a>
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
            <label htmlFor="userName">Your name*</label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              className={errors.userName ? "error" : ""}
            />
            {errors.userName && (
              <span className="error-msg">{errors.userName}</span>
            )}
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
            <label htmlFor="mobileNo">Mobile No*</label>
            <input
              type="text"
              id="mobileNo"
              name="mobileNo"
              value={formData.mobileNo}
              onChange={handleChange}
              className={errors.mobileNo ? "error" : ""}
            />
            {errors.mobileNo && (
              <span className="error-msg">{errors.mobileNo}</span>
            )}
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
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
