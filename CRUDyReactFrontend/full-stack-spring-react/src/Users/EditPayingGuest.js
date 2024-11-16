import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../CSS/EditPayingGuest.css';

const EditPayingGuest = () => {
  const [formData, setFormData] = useState({
    pgName: '',
    pgEmail: '',
    pgAddress: '',
    pgNumber: '',
  });
  const [loading, setLoading] = useState(false); // Loading state to show a spinner or disable the form during the API call
  const [error, setError] = useState(''); // To show error messages
  const { id } = useParams(); // Get the guest ID from the URL
  const navigate = useNavigate(); // Hook to navigate after update

  useEffect(() => {
    // Fetch the paying guest data by ID
    const fetchGuest = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/CRUDySpringReact/Get/${id}`);
        setFormData(response.data); // Populate the form with the data
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching guest data for edit:', error);
        setError('Error fetching guest data. Please try again.');
      }
    };

    fetchGuest();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);  // Start loading state
    setError(''); // Reset error message
    try {
      const response = await axios.put(`http://localhost:8080/CRUDySpringReact/Update/${id}`, formData);
      if (response.status === 200) {
        alert('Paying Guest details updated successfully!');
        navigate('/viewAll');  
      }
    } catch (error) {
      console.error('Error updating guest data:', error);
      setError('Error updating guest data. Please try again.');
    } finally {
      setLoading(false); // End loading state
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text">Edit Paying Guest</h2>

      {error && <div className="error-message">{error}</div>} {/* Show error message */}

      <form className="f" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="pgName"
            value={formData.pgName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="pgEmail"
            value={formData.pgEmail}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <textarea
            name="pgAddress"
            value={formData.pgAddress}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="text"
            name="pgNumber"
            value={formData.pgNumber}
            onChange={handleChange}
            required
          />
        </div>
        <button 
          type="submit" 
          className="btn btn-primary"
          disabled={loading} // Disable button when loading
        >
          {loading ? 'Updating...' : 'Update'}  {/* Show loading text while updating */}
        </button>
      </form>
    </div>
  );
};

export default EditPayingGuest;
