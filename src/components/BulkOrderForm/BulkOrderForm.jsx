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

  // Popup states
  const [popup, setPopup] = useState({
    show: false,
    type: "", // success | error
    message: "",
  });

  const closePopup = () => {
    setPopup({ show: false, type: "", message: "" });
  };

  // --- Firestore API ---
  const submitForm = async (data) => {
    const ordersRef = collection(db, "bulkorders");

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

    const docRef = await addDoc(ordersRef, {
      ...data,
      createdDate,
      createdTime,
    });

    return { id: docRef.id, ...data, createdDate, createdTime };
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
      const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phone = /^[0-9]{10}$/;
      if (!email.test(formData.contactInfo) && !phone.test(formData.contactInfo)) {
        newErrors.contactInfo = "Enter a valid email or phone number.";
      }
    }

    return newErrors;
  };

  // Submit handler
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
        message: "Your bulk order has been submitted successfully!",
      });
    } catch (error) {
      setPopup({
        show: true,
        type: "error",
        message: "Something went wrong. Please try again later.",
      });
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

  return (
    <>
      {/* ========== Popup Overlay ========== */}
      {popup.show && (
        <div className={`popup-overlay ${popup.type}`}>
          <div className="popup-box">
            <h3>{popup.type === "success" ? "✅ Success" : "❌ Error"}</h3>
            <p>{popup.message}</p>
            <button onClick={closePopup}>Okay</button>
          </div>
        </div>
      )}

      {/* ========== Form UI ========== */}
      <div className="bulk-order-form">
        <div className="form-container">
          <div className="title">Bulk Order Form</div>
          <p className="sub-title">
            Please fill in the details below to place your bulk order.
          </p>

          <form className="form-default" onSubmit={handleSubmit} noValidate>
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

            <div className="form-group">
              <label htmlFor="contactInfo">Contact Information*</label>
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

            <div className="form-group">
              <label htmlFor="specialRequest">Special Requests (Optional)</label>
              <textarea
                id="specialRequest"
                name="specialRequest"
                value={formData.specialRequest}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? "Submitting..." : "Submit Order"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BulkOrderForm;
