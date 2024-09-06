// src/components/QuestionComponent.tsx

import React from 'react';
import { Radio } from 'antd';
import {
  selectPerson1Answer,
  selectPerson2Answer,
  setAnswer,
} from '../slices/answer.slice';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import '../styles/CustomRadioButtons.css'; // Import the custom CSS file

interface QuestionComponentProps {
  question: string;
  questionId: string;
}

const QuestionComponent: React.FC<QuestionComponentProps> = ({
  question,
  questionId,
}) => {
  const dispatch = useDispatch();
  const valueRespondent1 = useSelector((state: RootState) =>
    selectPerson1Answer(state, questionId)
  );
  const valueRespondent2 = useSelector((state: RootState) =>
    selectPerson2Answer(state, questionId)
  );

  const handleAnswerChange = (
    respondent: 1 | 2,
    id: string,
    answer: number
  ) => {
    dispatch(setAnswer({ respondent, id, answer }));
  };

  return (
    <div className="flex flex-col mb-8 p-6 border border-gray-200 rounded-lg bg-white shadow-md">
      <h2 className="text-2xl font-cozy font-bold mb-4 text-cozyPurple text-center">
        {question}
      </h2>

      <div className="flex justify-center space-x-16">
        <div className="flex flex-col items-center">
          <span className="mb-2 text-cozyPurple font-semibold">Person 1</span>
          <Radio.Group
            onChange={(e) => handleAnswerChange(1, questionId, e.target.value)}
            value={valueRespondent1}
            className="flex space-x-2"
          >
            {[-3, -1, 0, 1, 3].map((value, index) => (
              <CustomRadioButton
                key={index}
                value={value}
                respondedValue={valueRespondent1}
                onChange={handleAnswerChange}
                respondent={1}
                questionId={questionId}
                className="custom-radio-button text-purpleBubble aria-labels"
              />
            ))}
          </Radio.Group>
        </div>

        <div className="flex flex-col items-center">
          <span className="mb-2 text-cozyPurple font-semibold">Person 2</span>
          <Radio.Group
            onChange={(e) => handleAnswerChange(2, questionId, e.target.value)}
            value={valueRespondent2}
            className="flex space-x-2"
          >
            {[-3, -1, 0, 1, 3].map((value, index) => (
              <CustomRadioButton
                key={index}
                value={value}
                respondedValue={valueRespondent2}
                onChange={handleAnswerChange}
                respondent={2}
                questionId={questionId}
                className="custom-radio-button text-purpleBubble aria-labels"
              />
            ))}
          </Radio.Group>
        </div>
      </div>
    </div>
  );
};

interface CustomRadioButtonProps {
  key: number;
  value: number;
  respondedValue: number;
  onChange: (respondent: 1 | 2, id: string, answer: number) => void;
  respondent: 1 | 2;
  questionId: string;
  className: string;
}

const CustomRadioButton: React.FC<CustomRadioButtonProps> = ({
  key,
  value,
  respondedValue,
  onChange,
  respondent,
  questionId,
  className,
}) => {
  return (
    <label key={key} className={className}>
      <input
        type="radio"
        value={value}
        checked={value === respondedValue}
        onChange={(e) =>
          onChange(respondent, questionId, parseInt(e.target.value))
        }
        className="hidden"
      />
      <span
        className={`radio-custom ${value === respondedValue ? 'checked' : ''}`}
      >
        {value}
      </span>
    </label>
  );
};

export default QuestionComponent;
