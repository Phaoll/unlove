import React, { useState } from 'react';
import { Button, Card, Radio } from 'antd';
import { useNavigate } from 'react-router-dom';
import questions from '../const/questions.short';

const TestPage: React.FC = () => {
  const [answers, setAnswers] = useState<number[]>(Array(5).fill(0)); // Initialize answers for 30 questions
  const navigate = useNavigate();
  const language = 'EN';

  // Handle answer change
  const handleAnswerChange = (questionIndex: number, value: number) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = value;
    setAnswers(newAnswers);
  };

  // Handle form submission
  const handleSubmit = () => {
    console.log('Submitted answers:', answers);
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
        {questions.map((question, index) => (
          <Card
            key={question.id}
            className="mb-6 shadow-md rounded-lg"
            style={{ backgroundColor: '#ffffff', borderColor: '#f0f0f0' }}
          >
            <p className="text-lg text-cozyPurple">
              {`Question ${index + 1}: ${question.wording[language]}`}
            </p>
            <Radio.Group
              onChange={(e) => handleAnswerChange(index, e.target.value)}
              value={answers[index]}
            >
              <div className="flex flex-col space-y-2">
                <Radio className="text-softOrange" value={1}>Strongly Disagree</Radio>
                <Radio className="text-softOrange" value={2}>Disagree</Radio>
                <Radio className="text-softOrange" value={3}>Neutral</Radio>
                <Radio className="text-softOrange" value={4}>Agree</Radio>
                <Radio className="text-softOrange" value={5}>Strongly Agree</Radio>
              </div>
            </Radio.Group>
          </Card>
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
