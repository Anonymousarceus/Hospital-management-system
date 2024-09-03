import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Doctor from './components/Doctor.jsx';
import Patient from './components/Patient.jsx';
import Hospital from './components/Hospital.jsx';
import Dashboard from './components/Dashboard.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/hospital" element={<Hospital />} />
      </Routes>
    </>
    
  );
}

export default App;
