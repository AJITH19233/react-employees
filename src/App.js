import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import Home from './component/Home';
import EmployeeForm from './component/EmployeeForm';
import Navbar from './component/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes> {/* Use Routes instead of Switch */}
        <Route exact path="/" element={<Home />} /> {/* Use element prop instead of component */}
        <Route path='EmployeeForm'
            element={<EmployeeForm />} />
        </Routes>
    </Router>
  );
};

export default App; 

