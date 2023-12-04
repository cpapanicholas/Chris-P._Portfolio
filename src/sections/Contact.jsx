import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Reset the error when user starts typing
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the form fields
    let hasError = false;

    if (formData.name.trim() === '') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: 'Name is required',
      }));
      hasError = true;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Invalid email address',
      }));
      hasError = true;
    }

    if (formData.message.trim() === '') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        message: 'Message is required',
      }));
      hasError = true;
    }

    // If there's any error, don't submit the form
    if (hasError) {
      return;
    }

    // Handle form submission (you can add your logic here)
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <h2>Contact Me!</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <div className="error">{errors.name}</div>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <div className="error">{errors.email}</div>
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <div className="error">{errors.message}</div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;