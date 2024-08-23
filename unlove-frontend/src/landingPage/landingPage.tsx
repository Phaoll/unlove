// src/LandingPage.tsx

import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  // Function to handle navigation to the test page
  const navigateToTest = () => {
    navigate('/test');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-peach p-6">
      <h1 className="text-4xl font-cozy font-bold mb-6 text-center text-cozyPurple">
        Welcome to the Unlove Personality Test
      </h1>
      <p className="text-lg text-center text-softOrange mb-8 max-w-xl">
        Discover more about yourself and your compatibility with others. 
        Take our personality test now and gain valuable insights.
      </p>
      <Button 
        type="primary" 
        size="large" 
        onClick={navigateToTest}
        className="bg-cozyPurple hover:bg-purpleBubble border-none text-white"
      >
        Start the Test
      </Button>
    </div>
  );
};

export default LandingPage;
