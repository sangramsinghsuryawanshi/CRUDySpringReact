import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../CSS/ViewPayingGuest.css';
import { useNavigate } from 'react-router-dom';

const ViewPayingGuest = () => {
  const [payingGuests, setPayingGuests] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/CRUDySpringReact/GetAll');
        setPayingGuests(response.data);
        setLoading(false);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching the paying guests data!', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleUpdate = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleDelete = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this paying guest?");
    if (!confirmed) return;

    axios.delete(`http://localhost:8080/CRUDySpringReact/Delete/${id}`)
      .then(() => {
        setPayingGuests(prevGuests => prevGuests.filter(guest => guest.pgId !== id));
        alert("Paying Guest deleted successfully!");
      })
      .catch(error => {
        console.error('Error deleting the paying guest!', error);
        alert("There was an error deleting the guest. Please try again.");
      });
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="view-container">
      <h2 className="title">Paying Guest Information</h2>
      <table className="paying-guest-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {payingGuests.map(guest => (
            <tr key={guest.pgId}>
              <td>{guest.pgName}</td>
              <td>{guest.pgEmail}</td>
              <td>{guest.pgAddress}</td>
              <td>{guest.pgNumber}</td>
              <td>
                <button className="update-btn" onClick={() => handleUpdate(guest.pgId)}>Update</button>
                <button className="delete-btn" onClick={() => handleDelete(guest.pgId)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewPayingGuest;
