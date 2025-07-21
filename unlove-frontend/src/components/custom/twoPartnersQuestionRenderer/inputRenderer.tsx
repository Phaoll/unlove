import { QuestionType } from "@/types/questions.types";

type TwoPartnerInputQuestionRendererProps = {
  question: QuestionType;
};

const TwoPartnerInputQuestionRenderer = ({
  question,
}: TwoPartnerInputQuestionRendererProps) => {
  return <div>INPUT {question.wording.EN}</div>;
};

export default TwoPartnerInputQuestionRenderer;
