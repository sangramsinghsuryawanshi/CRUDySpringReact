import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from './Layout/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home'; 
import AddPayingGuest from './Users/AddPayingGuest';
import EditPayingGuest from './Users/EditPayingGuest';
import ViewPayingGuest from './Users/ViewPayingGuest';
import SearchPayingGuest from './Users/SearchPayingGuest ';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/add" element={<AddPayingGuest />} />
          <Route path="/edit/:id" element={<EditPayingGuest />} />
          <Route path="/viewAll" element={<ViewPayingGuest />} />
          <Route path="/search" element={<SearchPayingGuest />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
