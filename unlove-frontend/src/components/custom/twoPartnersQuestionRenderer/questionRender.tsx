import { QuestionType } from "@/types/questions.types";
import TwoPartnersRadioQuestionRenderer from "./radioRender";
import TwoPartnerInputSliderQuestionRenderer from "./inputSliderRenderer";

type QuestionRendererProps = {
  question: QuestionType;
};

const TwoPartnerQuestionRenderer = ({ question }: QuestionRendererProps) => {
  if (question.format === "radio")
    return <TwoPartnersRadioQuestionRenderer question={question} />;
  if (question.format === "inputSlider")
    return <TwoPartnerInputSliderQuestionRenderer question={question} />;

  return <div>Failure to render question, contact devs</div>;
};

export { TwoPartnerQuestionRenderer };
