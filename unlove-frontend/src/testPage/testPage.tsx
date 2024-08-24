// src/TestPage.tsx

import React, { useState } from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import QuestionComponent from './question.component';
import questions from '../const/questions.short'; // Assuming this is your question list

const TestPage: React.FC = () => {
  const [answersPerson1, setAnswersPerson1] = useState<number[]>(Array(questions.length).fill(0));
  const [answersPerson2, setAnswersPerson2] = useState<number[]>(Array(questions.length).fill(0));
  const navigate = useNavigate();

  // Function to handle answer change for each person
  const handleAnswerChange = (person: 'person1' | 'person2', questionId: string, value: number) => {
    const index = questions.findIndex((q) => q.id === questionId);
    if (index === -1) return;

    if (person === 'person1') {
      const newAnswers = [...answersPerson1];
      newAnswers[index] = value;
      setAnswersPerson1(newAnswers);
    } else {
      const newAnswers = [...answersPerson2];
      newAnswers[index] = value;
      setAnswersPerson2(newAnswers);
    }
  };

  // Handle form submission
  const handleSubmit = () => {
    console.log('Submitted answers:', { answersPerson1, answersPerson2 });
  };

  const navigateToHome = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-peach p-6">
      <h1 className="text-3xl font-cozy font-bold mb-8 text-center text-cozyPurple">
        Personality Test
      </h1>
      <div className="w-full max-w-3xl">
        {questions.map((question) => (
          <QuestionComponent
            key={question.id}
            question={question.wording.EN} // Adjust based on language selection
            questionId={question.id}
            answersPerson1={answersPerson1[questions.findIndex((q) => q.id === question.id)]}
            answersPerson2={answersPerson2[questions.findIndex((q) => q.id === question.id)]}
            onAnswerChange={handleAnswerChange}
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
