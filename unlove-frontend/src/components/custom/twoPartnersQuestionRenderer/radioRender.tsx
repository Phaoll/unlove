import { QuestionType } from "@/types/questions.types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/store/hook";
import {
  selectAnsweredQuestion,
  setAnswer,
} from "@/store/slices/unloveTestSlice";
type TwoPartnersRadioQuestionRendererProps = {
  question: QuestionType;
};

const TwoPartnersRadioQuestionRenderer = ({
  question,
}: TwoPartnersRadioQuestionRendererProps) => {
  const dispatch = useDispatch();
  const questionState = useAppSelector((state) =>
    selectAnsweredQuestion(state, question.id),
  );

  return (
    <Card className="w-fit py-1">
      <CardHeader>
        <CardTitle>{question.wording.EN}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-row gap-24 justify-center">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <RadioGroup
              name="demo-options"
              selectedValue={questionState.partnerOne}
              onChange={(selectedValue) =>
                dispatch(
                  setAnswer({
                    id: question.id,
                    partnerNumber: "partnerOne",
                    answer: selectedValue,
                  }),
                )
              }
            />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <RadioGroup
              name="demo-options"
              selectedValue={questionState.partnerTwo}
              onChange={(selectedValue) =>
                dispatch(
                  setAnswer({
                    id: question.id,
                    partnerNumber: "partnerTwo",
                    answer: selectedValue,
                  }),
                )
              }
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TwoPartnersRadioQuestionRenderer;

interface RadioGroupProps {
  name: string;
  selectedValue: number | null | undefined;
  onChange: (selectedValue: number) => void;
  className?: string;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  selectedValue,
  onChange,
  className = "",
}) => {
  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      <label key={-3} className="flex items-center cursor-pointer group">
        <input
          type="radio"
          name={name}
          value={-3}
          checked={selectedValue === -3}
          onChange={() => onChange(-3)}
          className="sr-only"
        />
        <div className="relative">
          <div
            className={`w-10 h-10 rounded-full border-2 transition-all duration-200 ${
              selectedValue === -3
                ? "border-orange-500 bg-orange-500"
                : "border-orange-300 bg-white hover:border-orange-400"
            }`}
          />
        </div>
      </label>
      <label key={-1} className="flex items-center cursor-pointer group">
        <input
          type="radio"
          name={name}
          value={-1}
          checked={selectedValue === -1}
          onChange={() => onChange(-1)}
          className="sr-only"
        />
        <div className="relative">
          <div
            className={`w-6 h-6 rounded-full border-2 transition-all duration-200 ${
              selectedValue === -1
                ? "border-orange-300 bg-orange-300"
                : "border-orange-100 bg-white hover:border-orange-200"
            }`}
          />
        </div>
      </label>
      <label key={0} className="flex items-center cursor-pointer group">
        <input
          type="radio"
          name={name}
          value={0}
          checked={selectedValue === 0}
          onChange={() => onChange(0)}
          className="sr-only"
        />
        <div className="relative">
          <div
            className={`w-4 h-4 rounded-full border-2 transition-all duration-200 ${
              selectedValue === 0
                ? "border-gray-500 bg-gray-500"
                : "border-gray-300 bg-white hover:border-gray-400"
            }`}
          />
        </div>
      </label>
      <label key={1} className="flex items-center cursor-pointer group">
        <input
          type="radio"
          name={name}
          value={1}
          checked={selectedValue === 1}
          onChange={() => onChange(1)}
          className="sr-only"
        />
        <div className="relative">
          <div
            className={`w-6 h-6 rounded-full border-2 transition-all duration-200 ${
              selectedValue === 1
                ? "border-purple-300 bg-purple-300"
                : "border-purple-100 bg-white hover:border-purple-200"
            }`}
          />
        </div>
      </label>
      <label key={3} className="flex items-center cursor-pointer group">
        <input
          type="radio"
          name={name}
          value={3}
          checked={selectedValue === 3}
          onChange={() => onChange(3)}
          className="sr-only"
        />
        <div className="relative">
          <div
            className={`w-10 h-10 rounded-full border-2 transition-all duration-200 ${
              selectedValue === 3
                ? "border-purple-500 bg-purple-500"
                : "border-purple-300 bg-white hover:border-purple-400"
            }`}
          />
        </div>
      </label>
    </div>
  );
};
