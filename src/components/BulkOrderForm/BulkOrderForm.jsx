import React, { useState } from "react";
import "./BulkOrderForm.scss";

const BulkOrderForm = () => {
  const [formData, setFormData] = useState({
    productQuantity: "",
    deliveryAddress: "",
    contactInfo: "",
    specialRequests: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // clear error while typing
  };

  // Validation
  const validate = () => {
    const newErrors = {};

    if (!formData.productQuantity.trim()) {
      newErrors.productQuantity = "Product quantity is required.";
    } else if (isNaN(formData.productQuantity) || Number(formData.productQuantity) <= 0) {
      newErrors.productQuantity = "Please enter a valid quantity.";
    }

    if (!formData.deliveryAddress.trim()) {
      newErrors.deliveryAddress = "Delivery address is required.";
    }

    if (!formData.contactInfo.trim()) {
      newErrors.contactInfo = "Contact information is required.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^[0-9]{10}$/; // simple 10-digit phone check
      if (!emailRegex.test(formData.contactInfo) && !phoneRegex.test(formData.contactInfo)) {
        newErrors.contactInfo = "Enter a valid email or phone number.";
      }
    }

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
      console.log("Bulk order submitted:", formData); // Dummy API
      // Reset form
      setFormData({
        productQuantity: "",
        deliveryAddress: "",
        contactInfo: "",
        specialRequests: "",
      });
    }
  };

  return (
    <div className="bulk-order-form">
      <div className="form-container">
        <div className="title">Bulk Order Form</div>
        <p className="sub-title">
          Please fill in the details below to place your bulk order.
        </p>

        <form className="form-default" onSubmit={handleSubmit} noValidate>
          {/* Product Quantity */}
          <div className="form-group">
            <label htmlFor="productQuantity">Product Quantity*</label>
            <input
              type="number"
              id="productQuantity"
              name="productQuantity"
              value={formData.productQuantity}
              onChange={handleChange}
              className={errors.productQuantity ? "error" : ""}
            />
            {errors.productQuantity && (
              <span className="error-msg">{errors.productQuantity}</span>
            )}
          </div>

          {/* Delivery Address */}
          <div className="form-group">
            <label htmlFor="deliveryAddress">Delivery Address*</label>
            <textarea
              id="deliveryAddress"
              name="deliveryAddress"
              value={formData.deliveryAddress}
              onChange={handleChange}
              className={errors.deliveryAddress ? "error" : ""}
            />
            {errors.deliveryAddress && (
              <span className="error-msg">{errors.deliveryAddress}</span>
            )}
          </div>

          {/* Contact Information */}
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

          {/* Special Requests */}
          <div className="form-group">
            <label htmlFor="specialRequests">Special Requests (Optional)</label>
            <textarea
              id="specialRequests"
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleChange}
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-btn">
            Submit Order
          </button>

          {submitted && (
            <p className="success-msg">Thank you! Your bulk order has been submitted.</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default BulkOrderForm;
