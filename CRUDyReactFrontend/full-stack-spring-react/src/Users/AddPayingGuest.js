import React, { useState } from 'react';
import axios from 'axios';  // Import axios for making HTTP requests
import '../CSS/AddPayingGuest.css';

const AddPayingGuest = () => {
  const [formData, setFormData] = useState({
    pgName: '',
    pgEmail: '',
    pgAddress: '',
    pgNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Paying Guest Details:', formData);

    // Make POST request to the backend API
    axios.post('http://localhost:8080/CRUDySpringReact/create', formData)  // Replace with your actual Spring Boot URL
      .then(response => {
        console.log('Successfully added paying guest:', response.data);
        alert('Paying Guest details submitted successfully!');
        setFormData({
          pgName: '',
          pgEmail: '',
          pgAddress: '',
          pgNumber: '',
        });
      })
      .catch(error => {
        console.error('There was an error submitting the form!', error);
        alert('Failed to submit paying guest details.');
      });
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Add Paying Guest</h2>
      <form className="pg-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="pgName">Name</label>
          <input
            type="text"
            id="pgName"
            name="pgName"
            placeholder="Enter Name"
            value={formData.pgName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="pgEmail">Email</label>
          <input
            type="email"
            id="pgEmail"
            name="pgEmail"
            placeholder="Enter Email"
            value={formData.pgEmail}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="pgAddress">Address</label>
          <textarea
            id="pgAddress"
            name="pgAddress"
            placeholder="Enter Address"
            value={formData.pgAddress}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="pgNumber">Contact Number</label>
          <input
            type="text"
            id="pgNumber"
            name="pgNumber"
            placeholder="Enter Contact Number"
            value={formData.pgNumber}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default AddPayingGuest;
