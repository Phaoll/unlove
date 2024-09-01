import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import QuestionComponent from './question.component';
import questions from '../const/questions'; 

const TestPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log('Submitted answers.');
  };

  const navigateToHome = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-softOrange p-6">
      <h1 className="text-3xl font-cozy font-bold mb-8 text-center text-cozyPurple">
        Personality Test
      </h1>
      <div className="w-full max-w-3xl">
        {questions.map((question) => (
          <QuestionComponent
            key={question.id}
            question={question.wording.EN} // Adjust based on language selection
            questionId={question.id}
          />
        ))}
      </div>
      <div className="flex space-x-4 mt-8">
        <Button
          type="primary"
          size="large"
          onClick={handleSubmit}
          className="bg-cozyPurple hover:bg-purpleBubble border-none text-white"
        >
          Submit Answers
        </Button>
        <Button
          type="primary"
          size="large"
          onClick={navigateToHome}
          className="bg-cozyPurple hover:bg-purpleBubble border-none text-white"
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default TestPage;
