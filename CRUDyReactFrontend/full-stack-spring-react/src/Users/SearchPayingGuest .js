import React, { useState } from 'react';
import axios from 'axios';
import '../CSS/ViewPayingGuest.css';

const SearchPayingGuest = () => {
  const [email, setEmail] = useState(""); // For storing search input
  const [payingGuest, setPayingGuest] = useState(null); // For storing search result
  const [error, setError] = useState(""); // For storing error message

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter an email to search.");
      setPayingGuest(null);
      return;
    }
    try {
      const response = await axios.get(`http://localhost:8080/CRUDySpringReact/searchByEmail?pgEmail=${email}`);
      setPayingGuest(response.data); // Set the found guest
      setError(""); // Clear error message
    } catch (err) {
      console.error('Error searching for paying guest:', err);
      setError("No Paying Guest found with this email.");
      setPayingGuest(null);
    }
  };

  return (
    <div className="search-container">
      <h2 className="title">Search Paying Guest</h2>
      <form className="d-flex search-form" onSubmit={handleSearch}>
        <input
          type="email"
          className="form-control me-2"
          placeholder="Enter email to search"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>

      {error && <p className="error-message">{error}</p>}

      {payingGuest && (
        <div className="result-container">
          <h3>Paying Guest Information</h3>
          <table className="table table-striped">
            <tbody>
              <tr>
                <th>Name:</th>
                <td>{payingGuest.pgName}</td>
              </tr>
              <tr>
                <th>Email:</th>
                <td>{payingGuest.pgEmail}</td>
              </tr>
              <tr>
                <th>Address:</th>
                <td>{payingGuest.pgAddress}</td>
              </tr>
              <tr>
                <th>Phone Number:</th>
                <td>{payingGuest.pgNumber}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default SearchPayingGuest;
