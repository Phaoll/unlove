// src/components/QuestionComponent.tsx

import React from 'react';
import { Radio } from 'antd';
import { selectPerson1Answer, selectPerson2Answer, setAnswer } from '../slices/answer.slice';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';

interface QuestionComponentProps {
  question: string; // The question text // TODO only question as an object
  questionId: string; // Unique ID for the question
}

const QuestionComponent: React.FC<QuestionComponentProps> = ({
  question,
  questionId,
}) => {
  const dispatch = useDispatch();
  const valueRespondent1 = useSelector((state:RootState) => selectPerson1Answer(state, questionId))
  const valueRespondent2 = useSelector((state:RootState) => selectPerson2Answer(state, questionId))

  const handleAnswerChange = (respondent: 1 | 2, id: string, answer: number) => {
    dispatch(setAnswer({ respondent, id, answer }));
  };

  return (
    <div className="flex flex-col mb-8 p-6 border rounded-lg bg-white shadow-md">
      <h2 className="text-xl font-cozy font-bold mb-4 text-black text-center">{question}</h2>

      <div className="flex justify-between">
        <div className="flex flex-col items-center">
          <span className="mb-2 text-cozyPurple">Person 1</span>
          <Radio.Group
            onChange={(e) => handleAnswerChange(1, questionId, e.target.value)}
            value={valueRespondent1}
          >
            <div className="flex space-x-2">
              <Radio className="text-red" value={-3}>
                1
              </Radio>
              <Radio className="text-red" value={-1}>
                2
              </Radio>
              <Radio className="text-red" value={0}>
                3
              </Radio>
              <Radio className="text-red" value={1}>
                4
              </Radio>
              <Radio className="text-red" value={3}>
                5
              </Radio>
            </div>
          </Radio.Group>
        </div>

        <div className="flex flex-col items-center">
          <span className="mb-2 text-cozyPurple">Person 2</span>
          <Radio.Group
            onChange={(e) => handleAnswerChange(2, questionId, e.target.value)}
            value={valueRespondent2}
          >
            <div className="flex space-x-2">
              <Radio className="text-purpleBubble" value={-3}>
                1
              </Radio>
              <Radio className="text-purpleBubble" value={-1}>
                2
              </Radio>
              <Radio className="text-purpleBubble" value={0}>
                3
              </Radio>
              <Radio className="text-purpleBubble" value={1}>
                4
              </Radio>
              <Radio className="text-purpleBubble" value={3}>
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
