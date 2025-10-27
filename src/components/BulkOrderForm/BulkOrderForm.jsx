import React, { useState } from "react";
import { db } from "../../firebase/firebase.js";
import { collection, addDoc } from "firebase/firestore";
import "./BulkOrderForm.scss";

const BulkOrderForm = () => {
  const [formData, setFormData] = useState({
    address: "",
    contactInfo: "",
    quantity: "",
    specialRequest: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(""); // "success" | "error" | ""

  // --- Firestore API call ---
  const submitForm = async (data) => {
    try {
      const ordersRef = collection(db, "bulkorders");

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

      const docRef = await addDoc(ordersRef, {
        ...data,
        createdDate,
        createdTime,
      });

      return { id: docRef.id, ...data, createdDate, createdTime };
    } catch (error) {
      console.error("Error submitting bulk order:", error);
      throw error;
    }
  };


  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // clear error while typing
  };

  // Validation
  const validate = () => {
    const newErrors = {};

    if (!formData.quantity.trim()) {
      newErrors.quantity = "Quantity is required.";
    } else if (isNaN(formData.quantity) || Number(formData.quantity) <= 0) {
      newErrors.quantity = "Please enter a valid quantity.";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Delivery address is required.";
    }

    if (!formData.contactInfo.trim()) {
      newErrors.contactInfo = "Contact information is required.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^[0-9]{10}$/;
      if (!emailRegex.test(formData.contactInfo) && !phoneRegex.test(formData.contactInfo)) {
        newErrors.contactInfo = "Enter a valid email or phone number.";
      }
    }

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
      await submitForm(formData);
      setStatus("success");
    } catch (err) {
      setStatus("error");
    } finally {
      setLoading(false);
      setFormData({
        address: "",
        contactInfo: "",
        quantity: "",
        specialRequest: "",
      });
    }
  };

  // --- UI Rendering ---
  if (loading) {
    return (
      <div className="bulk-order-form loading-screen">
        <p>Submitting your bulk order...</p>
      </div>
    );
  }

  if (status === "success") {
    return (
      <div className="bulk-order-form success-screen">
        <h3>✅ Thank you!</h3>
        <p>Your bulk order has been submitted successfully.</p>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="bulk-order-form error-screen">
        <h3>❌ Oops!</h3>
        <p>Something went wrong. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="bulk-order-form">
      <div className="form-container">
        <div className="title">Bulk Order Form</div>
        <p className="sub-title">
          Please fill in the details below to place your bulk order.
        </p>

        <form className="form-default" onSubmit={handleSubmit} noValidate>
          {/* Quantity */}
          <div className="form-group">
            <label htmlFor="quantity">Product Quantity*</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className={errors.quantity ? "error" : ""}
            />
            {errors.quantity && (
              <span className="error-msg">{errors.quantity}</span>
            )}
          </div>

          {/* Address */}
          <div className="form-group">
            <label htmlFor="address">Delivery Address*</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className={errors.address ? "error" : ""}
            />
            {errors.address && (
              <span className="error-msg">{errors.address}</span>
            )}
          </div>

          {/* Contact Info */}
          <div className="form-group">
            <label htmlFor="contactInfo">Contact Information (Email or Phone)*</label>
            <input
              type="text"
              id="contactInfo"
              name="contactInfo"
              value={formData.contactInfo}
              onChange={handleChange}
              className={errors.contactInfo ? "error" : ""}
            />
            {errors.contactInfo && (
              <span className="error-msg">{errors.contactInfo}</span>
            )}
          </div>

          {/* Special Request */}
          <div className="form-group">
            <label htmlFor="specialRequest">Special Requests (Optional)</label>
            <textarea
              id="specialRequest"
              name="specialRequest"
              value={formData.specialRequest}
              onChange={handleChange}
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-btn">
            Submit Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default BulkOrderForm;
