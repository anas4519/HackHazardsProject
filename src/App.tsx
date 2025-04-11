import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landing_page';
import AppWhitelist from './pages/AppWhitelist';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/whitelist" element={<AppWhitelist />} />
      </Routes>
    </Router>
  );
}

export default App;