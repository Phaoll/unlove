import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import content from '../const/copywright';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  // Function to handle navigation to the test page
  const navigateToTest = () => {
    navigate('/test');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-peach p-6">
      <h1 className="text-4xl font-cozy font-bold mb-6 text-center text-cozyPurple">
        {content.title.EN}
      </h1>
      <h2 className="text-2xl font-cozy font-bold mb-6 text-center text-cozyPurple">
        {content['sub-title'].EN}
      </h2>
      <p className="text-lg text-center text-softOrange mb-8 max-w-xl">
        {content['first paragraph'].EN}
      </p>
      <Button 
        type="primary" 
        size="large" 
        onClick={navigateToTest}
        className="bg-cozyPurple hover:bg-purpleBubble border-none mb-8 text-white"
      >
        {content['startTheTest button'].EN}
      </Button>
      <h2 className="text-2xl font-cozy font-bold mb-6 text-center text-cozyPurple">
        {content['explanation paragraph title'].EN}
      </h2>
      <p className="text-lg text-center text-softOrange mb-8 max-w-xl">
        {content['explanation paragraph content'].EN}
      </p>
    </div>
  );
};

export default LandingPage;
