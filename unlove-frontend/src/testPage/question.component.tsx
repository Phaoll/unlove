// src/components/QuestionComponent.tsx

import React from 'react';
import { Radio } from 'antd';

interface QuestionComponentProps {
  question: string; // The question text
  questionId: string; // Unique ID for the question
  answersPerson1: number; // Current answer for person 1
  answersPerson2: number; // Current answer for person 2
  onAnswerChange: (person: 'person1' | 'person2', questionId: string, value: number) => void; // Function to handle answer changes
}

const QuestionComponent: React.FC<QuestionComponentProps> = ({
  question,
  questionId,
  answersPerson1,
  answersPerson2,
  onAnswerChange,
}) => {
  return (
    <div className="flex flex-col mb-8 p-6 border rounded-lg bg-white shadow-md">
      <h2 className="text-xl font-cozy font-bold mb-4 text-black text-center">{question}</h2>

      <div className="flex justify-between">
        <div className="flex flex-col items-center">
          <span className="mb-2 text-cozyPurple">Person 1</span>
          <Radio.Group
            onChange={(e) => onAnswerChange('person1', questionId, e.target.value)}
            value={answersPerson1}
          >
            <div className="flex space-x-2">
              <Radio className="text-red" value={1}>
                1
              </Radio>
              <Radio className="text-red" value={2}>
                2
              </Radio>
              <Radio className="text-red" value={3}>
                3
              </Radio>
              <Radio className="text-red" value={4}>
                4
              </Radio>
              <Radio className="text-red" value={5}>
                5
              </Radio>
            </div>
          </Radio.Group>
        </div>

        <div className="flex flex-col items-center">
          <span className="mb-2 text-cozyPurple">Person 2</span>
          <Radio.Group
            onChange={(e) => onAnswerChange('person2', questionId, e.target.value)}
            value={answersPerson2}
          >
            <div className="flex space-x-2">
              <Radio className="text-purpleBubble" value={1}>
                1
              </Radio>
              <Radio className="text-purpleBubble" value={2}>
                2
              </Radio>
              <Radio className="text-purpleBubble" value={3}>
                3
              </Radio>
              <Radio className="text-purpleBubble" value={4}>
                4
              </Radio>
              <Radio className="text-purpleBubble" value={5}>
                5
              </Radio>
            </div>
          </Radio.Group>
        </div>
      </div>
    </div>
  );
};

export default QuestionComponent;
