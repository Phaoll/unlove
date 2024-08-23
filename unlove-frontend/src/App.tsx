import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Updated import
import LandingPage from './landingPage/landingPage';
import TestPage from './testPage/testPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes> {/* Use Routes instead of Switch */}
        <Route path="/" element={<LandingPage />} /> {/* Use element prop instead of component */}
        <Route path="/test" element={<TestPage />} /> {/* Use element prop instead of component */}
      </Routes>
    </Router>
  );
};

export default App;
