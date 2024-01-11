import React, { useState, useEffect } from "react";

const ContactForm = () => {
  const storedformData = JSON.parse(localStorage.getItem("formData"));

  const [formData, setFormData] = useState(storedformData || {
    name: "",
    email: "",
    phone: "",
    inquiry: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (showMessage) {
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 5000); // Change the time as needed (in milliseconds)

      return () => clearTimeout(timer);
    }
  }, [showMessage]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // saving form info to local storage on every change of the formData
  useEffect(() => {
  localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  // after submit reseting form and showing message
  const handleSubmit = (e) => {
    e.preventDefault();

    // Implement logic for sending data to the server, calling an API, etc.

    setFormSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      inquiry: "",
    });
    setShowMessage(true);
  };

  return (
    <form className="contact-us-form" onSubmit={handleSubmit}>
      <div className="contact-us-form-name-cont">
        <label htmlFor="form-name">Name:<span className="required">*</span></label>
        <input
          type="text"
          id="form-name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="contact-us-form-email-cont">
        <label htmlFor="form-email">E-mail:<span className="required">*</span></label>
        <input
          type="email"
          id="form-email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="contact-us-form-tel-cont">
        <label htmlFor="form-phone">Tel:</label>
        <input
          type="tel"
          id="form-phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      <div className="contact-us-form-msg-cont">
        <label htmlFor="form-inquiry">Message:<span className="required">*</span></label>
        <textarea
          id="form-inquiry"
          name="inquiry"
          value={formData.inquiry}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      <button type="submit">SEND</button>

      {formSubmitted && showMessage && (
        <p className="form-submitted-message">
          {/* Thank you for your inquiry! We'll get back to you as soon as possible. */}
          Thank you for your inquiry! We will not provide feedback as this is a demo version of the webshop.
        </p>
      )}

    </form>
  );
};

export default ContactForm;

