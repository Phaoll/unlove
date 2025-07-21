import { QuestionType } from "@/types/questions.types";
import TwoPartnersRadioQuestionRenderer from "./radioRender";
import TwoPartnerInputQuestionRenderer from "./inputRenderer";

type QuestionRendererProps = {
  question: QuestionType;
};

const TwoPartnerQuestionRenderer = ({ question }: QuestionRendererProps) => {
  if (question.type === "radio")
    return <TwoPartnersRadioQuestionRenderer question={question} />;
  if (question.type === "input")
    return <TwoPartnerInputQuestionRenderer question={question} />;

  return <div>Failure to render question, contact devs</div>;
};

export { TwoPartnerQuestionRenderer };
